/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import propertyData from "../helpers/propertyData";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Bath, BedDouble, Ruler } from "lucide-react";
import Image from "next/image";

const CardComponent = ({ property }) => (
  <Card
    className="flex flex-col md:w-[350px] lg:w-[402px] xl:w-[450px] 2xl:max-w-[500px] 2xl:w-[402px]
            overflow-hidden min-w-[330px] mt-[37px] md:ml-[37px] self-start"
  >
    <CardHeader className="p-0">
      <img
        height={272}
        width="100%"
        src={property.image}
        alt={property.description}
      />
    </CardHeader>
    <CardContent className="px-6 pt-5 pb-4">
      <CardTitle className="text-2xl line-clamp-2">
        {property.address}
      </CardTitle>
      <CardDescription className="text-sm">
        <span className="text-gray-600">Private room</span>
        <span className="text-primary mt-1 font-bold text-[20px] block">
          {`$${property.rent} / month`}
        </span>
      </CardDescription>
    </CardContent>
    <CardFooter className="p-0 sticky bottom-0">
      <div className="flex w-full border-t-[1px]">
        <div className="flex flex-1 py-4 justify-center items-center">
          <Image
            src="./bed.svg"
            className="mr-1"
            alt="bedrooms"
            width={20}
            height={20}
          />
          {property.bedrooms}
        </div>
        <div className="flex flex-1 py-4 justify-center border-x-[1px] items-center">
          <Image
            src="./bathtub.svg"
            className="mr-1"
            alt="bathrooms"
            width={20}
            height={20}
          />
          {property.bathrooms}
        </div>
        <div className="flex flex-1 py-4 justify-center items-center">
          <Image
            src="./area.svg"
            className="mr-1"
            alt="area"
            width={20}
            height={20}
          />
          {property.area} sqft
        </div>
      </div>
    </CardFooter>
  </Card>
);

const PropertyList = () => {
  const [properties, setProperties] = useState(propertyData);

  return (
    <>
      <div className="mt-16 px-20 py-16 hidden md:block">
        <div className="hidden md:flex justify-between">
          <h3 className="text-4xl font-bold">List of Properties</h3>
          <Button className="px-8 py-6">View all Properties</Button>
        </div>
        <div className="flex flex-wrap ml-[-37px] justify-center 2xl:justify-start">
          {properties.map((property) => (
            <CardComponent property={property} key={property.id} />
          ))}
        </div>
      </div>
      <div className="mt-7 px-5 py-16 md:hidden">
        <div className="flex">
          <h3 className="text-4xl font-bold">List of Properties</h3>
        </div>
        <Carousel className="flex flex-col">
          <CarouselContent>
            {properties.map((property) => (
              <CarouselItem key={property.id}>
                <CardComponent property={property} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex mt-4 items-center">
            <Button className="px-8 py-6">View all Properties</Button>
            <CarouselPrevious className="static ml-auto mr-2 translate-y-0 text-gray-800" />
            <CarouselNext className="static translate-y-0 text-gray-800" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default PropertyList;
