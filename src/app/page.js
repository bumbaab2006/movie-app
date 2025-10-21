"use client";

import Header from "./_features/Header";
import Footer from "./_features/Footer";
import HeroSection from "./_features/home/HeroSection";
import Upcoming from "./_features/home/UpcomingMovieList";
import Popular from "./_features/home/PopularMovieList";
import TopRated from "./_features/home/TopRatedMovieList";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="flex flex-col w-[1440px] gap-[52px] rotate-0 opacity-100">
      <Header />

      <div className="flex flex-col w-[1440px] rotate-0 opacity-100 relative gap-[52px]">
        <Upcoming />
        <Popular />
        <TopRated />
      </div>

      <Footer />
    </div>
  );
}
