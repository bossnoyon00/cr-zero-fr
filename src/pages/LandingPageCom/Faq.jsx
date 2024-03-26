import React, { useState } from "react";
import Footer from "./Footer";
import log from "../assets/assets/ARLogo.svg";
import MetaData from "../../components/other/MetaData";
function Faq() {
  const [accordionStates, setAccordionStates] = useState(Array(14).fill(false));

  const toggleAccordion = (index) => {
    const newAccordionStates = [...accordionStates];
    newAccordionStates[index] = !newAccordionStates[index];
    setAccordionStates(newAccordionStates);
  };

  return (
    <>
    <MetaData title={'FAQs - Affiliated Refer'} />
      <div className="header-container">
        <img src={log} alt="about us logo" width="100px" />
        <h1 className="faq-header"> Frequently Asked Questions</h1>
        <h3 className="faq-content">
          Here are some questions people ask affiliatedrefer.com
        </h3>
      </div>

      <div class="faq-container mobile:px-6">
        {/* Faq1 */}
        <details>
          <summary
            onClick={() => toggleAccordion(0)}
            className="flex justify-between pr-1 "
          >
            <span class="faq-title"> Can any indie business enlist here? </span>
            <i
              className={`fa ${accordionStates[0] ? "fa-minus" : "fa-plus"}`}
            ></i>
          </summary>
          <div class="faq-content">
            Yes, we mainly run this platform so that the small and indie
            businesses don’t go unnoticed. If you’re an indie business or just
            started recently, you may enlist your program with us if you have
            one.{" "}
          </div>
        </details>

        {/* FAQ2 */}
        <details>
          <summary
            onClick={() => toggleAccordion(1)}
            className="flex justify-between pr-1 "
          >
            <span class="faq-title">
              {" "}
              Do you help businesses create the programs?{" "}
            </span>
            <i
              className={`fa ${accordionStates[1] ? "fa-minus" : "fa-plus"}`}
            ></i>
          </summary>
          <div class="faq-content">
            {" "}
            No. Currently we don’t provide any service that allows anyone to set
            up their affiliate system. Businesses can only enlist the programs
            that they already have and we help them reach the interested
            affiliates.
          </div>
        </details>

        {/* FAQ3 */}
        <details>
          <summary
            onClick={() => toggleAccordion(2)}
            className="flex justify-between pr-1 "
          >
            <span class="faq-title">
              {" "}
              Do you verify the programs before they get enlisted?
            </span>
            <i
              className={`fa ${accordionStates[2] ? "fa-minus" : "fa-plus"}`}
            ></i>
          </summary>
          <div class="faq-content">
            No, we do not hold them for approval. However, we may check either
            randomly or upon receiving reports of violation and remove/ban them
            once we determine that they’re indeed violating the community
            ethics.
          </div>
        </details>

        {/* FAQ4 */}
        <details>
          <summary
            onClick={() => toggleAccordion(3)}
            className="flex justify-between pr-1 "
          >
            <span class="faq-title">
              How does an influencer join a program enlisted here?
            </span>
            <i
              className={`fa ${accordionStates[3] ? "fa-minus" : "fa-plus"}`}
            ></i>
          </summary>
          <div class="faq-content">
            By simply visiting the link attached with the post. That should be
            the direct link to the company’s referral/affiliate program provided
            by them, and it can be found in the detailed post view mode.
          </div>
        </details>

        {/* FAQ5 */}
        <details>
          <summary
            onClick={() => toggleAccordion(4)}
            className="flex justify-between pr-1 "
          >
            <span class="faq-title">
              Can the commissions be paid personally/manually?
            </span>
            <i
              className={`fa ${accordionStates[4] ? "fa-minus" : "fa-plus"}`}
            ></i>
          </summary>
          <div class="faq-content">
            We highly encourage businesses to have an automatic system in place
            for anyone promoting the product/service. It will build trust and
            more people will pick it up. You may not enlist if it requires the
            influencers to go through a lengthy manual process to earn the
            commission from your business.
          </div>
        </details>

        {/* FAQ6 */}
        <details>
          <summary
            onClick={() => toggleAccordion(5)}
            className="flex justify-between pr-1 "
          >
            <span class="faq-title">
              Do you ensure the safe transactions between each party?
            </span>
            <i
              className={`fa ${accordionStates[5] ? "fa-minus" : "fa-plus"}`}
            ></i>
          </summary>
          <div class="faq-content">
            We’re not in charge of programs and events run by separate business
            entities that gets posted on the site. We cannot control how they
            operate inside their programs. Our platform is built on trust and we
            have various systems in place that prevent fraudulent programs from
            showing up on the feed to a certain degree.
          </div>
        </details>

        {/* FAQ7 */}
        <details>
          <summary
            onClick={() => toggleAccordion(6)}
            className="flex justify-between pr-1 "
          >
            <span class="faq-title">
              Do you allow programs that directly feature adult contents?
            </span>
            <i
              className={`fa ${accordionStates[6] ? "fa-minus" : "fa-plus"}`}
            ></i>
          </summary>
          <div class="faq-content">
            No. Currently, we do not allow programs that feature adult or
            explicit contents. Perhaps in the future, we may decide to have them
            in a restricted form and filters.
          </div>
        </details>

        {/* FAQ8 */}
        <details>
          <summary
            onClick={() => toggleAccordion(7)}
            className="flex justify-between pr-1 "
          >
            <span class="faq-title">
              Why can’t the posts be edited after enlisting?
            </span>
            <i
              className={`fa ${accordionStates[7] ? "fa-minus" : "fa-plus"}`}
            ></i>
          </summary>
          <div class="faq-content">
            This is to prevent misinformation to our consumers. If you have made
            major mistakes in your post, you will have to delete it and enlist
            it again. That’s why we explicitly warn users before enlisting a
            program.
          </div>
        </details>

        {/* FAQ9 */}
        <details>
          <summary
            onClick={() => toggleAccordion(8)}
            className="flex justify-between pr-1 "
          >
            <span class="faq-title">
              What if a referral/affiliate program is available for less than
              the selected period?
            </span>
            <i
              className={`fa ${accordionStates[8] ? "fa-minus" : "fa-plus"}`}
            ></i>
          </summary>
          <div class="faq-content">
            Although you can currently set a specific expiry date, like 7 days
            or 1 month while enlisting, don’t worry even if your actual
            affiliate/referral campaign lasts for a shorter period. We will
            remove the post once we receive reports and verify that the campaign
            on your site has indeed ended.
          </div>
        </details>

        {/* FAQ10 */}
        <details>
          <summary
            onClick={() => toggleAccordion(9)}
            className="flex justify-between pr-1 "
          >
            <span class="faq-title">Can anyone see who liked a post?</span>
            <i
              className={`fa ${accordionStates[9] ? "fa-minus" : "fa-plus"}`}
            ></i>
          </summary>
          <div class="faq-content">
            No, it’s anonymous for now. But the total number of users who liked
            the post can be seen by everyone in the detailed view.
          </div>
        </details>

        {/* FAQ11 */}
        <details>
          <summary
            onClick={() => toggleAccordion(10)}
            className="flex justify-between pr-1 "
          >
            <span class="faq-title">
              Can I report comments within the post?
            </span>
            <i
              className={`fa ${accordionStates[10] ? "fa-minus" : "fa-plus"}`}
            ></i>
          </summary>
          <div class="faq-content">
            Not at the moment. We regularly monitor the comments and delete the
            ones that violate our terms or use. But we may add a function to
            report them directly in the future.
          </div>
        </details>

        {/* FAQ12 */}
        <details>
          <summary
            onClick={() => toggleAccordion(11)}
            className="flex justify-between pr-1 "
          >
            <span class="faq-title">
              Can I block a certain type of consumers from discovering my post?
            </span>
            <i
              className={`fa ${accordionStates[11] ? "fa-minus" : "fa-plus"}`}
            ></i>
          </summary>
          <div class="faq-content">
            Currently, no. Any user can discover or find a post with our
            extensive search filters according to the details you entered during
            enlisting.
          </div>
        </details>

        {/* FAQ13 */}
        <details>
          <summary
            onClick={() => toggleAccordion(12)}
            className="flex justify-between pr-1 "
          >
            <span class="faq-title">
              Why does it always say the Support Team is busy?
            </span>
            <i
              className={`fa ${accordionStates[12] ? "fa-minus" : "fa-plus"}`}
            ></i>
          </summary>
          <div class="faq-content">
            Our platform is fairly new. We have a very limited number of support
            agents actively interacting with the users. If you can’t get hold of
            the agents, you may file a new case or directly send the problem to
            our email. We will try our best to resolve your issue asap.
          </div>
        </details>

        {/* FAQ14 */}
        <details>
          <summary
            onClick={() => toggleAccordion(13)}
            className="flex justify-between pr-1 "
          >
            <span class="faq-title">
              Do you take sponsorships from businesses?
            </span>
            <i
              className={`fa ${accordionStates[13] ? "fa-minus" : "fa-plus"}`}
            ></i>
          </summary>
          <div class="faq-content">
            We may show sponsored posts from certain companies that are verified
            to be safe. However, even if they’re safe, we would still choose
            very carefully who we decide to take on. Also, since the slots are
            limited and we’re often booked, it will be difficult to squeeze one
            in.
          </div>
        </details>
      </div>

      <Footer />
    </>
  );
}

export default Faq;
