import { Outlet } from "@tanstack/react-router";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
