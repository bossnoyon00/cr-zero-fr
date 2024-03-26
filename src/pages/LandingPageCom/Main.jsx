import React from "react";
import logo from "../assets/assets/logo.svg";
import bizicon from "../assets/assets/bizicon.png";
import inficon from "../assets/assets/inficon.png";
function Main() {
  return (
    <div className="about">
      <div className="about-top grid grid-cols-3  py-4 px-12 shadow-my-shadow mobile:grid-cols-1 mobile:grid-rows-3 mobile:pt-10 mobile:px-12 mobile:gap-0 ">
        <div className="flex items-center justify-center border-r-[5px] border-navy-blue mobile:border-b-[4px] mobile:border-r-0 mobile:py-3 mobile:mb-0 mobile:pb-10">
          <h1 className="text-center text-[25px] font-semibold text-dark-grey mobile:text-xl">
            <span className="text-navy-blue font-bold text-[40px] mobile:text-3xl">
              2000+
            </span>
            <br></br>
            INFLUENCER <br></br> VISITS PER DAY
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center border-r-[5px] border-navy-blue mobile:border-b-[4px] mobile:border-r-0 mobile:py-3 mobile:mb-0 mobile:pb-10">
          <h1 className="text-center text-[25px] font-semibold text-dark-grey mobile:text-xl">
            <span className="text-navy-blue font-bold text-[40px] mobile:text-3xl">
              FREE
            </span>
            <br></br>
            TO SIGN UP
          </h1>
          <h1 className="text-center text-[25px] font-semibold text-dark-grey mobile:text-xl">
            <span className="text-navy-blue font-bold text-[40px] mobile:text-3xl">
              EASY
            </span>
            <br></br>
            TO USE
          </h1>
        </div>
        <div className="flex items-center justify-center mobile:py-3">
          <h1 className="text-center text-[25px] font-semibold text-dark-grey mobile:text-xl">
            <span className="text-navy-blue font-bold text-[40px] mobile:text-3xl">
              2000+
            </span>
            <br></br>
            ENLISTED <br></br> PROGRAMS
          </h1>
        </div>
      </div>

      <div className="domian">
        <img src={logo} width={"480px"} alt="logo"></img>
        <div className="main-text">
          <p className="cc">
            We connect influencers with relevant businesses that offer
            commissions and rewards for promoting their items to the proper
            audiences.
          </p>
          <div className="inf">
            <img src={inficon} width="180px" alt="influencer icon"></img>
            <p>
              <span>If you're an influencer </span>who's struggling to monetize
              the attention or looking for an extra source of revenue, this
              should be your number-one choice. Filter and find the program that
              fits your niche, and start earning by becoming an affiliate. Don't
              wait for uncertain offers or sponsorship deals to reach your mail.
              No matter how small or big you are, there's a program for you
              here.
            </p>
          </div>
          <div className="biz">
            <img src={bizicon} width="180px" alt="business icon"></img>

            <p>
              <span>If you're a business</span> with an affiliate/referral
              program, enlist it here by simply creating a post, and reach
              thousands of eager influencers without individually contacting
              them one by one. Let the right content creator promote your
              product or service. You're not just promoting to thousands of
              influencers that visit every day but to their millions of viewers.
              We take no commissions, and enlisting is completely free. So,
              there's literally no reason for you not to take this advantage.
            </p>
          </div>
          <p className="centered">Stay relevant, get promoted.</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
