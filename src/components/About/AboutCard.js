import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mehmet </span>
            from <span className="purple"> Antalya, Turkey.</span>
            <br />
            I am currently employed as a Frontend developer at Tournate.
            <br />
          </p>
         

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">MeMo</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
