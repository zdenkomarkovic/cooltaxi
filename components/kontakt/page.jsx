import React from "react";
import { FaViber } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FcPhoneAndroid } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";

const Kontakt = () => {
  return (
    <>
      <div id="kontakt" className="bg-black pb-[50px]">
        <div className="container text-center px-[50px]">
          <h2 className="text-[100px] text-white py-[50px]">
            <span className="text-cool-green font-bold">Cool </span>Taksi Niš
          </h2>
          <div className=" flex mx-auto justify-between">
            <div className=" flex flex-col gap-[3px] text-[30px] ">
              <a
                href="viber://contact?number=%2B381659719711"
                className="flex gap-6 items-center py-[10px] mx-auto hover:scale-110 w-[300px]"
              >
                {" "}
                <FaViber className="bg-purple-600  rounded-full w-10 h-10 p-[5px] text-white" />
                <span className="text-white">065/97 197 11</span>
              </a>
              <div className="w-[500px] mx-auto h-[2px] bg-cool-green"></div>
              <a
                href="tel:+38119711"
                className="flex gap-6 items-center py-[10px] mx-auto hover:scale-110 w-[300px]"
              >
                {" "}
                <FaPhoneAlt className="bg-white rounded-full w-10 h-10 p-[6px] text-cool-green" />
                <span className="text-white">19711</span>
              </a>
              <div className="w-[500px] mx-auto h-[2px] bg-cool-green"></div>
              <a
                href="tel:+381691971111"
                className="flex gap-6 items-center py-[10px] mx-auto hover:scale-110 w-[300px]"
              >
                {" "}
                <FcPhoneAndroid className="bg-white rounded-full w-10 h-10 p-[3px] " />
                <span className="text-white">069/197 11 11</span>
              </a>
              <div className="w-[500px] mx-auto h-[2px] bg-cool-green"></div>
              <a
                href="tel:+381603219711"
                className="flex gap-6 items-center py-[10px] mx-auto hover:scale-110 w-[300px]"
              >
                {" "}
                <FcPhoneAndroid className="bg-white rounded-full w-10 h-10 p-[3px] " />
                <span className="text-white">060/32 197 11</span>
              </a>
              <div className="w-[500px] mx-auto h-[2px] bg-cool-green"></div>
              <a
                href="mailto:office@cooltaxi.rs"
                className="flex gap-6 items-center py-[5px] mx-auto hover:scale-110 w-[300px]"
              >
                {" "}
                <MdOutlineEmail className="w-10 h-10 p-[3px] text-white " />
                <span className=" text-white">office@cooltaxi.rs</span>
              </a>

              <div className="w-[500px] mx-auto h-[2px] bg-cool-green"></div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.3715611838543!2d21.900978876041638!3d43.32741337111941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755b0c937d6957f%3A0x480d75a9e666ec8b!2sPantelejska%204%2C%20Ni%C5%A1%2018000!5e0!3m2!1sen!2srs!4v1732734920974!5m2!1sen!2srs"
                width="700"
                height="350"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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

export default Kontakt;