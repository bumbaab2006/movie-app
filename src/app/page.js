"use client";

import Header from "./_features/Header";
import Footer from "./_features/Footer";
import HeroSection from "./_features/home/HeroSection";

import { useEffect, useState } from "react";
import { MovieList } from "./_features/home/MovieList";

export default function Home() {
  return (
    <div className="flex flex-col w-[1440px] gap-[52px] rotate-0 opacity-100 justify-center ">
      <Header />
      <HeroSection />

      <div className="flex flex-col w-[1440px] rotate-0 opacity-100 relative gap-[52px]">
        <MovieList type="popular" />
        <MovieList type="upcoming" />
        <MovieList type="top_rated" />
      </div>

      <Footer />
    </div>
  );
}
