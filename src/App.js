
import './App.css';
import Logokarelys from './imagenes/logo-karelys.png';
import Boton from './componentes/boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from "./componentes/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState('');

  const agregarInput = (val) => {
    if (esOperador(val)) {
      if (input.length > 0 && esOperador(input[input.length - 1])) {
        // Reemplazar operador anterior
        setInput(input.slice(0, -1) + val);
      } else if (input.length > 0 && !esOperador(input[input.length - 1])) {
        // Agregar operador después de un valor numérico
        setInput(input + val);
      }
    } else {
      // Agregar otros caracteres
      setInput(input + val);
    }
  };

  const calcularResultado = () => {
    if (input) {
      try {
        setInput(evaluate(input));
      } catch (error) {
        alert('operacion no valida');
        setInput('');
      }
    } else {
      alert('Por favor ingrese valores para realizar el cálculo');
    }
  };

  const esOperador = (caracter) => {
    return caracter === '+' || caracter === '-' || caracter === '*' || caracter === '/';
  };

  return (
    <div className="App">
      <div className='lo'>
        <img
          src= {Logokarelys}
          className='logo-karelys'
          alt='logo de karelys' />
      </div>
      <div className='contenedor-calculadora'>
      
          <Pantalla input={input}/>
        
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Boton  manejarClic={agregarInput}>4</Boton>
          <Boton  manejarClic={agregarInput}>5</Boton>
          <Boton  manejarClic={agregarInput}>6</Boton>
          <Boton  manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton  manejarClic={agregarInput}>1</Boton>
          <Boton  manejarClic={agregarInput}>2</Boton>
          <Boton  manejarClic={agregarInput}>3</Boton>
          <Boton  manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton  manejarClic={calcularResultado}>=</Boton>
          <Boton  manejarClic={agregarInput}>0</Boton>
          <Boton  manejarClic={agregarInput}>.</Boton>

          <Boton  manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}> 
          Clear
          </BotonClear>
        </div>
    </div>
    </div>
  );
}

export default App;
