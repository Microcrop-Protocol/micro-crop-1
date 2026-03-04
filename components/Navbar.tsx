"use client"

import React, { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {MicroCropLogo} from "@/constants/svg"

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Platform", href: "#platform", current: false },
  { name: "For Partners", href: "#partners", current: false },
  { name: "About Us", href: "/about", current: false },
  { name: "Blog", href: "/blog", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Determine if we're on the home page
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Dynamic styling based on page and scroll state
  const getNavbarClasses = () => {
    if (isHomePage) {
      return scrolled
        ? 'bg-white/10 backdrop-filter backdrop-blur-md shadow-sm'
        : 'bg-transparent';
    } else {
      return scrolled
        ? 'bg-white shadow-md'
        : 'bg-white';
    }
  };

  const getTextColor = () => isHomePage ? 'text-white' : 'text-gray-900';
  const getHoverTextColor = () => isHomePage ? 'hover:text-gray-200' : 'hover:text-gray-600';
  const getBorderColor = () => isHomePage ? 'border-white' : 'border-gray-900';
  const getButtonHoverBg = () => isHomePage ? 'hover:bg-white hover:text-black' : 'hover:bg-gray-900 hover:text-white';

  return (
    <Disclosure as="nav" className={`sticky top-0 z-50 transition-all duration-300 font-poppins ${getNavbarClasses()}`}>
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center justify-between w-full sm:items-stretch sm:justify-start md:px-20">
                <Link href="/" className="flex items-center">
                  <Image
                    src={MicroCropLogo}
                    alt="MicroCrop Logo"
                    width={250}
                    height={250}
                    priority
                    className="w-32 h-auto sm:w-40 md:w-48 lg:w-56"
                  />
                </Link>
                <div className="hidden lg:ml-6 lg:flex w-full">
                  <div className="w-full flex justify-center">
                    {navigation.map((item: any) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            isActive
                              ? getTextColor()
                              : `${getTextColor()} ${getHoverTextColor()}`,
                            isActive && !isHomePage ? "font-semibold" : "",
                            "rounded-full px-3 py-2 text-base transition-colors"
                          )}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className='hidden lg:block'>
                  <Link href="#contact" className={`py-2.5 px-3 w-[170px] rounded-full border ${getBorderColor()} ${getTextColor()} font-semibold ${getButtonHoverBg()} hover:cursor-pointer transition-all inline-flex items-center justify-center`}>
                    Request a Demo
                  </Link>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                <DisclosureButton className={`relative inline-flex items-center justify-center rounded-md p-2 ${isHomePage ? 'text-white hover:bg-white/20' : 'text-gray-900 hover:bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-inset ${isHomePage ? 'focus:ring-white' : 'focus:ring-gray-900'}`}>
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className={`block h-6 w-6 ${getTextColor()}`} aria-hidden="true" />
                  ) : (
                    <Bars3Icon className={`block h-6 w-6 ${getTextColor()}`} aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className={`lg:hidden ${isHomePage ? 'bg-black/80 backdrop-blur-md' : 'bg-white border-t border-gray-200'}`}>
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      isActive
                        ? isHomePage
                          ? "bg-white/20 text-white"
                          : "bg-gray-100 text-gray-900 font-semibold"
                        : isHomePage
                          ? "text-gray-200 hover:bg-white/10 hover:text-white"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900",
                      "block rounded-md px-3 py-2 text-base font-medium transition-colors"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                );
              })}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
