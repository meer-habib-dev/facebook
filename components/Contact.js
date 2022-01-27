import Image from "next/image";
import React from "react";

const Contact = ({ contact }) => {
  const { name, img } = contact;
  return (
    <div className="flex group items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
      <Image
        width={50}
        height={50}
        layout="fixed"
        objectFit="cover"
        src={img}
        className="rounded-full"
      />
      <p>{name}</p>
      <div className="absolute bottom-2 left-7 h-3 w-3 rounded-full group-hover:animate-bounce bg-green-500" />
    </div>
  );
};

export default Contact;
