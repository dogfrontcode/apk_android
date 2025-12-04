import { Href } from "@/.expo/types/router";
import { JSX } from "react";

export interface CardItem {
  title: string;
  subtitle: JSX.Element;
  card_color: string;
  card_text_color: string;
  back_image: any;
  icon: any;
    href?: Href; // Optional property for navigation
}

export interface RenderCardsProps {
  cards_to_render: CardItem[];
}
