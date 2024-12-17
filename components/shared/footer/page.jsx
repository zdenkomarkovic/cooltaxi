import React from "react";
import { FaViber } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div id="kontakt" className="bg-black pb-[50px]">
        <div className=" container mx-auto text-center px-[8px] lg:px-[50px]">
          <h2 className="flex flex-col lg:flex-row lg:gap-[20px] justify-center text-[50px] lg:text-[100px] text-white leading-tight py-[30px] lg:py-[50px]">
            <span className="text-cool-green font-bold">Cool </span>Taksi Niš
          </h2>
          <div className=" flex flex-col lg:flex-row gap-[50px] lg:gap-0 mx-auto justify-between items-center">
            <div className=" flex flex-col gap-[4px] text-[20px] lg:text-[30px] ">
              <a
                href="viber://contact?number=%2B381659719711"
                className="flex gap-3 items-center py-[5px] lg:py-[10px] mx-auto hover:scale-110 w-[260px] lg:w-[400px]"
              >
                <FaViber className="bg-purple-600  rounded-full w-10 h-10 p-[5px] text-white" />
                <span className="text-white">065/97 197 11</span>
                <Image
                  src={"/mts-logo.png"}
                  width={60}
                  height={30}
                  alt={"logo"}
                  className="bg-white p-2 rounded-lg"
                />
              </a>
              <div className=" w-[280px] lg:w-[500px] mx-auto h-[2px] bg-cool-green"></div>
              <a
                href="tel:+38119711"
                className="flex gap-3 items-center py-[5px] lg:py-[10px] mx-auto hover:scale-110 w-[300px] lg:w-[400px] "
              >
                <FaPhoneAlt className="bg-white rounded-full w-9 h-9 p-[4px] text-cool-green" />
                <span className="text-white">19711</span>
              </a>
              <div className=" w-[280px] lg:w-[500px] mx-auto h-[2px] bg-cool-green"></div>
              <a
                href="tel:+381691971111"
                className="flex gap-3 items-center py-[5px] lg:py-[10px] mx-auto hover:scale-110 w-[300px] lg:w-[400px]"
              >
                <Image
                  src={"/yettel-logo.png"}
                  width={45}
                  height={40}
                  alt={"logo"}
                  className="rounded-lg"
                />

                <span className="text-white">069/197 11 11</span>
              </a>
              <div className=" w-[280px] lg:w-[500px] mx-auto h-[2px] bg-cool-green"></div>
              <a
                href="tel:+381603219711"
                className="flex gap-3 items-center py-[5px] lg:py-[10px] mx-auto hover:scale-110 w-[300px] lg:w-[400px]"
              >
                <Image
                  src={"/a1-logo.png"}
                  width={37}
                  height={37}
                  alt={"logo"}
                  className="bg-white rounded-lg"
                />

                <span className="text-white">060/32 197 11</span>
              </a>
              <div className=" w-[280px] lg:w-[500px] mx-auto h-[2px] bg-cool-green"></div>
              <a
                href="mailto:office@cooltaxi.rs"
                className="flex gap-3 items-center py-[5px] mx-auto hover:scale-110 w-[300px] lg:w-[400px] "
              >
                {" "}
                <MdOutlineEmail className="w-10 h-10 p-[3px] text-white " />
                <span className=" text-white">office@cooltaxi.rs</span>
              </a>

              <div className=" w-[280px] lg:w-[500px] mx-auto h-[2px] bg-cool-green"></div>
              <div className="flex pt-4 lg:pt-12 gap-10 lg:gap-20 text-[33px] lg:text-[40px] mx-auto ">
                <a
                  href="https://www.instagram.com/cool_taxi_nis/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="p-1 bg-red-400 rounded-xl text-white" />
                </a>
                <a
                  href="https://www.facebook.com/cooltaxinis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-blue-500" />
                </a>
                <a
                  href="https://www.tiktok.com/@cool.taxi.nis?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok className="text-white" />
                </a>
                <a
                  href="https://www.google.com/maps/place/COOL+D.O.O./@43.3274182,21.9009889,17z/data=!3m1!4b1!4m6!3m5!1s0x4755b0c9362cd831:0x36b51b92ffce100!8m2!3d43.3274182!4d21.9035638!16s%2Fg%2F11h6s251pr?authuser=0&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGooglePlusG className="text-white text-[40px]" />
                </a>
              </div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.3715611838543!2d21.900978876041638!3d43.32741337111941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755b0c937d6957f%3A0x480d75a9e666ec8b!2sPantelejska%204%2C%20Ni%C5%A1%2018000!5e0!3m2!1sen!2srs!4v1732734920974!5m2!1sen!2srs"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full lg:h-[380px] lg:w-[750px] rounded-lg"
              ></iframe>
            </div>
          </div>
          <p className="pt-8 lg:pt-14 text-white">
            © 2024 Cool Taxi Nis. Designed by{" "}
            <span className="font-bold"> Manikam.Dev.Solutions</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
