import React from "react";
import { APP_IMAGES } from "@modules/app/constants/IMAGES";

export default function Title() {
  return (
    <header className="flex py-10 justify-center w-full items-center gap-y-5 gap-x-10 px-20 esm:px-0 esm:flex-col flex-row">
      <img
        src={APP_IMAGES.AVATAR.image}
        alt={APP_IMAGES.AVATAR.alt}
        className="w-[130px] esm:w-[170px]"
      />

      <div className="flex items-center">
        <h1 className="text-2xl esm:text-center font-fontBold text-grayStrong">
          Te invitamos a perdonar a Héctor ❤️!!!
        </h1>
      </div>
    </header>
  );
}
