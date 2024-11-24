import reactLogo from "../assets/react-logo.svg";
import { useFindMany } from "@gadgetinc/react";
import { useState } from "react";
import { api } from "../api";

export default function () {

  return (
    <>
      <div className="flex justify-center">
        <a href="/play" className="px-8 py-4 text-xl text-white uppercase transition-colors bg-teal-800 rounded-lg hover:bg-teal-700">
          Play as Guest
        </a>
      </div>
      <div className="flex justify-center mt-4">
        <a href="/sign-in" className="text-xl text-teal-800 uppercase hover:text-teal-700">
          Login
        </a>
      </div>
    </>
  );
}
