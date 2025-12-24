# 🚀 How to Run the Stock Screener UI

## Prerequisites (First Time Only)

Before you can run this React application, you need to have **Node.js** installed on your computer.

### Check if Node.js is installed:
Open your terminal/command prompt and run:
```bash
node --version
npm --version
```

If you see version numbers (like `v18.17.0` and `9.6.7`), you're good to go! ✅

If you get an error, download and install Node.js from: https://nodejs.org/
- Download the LTS (Long Term Support) version
- Run the installer
- Restart your terminal after installation

---

## Step-by-Step Instructions

### Step 1: Navigate to the Project Folder

Open your terminal/command prompt and navigate to the project directory:

```bash
cd E:\projects\java\screener-ui
```

**💡 What this does:** This tells your terminal to "go into" the folder where your project lives.

---

### Step 2: Install Dependencies (First Time Only)

```bash
npm install
```

**💡 What this does:** 
- Reads the `package.json` file (which lists all the libraries your project needs)
- Downloads all the required packages (React, Vite, UI components, etc.) from the internet
- Creates a `node_modules` folder with all these packages
- This is like "installing all the tools" your project needs to work

**⏱️ How long:** Usually takes 1-3 minutes depending on your internet speed.

**🔄 When to run:** 
- First time setting up the project
- After pulling new code that added new dependencies
- If someone tells you "the dependencies changed"

**✅ How to know it worked:** You'll see a `node_modules` folder appear in your project directory.

---

### Step 3: Start the Development Server

```bash
npm run dev
```

**💡 What this does:**
- Starts a local web server (usually on `http://localhost:3000`)
- Compiles your React code on-the-fly (no separate compilation step needed!)
- Opens your browser automatically (if configured)
- Watches for file changes and automatically refreshes the page when you save files

**⏱️ How long:** Usually starts in 2-5 seconds.

**✅ How to know it worked:** 
- You'll see output like:
  ```
  VITE v6.3.5  ready in 500 ms
  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ```
- Your browser should open automatically, or you can manually visit `http://localhost:3000`

**🛑 To stop the server:** Press `Ctrl + C` in the terminal

---

## Quick Reference Commands

| Command | When to Use | What It Does |
|---------|-------------|--------------|
| `npm install` | First time setup, or when dependencies change | Downloads and installs all required packages |
| `npm run dev` | Every time you want to work on the project | Starts the development server |
| `npm run build` | When you want to create a production build | Compiles and optimizes code for deployment |

---

## Common Questions

### ❓ "Do I need to compile the code first?"

**No!** 🎉 This project uses **Vite**, which is a modern build tool that:
- Compiles your code automatically when you run `npm run dev`
- Does it in the background, so you don't need a separate compilation step
- Updates instantly when you save files (Hot Module Replacement)

**Old way (Create React App):** Compile → Run → See changes
**This way (Vite):** Run → See changes instantly ✨

---

### ❓ "Do I need to install dependencies every time?"

**No!** You only need to run `npm install`:
- ✅ First time setting up the project
- ✅ When someone adds new dependencies to `package.json`
- ✅ If you delete the `node_modules` folder

**You DO need to run `npm run dev` every time** you want to start working on the project.

---

### ❓ "What if I get an error?"

**Common errors and solutions:**

1. **"command not found: npm"**
   - Solution: Install Node.js (see Prerequisites above)

2. **"EACCES: permission denied"**
   - Solution: On Mac/Linux, you might need `sudo npm install` (not recommended)
   - Better: Fix npm permissions: https://docs.npmjs.com/resolving-eacces-permissions-errors

3. **"Cannot find module..."**
   - Solution: Run `npm install` again

4. **Port 3000 already in use**
   - Solution: Stop the other application using port 3000, or change the port in `vite.config.ts`

---

## Development Workflow

Here's what a typical day looks like:

1. **Morning/Start of work:**
   ```bash
   cd E:\projects\java\screener-ui
   npm run dev
   ```

2. **Make changes to your code** (edit files in `src/` folder)

3. **See changes instantly** in the browser (Vite auto-refreshes!)

4. **End of day:**
   - Press `Ctrl + C` to stop the server
   - Close terminal

5. **Next day:**
   - Just run `npm run dev` again (no need to `npm install` unless dependencies changed)

---

## Production Build (Optional - For Deployment)

If you want to create an optimized version for production:

```bash
npm run build
```

**💡 What this does:**
- Compiles and minifies your code
- Optimizes images and assets
- Creates a `build` folder with production-ready files
- These files can be deployed to a web server

**Note:** You don't need this for development - only when you're ready to deploy to production!

---

## Summary

**First Time Setup:**
1. Install Node.js (if not already installed)
2. `cd E:\projects\java\screener-ui`
3. `npm install` ← Install dependencies
4. `npm run dev` ← Start development server

**Every Other Time:**
1. `cd E:\projects\java\screener-ui`
2. `npm run dev` ← That's it!

Happy coding! 🎉

