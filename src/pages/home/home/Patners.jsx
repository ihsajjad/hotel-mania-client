import bks from "../../../assets/sslCommerLogos/bkslogo.png";
import express from "../../../assets/sslCommerLogos/american-express.png";
import brack from "../../../assets/sslCommerLogos/brack-bank.jpg";
import upay from "../../../assets/sslCommerLogos/upay.png";
import nogod from "../../../assets/sslCommerLogos/nogod.png";
import visa from "../../../assets/sslCommerLogos/visa.png";
import city from "../../../assets/sslCommerLogos/city-touch.png";
import master from "../../../assets/sslCommerLogos/mastercard.png";
import ddbl from "../../../assets/sslCommerLogos/ddbl.png";
import sure from "../../../assets/sslCommerLogos/sure-cash.png";
import Marquee from "react-fast-marquee";

const Patners = () => {
  const logos = [
    bks,
    express,
    brack,
    upay,
    nogod,
    visa,
    city,
    master,
    ddbl,
    sure,
  ];

  return (
    <section className="min-h-fit py-10">
      <h3 className="text-3xl text-center font-bold">
        Our <span className="text-[var(--main-color)]">Patners</span>
      </h3>

      <Marquee>
        <div className="flex my-10 space-x-8">
          {logos.map((logo, i) => (
            <img key={i} src={logo} alt="" className="h-20 w-32" />
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Patners;
