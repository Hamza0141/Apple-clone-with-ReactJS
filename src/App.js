import React from "react";
import "./Resource/css/bootstrap.css"
import "./Resource/css/styles.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Header/Nav";
// import Iphone14Pro from "./Components/Body/Iphone14pro/Iphone14Pro";
import Iphones from "./Components/iphones/Iphones";
import Iphone14 from "./Components/Body/Iphone14/Iphone14";
import Community from "./Components/Body/Creativity/Community";
import AppleWatch from "./Components/Body/Watch/AppleWatch";
import Ipad from "./Components/Body/Ipad/Ipad";
import MacBookPro from "./Components/Body/MacBookPro/MacBookPro";
import HomePod from "./Components/Body/Homepod/HomePod";
import AirPodsPro from "./Components/Body/Airpod/AirPodsPro";
import Card from "./Components/Body/Card/Card";
import MainBody from "./Components/Body/MainBody/MainBody";
import Footer from "./Components/Footer/Footer";
import Info from "./Components/Body/info/Info";
import Pagenotfound from "./Components/4o4/Pagenotfound";
import Music from "./Components/Body/MusicSupportSearchChat/Music";
import Support from "./Components/Body/MusicSupportSearchChat/Support";
import Search from "./Components/Body/MusicSupportSearchChat/Search";
import Cart from "./Components/Body/MusicSupportSearchChat/Cart";
import AppleTv from "./Components/Body/MusicSupportSearchChat/AppleTv";
import SingleProducts from "./Components/SingleProducts/SingleProducts";





function App() {
  return (
    <>
      <Nav />
      <Info />
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="Mac" element={<MacBookPro />} />
        {/* <Route path="iphone" element={<Iphone14Pro />} /> */}
        <Route path="iphone" element={<Iphones />} />
        <Route path="iphone/:pid" element={<SingleProducts />} />
        <Route path="watch" element={<AppleWatch />} />
        <Route path="ipad" element={<Ipad />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="music" element={<Music />} />
        <Route path="support" element={<Support />} />
        <Route path="search" element={<Search />} />
        <Route path="cart" element={<Cart />} />
        <Route path="tv" element={<AppleTv />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
