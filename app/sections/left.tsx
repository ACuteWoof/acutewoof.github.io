import Link from "next/link";
import { mono as titleFont } from "../fonts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { Badge } from "../components/ui/badge";

export default function Left() {
  return (
    <div className="h-fit lg:h-screen w-full py-12 px-8 lg:p-24 lg:pb-12 lg:overflow-auto">
      <article className={"prose dark:prose-invert"}>
        <h1 className={titleFont.className + " mb-3"}>Vithushan</h1>
        <div className="flex gap-2">
          <Link href="https://github.com/acutewoof" className="exception">
            <Badge variant="secondary">Github</Badge>
          </Link>
          <Link href="https://linkedin.com/in/vithushan-sutharsan-849b99243" className="exception">
            <Badge variant="secondary">LinkedIn</Badge>
          </Link>
        </div>
        <p>A student with passion for technology - especially open source.</p>
        <span>
          <h3>Skills</h3>
          <ul>
            <li>
              <Accordion type="single" collapsible>
                <AccordionItem className="border-none" value="styles">
                  <AccordionTrigger>
                    Styling, Animations & Components
                  </AccordionTrigger>
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
              </Accordion>
            </li>
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
              </Accordion>
            </li>
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
              </Accordion>
            </li>
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
              </Accordion>
            </li>
          </ul>
        </span>
        <span>
          <h3>Actively working on:</h3>
          <ul>
            <li>
              <Link target="_blank" href="https://press.lewoof.xyz">
                WoofPress
              </Link>
            </li>
            <li>
              Projects at{" "}
              <Link target="_blank" href="https://kreatis.lewoof.xyz">
                Kreatis
              </Link>
              .
            </li>
            <li>
              <Link target="_blank" href="https://os.lewoof.xyz">
                Woof OS
              </Link>
            </li>
          </ul>
        </span>
        <span>
          <h3>Donate</h3>
          <ul>
            <li className="text-wrap break-all">
              Monero:
              AvKjLpQzaE8Aj8A4vgRyuUYsX7GdGo8SddcmMiHf1H2L55CGMUxKUmZUovZtWRkw9LuE4Zr6PRzQg9ivMeueGwa38YHx7u
            </li>
            <li className="text-wrap break-all">
              Solana: 6BecuGmLuD7JJEbQuV7mNqUNZ3i8WPxNC5zL63oAhRJH
            </li>
            <li className="text-wrap break-all">
              Bitcoin:
              bc1pfa26nutqw2vnwltv6v4jh3ee34nduh9cta3x20kyr7v0ad4z4vhqsr9wrz
            </li>
            <li>
              Buymeacoffee:{" "}
              <Link target="_blank" href="https://buymeacoffee.com/acutewoof">
                acutewoof
              </Link>
            </li>
          </ul>
        </span>
        <span>
          <h3>Contact</h3>
          <ul>
            <li>
              Email:{" "}
              <Link target="_blank" href="mailto:sutharshanvithushan@gmail.com">
                sutharshanvithushan@gmail.com
              </Link>
            </li>
            <li>Discord: @acutewoof</li>
            <li>
              Instagram:{" "}
              <Link target="_blank" href="https://instagram.com/acutewoof">
                @acutewoof
              </Link>
            </li>
          </ul>
        </span>
      </article>
    </div>
  );
}
