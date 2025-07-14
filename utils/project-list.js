export default [
  {
    id: 1,
    title: "Vaidya Ai",
    gh_url: "https://github.com/lordvader501/vaidya_ai",
    live_url: "",
    skills: ["Angular", "Flask", "Docker", "Nginx", "Weaviate", "OpenAi"],
    info: "An AI tool for identifying medicinal plants and delivering personalized Ayurvedic remedies.",
    image: "/images/vaidyaai.png",
    content:
      "Vaidya AI is an advanced tool designed for identifying medicinal plants and delivering personalized Ayurvedic remedies. Users can upload images of leaves for instant identification and access detailed information on medicinal properties and disease remedies. The tool also features advanced symptom analysis, generating tailored Ayurvedic remedies and precautions to offer comprehensive holistic health solutions.",
  },
  {
    id: 2,
    title: "Envarfig-go",
    live_url: "https://pkg.go.dev/github.com/lordvader501/envarfig-go",
    gh_url: "https://github.com/lordvader501/envargig-go",
    skills: ["Go"],
    info: "A golang package that helps in loading environmpent variables into structs.",
    image: "/images/envarfig-go.png",
    content:
      "envarfig-go is a lightweight Go library for managing environment variables with ease. It provides a simple way to load and parse environment variables into Go structs, supporting features like default values, type conversion, and more. Features includes: Load environment variables into Go structs, Support for default values and required fields, Type-safe parsing for common data types (e.g., int, string, bool, uint), Optional .env file loading using godotenv, Customizable settings for environment variable loading, Error handling for invalid or missing environment variables.",
  },
  {
    id: 3,
    title: "Envsafes",
    live_url: "",
    gh_url: "https://github.com/EnvSafes",
    skills: ["Go"],
    info: "A cli tool and a web app to manage and share environment variables securely.",
    image: "/images/envsafes.png",
    content: `## 🔐 EnvSafes - Secure Environment Variable Manager (Golang CLI Tool)

**EnvSafes** is a cross-platform command-line tool built in Golang designed for secure and collaborative environment variable management.

### ✨ Features

- 🛠 **Project-Based Configuration**  
  Easily initialize and manage environment variable configurations per project.

- 💾 **Secure Local Storage**  
  Stores sensitive environment variables outside the project directory to prevent accidental exposure.

- ☁️ **Collaborative Remote Access**  
  Enables teams to securely sync and fetch shared environment variables from a remote backend, streamlining onboarding and eliminating credential delays.

- 🔐 **Built with Security in Mind**  
  All secrets are encrypted and access-controlled to ensure protection across both local and cloud environments.

### 🧰 Tech Stack

- **Language:** Golang  
- **Libraries:** Cobra (CLI framework), Viper (config management)  
- **Storage:** Local encrypted store & Remote backend API  
- **Security:** AES encryption  
- **Platforms:** Windows, macOS, Linux

> A productivity and security-focused tool for developers and teams working with environment variables across multiple environments.`,
  },
  {
    id: 4,
    title: "ChatSphere",
    live_url: "",
    gh_url: "https://github.com/lordvader501/chatsphere",
    skills: [
      "Go",
      "Nextjs",
      "MySql",
      "Shadcn UI",
      "Tailwind CSS",
      "Websockets",
    ],
    info: "A messaging website where users can join public/private rooms and chat with people.",
    image: "/images/chatsphere.png",
    content:
      "This group messaging platform, built using Golang and Next.js, offers a seamless communication experience with robust features and secure user authentication via session management. The platform uses WebSockets and Go channels to efficiently handle multiple messages in real-time, ensuring smooth and responsive communication. It leverages Golang's concurrency capabilities and native HTTPS packages to manage API requests. Users can create both public and private chat rooms, where public rooms are open to everyone, and private rooms require an invitation link for access. The platform also includes email validation, password reset functionality, and a history section where users can view all rooms they have created and adjust settings for each, providing a customizable and secure messaging environment.",
  },
  {
    id: 5,
    title: "CodeinBlogs",
    live_url: "https://codeblocks123.pythonanywhere.com/",
    gh_url: "https://github.com/lordvader501/blog-django",
    skills: ["Python", "Django", "Sqlite", "HTML", "CSS", "Bootstrap"],
    info: "A blogging platform for coders, streamlining the process of posting, editing, and deleting content, while promoting community interaction through shared post viewing.",
    image: "/images/codeinblogs.png",
    content:
      "This Django-based blogging platform is specifically designed for coders, providing a seamless experience for creating, editing, and managing blog content. The platform fosters a strong sense of community by enabling users to view and engage with shared posts. It features a comprehensive user authentication system that ensures secure access, while profile management allows users to personalize their experience. Additionally, the platform incorporates efficient pagination to facilitate easy navigation through extensive content, enhancing both user engagement and overall usability.",
  },
  {
    id: 6,
    title: "Pokelister",
    live_url: "https://pokelister.netlify.app/",
    gh_url: "https://github.com/lordvader501/pokelister",
    info: "A dynamic web application for Pokémon enthusiasts, providing extensive listings and detailed information on all Pokémon species.",
    skills: ["ReactJs", "TypeScript", "Firebase", "SCSS"],
    image: "/images/pokelister.png",
    content:
      "PokeLister is a dynamic web application designed for Pokémon enthusiasts, offering extensive listings and detailed information on all Pokémon species. The application enhances user experience with advanced search capabilities, optimized pagination, and lazy loading for smooth browsing. It also features user authentication via Firebase, allowing users to securely create personalized favorite Pokémon lists, fostering better engagement.",
  },
  {
    id: 7,
    title: "Face Detector",
    live_url: "",
    gh_url: "https://github.com/lordvader501/face-detection-python",
    info: "A Face Detection GUI app that detects faces in images, videos, and live camera feeds.",
    skills: ["Python", "Opencv", "Tkinter"],
    image: "/images/face-detection.png",
    content:
      "The Face Detection GUI, developed using OpenCV and Tkinter, offers advanced functionality for detecting faces in images, videos, and live camera feeds. It displays the number of faces detected in real-time and includes adjustable settings for brightness, scale value, and detection area. The application leverages multithreading and multiprocessing to efficiently handle concurrent tasks, ensuring smooth performance and responsiveness.",
  },
];
