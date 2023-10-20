import Image from "next/image";
import moneytreebalysis from "../../public/moneytreebalysis.png";

const HeroSection = () => {
  return (
    <div className="h-[90vh]">
      <div className="h-full grid grid-cols-2">
        <div className="mx-auto mt-24">
          <h1 className="text-9xl font-bold">BALYSIS</h1>
          <h2 className="text-4xl font-bold">
            {" "}
            Harness the power of testing,{" "}
          </h2>
          <h2 className="text-4xl font-bold">
            investing, and learning in one place{" "}
          </h2>
          <br />
          <h3 className="font-bold">
            Get live profit and loss statistics on market data
          </h3>
          <h3 className="font-bold">using deployed and published strategies</h3>
          <div className="mt-12">
            <button className="px-12 border-[1px] text-white rounded-3xl py-2 font-bold bg-[#41AFFF] mr-2">
              Signup
            </button>
            <button className="px-12 border-[1px] border-black rounded-3xl py-2 font-bold mr-8 ml-2">
              Learn To Use
            </button>
          </div>
        </div>
        <div>
          <Image
            src={moneytreebalysis}
            alt="Money Tree"
            className="w-auto h-[80vh]"
          />
        </div>
      </div>
      {/* <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#41afff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
      <svg
        className="absolute bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#41afff"
          fillOpacity="1"
          d="M0,192L120,176C240,160,480,128,720,128C960,128,1200,160,1320,176L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default HeroSection;
