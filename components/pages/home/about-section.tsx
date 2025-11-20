import GitHubIcon from "@/components/icons/github";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Ellipsis, MoveUpRight, Slash } from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="min-h-dvh scroll-mt-28" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <div className="flex items-end gap-1">
            <Ellipsis className="translate-y-1" />
            <span className="font-light font-fira-code">/About me</span>
            <Ellipsis className="translate-y-1" />
          </div>
          <p className="absolute top-0 right-64 max-w-md text-lg text-muted-foreground">
            Hello! I&apos;m Pham Gia Phuc, I&apos;m <span className="italic text-white">a full-stack developer</span>.
            More than <span className="italic text-white">2 years experience</span>.
          </p>
        </div>
        <div className="flex justify-between mt-32">
          <div className="flex flex-col gap-4">
            <div className="bg-foreground p-8 rounded-4xl text-background max-w-180">
              <Label className="text-xl font-light mb-4">Frontend</Label>
              <div className="flex flex-wrap items-center gap-2 font-fira-code font-light">
                <span>React</span>
                <Slash className="size-3" />
                <span>TypeScript</span>
                <Slash className="size-3" />
                <span>Vite</span>
                <Slash className="size-3" />
                <span>Redux Toolkit</span>
                <Slash className="size-3" />
                <span>Zustand</span>
                <Slash className="size-3" />
                <span>NextJs</span>
                <Slash className="size-3" />
                <span>Tanstack</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="bg-transparent border border-input p-8 rounded-4xl max-w-sm">
                <Label className="text-xl font-light mb-4">Styles</Label>
                <div className="flex flex-wrap items-center gap-2 font-fira-code font-light">
                  <span>SCSS</span>
                  <Slash className="size-3" />
                  <span>MUI</span>
                  <Slash className="size-3" />
                  <span>TailwindCSS</span>
                  <Slash className="size-3" />
                  <span>ShadCN UI</span>
                  <Slash className="size-3" />
                  <span>Framer Motion</span>
                </div>
              </div>
              <div className="relative bg-blue-200">
                <div className="size-12 border border-foreground rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-9">
                  <GitHubIcon />
                </div>
                <Button size="icon" className="rounded-full absolute right-0 top-1/2 -translate-y-1/2 hover:bg-primary">
                  <MoveUpRight />
                </Button>
              </div>
            </div>
            <div className="bg-transparent border border-input p-8 rounded-4xl max-w-180">
              <Label className="text-xl font-light mb-4">Backend</Label>
              <div className="flex flex-wrap items-center gap-2 font-fira-code font-light">
                <span>NestJs</span>
                <Slash className="size-3" />
                <span>Express</span>
                <Slash className="size-3" />
                <span>Gin Gonic</span>
                <Slash className="size-3" />
                <span>Postgres</span>
                <Slash className="size-3" />
                <span>MongoDB</span>
                <Slash className="size-3" />
                <span>Redis</span>
                <Slash className="size-3" />
                <span>Kafka</span>
                <Slash className="size-3" />
                <span>Prisma</span>
                <Slash className="size-3" />
                <span>TypeORM</span>
                <Slash className="size-3" />
                <span>Microservices</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="max-w-[16rem] text-muted-foreground">
                Some of my <span className="italic text-white">favorite technologies</span>,{" "}
                <span className="italic text-white">topics</span> and <span className="italic text-white">tools</span>{" "}
                that I worked with.
              </p>
              <div className="bg-transparent border border-input p-8 rounded-4xl max-w-sm">
                <Label className="text-xl font-light mb-4">DevOps</Label>
                <div className="flex flex-wrap items-center gap-2 font-fira-code font-light">
                  <span>Nginx</span>
                  <Slash className="size-3" />
                  <span>Docker</span>
                  <Slash className="size-3" />
                  <span>Cloudfare</span>
                  <Slash className="size-3" />
                  <span>AWS</span>
                  <Slash className="size-3" />
                  <span>Trafeik</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-80 h-128 rounded-4xl relative overflow-hidden">
              <Image
                src="https://bucket.acusdev.com/avatars/DSC03913.jpg"
                alt="Avatar"
                fill={true}
                className="object-cover grayscale-100 hover:grayscale-0 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
