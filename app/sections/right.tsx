import Piece from "@/app/components/piece";
import { ProjectInfo } from "@/app/types"
import { mono as titleFont } from "../fonts";

export default function Right() {

    const projects: ProjectInfo[] = [
        {
            title: "Woof OS",
            description: "An Arch Linux respin, with the Qtile window manager, calamares installer to install my entire Arch Linux rice.",
            image: "https://www.site-shot.com/cached_image/H2q4Ytc0Ee6_yAJCrBEAAg",
            link: "https://www.woof-os.github.io",
            tags: ["Linux", "OS", "Python", "Shell Script"]
        },

        {
            title: "Kreatis",
            description: "A web development agency.",
            link: "https://kreatis.io",
            image: "https://www.site-shot.com/cached_image/39FZbNc5Ee66XAJCrBEAAg",
            tags: ["Next", "React", "Typescript", "TailwindCSS", "Framer Motion"]
        }, {
            title: "Startpage",
            description: "A startpage for your browser, with Spotify intergration, a todo list, and a note keeper.",
            link: "https://startpage-lemon.vercel.app/",
            image: "https://www.site-shot.com/cached_image/Btkn9tc6Ee6_yAJCrBEAAg",
            tags: ["Next", "React", "Typescript", "TailwindCSS"]
        },
        {
            title: "Obsek Gallery",
            description: "Amateur astrophotography gallery.",
            link: "https://acutewoof.is-a.dev/gallery",
            image: "https://www.kreatis.io/images/obsek.png",
            tags: ["Next", "React", "Typescript", "Firebase", "TailwindCSS", "Framer Motion"]
        }, {
            title: "E-Commerce Dashboard for GSL Wholesalers LTD",
            description: "The frontend for the e-commerce dashboard built specifically for GSL Wholesalers LTD. The frontend template code is available publicly on Github.",
            link: "https://github.com/kreatis-io/gsl-dashboard-nextjs",
            image: "/images/gsl.png",
            tags: ["Next", "React", "Typescript", "TailwindCSS", "Shadcn UI"]
        }
    ]

    return <div className="bg-primary-foreground lg:h-screen w-full lg:overflow-auto p-8 lg:p-24 flex flex-col gap-8">
        <span className={"text-lg font-medium text-muted-foreground lowercase " + titleFont.className}>// Projects</span>
        <div className="flex flex-col gap-8">
            {
                projects.map((project, index) => <Piece key={index} {...project} className="m-4" />)
            }</div>
    </div>
}