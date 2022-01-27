import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/t4i"
        objectFit="contain"
        alt="facebook login"
        width={400}
        height={400}
      />
      <p
        onClick={signIn}
        className="p-5 text-center bg-blue-500 rounded-full text-white cursor-pointer"
      >
        Login To Facebook
      </p>
    </div>
  );
};

export default Login;
