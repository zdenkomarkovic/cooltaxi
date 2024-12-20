import React from "react";

const About = () => {
  return (
    <div className="bg-gray-900">
      <div className="container px-[13px] lg:px-[50px] mx-auto pb-[50px] lg:pb-[100px] pt-[50px]">
        <h2 className=" text-[50px] lg:text-[100px] text-gray-100 text-center py-[30px] lg:py-[50px]">
          <span className="text-cool-green font-bold">Cool </span>Taxi Niš
        </h2>
        <p className="text-gray-100 text-[18px] lg:text-[26px] indent-5 py-[15px]">
          Dobrodošli u{" "}
          <span className="text-cool-green font-bold">Cool Taxi</span> , vodeću
          taksi firmu u Nišu koja vas pouzdano prevozi{" "}
          <span className="text-cool-green">od 28. juna 2000-te godine</span>.
          Sa više od dve decenije iskustva, izgradili smo reputaciju zasnovanu
          na profesionalizmu, tačnosti i brizi o našim putnicima. Ako tražite
          <span className="font-bold"> taxi u Nišu</span>,{" "}
          <span className="text-cool-green font-bold">Cool Taxi</span> je pravi
          izbor za vas – uvek dostupni, ekološki osvešćeni i spremni da
          odgovorimo na sve vaše potrebe.
        </p>
        <p className="text-gray-100 text-[18px] lg:text-[24px] indent-5 py-[15px]">
          Naša flota se sastoji od vozila
          <span className="font-bold"> novije proizvodnje</span>, i to
          iskljucivo{" "}
          <span className="font-bold"> hibridna i električna vozila</span>.
          Zahvaljujući ovim vozilima, vaša vožnja nije samo tiha i udobna, već i
          ekološki odgovorna. Smanjenjem emisije štetnih gasova aktivno
          doprinosimo čistijem vazduhu i zdravijem okruženju u našem gradu. Kao
          firma sa dubokim lokalnim korenima, ponosni smo na to što vodimo
          računa o životnoj sredini i doprinosimo boljem kvalitetu života u
          Nišu.
        </p>
        <h5 className="text-gray-100 font-bold text-[24px] lg:text-[38px] py-[15px]">
          Zašto odabrati Cool Taxi
        </h5>
        <ul className="flex flex-col gap-[15px] text-gray-100 text-[18px] lg:text-[24px] py-[15px]">
          <li>
            <span className="font-extrabold">Brza i sigurna usluga</span>: Naši
            vozači su licencirani profesionalci sa odličnim poznavanjem grada.
            Bez obzira na gužve ili vreme dana, uvek stižemo brzo i bezbedno
          </li>
          <li>
            <span className="font-extrabold">Ekološki prevoz</span>: Naša
            hibridna i električna vozila dokaz su naše posvećenosti zaštiti
            životne sredine.
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
          najbolja opcija za udoban i siguran prevoz. Naša misija je jasna –
          pružiti najbolji taxi prevoz u Nišu uz vrhunsku uslugu, ekološku
          odgovornost i zadovoljstvo naših putnika. Zahvaljujemo vam na
          poverenju i što birate Cool Taxi za svoje vožnje. Vaša sigurnost i
          udobnost su naš prioritet, a naš grad i njegovi ljudi – naša najveća
          motivacija. Hvala što nas birate i što podržavate našu misiju –
          zajedno čuvamo naš grad i pravimo vožnje bezbednim i prijatnim za sve.
        </p>
        <p className="text-gray-100 text-[18px] lg:text-[24px] indent-5 py-[15px] font-bold">
          Cool Taxi – jer vožnja može biti sigurna, ekološka i prijatna!
        </p>
      </div>
    </div>
  );
};

export default About;
