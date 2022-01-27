import Image from "next/image";
import React from "react";

const StoryCard = ({ story }) => {
  console.log(story);
  const { title, src, profile } = story;
  return (
    <div className="relative h-14 w-14 md:h-20 width:h-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-50"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
        alt=""
      />
      <Image
        src={src}
        layout="fill"
        className="object-cover filter  brightness-75 rounded-full lg:rounded-3xl"
        alt=""
        width={40}
        height={40}
      />
    </div>
  );
};

export default StoryCard;
