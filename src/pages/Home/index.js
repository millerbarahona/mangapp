import React from "react";
import Link from "wouter";
import NavBar from "../../components/NavBar/index";

export default function Home() {
  return (
    <div className="container mx-auto">
      <NavBar />
      <div className="text-xl">Hola</div>
    </div>
  );
}
