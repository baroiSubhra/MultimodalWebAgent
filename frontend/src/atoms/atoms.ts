import { atom } from "recoil";
import { cardsData } from "../components/sidebar/cardsData"

export const sidebarCards = atom({
  key: 'sidebarCards',
  default: cardsData,
});