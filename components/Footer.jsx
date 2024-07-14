/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import footerLinks from "../mockDataStore/footerLinks";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 md:py-[120px]">
      <div className="container mx-auto px-5 md:px-20 flex flex-col-reverse md:flex-row justify-between">
        <div className="lg:flex lg:flex-col justify-center w-[305px] self-start mt-8 md:mt-0">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={150}
            height={50}
            className="mr-3"
          />
          <span className="text-base font-normal mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut id
            nisl tellus rhoncus, imperdiet
          </span>

          <div className="mt-4 flex space-x-4">
            <Link
              className="bg-[#FFFFFF33] w-10 h-10 rounded-[10px] flex items-center justify-center"
              href="https://facebook.com"
            >
              <Image src="/globe.svg" alt="Globe" width={24} height={24} />
            </Link>
            <Link
              className="bg-[#FFFFFF33] w-10 h-10 rounded-[10px] flex items-center justify-center"
              href="https://facebook.com"
            >
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link
              className="bg-[#FFFFFF33] w-10 h-10 rounded-[10px] flex items-center justify-center"
              href="https://twitter.com"
            >
              <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
            </Link>
            <Link
              className="bg-[#FFFFFF33] w-10 h-10 rounded-[10px] flex items-center justify-center"
              href="https://google.com"
            >
              <Image src="/google.svg" alt="Google" width={24} height={24} />
            </Link>
            <Link
              className="bg-[#FFFFFF33] w-10 h-10 rounded-[10px] flex items-center justify-center"
              href="https://linkedin.com"
            >
              <Image
                src="/linkedin.svg"
                alt="Linkedin"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
        <div className="flex md:space-y-0 gap-5 md:space-x-[160px]">
          <div>
            <h4 className="font-bold mb-2">Pages</h4>
            <ul>
              {footerLinks.pages.map((page, index) => (
                <li key={index} className="mt-4 text-base font-normal">
                  <Link href={page.link}>{page.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <ul>
              {footerLinks.extraLinks.map((link, index) => (
                <li key={index} className="mt-4 text-base font-normal">
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Utility Pages</h4>
            <ul>
              {footerLinks.utilityPages.map((utilityPage, index) => (
                <li key={index} className="mt-4 text-base font-normal">
                  <Link href={utilityPage.link}>{utilityPage.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
