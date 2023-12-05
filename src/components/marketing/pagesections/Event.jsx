import React from "react";
import Container from "../../elements/Container";
import AliceCarousel from "react-alice-carousel";
import "../../../Styles/carousel.css";
import Event_1 from "../../../medias/images/event/winner.jpeg";
import Event_2 from "../../../medias/images/event/noel.jpeg";
import Event_3 from "../../../medias/images/event/africa-cup.jpeg";
import Heading from "../../elements/DisplayTitles/Heading";

const Slide = ({ children, category, title, Image }) => {
  return (
    <div className="grid grid-cols-2 p-6 ">
      <div className="p-10 mb-10">
        <Heading variant="h4">{category}</Heading>
        <Heading theme="font-secondary" variant="h3" className="mb-5">
          {title}
        </Heading>
        <p className="text-lg tracking-wide  leading-relaxed font-light text-gray-800">
          {children}
        </p>
      </div>
      <div className="relative w-full h-full">
        <img
          src={Image}
          alt=""
          className="bg-primary absolute top-0 left-0 h-full w-full object-cover z-0"
        />
      </div>
    </div>
  );
};
export default function Event() {
  const items = [
    <Slide
      Image={Event_1}
      category="Evenement a venir"
      title="Vivez la coupe d'afrique"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis facilis
      at possimus quos reiciendis vero accusamus magni iste vitae ad in adipisci
      dignissimos suscipit minima.
    </Slide>,

    <Slide
      Image={Event_2}
      category="Evenement a venir"
      title="Vivez la coupe d'afrique"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis facilis
      at possimus quos reiciendis vero accusamus magni iste vitae ad in adipisci
      dignissimos suscipit minima.
    </Slide>,

    <Slide
      Image={Event_3}
      category="Evenement a venir"
      title="Vivez la coupe d'afrique"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis facilis
      at possimus quos reiciendis vero accusamus magni iste vitae ad in adipisci
      dignissimos suscipit minima.
    </Slide>,
  ];

  return (
    <Container>
      <div className="mb-20 shadow-2xl">
        <AliceCarousel
          mouseTracking
          items={items}
          infinite
          autoPlay
          autoPlayInterval="4000"
          animationType="fadeout"
          disableButtonsControls
        />
      </div>
    </Container>
  );
}
