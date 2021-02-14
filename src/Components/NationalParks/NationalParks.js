import React from "react";
import data from "./data.json";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// const nationalParkURL =
//   "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=AdVrifMehsBWaa7xDSFkh08nxZ4ubOx2FHk5yRgH";

const NationalParks = (props) => {
  console.log(data);
  return (
    <>
      <header className="national-parks-list-header">
        <h2> National Parks List: </h2>
        <h3> Click on a National Park to visit its details page </h3>
      </header>
      <main>
        <Container className="flex-container" fluid>
          {data.map((park, index) => {
            return (
              <Card
                className="card-border bg-dark text-white"
                style={{ width: "18rem" }}
              >
                <Link to={`/nationalparks/${park.id}`}>
                  <Card.Img
                    className="smaller-size"
                    variant="top"
                    src={park.images[0].url}
                    alt="park-img"
                  />
                </Link>
                <Card.Body>
                  <Card.Title>{park.name}</Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </Container>
      </main>
    </>
  );
};

export default NationalParks;
