import React from "react";
import Container from "../../elements/Container";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import BackgroundImage from "../../../medias/images/footer/bg-footer.jpg";
import Logo from "../../../medias/svg/Logo-burger-house.svg";
import Facebook from "../../../medias/svg/icone/facebook-f.svg";
import Instagram from "../../../medias/svg/icone/instagram.svg";
import Whatsapp from "../../../medias/svg/icone/whatsapp.svg";
import Twitter from "../../../medias/svg/icone/x-twitter.svg";

export default function Footer() {
  return (
    <Container>
      <div className="relative mb-20 p-5 text-white">
        <img
          src={BackgroundImage}
          alt=""
          className="bg-black absolute top-0 left-0 z-0 object-cover w-full h-full"
        />
        <div className="grid grid-cols-2 relative z-10">
          <div className="w-full p-5 mt-20 mb-28">
            <img src={Logo} alt="" className="w-2/3" />
            <p className="mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              natus, rem quae sapiente perferendis doloribus porro sit dolores
              rem quae sapiente perferendis doloribus porro sit dolores
              voluptatemrem quae sapiente perferendis.Sapiente perferendis
              doloribus
            </p>
          </div>

          <div
            className="h-full w-full flex flex-col
           items-center justify-center"
          >
            <div className="flex items-center">
              <MapPinIcon className="h-10 w-10 mr-5 text-white" />
              <span className="uppercase font-extrabold text-lg tracking-tighter">
                Corniche Ouest, Dakar
              </span>
            </div>
            <div className="flex items-center mt-5">
              <EnvelopeIcon className="h-10 w-10 mr-5 text-white" />
              <span className="uppercase font-extrabold text-lg tracking-tighter">
                infos@burger-house.com
              </span>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <div className="uppercase font-extrabold tracking-tighter text-sm">
            burger house 2023. All rights reserved.
          </div>

          <div className="flex">
            <div>
              <img
                src={Instagram}
                alt=""
                className="w-7 h-7 mr-2 bg-white rounded-full p-1"
              />
            </div>
            <div>
              <img
                src={Facebook}
                alt=""
                className="w-7 h-7 mr-2 bg-white rounded-full p-1 "
              />
            </div>
            <div>
              <img
                src={Twitter}
                alt=""
                className="w-7 h-7 mr-2 bg-white rounded-full p-1 "
              />
            </div>
            <div>
              <img
                src={Whatsapp}
                alt=""
                className="w-7 h-7 bg-white rounded-full p-1 "
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
