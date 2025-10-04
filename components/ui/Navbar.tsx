import { NAVBAR_HEIGHT } from "@/lib/constants";
import React from "react";
import { Button } from "./button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      className="fixed top-0 w-full z-50 shadow-xl"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="flex justify-between items-center w-full py-3 px-8 bg-primary-700 text-white">
        <div className="flex items-center gap-4 md:gap-6">
          <Link href="/" scroll={false} className="cursor-pointer hover:!text-primary-300">
            <div className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="rentiful logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="text-xl font-bold">
                RENT
                <span className="text-secondary-500 font-light hover:!text-primary-300">
                  IFUL
                </span>
              </div>
            </div>
          </Link>
        </div>

        <p className="text-primary-200 hidden md:block">
          Discover your perfect rental apartment with our advanced search
        </p>

        <div className="flex items-center gap-5">
          <Link href="/signin">
            <Button
              variant="outline"
              className= "text-white border-white bg-transparent hover:text-primary-700 rounded-lg"
            >
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
