import React from "react";

interface ReasonProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export default function Reason({
  alt,
  description,
  image,
  title,
}: ReasonProps) {
  return (
    <div className="flex flex-col rounded bg-darkLight">
      <img src={image} alt={alt} className="w-full object-cover h-[300px]" />

      <div className="flex flex-col p-6 text-white">
        <h2 className="text-2xl font-fontBold">{title}</h2>

        <div className="border-t-2 border-grayExtraLight w-full my-3"></div>

        <p className="">{description}</p>
      </div>
    </div>
  );
}
