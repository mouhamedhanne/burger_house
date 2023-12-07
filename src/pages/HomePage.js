import React from "react";
import HeroTop from "../components/marketing/pagesections/HeroTop";
import LastProducts from "../components/marketing/pagesections/LastProducts";
import Products from "../components/marketing/pagesections/Products";
import Event from "../components/marketing/pagesections/Event";
import Booking from "../components/marketing/pagesections/Booking";
import Footer from "../components/marketing/pagesections/Footer";

export default function HomePage() {
  return (
    <div>
      <HeroTop />
      <LastProducts />
      <Products />
      <Event />
      <Booking />
      <Footer />
    </div>
  );
}
