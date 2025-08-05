import React from "react";
import { Link } from "@tanstack/react-router";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#ddd" }}>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
      <Link to="/products">Products</Link> | <Link to="/cart">Cart</Link>
    </nav>
  );
}
