import React, { useState } from "react";
import "./Testimonials.scss";

import arrow from "../../images/arrow.png";
import user1 from "../../images/user-1.jpg";
import user2 from "../../images/user-2.jpg";
import user3 from "../../images/user-3.jpg";

const data = [
  {
    id: "1",
    img: user1,
    name: "Aarav Lyn",
    address: "San Francisco, USA",
    title: "Best financial decision ever!",
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis et asperiores laboriosam sunt, praesentium suscipit blanditiis.
`,
  },
  {
    id: "2",
    name: "Miyah Miles",
    address: "Aukland",
    img: user2,
    title: "The last step to becoming a complete minimalist",
    desc: `Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus. Lorem, ipsum dolor sit`,
  },
  {
    id: "3",
    name: "Francisco Gomes",
    address: "London, UK",
    img: user3,
    title: "Finally free from old-school banks",
    desc: `Debitis, nihil sit minus suscipit magni aperiam vel tenetur incidunt commodi architecto numquam omnis nulla autem, necessitatibus blanditiis modi similique quidem. Odio aliquam culpa dicta beatae quod perferendis facere.`,
  },
];

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const arrowClickHandler = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <>
      <div className="main" id="testimonials">
        <h2>Not sure Yet?</h2>
        <p>Millions of Bankists are already making their lifes simpler.</p>
      </div>
      <div className="testimonials">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          //0*100 (initial state value)
        >
          {data.map((d) => (
            <div className="container">
              <div className="items">
                <i class="fas fa-quote-left fa-2x"></i>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <div className="profile">
                  <img src={d.img} alt="" />
                  <div className="titles">
                    <h4>{d.name}</h4>
                    <h5>{d.address}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <img
          src={arrow}
          alt=""
          className="arrow left"
          onClick={() => arrowClickHandler("left")}
        />
        <img
          src={arrow}
          alt=""
          className="arrow right"
          onClick={() => arrowClickHandler()}
        />
      </div>
    </>
  );
}

export default Works;
