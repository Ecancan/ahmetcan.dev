import React from "react";
import BaseView from "@/components/base/common/base-view/BaseView";
import Link from "next/link";
import GlowingImage from "@/components/base/common/glowing-image/GlowingImage";
import GlowingText from "@/components/base/common/glowing-text/GlowingText";

const DetailHeader = () => {
  const menuItems = [
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Packages",
      href: "/packages",
    },
    {
      label: "Bookmarks",
      href: "/bookmarks",
    },
    {
      label: "Deploy",
      href: "/deploy",
    },
  ];

  return (
    <BaseView
      className={
        "flex-row sm:justify-between justify-center items-center mt-12 mb-12"
      }
    >
      <BaseView>
        <Link href={"/"}>
          <GlowingImage
            src={"/assets/img/profile.jpeg"}
            alt={"profile"}
            width={50}
            height={50}
          />
        </Link>
      </BaseView>
      <BaseView className={"flex-row gap-8 sm:flex hidden"}>
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href} className={"group"}>
            <GlowingText
              text={item.label}
              className={"text-sm"}
              blurClassName={"blur-none group-hover:blur-md text-sm transition"}
            />
          </Link>
        ))}
      </BaseView>
    </BaseView>
  );
};

export default DetailHeader;
