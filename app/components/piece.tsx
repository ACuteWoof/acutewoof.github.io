import Image from "next/image";
import { PieceProps } from "@/app/types";
import { mono as titleFont } from "../fonts";
import { Badge } from "./ui/badge";
import Link from "next/link";

export default function Piece(
    {
        title,
        description,
        image,
        link,
        className,
        tags
    }: PieceProps
) {
    return <Link
        href={link}
        target="_blank"
    ><div className="bg-background rounded-none flex flex-col lg:flex-row gap-4 overflow-hidden border-2 border-background hover:border-border hover:cursor-pointer transition-all duration-300 ease-in-out">
            <Image className="w-[100%] lg:w-[40%]" src={image} alt={title} width={400} height={400} />
            <div className="flex flex-col justify-between gap-8 p-4">
                <article className="prose dark:prose-invert">
                    <h3 className={titleFont.className}>{title}</h3>
                    <p>
                        {description}
                    </p></article>
                <div className="flex flex-col gap-8">
                    <div className="flex gap-4 flex-wrap">
                        {
                            tags.map((tag, index) => <Badge key={index} variant="secondary">{tag}</Badge>)
                        }
                    </div></div>
            </div>
        </div></Link>
}