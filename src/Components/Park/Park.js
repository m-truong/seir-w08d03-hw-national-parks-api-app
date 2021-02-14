import React, { useState, useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import ButtonStyled from "../UI/Button/ButtonStyled";
import data from "../NationalParks/data.json";
import { Link } from "react-router-dom";

// const nationalParkURL =
//   "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=AdVrifMehsBWaa7xDSFkh08nxZ4ubOx2FHk5yRgH";

const ParkImage = ({ parkImage }) => {
  return (
    <div className="large-park-image-div">
      <Image className="park-image" src={parkImage} alt="park-image" rounded />
    </div>
  );
};

const Park = ({ routerProps }) => {
  const parkID = routerProps.match.params.id;
  return (
    <>
      {data.map((park, index) => {
        if (park.id === parkID) {
          console.log(`This printed and was a match ${park.id}`);
          return (
            <>
              <Container className="flex-container">
                <ParkImage parkImage={park.images[0].url} />
                <h1>
                  {" "}
                  {park.name} located in {park.states}, US{" "}
                </h1>
              </Container>
              <Container>
                <p> {park.description} </p>
                <h3> Address </h3>
                <div className="address-container">
                  <p>{park.addresses[0].line1}</p>
                  <p>
                    {" "}
                    {park.addresses[0].city}, {park.addresses[0].stateCode},
                    {park.addresses[0].zipCode}
                  </p>
                </div>
                <div className="directions-container">
                  <h3> Directions </h3>
                  <p> {park.directionsInfo}</p>
                </div>

                <ButtonStyled modifiers={["small"]}>Read More</ButtonStyled>
                <h3> Images </h3>
                <div className="image-container">
                  {park.images.map((img, index) => {
                    return (
                      <div className="smaller-img">
                        <Image
                          className="park-smaller-img"
                          src={img.url}
                          rounded
                        />
                      </div>
                    );
                  })}
                </div>
                <footer className="flex-footer">
                  <Link className="redirect-link" to="/nationalparks">
                    {" "}
                    Back to Parks Page{" "}
                  </Link>
                </footer>
              </Container>
            </>
          );
        }
      })}
    </>
  );
};

export default Park;
