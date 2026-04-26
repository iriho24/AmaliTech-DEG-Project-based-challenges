
# SecureVault — File Manager UI

Hey! I made this for the AmaliTech frontend challenge. It’s basically a file manager with a dark, glassy look. You can click through folders, see file details, and check permissions. 

It’s all frontend for now. No real backend or database yet, just fake data.

I designed it in Figma first, then built it with React.

---

## Running it locally

It’s pretty simple to get started:

1. Clone the repo
2. Run `npm install` to get all the packages
3. Run `npm run dev` to start it
4. Check `localhost:5173` in your browser

*What I used to build it:*
React with TypeScript, Tailwind for the styling, Lucide for icons, and Space Grotesk + JetBrains Mono for fonts. 

All the files and folders you see are just mock data from a file I made. No real API calls happening.

---

## Figma Link

🔗 *Design:* [https://www.figma.com/design/iGgFXPDLxN5srnLELfp9OY/SecureVault-File-Explorer-UI?node-id=0-1&t=B5fK4uPRrSg5AYbr-1]

For the design, I wanted a dark theme that felt like a security app. I used a lot of glass/frosted effects and violet as the main color. I was trying not to make it look like every other dashboard.

---

## How the file tree works

The tricky part was getting folders inside folders to work. I set it up so each file or folder is an object, and folders have a list of “children” that are more files or folders.

To show it on the page, I made one component that renders a single file or folder. If it’s a folder and it has stuff inside, that same component renders itself again for each child. So it just keeps calling itself until it hits a file with no children. That’s the recursion part.

Some stuff I added while building it:
- The deeper you go, the more it indents to the right so you can see the nesting.
- When you first load it, the top 2 levels are already open so it doesn’t look empty.
- I added little vertical lines on the left to group files under the same folder. Makes it easier to follow.

I also made a function that turns the whole nested tree into one flat list. I’m not using it yet, but I thought it’d be useful if I add search later and need to check every file at once.

---

## Extra feature: Properties Panel

For the challenge wildcard, I built the right sidebar. 

When you click any file or folder, the panel pops up and shows all its details. You get the file name, size, when it was updated, who owns it, and the permissions. I put the permissions in a little badge because this is a “secure” vault, so that felt important.

It also has Download, Share, and Delete buttons. And if a file has tags like “Confidential”, those show up too.

If you haven’t selected anything, it just says “pick a file” so the panel isn’t blank.

It was pretty straightforward to build. The panel just gets the selected file from the main page and displays the info. No fancy logic inside it.

---

## Project files

The main stuff is in `components` for the UI pieces like the tree and the sidebar. The fake data and types are in `lib`. The actual pages are in `pages`, with `Vault` being the main one. 

`App.tsx` holds the layout, and `tailwind.config.js` has all my custom colors and fonts.

---

## Project Structure

```
├── index.tsx                  # Entry point
├── App.tsx                    # Layout shell, page routing
├── index.css                  # Tailwind imports, custom utilities
├── tailwind.config.js         # Custom colors, fonts, shadows
├── lib/
│   └── mockData.ts            # FileNode type + mock file tree + flattenTree
├── components/
│   ├── TopNav.tsx             # Top bar with search, notifications, user
│   ├── Sidebar.tsx            # Navigation sidebar with storage indicator
│   ├── FileTree.tsx           # Recursive tree view component
│   └── PropertiesPanel.tsx    # File detail / security panel
└── pages/
    ├── Vault.tsx              # Main file browser page
    └── DesignSystem.tsx       # Design tokens reference page
