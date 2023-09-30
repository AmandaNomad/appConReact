import React, { Component } from "react";
import operaciones from "../logica/operaciones";
import Display from "./Display";
import PanelDeBotones from "./PanelDeBotones";
import "./App.css";

class App extends Component {
  state = {
    total: null,
    siguiente: null,
    operador: null,
  };

  // Agrega un event listener para escuchar las teclas numéricas
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  // Elimina el event listener cuando el componente se desmonta
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

   // Maneja el evento de presionar una tecla
   handleKeyPress = (event) => {
    const tecla = event.key;
    if (/^[0-9]$/.test(tecla)) {
      // Si es una tecla numérica (0-9), llama a handleClick con el número
      this.handleClick(tecla);
    } else if (tecla === "=" || tecla === "+" || tecla === "-" || tecla === "*" || tecla === "/" || tecla === ".") {
      // Si es una tecla de operador (=, +, -, *, /), llama a handleClick con el operador
      this.handleClick(tecla);
    } else if (tecla === "Enter") {
      // Si es la tecla Enter, también llama a handleClick con "="
      this.handleClick("=");
    }
  };


  handleClick = (nombreDeBoton) =>
    this.setState(operaciones(this.state, nombreDeBoton));

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.siguiente || this.state.total || "0"} />
        <PanelDeBotones clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
