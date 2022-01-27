import Image from "next/image";
import React from "react";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="flex items-center hover:bg-gray-200 rounded-xl cursor-pointer space-x-2 p-4">
      {src && (
        <Image
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          layout="fixed"
          width={30}
          height={30}
          alt="Profile Image"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium ">{title}</p>
    </div>
  );
};

export default SidebarRow;
