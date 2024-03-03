import Link from "next/link"
import { Badge } from "../components/ui/badge"
import { mono as titleFont } from "../fonts"
import { OpenInNewWindowIcon } from "@radix-ui/react-icons"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/components/ui/accordion"

export default function Left() {
    return <div className="h-fit lg:h-screen w-full py-12 px-8 lg:p-24 lg:pb-12 lg:overflow-auto">
        <article className={"prose dark:prose-invert"}>
            <h1 className={titleFont.className + " mb-3"}>Vithushan</h1>
            <span className="flex gap-4 [&>div:hover]:cursor-pointer mb-8" >
                <Link className="hover:bg-transparent" target="_blank" href="https://github.com/acutewoof"><Badge variant="secondary">Github&nbsp;<OpenInNewWindowIcon /></Badge></Link>
                <Link className="hover:bg-transparent" target="_blank" href="https://buymeacoffee.com/acutewoof"><Badge variant="secondary">Buy Me A Coffee&nbsp;<OpenInNewWindowIcon /></Badge></Link>
            </span>
            <p>
                A web developer with a passion for design and technology.
            </p>
            <span>
                <h3>Skills</h3>
                <ul>
                    <li>
                        <Accordion type="single" collapsible>
                            <AccordionItem className="border-none" value="styles">
                                <AccordionTrigger>Styling, Animations & Components</AccordionTrigger>
                                <AccordionContent>
                                    <ul>
                                        <li>Framer Motion</li>
                                        <li>Ant Design</li>
                                        <li>Shadcn UI</li>
                                        <li>MUI</li>
                                        <li>Daisy UI</li>
                                        <li>TailwindCSS</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion></li>
                    <li>
                        <Accordion type="single" collapsible>
                            <AccordionItem className="border-none" value="frameworks">
                                <AccordionTrigger>Frameworks</AccordionTrigger>
                                <AccordionContent>
                                    <ul>
                                        <li>Next</li>
                                        <li>React</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion></li>
                    <li>
                        <Accordion type="single" collapsible>
                            <AccordionItem className="border-none" value="platforms">
                                <AccordionTrigger>Platforms</AccordionTrigger>
                                <AccordionContent>
                                    <ul>
                                        <li>Vercel</li>
                                        <li>Firebase</li>
                                        <li>Github</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion></li>
                    <li>
                        <Accordion type="single" collapsible>
                            <AccordionItem className="border-none" value="languages">
                                <AccordionTrigger>Languages</AccordionTrigger>
                                <AccordionContent>
                                    <ul>
                                        <li>Typescript</li>
                                        <li>Javascript</li>
                                        <li>Python</li>
                                        <li>HTML & CSS</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion></li></ul>
            </span>
            <span>
                <h3>Experience</h3>
                <ul>
                    <li>Lead developer at <Link target="_blank" href="https://woof-os.github.io">Woof OS</Link>.
                    </li><li>Web developer at <Link target="_blank" href="https://kreatis.io">Kreatis</Link>.
                    </li>
                </ul>
            </span>
            <span>
                <h3>Contact Me</h3>
                <ul>
                    <li>
                        Email: <Link target="_blank" href="mailto:sutharshanvithushan@gmail.com">
                            sutharshanvithushan@gmail.com
                        </Link>
                    </li>
                    <li>Discord: <Link target="_blank" href="https://discord.com/invite/um92wXVx">@acutewoof</Link>&nbsp;|&nbsp;
                        <Link target="_blank" href="https://discord.gg/uxr7VHEGgA">
                            server
                        </Link><br />
                    </li>
                    <li>
                        Instagram:&nbsp;<Link target="_blank" href="https://instagram.com/acutewoof">@acutewoof</Link>
                    </li>
                </ul>
            </span>
        </article>
    </div >
}
