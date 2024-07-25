import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div>{index}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious style={{ borderWidth: 0 }} />
      <CarouselNext style={{ borderWidth: 0 }} />
    </Carousel>
  );
}
