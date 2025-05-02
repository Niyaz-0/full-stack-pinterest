import React, { useState } from "react";
import Image from "./Image";

export default function Userbutton() {
  const [open, setOpen] = useState(false);

  //TEMP
  const currentUser = true;

  return currentUser ? (
    <div className="flex items-center gap-4 relative max-sm:hidden">
      <Image path="/general/noAvatar.png" alt="" className="w-9 " />
      <img
        src="/general/arrow.svg"
        alt=""
        className="cursor-pointer w-4"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && <div className="absolute right-0 top-[120%] p-4 rounded-2xl bg-white z-[50] flex flex-col text-[14px] shadow-lg">
        <div className="user-option">Profile</div>
        <div className="user-option">Settings</div>
        <div className="user-option">Logout</div>
      </div>}
    </div>
  ) : (
    <div>
      <a href="/" className="text-xl p-4 rounded-4xl hover:bg-gray-300 ">
        Login / Sign Up
      </a>
    </div>
  );
}
