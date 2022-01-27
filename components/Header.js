import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
  BellIcon,
  ChatIcon,
  chatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const session = useSession();

  return (
    <div className="flex items-center bg-white shadow-md sticky top-0 z-50 p-2 lg:px-5">
      {/* left */}
      <Image
        layout="fixed"
        src="https://links.papareact.com/5me"
        width={40}
        height={40}
        alt="facebook_img"
        onClick={signOut}
      />

      <div className="flex items-center rounded-full ml-2 bg-gray-100 p-2">
        <SearchIcon className="h-6 text-gray-600" />
        <input
          type="text"
          placeholder="Search Facebook"
          className="hidden md:inline-block bg-transparent outline-none  ml-2 items-center placeholder-gray-500 flex-shrink"
        />
      </div>
      {/* center */}
      <div className="flex flex-grow justify-center ">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <p className="whitespace-nowrap font-semibold pr-3">Meer Habib</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
