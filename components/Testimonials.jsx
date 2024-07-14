"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { testimonialData } from "@/helpers/constants";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "./ui/avatar";
import Autoplay from "embla-carousel-autoplay";
import { Play } from "lucide-react";
import { Button } from "./ui/button";

const TestimonialCard = ({ testimonial, api, setApi }) => {
  const [isPaused, setIsPaused] = useState(true);
  const videoRef = useRef();

  const handlePlay = () => {
    if (isPaused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  return (
    <Card className="border-0 rounded-none">
      <CardContent className=" p-5 h-auto md:h-[590px] flex flex-col-reverse md:flex-row md:gap-6 bg-[#F4511E12] w-full md:p-0 md:justify-between">
        <div className="self-start pt-11 md:pl-12 lg:pt-[130px] gap-11 xl:pl-[130px] lg:max-w-[700px] w-full flex flex-col">
          <span className="lg:text-[21px] relative text-base lg:leading-[25.5px] font-normal text-[#6D220A]">
            {testimonial.review}
            <img
              src="./quotes.svg"
              className="absolute lg:w-[71px] lg:h-[60px] h-[41px] w-[35px] opacity-[30%] top-[-12%] lg:top-[-30px] lg:left-[-50px]"
            />
          </span>
          <div className="flex items-center mt-4">
            <Avatar>
              <AvatarImage src="./person.svg" alt={testimonial.name} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <h4 className="text-primary font-bold text-[18px]">
                {testimonial.name}
              </h4>
              <span className="font-normal text-[18px]">Property Owner</span>
            </div>
          </div>
          <div className="flex gap-3">
            {api?.scrollSnapList().map((_, index) => {
              return (
                <div
                  onClick={() => api.scrollTo(index)}
                  key={index}
                  className={`h-3 w-3 rounded-full cursor-pointer border-[1px] ${
                    index === api.selectedScrollSnap()
                      ? "bg-primary"
                      : "bg-[#D9DBE1]"
                  }`}
                />
              );
            })}
          </div>
        </div>
        <div className="relative" onClick={handlePlay}>
          {isPaused && (
            <Button className="absolute flex items-center justify-center w-16 h-16 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full bg-primary text-white">
              <Play size={24} fill="#ffff" />
            </Button>
          )}
          <video
            ref={videoRef}
            className="lg:w-[638px] md:w-[450px] md:h-[100%] h-[500px] w-full object-cover video-class"
            src={testimonial.video}
          />
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const [api, setApi] = useState();
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
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      setApi={setApi}
      className="flex flex-col mt-24"
    >
      <CarouselContent>
        {testimonialData.map((testimonial) => (
          <CarouselItem key={testimonial.id}>
            <TestimonialCard
              testimonial={testimonial}
              api={api}
              setApi={setApi}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Testimonials;
