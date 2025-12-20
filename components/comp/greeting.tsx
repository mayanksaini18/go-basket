import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const greeting = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* logo */}
      <div className="flex flex-col items-center gap-3">
        <Image
          src={"/images/Go-basket-Logo.png"}
          alt="go-basket Logo"
          width={208}
          height={208}
        />
      <Button variant="neon" className="flex items-center gap-2 px-6 py-4">
        <span>Go basket</span>
      </Button>
      </div>
    </div>
  );
};

export default greeting;
