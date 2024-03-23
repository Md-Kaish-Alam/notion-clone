# Notion-Clone

Welcome to Notion-Clone, a high-fidelity replication and enhancement of the popular productivity tool, Notion. Built with the power of Next.js 13, React.js, Convex, TailwindCSS, and ShadcnUI, Notion-Clone is designed to elevate your document handling and collaboration to the next level.It offers a wide range of functionalities including a Notion-style editor, real-time database updates, light and dark modes, and much more, tailored for efficient document handling and collaboration.

**Try it now: [Notion-Clone Live](https://notion-webapp.vercel.app/)**

![landing page](https://github.com/Md-Kaish-Alam/notion-clone/assets/82415398/8dd85117-7cf7-445c-8624-998c45f6e2d6)

![landing light](https://github.com/Md-Kaish-Alam/notion-clone/assets/82415398/b423f540-2796-4e8b-9f9d-82a21c0f26b3)

## Key Features

 - **Notion-Style Editor** - Enjoy a rich text editing experience that allows for seamless creation and customization of documents, mimicking the intuitive and user-friendly interface of Notion.
 - **Real-Time Database** - Experience instantaneous synchronization across all clients, ensuring that every team member is always on the same page without any manual refreshes.
 - **Light and Dark Mode** - Adapt the UI to your preference with a simple toggle, making it comfortable to work any time of the day.
 - **Infinite Children Documents** - Organize your workspace with an unlimited hierarchical structure, allowing for intricate documentation systems that are easy to navigate.
 - **Trash Can & Soft Delete** - Deleted documents are not gone forever. Easily recover them from the trash can, providing a safety net against accidental deletions.
 - **Authentication** - Secure your documents with a robust authentication system, ensuring that only authorized users can access your workspace.
 - **File Management** - Effortlessly upload, delete, and replace files within your documents. A comprehensive solution for all your file handling needs.
 - **Real-Time Icons** - Each document can have its unique icon, updated in real-time, adding a personal touch and making it easier to identify your work.
 - **Expandable Sidebar** - Navigate through your workspace with an expandable sidebar, providing quick access to all your documents and folders.
 - **Full Mobile Responsiveness** - Access your documents on-the-go. Notion-Clone is fully responsive, ensuring a seamless experience across all devices.
 - **Publish Your Note to the Web** - Share your ideas with the world. With Notion-Clone, you can easily publish your notes on the web.
 - **Fully Collapsible Sidebar** - Maximize your workspace by collapsing the sidebar, focusing on what's important without distractions.
 - **Landing Page** - Greet users with a beautifully designed landing page, providing an overview of the features and enticing new users to sign up.
 - **Cover Image for Each Document** - Add a personal touch to your documents with cover images, making them visually distinct and engaging.
 - **Recover Deleted Files** - Mistakes happen. Recover deleted files effortlessly, ensuring that no important document is lost permanently.

## Tech Stack

- **Next.js 13**: The React framework for production. [Official Docs](https://nextjs.org/docs)
- **React.js**: A JavaScript library for building user interfaces. [Official Docs](https://reactjs.org/docs/getting-started.html)
- **Convex**: Real-time backend for web applications. [Official Docs](https://docs.convex.dev/)
- **TailwindCSS**: A utility-first CSS framework for rapidly building custom designs. [Official Docs](https://tailwindcss.com/docs)
- **ShadcnUI**: Shadcn is a collection of beautifully designed, accessible, and customizable React components that you can use to build modern web applications with Next. js. [Official Docs](https://ui.shadcn.com/)
- **@blocknote/core & @blocknote/react**: Libraries for building block-styled editors. [Official Docs](https://www.blocknotejs.org/docs)
- **Clerk**: For user authentication and management. [Official Docs](https://docs.clerk.dev/)
- **Zustand**: A small, fast, and scalable bearbones state-management solution. [Official Docs](https://docs.pmnd.rs/zustand/introduction)
- **Zod**: TypeScript-first schema validation with static type inference. [Official Docs](https://zod.dev/)
- **Others**: Various libraries and dependencies are used to enhance functionality, including `react-dropzone` for file uploads, `emoji-picker-react` for emoji selection, and more.

![full app](https://github.com/Md-Kaish-Alam/notion-clone/assets/82415398/51e785d5-a7de-4e57-8a87-df163fb603d3)

![dark mode main](https://github.com/Md-Kaish-Alam/notion-clone/assets/82415398/952ed9ad-c410-4cd2-8bdd-ffba2a221e01)


## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Before you begin, ensure you have the latest version of npm installed:
```bash
npm install npm@latest -g
```
### Installation
- **Clone the repo**
  
```bash
git clone https://github.com/Md-Kaish-Alam/notion-clone.git
```
- **Install NPM packages**
  
```bash
npm install
```

- **Set up environment variables**
Create a `.env.local` file at the root of the project directory. Add the following variables:
```bash
CONVEX_DEPLOYMENT=

NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

- **Running the project**
  
After installation, you can start the project locally using npm command:
```bash
npm run dev
```
This command starts the developement server on `http://localhost:3000/`. Open your browser and navigate to this address to view the application.

## Setting Up Convex

*Follow the Convex documentation to set up your Convex project. Once set up, ensure to link your Convex project with your Notion-Clone application by updating the Convex configuration in your codebase. [Offciail link of convex installation with next.js](https://docs.convex.dev/quickstart/nextjs)*


## Folder Structure
Below is an overview of the key directories and files within the project:

```planetext
notion-clone/
│
├── pages/           # Next.js pages directory, each file represents a route
│   ├── api/         # API routes
│   ├── _app.js      # Main application setup
│   └── index.js     # The entry point of the application
│
├── public/          # Static files like images, fonts, etc.
│
├── styles/          # Global styles and Tailwind configuration
│   ├── globals.css
│   └── tailwind.config.js
│
├── components/      # Reusable UI components
│
├── lib/             # Library code for external services integration
│
└── utils/           # Utility functions

```

## Deployment

Deploying your Notion application can be done with various hosting services, but here we'll focus on deploying with [Vercel](https://vercel.com), the creators of Next.js. Vercel simplifies the deployment process and offers a seamless experience for Next.js applications.

### Steps for Deployment on Vercel:

1. **Sign Up/Login to Vercel**: First, create an account on Vercel if you don't already have one.

2. **Connect Your GitHub Repository**: Once logged in, you can connect your GitHub account and select the repository where your app resides.

3. **Configure Your Project**: After selecting your repository, Vercel will prompt you to configure your project. You should specify the build commands and output directory if they're not automatically detected. For a typical Next.js app, the default settings usually work out of the box.

4. **Environment Variables**: Input the necessary environment variables that your application requires (e.g., `CONVEX_DEPLOYMENT`, `NEXT_PUBLIC_CONVEX_URL` , `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY` , `EDGE_STORE_ACCESS_KEY`, `EDGE_STORE_SECRET_KEY`). Vercel allows you to set these securely in the project settings.

5. **Deploy**: With your project configured, you can proceed with the deployment. Vercel will build your application and provide a URL to access it live on the web.

6. **Continuous Deployment**: Any subsequent pushes to your repository (e.g., to the main branch) will trigger automatic deployments, ensuring your live application is always up to date.

For alternative deployment options and more detailed instructions, refer to the official [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Conclusion

Notion-Clone represents the culmination of cutting-edge web technologies brought together to create a seamless and productive document management and collaboration experience. Through its comprehensive set of features, Notion-Clone aims to provide users with a tool that not only matches the functionality of Notion but also introduces new capabilities and enhancements that cater to the evolving needs of teams and individuals alike.

We're continuously working to improve Notion-Clone, adding new features and refining the user experience. We believe in the power of open-source to foster innovation and collaboration, and we warmly welcome contributions from developers of all backgrounds. Whether you're submitting a bug report, proposing a new feature, or contributing code, your input is invaluable to Notion-Clone's growth.

Thank you for your interest in Notion-Clone. We're excited to see how it helps you achieve your productivity goals, and we look forward to your feedback and contributions!
