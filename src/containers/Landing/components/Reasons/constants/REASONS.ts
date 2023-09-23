import { APP_IMAGES } from "@modules/app/constants/IMAGES";
import { Reason } from "../interface/reason.interface";

export const REASONS: Array<Reason> = [
  {
    image: APP_IMAGES.PROGRAMMER,
    title: "💻 Sabe programar",
    description:
      "Además de ser una persona muy sexy, Héctor es muy bueno programando. Seguro te preguntarás ¿Para qué me serviría algo así?. Pues si lo piensas mientras otras personas utilizarían técnicas básicas para ganarse tu perdón Héctor es capaz de crear una página wb creativa para quedar en ridículo 😘.",
  },
  {
    image: APP_IMAGES.CAR_GLASSES,
    title: "🐈 Ama a los gatos",
    description:
      "Héctor tiene una gata igual de sexy que él, y por cosas de la vida siempre anda viendo fotos de gatos en Twitter, es una razón de sobra para darse cuenta la increible persona que es.",
  },
  {
    image: APP_IMAGES.FRIENDS,
    description:
      "Creo que a Amalia le caigo bien así que a ella no le gustaría que odiaras a una persona tan buena como yo. O sea tendrías que perdonarme por el bien de ella más que por mi.",
    title: "😎 Tus amistades lo aprobarán",
  },
  {
    image: APP_IMAGES.CATS,
    description: `No se si lo sepas pero Matias y Pelusa se han vuelto muy buenos amigos, y me llevan escribiendo hace unos días diciéndome que haga lo que sea para que me perdones (a lo mejor se han intentado poner en contacto contigo también). Ellos están sufriendo mucho esta ruptura, no quieren ni comer debido a tu enfado, así que sería de gran ayuda si me perdonas y salimos los 4 a comer pescado un día.`,
    title: "💌 Matias y Pelusa merecen ser felices",
  },
];
