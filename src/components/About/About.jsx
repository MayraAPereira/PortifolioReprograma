import may from "../../assets/May.jpg"
import "./about.css";

function About() {
  return (
    <>
      <div className="about">
        <div className="about-image">
          <img 
            className="profile-image"
            src={may}
            alt="Mayra Pereira"
          />
        </div>
        <div className="about-text">
          <h2>Olá, eu sou a May</h2>
          <p>
            Aluna da Reprograma, Boba e Sorridente. Amo uma breja, 
            um dia de sol e uma boa praia!.
          </p>
        </div>
      </div>
      <div className="line">
        <hr />
      </div>
    </>
  );
}

export default About;