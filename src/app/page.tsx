/** @format */

import Card, { CardType } from "@/components/Card";
import Stars from "@/components/Stars";
import Image from "next/image";

import user1 from "@/assets/images/image-colton.jpg";
import user2 from "@/assets/images/image-irene.jpg";
import user3 from "@/assets/images/image-anne.jpg";

//
import bgPatternTopDesktop from "@/assets/images/bg-pattern-top-desktop.svg";
import bgPatternBottomDesktop from "@/assets/images/bg-pattern-bottom-desktop.svg";

import bgPatternTopMobile from "@/assets/images/bg-pattern-top-mobile.svg";
import bgPatternBottomMobile from "@/assets/images/bg-pattern-bottom-mobile.svg";

const customerReviews: CardType[] = [
  {
    name: "Colton mdith",
    img: user1,
    description: `"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"`
  },
  {
    name: "Irene Roberts",
    img: user2,
    className: " md:mt-5",
    description: `"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."`
  },
  {
    name: "Anne Wallace",
    img: user3,
    className: "md:mt-10",

    description: `"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"`
  }
];

export default function Home() {
  return (
    <div className="min-h-screen w-full relative ">
      {/* bg imges */}
      <BGImges />
      <div className="max-w-5xl mx-auto  pt-32 flex flex-col gap-16  pb-10 px-6">
        {/* first section */}
        <section className="flex flex-col md:flex-row justify-between items-center text-center md:text-start  gap-5">
          {/* left side */}
          <div className="md:w-1/2 md:max-w-[400px] flex flex-col gap-3 ">
            <h1 className="text-5xl text-very-dark-magenta font-bold">
              10,000+ of our users love our products.
            </h1>
            <p className="text-gray-400">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          {/* right side */}
          <div className="md:w-1/2   flex flex-col gap-3">
            <Stars label="Reviews" />
            <Stars className=" md:ml-10" label="Report Guru" />
            <Stars className=" md:ml-20" label="BestTech" />
          </div>
        </section>

        {/* cards section */}
        <section className="flex justify-between gap-6 flex-col md:flex-row items-center">
          {/* card component */}

          {customerReviews.map((d, i) => (
            <Card
              className={d.className}
              description={d.description}
              img={d.img}
              name={d.name}
              key={i}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

function BGImges() {
  return (
    <div className="">
      <div className=" hidden md:block">
        <Image
          className="absolute top-0 left-01"
          src={bgPatternTopDesktop}
          alt="bg-pattern-top-desktopbg-pattern-top-desktop"
        />
        <Image
          className="absolute bottom-0 right-0"
          src={bgPatternBottomDesktop}
          alt="bg-pattern-top-desktopbg-pattern-top-desktop"
        />
      </div>
      {/* mobiles images */}
      <div className="md:hidden">
        <Image
          className="absolute top-0 left-0"
          src={bgPatternTopMobile}
          alt="bg-pattern-top-desktopbg-pattern-top-desktop"
        />
        <Image
          className="absolute bottom-0 right-0"
          src={bgPatternBottomMobile}
          alt="bg-pattern-top-desktopbg-pattern-top-desktop"
        />
      </div>
    </div>
  );
}
