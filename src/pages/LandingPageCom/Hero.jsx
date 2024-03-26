import { useState, useEffect } from "react";
import influencer from "../assets/assets/Untitled-1.png";
import leftHero from "../assets/assets/influencer.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [textIndex1, setTextIndex1] = useState(0);
  const [textIndex2, setTextIndex2] = useState(0);
  const [text1Opcaity, setText1Opacity] = useState(true);
  const [text2Opcaity, setText2Opacity] = useState(true);
  const text = {
    1: "A smart way to monetize your shorts, tweets, and posts.",
    2: "Nearly all businesses have affiliate programs. We help you find what's best for you.",
    3: "Choose from thousands of programs and start earning commissions/rewards.",
    4: "Filter your niche and find the right partner to affiliate with.",
    5: "Don't wait for uncertain offers or sponsorship deals to reach your mail.",
    6: "No matter how small or big you are, there's something for you here.",
    7: "Click above to sign up for our fast and user-friendly interface.",
  };
  const text2 = {
    1: "Let us bring your product/service closer to the right eyes.",
    2: "Simply sign up and enlist your program for free.",
    3: "Let it promote itself to thousands of willing influencers.",
    4: "We take no commissions, no extra charges, no hidden fees.",
    5: "Let the right promoters discover your brand and take it to millions.",
    6: "It's fast, hassle-free, and requires no direct contact.",
    7: "You have nothing to lose but a minute of your time.",
  };

  useEffect(() => {
    const intervalId1 = setInterval(() => {
      setText1Opacity(false);
      setTimeout(() => {
        setTextIndex1((prevIndex) =>
          prevIndex + 1 === Object.keys(text).length ? 0 : prevIndex + 1
        );
      }, 300);
      setTimeout(() => {
        setText1Opacity(true);
      }, 1000);
    }, 6000);

    const intervalId2 = setInterval(() => {
      setText2Opacity(false);

      setTimeout(() => {
        setTextIndex2((prevIndex) =>
          prevIndex + 1 === Object.keys(text2).length ? 0 : prevIndex + 1
        );
      }, 300);
      setTimeout(() => {
        setText2Opacity(true);
      }, 1000);
    }, 6000);

    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
    };
  }, [text, text2]);

  const handleBtns = (value) => {
    localStorage.setItem("userRole", value);
    navigate("/login");
  };

  return (
    <div className="flex w-full h-[90vh] bg-[#f26422] relative mobile:h-auto mobile:flex-col mobile:bg-[#EB984E] ">
      <div className="w-[40%] hover:w-[60%] mobile:hover:w-full mobile:w-full transition-all duration-300 flex flex-col p-8 mobile:px-8 mobile:py-0">
        <h1 className="text-4xl mobile:text-3xl z-[2] text-white font-bold my-6  leading-[1.2] tracking-widest drop-shadow-[rgba(62,66,66,0.5)_0px_5px_1px]">
          Have an <br />
          audience?
        </h1>

        <button
          className="text-[#f26422] bg-white w-max py-3 px-5 rounded-[70px] text-[25px] mobile:text-lg font-bold transition-all duration-300  hover:bg-[#0e9af2] hover:text-white z-[1]"
          onClick={() => {
            handleBtns("influencer");
          }}
        >
          I'm an INFLUENCER
        </button>
        <p
          className={`text-[#521e00] text-left tracking-[4px] w-[120%] max-w-[600px] mobile:w-full text-[14px] uppercase my-8 z-[1] ${
            text1Opcaity ? "opacity-1" : "opacity-0"
          }  transition-opacity duration-500 ease-in-out `}
        >
          {text[textIndex1 + 1]}
        </p>

        <img
          src={leftHero}
          width={"490px"}
          className="absolute bottom-0 left-8 !w-[490px] !h-[409px] mobile:hidden"
          alt="influencer"
        ></img>
      </div>

      <div className="w-[70%] hover:w-[77%] mobile:w-full mobile:hover:w-full transition-all duration-300 flex flex-col items-end bg-[#0e9af2] right-container pt-40 pl-8 pr-8 mobile:px-8 mobile:py-0 ">
        <h1 className="text-4xl mobile:text-3xl z-[2] text-white text-right font-bold my-6 drop-shadow-[rgba(62,66,66,0.5)_0px_5px_1px] leading-[1.2] tracking-widest mt-10">
          Have an <br />
          affiliate program?
        </h1>

        <button
          className="text-[#0e9af2] bg-white w-max py-3 px-5 rounded-[70px] text-[25px] mobile:text-lg font-bold transition-all duration-300  hover:bg-[#f26422] hover:text-white z-[1]"
          onClick={() => {
            handleBtns("business");
          }}
        >
          I'm a BUSINESS
        </button>

        <p
          className={`text-white text-right tracking-[4px] w-[120%] max-w-[600px] mobile:w-full text-[14px] uppercase my-8 z-[1] !transition-opacity !duration-500 !ease-in-out ${
            text2Opcaity ? "opacity-1" : "opacity-0"
          } transition-opacity duration-500 ease-in-out`}
        >
          {text2[textIndex2 + 1]}
        </p>

        <img
          src={influencer}
          width={"900px"}
          className="absolute bottom-0 right-0 !w-[900px] !h-[506px] mr-8 mobile:hidden"
          alt="influencer"
        />
      </div>
    </div>
  );
};

export default Hero;
