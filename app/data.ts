import { ProjectInfo } from "./types";

export const projects: ProjectInfo[] = [
  {
    title: "WoofPress",
    description:
      "Printing books (and compilations) that are either out of print, or hard to find.",
    link: "https://press.lewoof.xyz",
    image: "/images/press.png",
    tags: ["HTML", "TailwindCSS", "LaTeX"],
  },
  {
    title: "Radiant Tools",
    description:
      "Tools for Solana; features only a Solana mixer for now. More to come.",
    link: "https://radiant-tools.com",
    image: "/images/radiant-tools.png",
    tags: ["Web3", "ExpressJS", "Next", "React", "TypeScript", "TailwindCSS"],
  },
  {
    title: "E-Commerce Dashboard for GSL Wholesalers LTD",
    description:
      "The frontend for the e-commerce dashboard built specifically for GSL Wholesalers LTD. The frontend template code is available publicly on Github.",
    link: "https://github.com/kreatis-io/gsl-dashboard-nextjs",
    image: "/images/gsl.png",
    tags: ["Next", "React", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Startpage",
    description:
      "A startpage for your browser, with Spotify intergration, a todo list, and a note keeper.",
    link: "https://startpage-lemon.vercel.app/",
    image: "/images/startpage.png",
    tags: ["Next", "React", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Obsek Gallery",
    description: "Amateur astrophotography gallery.",
    link: "https://acutewoof.is-a.dev/gallery",
    image: "/images/obsek.png",
    tags: [
      "Next",
      "React",
      "TypeScript",
      "Firebase",
      "TailwindCSS",
      "Framer Motion",
    ],
  },
  {
    title: "Kreatis",
    description: "A web development agency.",
    link: "https://kreatis.io",
    image: "/images/kreatis.png",
    tags: ["Next", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "Woof OS",
    description:
      "An Arch Linux respin, with the Qtile window manager, calamares installer to install my entire Arch Linux rice.",
    image: "/images/woof-os.png",
    link: "https://os.lewoof.xyz",
    tags: ["Linux", "OS", "Python", "Shell Script"],
  },
];
