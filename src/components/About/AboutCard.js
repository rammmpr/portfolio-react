import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sufi Muhammad Pasha Rama </span>
            from <span className="purple"> Banten, Indonesia,</span>
            <br /> I'm a student majoring in informatics at the al-madinah informatics boarding school in Yogyakarta,
            <br />
            and I'm currently bored.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Sleeping
            </li>
            <li className="about-activity">
              <ImPointRight /> Daydreaming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Try not to be a burden on the family!"{" "}
          </p>
          <footer className="blockquote-footer">Pasha Rama</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
