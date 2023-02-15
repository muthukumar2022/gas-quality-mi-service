import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/servicehome.jpg";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      cost: "38,800",
      duration: "Approx 2 night trip",
    },
  ];

  return (
    <Section id="about">
      <div className="title">
        <h2>About</h2>
      </div>

      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              {/* <h3>{destination.title}</h3> */}
              {/* <p>{destination.subTitle}</p> */}
              <div className="info">
                {/* <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div> */}
                {/* <h4>{destination.cost}</h4> */}
              </div>
              <div className="distance">
                {/* <span>1000 Kms</span> */}
                {/* <span>{destination.duration}</span> */}
              </div>
            </div>
          );
        })}
        {/* <div
          className="container_right"
          style={{
            display: "flex",
            marginTop: 100,
          }}
        > */}
        <div className="destination">
          <p>
            For the majority of the significant gas supply companies in India,
            we offer dealerships. As a result, customers today have many options
            when deciding which company to choose for their gas agency
            dealership or LPG agency dealership, which encourages them to visit
            a certain store. Based on its extensive experience and well honed
            skill sets, All India Gasvc has been helping dealerships succeed in
            a variety of industries, including natural gas, petrochemicals,
            exploration and production, renewable energy, etc. Natural gas has
            been the "fuel of choice" all around the world over time. Due to its
            eco-friendly qualities, it is replacing conventional fossil fuels.
            Compared to commercial fuels like LPG, natural gas provides a number
            of advantages. You can submit an application by completing out the
            All India Gas VC form if you wish to purchase an Indian Citizen
            Agency franchise or dealership
          </p>
        </div>
      </div>
      {/* </div> */}
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      // background-color: #8338ec14;
      // border-radius: 1rem;
      // transition: 0.3s ease-in-out;
      // &:hover {
      //   transform: translateX(0.4rem) translateY(-1rem);
      //   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      // }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
