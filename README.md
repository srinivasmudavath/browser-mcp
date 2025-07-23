# Browser-MCP Submodule Management

This directory contains the [Microsoft Playwright MCP](https://github.com/microsoft/playwright-mcp) as a Git submodule, configured for custom development and updates.

## 🔗 Repository Configuration

- **Origin**: `https://github.com/srinivasmudavath/browser-mcp.git` (Your fork)
- **Upstream**: `https://github.com/microsoft/playwright-mcp.git` (Original Microsoft repo)

## 📋 Workflow Overview

### 1. Making Local Changes

```bash
# Navigate to submodule directory
cd apps/api/browser-mcp

# Make your changes to files
# ... edit files ...

# Stage and commit changes
git add .
git commit -m "feat: add custom browser automation features"

# Push to your fork
git push origin main
```

### 2. Updating Your Main Monorepo

After making changes in the submodule, update your main repository:

```bash
# Navigate back to monorepo root
cd ../../..

# Check status - you'll see the submodule is modified
git status

# Stage the submodule changes
git add apps/api/browser-mcp

# Commit the submodule update
git commit -m "feat: update browser-mcp submodule with custom changes"

# Push to your main repository
git push origin main
```

### 3. Fetching Updates from Original Repository

To get the latest changes from Microsoft's repository:

```bash
# Navigate to submodule
cd apps/api/browser-mcp

# Fetch latest changes from upstream
git fetch upstream

# Check what's new
git log HEAD..upstream/main --oneline

# Merge upstream changes
git merge upstream/main
```

### 4. Handling Merge Conflicts

If both you and the original project modified the same files:

```bash
# After running git merge upstream/main, if conflicts occur:

# 1. Check which files have conflicts
git status

# 2. Open conflicting files and resolve manually
# Look for conflict markers: <<<<<<< HEAD, =======, >>>>>>>

# 3. After resolving conflicts:
git add .
git commit -m "merge: resolve conflicts with upstream changes"

# 4. Push resolved changes to your fork
git push origin main
```

### 5. Complete Update Workflow

Here's the complete process for updating with upstream changes:

```bash
# 1. Navigate to submodule
cd apps/api/browser-mcp

# 2. Fetch upstream changes
git fetch upstream

# 3. Switch to main branch (if not already there)
git checkout main

# 4. Merge upstream changes
git merge upstream/main

# 5. If conflicts occur, resolve them manually
# Then: git add . && git commit

# 6. Push to your fork
git push origin main

# 7. Update main monorepo
cd ../../..
git add apps/api/browser-mcp
git commit -m "feat: update browser-mcp submodule with upstream changes"
git push origin main
```

## 🛠️ Common Commands

### Check Current Status
```bash
# Check submodule status
git status

# Check remote configuration
git remote -v

# Check branch status
git branch -v
```

### Reset Submodule (if needed)
```bash
# Reset to match the commit recorded in main repo
git submodule update --init --recursive

# Or reset to a specific commit
cd apps/api/browser-mcp
git reset --hard <commit-hash>
```

### View Submodule History
```bash
# View submodule commit history
cd apps/api/browser-mcp
git log --oneline -10

# Compare with upstream
git log HEAD..upstream/main --oneline
```

## ⚠️ Important Notes

1. **Always commit submodule changes first** before updating the main repository
2. **Test your changes** before pushing to ensure they work correctly
3. **Keep your fork updated** with upstream changes to minimize conflicts
4. **Use descriptive commit messages** for both submodule and main repo commits

## 🔄 Automation Scripts

### Quick Update Script
Create a script to automate the update process:

```bash
#!/bin/bash
# update-browser-mcp.sh

echo "🔄 Updating browser-mcp submodule..."

cd apps/api/browser-mcp

echo "📥 Fetching upstream changes..."
git fetch upstream

echo "🔄 Merging upstream changes..."
git merge upstream/main

echo "📤 Pushing to fork..."
git push origin main

cd ../../..

echo "📝 Updating main repository..."
git add apps/api/browser-mcp
git commit -m "feat: update browser-mcp submodule"
git push origin main

echo "✅ Update complete!"
```

### Windows Batch Script
```batch
@echo off
REM update-browser-mcp.bat

echo 🔄 Updating browser-mcp submodule...

cd apps\api\browser-mcp

echo 📥 Fetching upstream changes...
git fetch upstream

echo 🔄 Merging upstream changes...
git merge upstream/main

echo 📤 Pushing to fork...
git push origin main

cd ..\..\..

echo 📝 Updating main repository...
git add apps/api/browser-mcp
git commit -m "feat: update browser-mcp submodule"
git push origin main

echo ✅ Update complete!
```

## 🚨 Troubleshooting

### Permission Denied Errors
```bash
# If you can't push to your fork, check authentication
git remote -v
# Ensure you're using HTTPS with credentials or SSH keys
```

### Submodule Not Tracking Changes
```bash
# If submodule changes aren't being tracked
git submodule update --init --recursive
cd apps/api/browser-mcp
git checkout main
```

### Merge Conflicts Resolution
```bash
# If you get stuck in a merge conflict
git merge --abort  # Cancel the merge
git reset --hard HEAD  # Reset to last commit
# Then try the merge again
```

## 📚 Additional Resources

- [Git Submodules Documentation](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
- [Microsoft Playwright MCP](https://github.com/microsoft/playwright-mcp)
- [Your Fork](https://github.com/srinivasmudavath/browser-mcp)

## 🔗 Related Documentation

- [Main Project README](../../../README.md) - Complete project overview
- [BSR Agents Documentation](../../../apps/agents/bsr-ai-agents/README.md) - Agent architecture
- [Secure Credential System](../../../README.md#-secure-credential-system) - Encryption implementation
