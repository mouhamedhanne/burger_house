import React from "react";
import HeroTop from "../components/marketing/pagesections/HeroTop";
import LastProducts from "../components/marketing/pagesections/LastProducts";
import Products from "../components/marketing/pagesections/Products";
import Event from "../components/marketing/pagesections/Event";

export default function HomePage() {
  return (
    <div>
      <HeroTop />
      <LastProducts />
      <Products />
      <Event />
    </div>
  );
}
