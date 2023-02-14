import React from "react";
import styled from "styled-components";
// import avatarImage from "../assets/avatarImage.jpeg";
export default function Testimonials() {
  return (
    <Section id="contacts">
      <div className="title">
        <h2>Contacts</h2>
      </div>

      <div className="testimonials" style={{ height: 250 }}>
        <div
          className="testimonial"
          style={{
            width: 300,
          }}
        >
          <div className="info">
            <h3>Address</h3>
          </div>
          <p
            style={{
              textAlign: "center",
              marginTop: 10,
            }}
          >
            SPE Complex, Rajampadi, Nagamalaipudukottai, Tamil Nadu 625019
          </p>
        </div>
        <div className="testimonial" style={{ width: 300 }}>
          <div className="info">
            <h3>Email</h3>
          </div>
          <p style={{ marginTop: 10, textAlign: "center" }}>
            suriya@gmail.com <br /> suriya@gmail.com
          </p>
        </div>
        <div className="testimonial" style={{ width: 300 }}>
          <div className="info">
            <h3>Call us</h3>
          </div>
          <p style={{ marginTop: 10, textAlign: "center" }}>
            {" "}
            +91 9990007755 <br /> +91 98547162663
          </p>
        </div>
        <div className="testimonial" style={{ width: 300 }}>
          <div className="info">
            <h3>Opening Hours </h3>
          </div>
          <p style={{ marginTop: 10, textAlign: "center" }}>
            Monday - Saturday: 9:00am - 6:00pm <br /> Sunday: Close
          </p>
        </div>
        {/* <div className="testimonial">
          <div className="info">
            <h2>Address</h2>
          </div>
          <p style={{ marginTop: 10 }}>
            SPE Complex, Rajampadi, Nagamalaipudukottai, Tamil Nadu 625019
          </p>
          <div className="info">
              <img src={avatarImage} alt="" />
              <div className="details">
                <h4>Kishan Sheth</h4>
                <span>CEO - Shashaan Web Solutions</span>
              </div>
            </div>
        </div> */}
        {/* <div className="testimonial">
          <div className="info">
            <h2>Opening Hours</h2>
          </div>
          <p style={{ marginTop: 10 }}>
            Monday - Saturday: <br />
            9:00am - 6:00pm <br />
            Sunday : Closed
          </p>
          <div className="info">
              <img src={avatarImage} alt="" />
              <div className="details">
                <h4>Kishan Sheth</h4>
                <span>CEO - Shashaan Web Solutions</span>
              </div>
            </div>
        </div> */}
      </div>
      {/* </Slider> */}
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
    background-color: aliceblue;
    // justify-content: center;
    align-items: center;
    margin: 0 2rem;
    gap: 2rem;
    border-radius: 0.5rem;
    .testimonial {
      // background-color: aliceblue;
      padding: 1rem;
      // border-radius: 0.5rem;
      // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      // transition: 0.3s ease-in-out;
      // &:hover {
      //   transform: translateX(0.4rem) translateY(-1rem);
      //   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      // }
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
