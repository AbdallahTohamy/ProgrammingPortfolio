import video from './media/video.PNG';
import CG from './media/CG.PNG';
import shanda from './media/shanda.PNG';
import Tamren from './media/tamrenak.PNG';

const projectData = [
  {
    "title": "Next-Generation Web-Based Video Editor",
    "description": `Our web-based video editor is a comprehensive, user-friendly tool designed to cater to creators at all skill levels. Built with a focus on flexibility and ease of use, this platform combines an intuitive interface with powerful editing capabilities, offering both casual users and professionals a seamless video editing experience.

Key features include a dynamic, multi-layered timeline that allows for precise editing across video, audio, and effects, along with real-time previews to streamline the workflow. Users can easily drag and drop media files, apply effects, trim clips, and make non-linear edits with just a few clicks. The interface adapts to user needs, providing customizable options that enhance the editing process without overwhelming the user.`,
    "imagePath": video,
    "URL": "https://clipvector2.netlify.app/",
    "technologies": ["JavaScript", "React", "WebGL", "HTML5 Canvas", "CSS3", "FFmpeg", "Node.js", "Azure", "GitHub Actions (CI/CD)", "Azure Pipelines (CI/CD)"]
  },
  {
    "title": "Complete Greet",
    "description": `Complete Greet is a versatile platform designed to enhance customer interactions while giving you unparalleled control over your website’s performance. Built for ease of use and professional results, it ensures seamless integration with your site.

At the core of Complete Greet is a powerful widget that integrates effortlessly into your website, acting as a real-time interaction tool for your customers. This widget fosters deeper engagement by allowing you to communicate directly with your audience, responding to their needs and inquiries instantly. Not only does it improve customer service and satisfaction, but it also serves as a valuable feedback mechanism, providing key insights into user behavior, preferences, and how they navigate your site.`,
    "imagePath": CG,
    "URL": "https://completegreet.com/",
    "technologies": ["JavaScript", "WebSockets", "Node.js", "Express", "Sequelize", "UI/UX Design", "DigitalOcean"]
  },
  {
    "title": "Shanda Studio: Revolutionizing Podcast Creation with AI-Driven Solutions",
    "description": `
    Shanda Studio transforms the podcasting landscape by providing an AI-powered platform that simplifies the entire podcast creation process. Designed for podcasters of all experience levels, Shanda Studio offers an intuitive interface with innovative text-based audio editing tools, allowing users to effortlessly edit their episodes as easily as writing a document.

With features like automatic episode titling, intelligent audio enhancement, and seamless integration for publishing to leading platforms like Spotify and Apple Podcasts, Shanda Studio minimizes the complexities of production. Built by podcasters for podcasters, this platform harnesses the power of AI to streamline workflows and automate repetitive tasks, enabling creators to focus on what truly matters—crafting engaging content.`,
    "imagePath": shanda,
    "URL": "https://www.shanda.studio/",
    "technologies": ["AI Integration (OpenAI API)", "React", "Next.js", "Node.js", "FFmpeg", "RSS Feeds", "SEO Optimization", "AWS", "AWS CodePipeline (CI/CD)", "Jest (Testing)"]
  },
  {
    "title": "TrainBridge",
    "description": `
    Our innovative athletic platform connects clients with expert coaches for a personalized training experience. Clients can register to discover tailored workout plans, whether they prefer training at home or in the gym. Coaches can easily offer their services, create custom training programs, and upload instructional videos—all through a user-friendly dashboard.

With real-time private messaging, clients and coaches can communicate effortlessly, ensuring continuous support and guidance. Clients can upload inbody data, share food preferences, and receive nutrition plans crafted specifically for their goals. Coaches can track progress, adjust routines, and provide ongoing feedback, ensuring athletes reach their full potential.`,
    "imagePath": Tamren,
    // "URL": "Coming Soon",
    "technologies": ["Technologies used in TrainBridge"] // Add the specific technologies used here
  }
];

export default projectData;