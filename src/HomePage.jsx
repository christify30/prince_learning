import React from "react";
import { Link } from "react-router-dom";
import "./Homepagestyle.css";
// import tick from "./components/time";
import Nav from "./components/Nav";

export default function HomePage() {
  return (
    <>
      <Nav
        link1="/dashboard"
        link1Name="Dashboard"
        link2="/leaderboard"
        link2Name="Leaderboard"
      />

      {/* <tick /> */}
      <h1 className="firstheading">
        Incite
        <sub
          style={{ fontSize: "20px", fontFamily: "Gill Sans", color: "green" }}
        >
          a minimalist record tool for toolhub
        </sub>
      </h1>
      <p style={{ margin: "10px" }}>
        The Toolhub snippet below is not backed by a reliable source. Can you
        find one?
      </p>
      <p style={{ margin: "10px" }}>
        Click <b>Add to Toolhub!</b> to go to Toolhub and fix the snippet, or
        <b> Next citation!</b> to see another one. Good luck!
      </p>
      <div>
        <textarea className="textarena">
          The behavior of all objects can be described by saying that all
          objects tend to "keep on doing what they're doing" If at rest, they
          will continue in this same state of rest. If in motion with an
          eastward velocity of 5 m/s, they will continue in this same state of
          motion (5 m/s, East). If in motion with a leftward velocity of 2 m/s,
          they will continue in this same state of motion (2 m/s, left). The
          state of motion of an object is maintained as long as the object is
          not acted upon by an unbalanced force. All objects resist changes in
          their state of motion - they tend to "keep on doing what they're
          doing." There is an important condition that must be met in order for
          the first law to be applicable to any given motion. The condition is
          described by the phrase "... unless acted upon by an unbalanced
          force." As the long as the forces are not unbalanced - that is, as
          long as the forces are balanced - the first law of motion applies.
          This concept of a balanced versus and unbalanced force will be
          discussed in more detail
        </textarea>
      </div>
      <p>
        <h1 id="heading">Would You Like To Check the Records?</h1>

        <input
          className="input"
          placeholder="search for missing citation"
        ></input>
      </p>
      <button>
        {" "}
        <Link
          to="https://www.mediawiki.org/wiki/Extension:Cite"
          target="_blank"
        >
          Add to Toolhub
        </Link>
      </button>
      <button>
        <Link to="https://www.mediawiki.org/wiki/Help:Cite" target="_blank">
          Next Citation
        </Link>
      </button>
      <br />
      <p className="endingComment">
        Hey! My source is on GitHub!
        <br />
        Incite is made by volunteers, <br />
        hosted on Wikimedia and translated via translatewiki.net.
      </p>
    </>
  );
}
