"use client";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mt-8 w-full relative">
      <div className="absolute inset-y-0 left-0 w-72 bg-linear-to-r from-background to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-72 bg-linear-to-l from-background to-transparent pointer-events-none z-10"></div>
      <div className="absolute z-10 top-1/2 -translate-y-1/2">
        <Button
          size="icon"
          variant="outline"
          className="dark:bg-transparent dark:border-foreground rounded-full size-14"
          onClick={() => api?.scrollPrev()}
        >
          <ArrowLeft />
        </Button>
      </div>
      <div className="absolute z-10 top-1/2 -translate-y-1/2 right-0">
        <Button
          size="icon"
          variant="outline"
          className="dark:bg-transparent dark:border-foreground rounded-full size-14"
          onClick={() => api?.scrollNext()}
        >
          <ArrowRight />
        </Button>
      </div>
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[
          Autoplay({
            delay: 10000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem className="basis-1/2 h-72 rounded-4xl overflow-hidden ml-4 bg-transparent border-border border relative">
            <Image
              src="https://bucket.acusdev.com/projects/gmg-website.png"
              alt="GMG website"
              fill
              className="object-cover"
            />
            <div className="w-2/3 bg-background/75 absolute top-0 right-0 bottom-0 px-12 py-8 flex flex-col justify-between">
              <div>
                <Label className="text-2xl font-fira-code font-semibold">Global Materials Group Portfolio</Label>
                <p className="font-light mt-2">
                  A company providing intelligent and sustainable supply chain management solutions in Vietnam and
                  across the Asia.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button className="w-48 rounded-full italic">Read more</Button>
                <Button size="icon" className="rounded-full">
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/2 h-72 rounded-4xl overflow-hidden ml-4 bg-transparent border-border border relative">
            <Image
              src="https://bucket.acusdev.com/projects/drl-hcmus.png"
              alt="DRL HCMUS"
              fill
              className="object-cover"
            />
            <div className="w-2/3 bg-background/75 absolute top-0 right-0 bottom-0 px-12 py-8 flex flex-col justify-between">
              <div>
                <Label className="text-2xl font-fira-code font-semibold">HCMUS Behavior Point System</Label>
                <p className="font-light mt-2">
                  An admin dashboard for evaluating student&apos;s behavior point in an university.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button className="w-48 rounded-full italic">Read more</Button>
                <Button size="icon" className="rounded-full">
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/2 h-72 rounded-4xl overflow-hidden ml-4 bg-transparent border-border border relative">
            <Image
              src="https://bucket.acusdev.com/projects/tiktoday.png"
              alt="Tiktoday website"
              fill
              className="object-cover"
            />
            <div className="w-2/3 bg-background/75 absolute top-0 right-0 bottom-0 px-12 py-8 flex flex-col justify-between">
              <div>
                <Label className="text-2xl font-fira-code font-semibold">TAP Dasboard (Tiktoday)</Label>
                <p className="font-light mt-2">A Dashboard for Tiktok Partner Shop Analytics and Manangement.</p>
              </div>
              <div className="flex items-center gap-2">
                <Button className="w-48 rounded-full italic">Read more</Button>
                <Button size="icon" className="rounded-full">
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
