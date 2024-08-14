"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <>
      <nav className="navbar w-screen h-[4.68rem] flex flex-row justify-between items-center p-4 sm:p-6 md:p-10">
        <div className="logo">
          <h3
            className="text-[#1c4a36] text-[1.4rem] sm:text-[1.8rem] md:text-[2.125rem] font-semibold font-sans"
          >
            Plantify
          </h3>
        </div>
        <div className="">
          <div className="auth-btn">
            <Button
              label="Log In / Register"
              buttonColor="bg-[#e4f5ee]"
              textColor="text-[#1c4a36]"
              hoverColor="hover:bg-[#1c4a36]"
              hoverTextColor="hover:text-white"
              onClick={() => router.push("/auth")}
            />
          </div>
          {/* <div className="cart-icon">
                        <button>Cart</button>
                    </div> */}
        </div>
      </nav>
    </>
  );
}
