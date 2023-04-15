import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Cart from "@/components/cart";
export default function Card() {

  return (
    <Layout title='Card | Page'>
     <Cart/>
    </Layout>
  );
}
