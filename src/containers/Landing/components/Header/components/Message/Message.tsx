import { APP_IMAGES } from "@modules/app/constants/IMAGES";
import React from "react";

export default function Message() {
  const TEXT =
    "Es una persona inteligente, responsable, adorado por Jose y esta dispuesto enteramente a recibir tu perdón 😀.";

  return (
    <div className="text-center">
      <img
        src={APP_IMAGES.FORGIVE.image}
        alt={APP_IMAGES.FORGIVE.alt}
        className="w-full object-cover rounded min-h-[400px]"
      />

      <h1 className="text-grayStrong text-3xl font-fontBold mt-8 esm:text-xl">
        {TEXT}
      </h1>
    </div>
  );
}
