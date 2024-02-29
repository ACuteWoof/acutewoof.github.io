import Piece from "@/app/components/piece";
import { projects } from "@/app/data";
import { mono as titleFont } from "../fonts";

export default function Right() {
    return <div className="bg-primary-foreground lg:h-screen w-full lg:overflow-auto p-8 lg:p-24 flex flex-col gap-8">
        <span className={"text-lg font-medium text-muted-foreground lowercase " + titleFont.className}>&#47;&#47; Projects</span>
        <div className="flex flex-col gap-8">
            {
                projects.map((project, index) => <Piece key={index} {...project} className="m-4" />)
            }</div>
    </div>
}