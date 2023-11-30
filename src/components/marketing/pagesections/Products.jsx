import React from "react";
import Container from "../../elements/Container";
import HeadingTitles from "../../elements/DisplayTitles/HeadingTitles";
import Heading from "../../elements/DisplayTitles/Heading";

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
    </Container>
  );
}
