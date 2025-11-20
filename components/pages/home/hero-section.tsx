import FacebookIcon from "@/components/icons/facebook";
import GitHubIcon from "@/components/icons/github";
import LinkedInIcon from "@/components/icons/linkedin";
import HeroCarousel from "@/components/pages/home/hero-carousel";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, User } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="#hero"
      className="max-w-7xl mx-auto flex flex-col justify-center min-h-[calc(100vh-5rem)] w-full items-center"
    >
      <div className="flex flex-col gap-8 w-full">
        <div className="flex items-end justify-between w-full">
          <Label className="text-9xl font-semibold font-fira-code">Full-stack</Label>
          <div className="-translate-y-4 flex items-center gap-2">
            <Button className="w-80 h-14 rounded-full" asChild>
              <Label className="italic text-lg">Projects</Label>
            </Button>
            <Button className="size-14 rounded-full" size="icon">
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="flex items-end justify-between w-full">
          <p className="max-w-sm text-lg ml-2 -translate-y-4 text-muted-foreground">
            My goal is to <span className="italic text-white">write maintainable, clean</span> and{" "}
            <span className="italic text-white">understandable code</span> to ensure the development process is
            enjoyable.
          </p>
          <Label className="text-9xl font-semibold font-fira-code">Developer</Label>
        </div>
      </div>
      <div className="mt-12 flex items-center gap-24 justify-center w-full">
        <div className="flex gap-8">
          <Button variant="outline" className="w-36 dark:bg-transparent rounded-full italic">
            <GitHubIcon />
            GitHub
          </Button>
          <Button variant="outline" className="w-36 dark:bg-transparent rounded-full italic">
            <Mail />
            Email
          </Button>
        </div>
        <Button variant="outline" className="w-36 dark:bg-transparent rounded-full italic">
          <User />
          My CV
        </Button>
        <div className="flex gap-8">
          <Button variant="outline" className="w-36 dark:bg-transparent rounded-full italic">
            <FacebookIcon />
            Facebook
          </Button>
          <Button variant="outline" className="w-36 dark:bg-transparent rounded-full italic">
            <LinkedInIcon />
            LinkedIn
          </Button>
        </div>
      </div>
      <HeroCarousel />
    </section>
  );
};

export default HeroSection;
