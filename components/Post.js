import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

const Post = () => {
  return (
    <div>
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex space-x-2 items-center">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt="some "
            className="rounded-full"
            width={40}
            height={40}
          />
          <div>
            <p className="font-medium">Meer Habib</p>
            <p className="text-xs text-gray-400">2022-01-27</p>
          </div>
        </div>
        <p className="pt-4">Whats up Papa Fam</p>
      </div>
      <div className="relative h-46 md:h-96 bg-white">
        <Image
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          alt="post image"
          className=""
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="flex justify-between items-center border-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>

        <div className="inputIcon rounded-none ">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
