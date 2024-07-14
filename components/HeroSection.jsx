"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronDown, Menu, Search } from "lucide-react";
import { Input } from "./ui/input";
import backgroundImage from "../public/background-image.png";

const Hero = () => {
  return (
    <div
      className="relative h-fit md:h-screen"
      style={{
        background: `url(${backgroundImage.src}) center center / cover no-repeat`,
      }}
    >
      <div className="py-5 lg:px-20 px-5 flex justify-between">
        <Image
          src="/logo.svg"
          alt="Logo"
          className="hidden md:block"
          width={150}
          height={50}
        />
        <Image
          src="/logo.svg"
          alt="Logo"
          className="md:hidden"
          width={62}
          height={20}
        />

        {/* Mobile Navigation with Hamburger menu  */}
        <Sheet className="lg:hidden">
          <SheetTrigger className="lg:hidden">
            <Menu className="h-6 w-6 text-white" />
          </SheetTrigger>
          <SheetContent className="lg:hidden flex flex-col">
            <div className="lg:hidden flex flex-col h-full w-full gap-6 pt-6">
              <Link href="#" legacyBehavior passHref>
                Home
              </Link>
              <Link href="#" legacyBehavior passHref>
                About Us
              </Link>
              <Link href="#" legacyBehavior passHref>
                Landlord
              </Link>
              <Link href="#" legacyBehavior passHref>
                Contact Us
              </Link>
              <Button size="lg" className="mt-auto">
                <Link href="/#">Login</Link>
              </Button>
              <Button variant="secondary" size="lg">
                <Link href="/#">Sign up</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <NavigationMenu className="gap-8 hidden lg:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Landlord
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Tenants
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="gap-3 hidden lg:flex">
          <Button variant="outline" size="lg">
            <Link href="/#">Login</Link>
          </Button>
          <Button variant="secondary" size="lg">
            <Link href="/#">Sign up</Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="md:mt-32 md:px-20 mt-10 flex flex-col items-center md:items-start">
          <h1 className="md:w-[820px] font-bold text-2xl w-[320px] text-white md:text-[64px] md:leading-[80px]">
            The Most Affordable Place To Stay
          </h1>
          <div className="md:w-[820px] w-[320px] mt-20 flex flex-wrap gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="h-[52px] w-[86px] md:w-[112px] px-5 py-4 "
                  variant="secondary"
                >
                  Lease
                  <ChevronDown
                    className="relative shrink-0 top-[1px] ml-1 h-5 w-5 transition duration-200 group-data-[state=open]:rotate-180"
                    aria-hidden="true"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Lease</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Rent</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Buy</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Input
              className="px-8 h-[52px] w-[226px] md:w-[350px] rounded-lg"
              type="text"
              placeholder="Search locality"
            />
            <Button
              type="submit"
              className="md:h-[52px] md:w-[52px] w-full flex space-x-3 h-[52px] mb-24"
            >
              <Search className="relative h-4 w-4 md:w-6 md:h-6 transition duration-200" />
              <span variant="button" className="text-white md:hidden">
                Search
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
