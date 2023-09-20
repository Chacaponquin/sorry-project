import React from "react";
import { LandingSection, SectionHeader } from "../../shared/components";

export default function Message() {
  const ADVENTAJES = [
    "Según la ONU perdonar a Héctor puede llegar a salvar cerca de 10000 vidas en África",
    "9 de cada 10 animales recomiendan a Héctor como persona para perdonar",
    "Últimos estudios han arrojado que los chistes de Héctor pueden alargar la vida humana hasta 10 años",
    "José no tendrá que soportar a un Héctor deprimido todo el semestre debido a no conseguir el perdón de Amaya",
    "Tendrás siempre alguien para discutir",
    "En esta vida siempre es bueno tener a alguien que critique a Alex. No todo el mundo lo tiene que amar",
  ];

  return (
    <LandingSection theme="light">
      <div className="flex justify-between gap-x-16">
        <div className="xl:block hidden h-full">
          <img
            src="https://res.cloudinary.com/chaca-sa/image/upload/v1682915008/95bc112f-b9d9-44f9-9a29-b8157a92506f_jmkats.webp"
            alt="Cat Dancing"
            className="rounded h-full object-cover min-w-[350px]"
          />
        </div>

        <div>
          <SectionHeader text="¿Qué beneficios trae?" theme="light" />

          <ul className="flex flex-col gap-y-3">
            {ADVENTAJES.map((a, i) => (
              <li
                key={i}
                className="flex items-start gap-x-5 text-lg esm:text-base"
              >
                <div className="">{i + 1}.</div>
                <p>{a}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </LandingSection>
  );
}
