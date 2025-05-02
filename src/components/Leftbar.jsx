import React from "react";
import Image from "./Image";
import { Link } from 'react-router'

export default function Leftbar() {
  return (
    <div className="left-sidebar">
      <div className="flex-center flex-col gap-6">
        <Link to="/" className="">
          <Image path="/general/logo.png" alt="" />
        </Link>
        <Link to="/" className="menu-icon">
          <Image path="/general/home.svg" alt="" className="logo"/>
        </Link>
        <Link to="/create" className="menu-icon">
          <Image path="/general/create.svg" alt="" className="logo"/>
        </Link>
        <Link to="/" className="menu-icon">
          <Image path="/general/updates.svg" alt="" className="logo" />
        </Link>
        <Link to="/" className="menu-icon">
          <Image path="/general/messages.svg" alt="" className="logo" />
        </Link>
      </div>
      <Link to="/" className="menu-icon">
        <Image path="/general/settings.svg" alt="" className="logo" />
      </Link>
    </div>
  );
}
