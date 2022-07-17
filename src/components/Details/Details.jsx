import maravilhosa from "../../assets/Mmaravilhosa.jpg";
import workshop from "../../assets/workshop.jpg";
import todolist from "../../assets/TodoList.png";
import diario from "../../assets/diario.jpg";
import Card from "../Card/Card";

import "./details.css";

function Details() {
  return (
    <>
      <h2 className="details-title">
        Alguns projetos feitos durante a reprograma
      </h2>
      <div className="main">
        <div className="cards">
          <Card
            title="M de Maravilhosa"
            image={maravilhosa}
            link="https://mdemaravilhosacassiaeller.netlify.app/"
          >
            Desafio elaborado pela reprograma, em que poderiamos escolher a
            nossa Maravilhosa, sendo ela, uma icone brasileira. Onde pude
            treinar mais o HTML,CSS..
          </Card>
          <Card
            title="workshop"
            image={workshop}
            link="https://workshop2on17-mayra.netlify.app/"
          >
            Processo de seleção, tivemos que criar um site, básico com html e css.
          </Card>
          <Card
            title="Todo List"
            image={todolist}
            
          >
            Primeiros contatos fortes com JS.
          </Card>
          <Card
            title="Meu diário da reprograma"
            image={diario}
            link=""
          >
            Primeiro projeto em React.
          </Card>
        </div>
      </div>
    </>
  );
}

export default Details;