import React from "react";

const About = () => {
  return (
    <div className="bg-black">
      <div className="container px-[10px] lg:px-[50px] mx-auto pb-[50px] lg:pb-[100px] pt-[50px]">
        <h2 className=" text-[50px] lg:text-[100px] text-gray-100 text-center py-[30px] lg:py-[50px]">
          <span className="text-cool-green font-bold">Cool </span>Taxi Niš
        </h2>
        <p className="text-gray-100 text-[18px] lg:text-[26px] indent-5 py-[15px]">
          Dobrodošli u{" "}
          <span className="text-cool-green font-bold">Cool Taxi</span> , vodeću
          taksi firmu u Nišu koja vas pouzdano prevozi{" "}
          <span className="text-cool-green">od 28. juna 2000-te godine</span>.
          Sa preko dve decenije iskustva, ponosni smo na reputaciju
          profesionalizma, sigurnosti i brige o našim putnicima. Kada tražite
          taxi u Nišu,{" "}
          <span className="text-cool-green font-bold">Cool Taxi</span> je pravo
          rešenje za vas – brzi, tačni i ekološki osvešćeni.
        </p>
        <p className="text-gray-100 text-[18px] lg:text-[24px] indent-5 py-[15px]">
          Naša flota obuhvata isključivo savremena vozila novije proizvodnje,
          uključujući hibridne i električne automobile. Ova tehnologija ne samo
          da omogućava tihu i udobnu vožnju, već i smanjuje emisiju štetnih
          gasova, čime doprinosimo očuvanju životne sredine. Kao lokalna firma,
          posvećeni smo tome da naš grad ostane čist i zdrav za buduće
          generacije.
        </p>
        <h5 className="text-gray-100 font-bold text-[24px] lg:text-[38px] py-[15px]">
          Zašto odabrati Cool Taxi
        </h5>
        <ul className="flex flex-col gap-[15px] text-gray-100 text-[18px] lg:text-[24px] py-[15px]">
          <li>
            <span className="font-extrabold">Brza i sigurna usluga</span>: Naši
            vozači su iskusni profesionalci koji poznaju svaki kutak Niša.
          </li>
          <li>
            <span className="font-extrabold">Ekološki prevoz</span>: Hibridna i
            električna vozila dokaz su naše brige za ekologiju.
          </li>
          <li>
            <span className=" font-extrabold">Dostupnost 24/7</span>: Bez obzira
            na doba dana, tu smo da vam pružimo najpouzdaniji taxi prevoz u
            Nišu.
          </li>
          <li>
            <span className=" font-extrabold ">Udobnost i pouzdanost</span>:
            Garantujemo udobnu vožnju i pravovremeni dolazak na željenu
            lokaciju.
          </li>
        </ul>

        <p className="text-gray-100 text-[18px] lg:text-[24px] indent-5 py-[15px]">
          Kada god vam je potreban{" "}
          <span className="font-bold"> taxi u Nišu</span>, naša firma je tu da
          odgovori na sve vaše potrebe – bilo da idete na posao, u šoping, na
          aerodrom ili se vraćate kući.{" "}
          <span className="text-cool-green font-bold">Cool Taxi</span> je vaša
          najbolja opcija za udoban i siguran prevoz. Hvala što nas birate i što
          podržavate našu misiju – zajedno čuvamo naš grad i pravimo vožnje
          bezbednim i prijatnim za sve.
        </p>
      </div>
    </div>
  );
};

export default About;
