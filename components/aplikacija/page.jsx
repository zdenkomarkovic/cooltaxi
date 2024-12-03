import React from "react";

const Aplikacija = () => {
  return (
    <div className="container mx-auto pb-[20px] lg:pb-[50px] px-[8px] lg:px-[50px] border-2 border-cool-green rounded-3xl">
      <h2 className="text-[45px] lg:text-[80px] text-center py-[30px] lg:py-[80px] font-bold">
        <span className="text-cool-green">Cool</span> Taksi Niš aplikacija
      </h2>
      <div className="flex flex-col-reverse gap-1 lg:flex-row justify-around items-center ">
        <div className=" flex flex-col lg:gap-3">
          <p className="text-[20px]">
            - Klikom na dugme preuzmite nasu aplikaciju i instalirajte na vasem
            telefonu.
          </p>
          <p className="text-[20px]">
            - Sasvim jednostavno narucite voznju i pratite gde se nalazi vozilo
            i kojom brzinom dolazi.
          </p>
          <p className="text-[20px]">
            - U svakom trenutku znate gde je vase vozilo i koliko mu treba da
            dodje do vas.
          </p>
          <p className="text-[20px]">
            - Izadjite da sacekate vozilo, tek kada vidite da se priblizilo
          </p>
        </div>
        <div>
          <div className=" relative z-20 text-center  pb-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.AMEGA.cnis&pcampaignid=web_share"
              className="relative z-20"
            >
              <img
                src={"Google_Play.svg"}
                className="w-[250px] h-[80px] mx-auto lg:w-[300px] lg:h-[80px]"
              />
              <p className="lg:text-[20px] text-cool-green">
                Preuzmite Cool taxi android aplikaciju
              </p>
            </a>
          </div>
          <div className=" relative z-20 text-center pb-4 ">
            <a
              href="https://apps.apple.com/us/app/cool-taxi-ni%C5%A1/id6478986375"
              className="relative z-20"
            >
              <img
                src={"App_Store.svg"}
                className="w-[250px] h-[80px] mx-auto lg:w-[300px] lg:h-[90px]"
              />
              <p className="lg:text-[20px] text-cool-green">
                Preuzmite Cool taxi apple aplikaciju
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aplikacija;
