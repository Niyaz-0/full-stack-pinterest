import React from "react";
import { Link } from "react-router";
import Image from "./Image";

export default function GalleryItem({ item }) {

  const optimixedHeight = (372 * item.height) / item.width;

  return (
    <div
      className="flex group relative"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      {/* <img src={item.media} alt="" className="w-full rounded-2xl object-cover"/> */}
      <Image path={item.media} alt="" w={372} h={optimixedHeight} className="w-full rounded-2xl object-cover" />

      <Link to={`pin/${item.id}`} className="overlay" />

      <button className="primary-button hidden absolute top-4 right-4 group-hover:block">
        Save
      </button>
      <div className="hidden absolute bottom-4 right-4 gap-2  group-hover:flex">
        <button className="options">
          <Image path="/general/share.svg" alt="" className="w-5 h-5" />
        </button>
        <button className="options">
          <Image path="/general/more.svg" alt="" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
