import dam from "../img/dam.jpg";
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section class="first">
        <div className="profile int1">
          <img src={dam} alt="image" />
        </div>
        <div class="introduction int2">
          <div class="greet">
            <h1 class="alpha">H</h1>
            <h1 class="alpha">i</h1>
            <h1 class="alpha">,</h1>
          </div>
          <div class="greet">
            <h1 class="alpha">I</h1>
            <h1 class="alpha">'</h1>
            <h1 class="alpha">m</h1>
          </div>
          <div id="greet">
            <h1 class="alpha">J</h1>
            <h1 class="alpha">o</h1>
            <h1 class="alpha">s</h1>
            <h1 class="alpha">u</h1>
            <h1 class="alpha">a</h1>
          </div>
        </div>
        <div class="myFocus int3">
          <span class="focus-greet">
            <h1 class="alpha">F</h1>
            <h1 class="alpha">R</h1>
            <h1 class="alpha">O</h1>
            <h1 class="alpha">N</h1>
            <h1 class="alpha">T</h1>
            <h1 class="alpha">-</h1>
            <h1 class="alpha">E</h1>
            <h1 class="alpha">N</h1>
            <h1 class="alpha">D</h1>
          </span>
          <span class="focus-greet">
            <h1 class="alpha">W</h1>
            <h1 class="alpha">E</h1>
            <h1 class="alpha">B</h1>
          </span>
          <span class="focus-greet">
            <h1 class="alpha">D</h1>
            <h1 class="alpha">E</h1>
            <h1 class="alpha">V</h1>
            <h1 class="alpha">E</h1>
            <h1 class="alpha">L</h1>
            <h1 class="alpha">O</h1>
            <h1 class="alpha">P</h1>
            <h1 class="alpha">E</h1>
            <h1 class="alpha">R</h1>
          </span>
        </div>
        <div class="greetings int4">
          <p className="tagline-text">
            "Hi, feeling free for scroll down, and i would verry happy for that"
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
