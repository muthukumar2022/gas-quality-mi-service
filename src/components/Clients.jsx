import React from "react";
import styled from "styled-components";
// import avatarImage from "../assets/avatarImage.jpeg";
export default function Testimonials() {
  return (
    <Section id="clients">
      <div className="title"></div>

      <div className="testimonials">
        <div
          className="testimonial"
          style={{ width: 200, height: 100, margin: 10 }}
        >
          <div className="info">
            {/* <img src={avatarImage} alt="" /> */}
            <div className="details">
              <h3>10K+</h3>
              <span>Clients</span>
            </div>
          </div>
        </div>
        <div
          className="testimonial"
          style={{ width: 200, height: 100, margin: 10 }}
        >
          <div className="info">
            {/* <img src={avatarImage} alt="" /> */}
            <div className="details">
              <h3>350+</h3>
              <span>Runing Projects</span>
            </div>
          </div>
        </div>
        <div
          className="testimonial"
          style={{ width: 200, height: 100, margin: 10 }}
        >
          <div className="info">
            {/* <img src={avatarImage} alt="" /> */}
            <div className="details">
              <h3>950+</h3>
              <span>Compled Projects</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2rem;
    gap: 2rem;
    border-radius: 0.5rem;
    .testimonial {
      background-color: aliceblue;
      padding: 1rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;

// import React from "react";
// import Slider from "react-slick";
// import styled from "styled-components";
// // import avatarImage from "../assets/avatarImage.jpeg";
// const Clients = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     // autoplay: true,
//     // speed: 2000,
//     // autoplaySpeed: 4000,
//     // cssEase: "linear",
//   };

//   return (
//     <div style={{ width: 500, height: 500 }}>
//       <Section id="clients">
//         <div className="title">
//           <h2>Client</h2>
//         </div>
//         {/* <Slider {...settings}> */}
//         <div
//           style={{
//             backgroundColor: "aliceblue",
//             width: 500,
//             height: 100,
//             alignItems: "center",
//             justifyContent: "center",
//             marginLeft: 500,
//             borderRadius: 5,
//           }}
//         >
//           <h3>kumar</h3>
//           <p> SPE Complex, Rajampadi, Nagamalaipudukottai, Tamil Nadu 625019</p>
//         </div>
//         <div
//           style={{
//             backgroundColor: "aliceblue",
//             width: 500,
//             height: 100,
//             alignItems: "center",
//             justifyContent: "center",
//             marginLeft: 500,
//             borderRadius: 5,
//           }}
//         >
//           <h3>2</h3>
//           <p> SPE Complex, Rajampadi, Nagamalaipudukottai, Tamil Nadu 625019</p>
//         </div>
//         <div
//           style={{
//             backgroundColor: "aliceblue",
//             width: 500,
//             height: 100,
//             alignItems: "center",
//             justifyContent: "center",
//             marginLeft: 500,
//             borderRadius: 5,
//           }}
//         >
//           <h3>3</h3>
//           <p> SPE Complex, Rajampadi, Nagamalaipudukottai, Tamil Nadu 625019</p>
//         </div>
//         <div
//           style={{
//             backgroundColor: "aliceblue",
//             width: 500,
//             height: 100,
//             alignItems: "center",
//             justifyContent: "center",
//             marginLeft: 500,
//             borderRadius: 5,
//           }}
//         >
//           <h3>4</h3>
//           <p> SPE Complex, Rajampadi, Nagamalaipudukottai, Tamil Nadu 625019</p>
//         </div>
//         {/* <div>
//           <h3>5</h3>
//           <p> SPE Complex, Rajampadi, Nagamalaipudukottai, Tamil Nadu 625019</p>
//         </div>
//         <div>
//           <h3>6</h3>
//           <p> SPE Complex, Rajampadi, Nagamalaipudukottai, Tamil Nadu 625019</p>
//         </div> */}
//         {/* </Slider> */}
//       </Section>
//     </div>
//   );
// };
// const Section = styled.section``;
// export default Clients;
