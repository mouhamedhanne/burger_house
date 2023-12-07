import React from "react";
import Container from "../../elements/Container";
import Assiete from "../../../medias/images/booking/Assiette-burger-frites.png";
import Burger from "../../../medias/images/booking/Burger.png";
import Sauce from "../../../medias/images/booking/Sauce-pimente.png";
import Heading from "../../elements/DisplayTitles/Heading";

export default function Booking() {
  return (
    <Container>
      <div className="relative mb-20">
        <img src={Burger} alt="" className="absolute -top-20 -left-36 z-10" />
        <img src={Sauce} alt="" className="absolute bottom-0 left-0" />
        <img
          src={Assiete}
          alt=""
          className="absolute w-96 -bottom-44 -right-28"
        />
        <div className="max-w-3xl mx-auto px-10 py-20">
          <Heading variant="h3" alignement="center">
            Reservation
          </Heading>

          <Heading alignement="center" theme="font-secondary" className="mt-5">
            Reservez votre table
          </Heading>

          <form className="grid grid-cols-2 gap-x-7 gap-y-6 mt-20">
            <div>
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                name="name"
                id="name"
                className="focus:ring-primary focus:border-primary
                 focus=border block w-full border-gray-400 rounded-md p-5"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="focus:ring-primary focus:border-primary
                 focus=border block w-full border-gray-400 rounded-md p-5"
                placeholder="JohnDoe@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                id="date"
                className="focus:ring-primary focus:border-primary
                 focus=border block w-full border-gray-400 rounded-md p-5"
                required
              />
            </div>

            <div>
              <label htmlFor="time">Heure</label>
              <input
                type="time"
                name="time"
                id="time"
                min="09:00"
                max="23:00"
                className="focus:ring-primary focus:border-primary
                 focus=border block w-full border-gray-400 rounded-md p-5"
                required
              />
            </div>

            <div>
              <label htmlFor="customer">Nombre de personnes</label>
              <input
                type="number"
                name="customer"
                id="customer"
                className="focus:ring-primary focus:border-primary
                 focus=border block w-full border-gray-400 rounded-md p-5"
                placeholder="5"
              />
            </div>

            <div>
              <label htmlFor="sendBooking" className="invisible">
                Reservez votre repas
              </label>
              <input
                type="button"
                name="sendBooking"
                id="sendBooking"
                value="Reservez votre repas"
                className="bg-red_primary hover:bg-red_primary_hover w-full
                 text-white font-font_secondary tracking-widest uppercase py-5
                  rounded-md cursor-pointer animate"
              />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
