/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createConnection } from './connection.js';
import { contextFactory as defaultContextFactory } from './browserContextFactory.js';
import { SessionManager } from './sessionManager.js';

import type { FullConfig } from './config.js';
import type { Connection } from './connection.js';
import type { Transport } from '@modelcontextprotocol/sdk/shared/transport.js';
import type { BrowserContextFactory } from './browserContextFactory.js';

export class Server {
  readonly config: FullConfig;
  private _connectionList: Connection[] = [];
  private _browserConfig: FullConfig['browser'];
  private _contextFactory: BrowserContextFactory;

  constructor(config: FullConfig, contextFactory?: BrowserContextFactory) {
    this.config = config;
    this._browserConfig = config.browser;
    this._contextFactory = contextFactory ?? defaultContextFactory(this._browserConfig);
  }

  async createConnection(transport: Transport, sessionId?: string): Promise<Connection> {
    const connection = await createConnection(this.config, this._contextFactory, sessionId);
    this._connectionList.push(connection);
    await connection.server.connect(transport);
    return connection;
  }

  setupExitWatchdog() {
    let isExiting = false;
    const handleExit = async () => {
      if (isExiting)
        return;
      isExiting = true;
      setTimeout(() => process.exit(0), 15000);
      
      // Close all connections first
      await Promise.all(this._connectionList.map(connection => connection.close()));
      
      // Then close all persistent browser sessions
      const sessionManager = SessionManager.getInstance(this._contextFactory);
      await sessionManager.closeAllSessions();
      
      process.exit(0);
    };

    process.stdin.on('close', handleExit);
    process.on('SIGINT', handleExit);
    process.on('SIGTERM', handleExit);
  }
}
