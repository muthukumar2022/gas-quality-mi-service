import React from "react";
import styled from "styled-components";
import service1 from "../assets/cylinderhome.jpg";
import service2 from "../assets/chotagas.jpg";
import service3 from "../assets/gasconnet.jpg";
import service4 from "../assets/gasdelivery.jpg";

export default function Services() {
  const data = [
    {
      icon: service1,
      title: "LPG Cylinder for Home",
      subTitle:
        "Book top class regular size cylinders of accurate weight & superior quality for your household needs.",
    },
    {
      icon: service2,
      title: "Chota Supergas",
      subTitle:
        "We provider smaller cylinders that are safe, accuratelt weight and have easy portability for use.",
    },
    {
      icon: service3,
      title: "Gas Connection Office",
      subTitle:
        " You can also register with us and start with new gas connection for your corporate offices.",
    },
    {
      icon: service4,
      title: "Home Delivery",
      subTitle:
        "Book a new gas connection or refill it,we will deliver your cylinder at your place in no time .",
    },
  ];
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          marginTop: 50,
        }}
      >
        Services
      </h2>

      <Section id="services">
        {data.map((service, index) => {
          return (
            <div className="service">
              <div className="icon">
                <img src={service.icon} alt="" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.subTitle}</p>
            </div>
          );
        })}
      </Section>
    </>
  );
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 150px;
        // margin-left: 70px;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
