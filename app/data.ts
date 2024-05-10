import { ProjectInfo } from "./types";

export const projects: ProjectInfo[] = [
  {
    title: "Woof OS",
    description:
      "An Arch Linux respin, with the Qtile window manager, calamares installer to install my entire Arch Linux rice.",
    image: "/images/woof-os.png",
    link: "https://os.lewoof.xyz",
    tags: ["Linux", "OS", "Python", "Shell Script"],
  },
  {
    title: "E-Commerce Dashboard for GSL Wholesalers LTD",
    description:
      "The frontend for the e-commerce dashboard built specifically for GSL Wholesalers LTD. The frontend template code is available publicly on Github.",
    link: "https://github.com/kreatis-io/gsl-dashboard-nextjs",
    image: "/images/gsl.png",
    tags: ["Next", "React", "Typescript", "TailwindCSS", "Shadcn UI"],
  },
  {
    title: "Startpage",
    description:
      "A startpage for your browser, with Spotify intergration, a todo list, and a note keeper.",
    link: "https://startpage-lemon.vercel.app/",
    image: "/images/startpage.png",
    tags: ["Next", "React", "Typescript", "TailwindCSS"],
  },
  {
    title: "Obsek Gallery",
    description: "Amateur astrophotography gallery.",
    link: "https://acutewoof.is-a.dev/gallery",
    image: "https://www.kreatis.io/images/obsek.png",
    tags: [
      "Next",
      "React",
      "Typescript",
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
    tags: ["Next", "React", "Typescript", "TailwindCSS", "Framer Motion"],
  },
];
