import linebgimage from "../../../assets/Image/section4bgimageline.png";
import Section4Card from "../../../componets/Cards/Section4Card";
import { section4cardtype } from "../../../constants/section4cardtypes";
import section4icon1 from "../../../assets/Image/section4icon1.png";
import section4icon2 from "../../../assets/Image/section4icon2.png";
import section4icon3 from "../../../assets/Image/section4icon3.png";
import section4icon4 from "../../../assets/Image/section4icon4.png";
import section4icon5 from "../../../assets/Image/section4icon5.png";
import section4icon6 from "../../../assets/Image/section4icon6.png";
import Headingcontent from "../../../componets/Headingcontent/Headingcontent";

const cardData: section4cardtype[] = [
  {
    mainImage: section4icon1,
    heading: "Property Listing & Marketing",
    title:
      "Creating comprehensive listings with professional photography, virtual tours, and detailed descriptions to showcase properties effectively.",
    borderColor: "#B5843F",
  },
  {
    mainImage: section4icon2,
    heading: "Buyer Representation",
    title:
      "Assisting buyers in finding suitable properties, negotiating offers, and navigating the purchasing process to ensure a smooth transaction.  and navigating the purchasing process to ensure a smooth transaction.  and navigating the purchasing process to ensure a smooth transaction.",
    borderColor: "#056CB2",
  },
  {
    mainImage: section4icon3,
    heading: "Seller Representation",
    title:
      "Helping sellers determine the optimal selling price, staging their property for maximum appeal, and managing the sales process from listing to closing.",
    borderColor: "#B5843F",
  },
  {
    mainImage: section4icon4,
    heading: "Property Listing & Marketing",
    title:
      "Creating comprehensive listings with professional photography, virtual tours, and detailed descriptions to showcase properties effectively. and detailed descriptions to showcase properties effectively.",
    borderColor: "#B5843F",
  },
  {
    mainImage: section4icon5,
    heading: "Property Management",
    title:
      "Offering services to oversee rental properties, including tenant screening, rent collection, maintenance coordination, and property inspections.",
    borderColor: "#056CB2",
  },
  {
    mainImage: section4icon6,
    heading:
      "Investment Consulting Investment Consulting Investment ConsultingInvestment ConsultingInvestment Consulting",
    title:
      "Advising clients on real estate investment strategies, identifying potential investment properties, and conducting feasibility studies or financial analyses. Advising clients on real estate investment strategies, identifying potential investment properties, and conducting feasibility studies or financial analyses.",
    borderColor: "#056CB2",
  },

  // You can add more card objects as needed
];

function Section4() {
  return (
    <div
      className="relative w-full bg-center bg-cover -z-50"
      style={{
        backgroundImage: `url(${linebgimage})`,
        backgroundSize: "100% 50%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center ",
      }}
    >
      <div className="w-[90%]  md:w-[88%] 2xl:w-[82%] xl:w-[83%] mx-auto h-auto flex flex-col items-center relative  justify-center  mt-9 pb-5 ">
        {/* heading  */}

        <div className="flex items-start justify-between py-5 gap-x-4">
          {/* "Our" Section */}
          <div className="flex items-center justify-center">
            <h2 className="text-2xl font-bold text-black md:text-5xl Bostonfont">
              <Headingcontent
                title="What we are "
                highlightedTitle="providing"
              />
            </h2>
          </div>
        </div>
        <div className="grid w-full h-full gap-10 mt-[3rem] 2xl:grid-cols-3 lg:grid-cols-2 ">
          {cardData.map((card, index) => (
            <Section4Card
              key={index} // Unique key for each card
              mainImage={card.mainImage}
              heading={card.heading}
              title={card.title}
              borderColor={card.borderColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section4;
