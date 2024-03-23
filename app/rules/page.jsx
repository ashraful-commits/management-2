import React from "react";
import Header from "@/components/homepage/Header";
import Footer from "@/components/homepage/Footer";
import LiveEvents from "@/components/homepage/LiveEvents";
import Brands from "@/components/homepage/Brands";
import RulesVideo from "@/components/homepage/RulesVideo";
import RulesExplainer from "@/components/homepage/RulesExplainer";

export default function RulesPage() {
  return (
    <div className="homepage">
      <Header />

      <RulesVideo />

      <RulesExplainer />

      <LiveEvents />

      <Brands />

      <Footer />
    </div>
  );
}
