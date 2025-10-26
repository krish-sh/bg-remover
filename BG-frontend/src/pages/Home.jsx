import React from "react";
import Header from "../component/Header";
import NavBar from "../component/NavBar";
import Steps from "../component/Steps";
import BigSlide from "../component/BigSlide";
import Upload from "../component/Upload";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <Steps />
      <BigSlide />
      <Upload/>
    </div>
  );
}
