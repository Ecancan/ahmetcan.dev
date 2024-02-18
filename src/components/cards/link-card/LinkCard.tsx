import React, { FC } from "react";
import { LinkCardProps } from "@/components/cards/link-card/LinkCard.interface";
import { Card, CardContent, CardHeader } from "@/components/base/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GlowingText from "@/components/base/common/glowing-text/GlowingText";

const LinkCard: FC<LinkCardProps> = (props) => {
  const { title, link, description } = props;

  return (
    <Link href={link} className={"flex flex-1 items-stretch group"}>
      <Card
        className={
          "border border-zinc-800 shadow-none flex-1 transition group-hover:bg-zinc-900"
        }
      >
        <CardHeader className={"flex-row items-center gap-4"}>
          <GlowingText
            text={title}
            className={"text-2xl font-bold"}
            blurClassName={"text-2xl font-bold blur-none group-hover:blur-md"}
          />
          <ArrowRight />
        </CardHeader>
        <CardContent className={"text-sm text-zinc-400"}>
          {description}
        </CardContent>
      </Card>
    </Link>
  );
};

export default LinkCard;
