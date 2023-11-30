import React from "react";
import Container from "../../elements/Container";
import HeadingTitles from "../../elements/DisplayTitles/HeadingTitles";
import Heading from "../../elements/DisplayTitles/Heading";
import Button from "../../elements/Button";
import Product_1 from "../../../medias/images/products/Product-1.jpg";
import Product_2 from "../../../medias/images/products/Product-2.jpg";
import Product_3 from "../../../medias/images/products/Product-3.jpg";

export default function Products() {
  return (
    <Container>
      <HeadingTitles>Toujours des délicieux burgers</HeadingTitles>
      <Heading theme="font-secondary">Choisissez et savourez</Heading>

      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum labore
        ipsa illo totam et inventore, assumenda est minima. Assumenda, error!
        Dolorum labore ipsa illo totam et inventore, assumenda est minima.
      </p>

      <div className="grid grid-cols-3 gap-x-1 mb-20 mt-10 ">
        <div className="w-full">
          <div className="relative w-full h-72">
            <img
              src={Product_1}
              alt=""
              className="bg-primary absolute top-0 left-0 h-full w-full object-cover z-0"
            />
          </div>

          <div className="flex flex-col items-center justify-center px-5 pb-5">
            <Heading variant="h3 ">Lorem ipsa dolor</Heading>
            <p className="text-center ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <Button color="danger" className="font-font_secondary">
              Commandez
            </Button>
          </div>
        </div>

        <div className="w-full">
          <div className="relative w-full h-72">
            <img
              src={Product_2}
              alt=""
              className="bg-primary absolute top-0 left-0 h-full w-full object-cover z-0"
            />
          </div>

          <div className="flex flex-col items-center justify-center px-5 pb-5">
            <Heading variant="h3 ">Lorem ipsa dolor</Heading>
            <p className="text-center ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <Button color="danger" className="font-font_secondary">
              Commandez
            </Button>
          </div>
        </div>

        <div className="w-full">
          <div className="relative w-full h-72">
            <img
              src={Product_3}
              alt=""
              className="bg-primary absolute top-0 left-0 h-full w-full object-cover z-0"
            />
          </div>

          <div className="flex flex-col items-center justify-center px-5 pb-5">
            <Heading variant="h3 ">Lorem ipsa dolor</Heading>
            <p className="text-center ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <Button color="danger" className="font-font_secondary">
              Commandez
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
