import { Metadata } from "next";
import React, { FC } from "react";
import { PageProps } from "@/types/globalTypes.interface";
import BaseView from "@/components/base/common/base-view/BaseView";
import ExperienceCard from "@/components/cards/experience-card/ExperienceCard";

export const metadata: Metadata = {
  title: "Docs - ahmetcan.dev",
  description: "Find in-depth information about me.",
};
const Page: FC<PageProps> = async (props) => {
  const { params } = props;

  return (
    <BaseView className={"items-center"}>
      <BaseView className={"sm:w-6/12 w-full"}>
        <BaseView>
          <h1 className={"text-3xl pb-12 font-bold"}>Docs</h1>
        </BaseView>
        <BaseView>
          <BaseView className={"pb-12"}>
            <BaseView className={"pb-6"}>
              <h2 className={"text-xl font-bold"}>Ahmet CAN</h2>
              <p className={"text-zinc-500"}>Software Engineer</p>
            </BaseView>
            <BaseView className={"text-zinc-300 flex gap-2"}>
              <p>
                How to create a website for everyone's needs in 2011 It is done,
                starting with writing and turning it into a hobby. started.
              </p>
              <p>
                Apart from software, my hobbies are 3D modeling, photography and
                cinema.
              </p>
            </BaseView>
          </BaseView>
          <BaseView className={"pb-12"}>
            <BaseView>
              <h3 className={"text-lg font-medium"}>Experience</h3>
            </BaseView>
            <BaseView>
              <ExperienceCard
                title={"Trendyol"}
                link={
                  "https://www.linkedin.com/company/trendyolgroup/mycompany/"
                }
                description={
                  "Micro Frontends, Webpack, ReactJs, NextJs, ReactNative, JavaScript, Typescript, Firebase, Go, Java, Docker, Mock service worker (msw), Husky"
                }
                dateRange={"Nov 2023 - Present"}
                location={"Remote"}
                cover={
                  // eslint-disable-next-line max-len
                  "https://media.licdn.com/dms/image/D4D0BAQFTmaFl7nHTpQ/company-logo_100_100/0/1698925043320/trendyolgroup_logo?e=1716422400&v=beta&t=0K-X71lo2_Hw9iJQR7iRzND8GEu3L8VkBvdW9aW9g6M"
                }
              />
              <ExperienceCard
                title={"KolayBi'"}
                link={"https://www.linkedin.com/company/kolaybi/"}
                description={
                  // eslint-disable-next-line max-len
                  "ReactJs, ReactNative, Laravel, PHP, JavaScript, Firebase, Redux, Typescript, Angular 1.x, MySql, Webpack, Gulp, Rollup.js, VueJs, Docker, NodeJs, Sass, Tailwindcss, Jest, Testing-library, Mock service worker (msw), Husky, Jenkins, Github Actions, Vite, Rollupjs"
                }
                dateRange={"Sep 2020 - Nov 2023 · 3 yrs 3 mos"}
                location={"Remote"}
                cover={
                  // eslint-disable-next-line max-len
                  "https://media.licdn.com/dms/image/C4D0BAQGrejSn6uZCpA/company-logo_100_100/0/1678259948186/kolaybi_logo?e=1716422400&v=beta&t=7l2gbF2u7A1GT-_jFbkARXPuwMOxDF6s9snwaQEFEdU"
                }
              />
            </BaseView>
          </BaseView>
          <BaseView>
            <BaseView>
              <h3 className={"text-lg font-medium"}>Education</h3>
            </BaseView>
            <BaseView>
              <ExperienceCard
                title={"Karabuk University\n"}
                link={"https://www.linkedin.com/school/karabuk-university/"}
                description={
                  "Bachelor's Degree, Mechatronics, Robotics and Automation Engineering"
                }
                dateRange={"2014 - 2019"}
                location={"Remote"}
                cover={
                  "https://media.licdn.com/dms/image/C4D0BAQHa5m-b6Mlhtw/company-logo_100_100/0/1631322044543?e=1716422400&v=beta&t=LuI3ZqDD0q3a9S0PD4O_9L6yv8QTqlexfEhbDACl_WE"
                }
              />
            </BaseView>
          </BaseView>
        </BaseView>
      </BaseView>
    </BaseView>
  );
};

export default Page;
