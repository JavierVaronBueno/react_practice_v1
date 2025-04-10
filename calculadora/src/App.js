import './App.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import Logo from './componentes/Logo';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';


function App() {

  const [input, setInput] = useState('');
  const operadores = ['+', '-', '*', '/'];

  const agregarInput = val => {
    // Evitar que el input comience con un operador
    if (input === '' && operadores.includes(val)) {
      return;
    }

    // Manejo del punto decimal
    if (val === '.') {
      // No permitir punto si el input está vacío
      if (input === '') {
        return;
      }

      // Dividir el input en partes según el operador (si existe)
      const partes = input.split(/[\+\-\*\/]/);
      const parteActual = partes[partes.length - 1];

      // No permitir más de un punto en la parte actual
      if (parteActual.includes('.')) {
        return;
      }

      // No permitir punto inmediatamente después de un operador
      const ultimoCaracter = input.slice(-1);
      if (operadores.includes(ultimoCaracter)) {
        return;
      }
    }
    
    // Contar cuántos operadores hay en el input actual
    const tieneOperador = operadores.some((op) => input.includes(op));

    // Si el valor que se intenta agregar es un operador
    if (operadores.includes(val)) {
      // No permitir si ya hay un operador en el input
      if (tieneOperador) {
        return;
      }

      // No permitir operador si el último carácter es un punto
      const ultimoCaracter = input.slice(-1);
      if (ultimoCaracter === '.') {
        return;
      }
    }

    // Agregar el valor al input si pasa las validaciones
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (!input) {
      alert('Por favor ingrese valores para hacer los cálculos');
      return;
    }

    // Validaciones para asegurar que la expresión es completa
    const ultimoCaracter = input.slice(-1);

    // No evaluar si termina en operador o punto
    if (operadores.includes(ultimoCaracter) || ultimoCaracter === '.') {
      alert('Expresión incompleta. Por favor complete la expresión.');
      return;
    }

    // Verificar que la expresión tenga el formato número operador número
    const partes = input.split(/[\+\-\*\/]/);
    if (partes.length !== 2 || partes[0] === '' || partes[1] === '') {
      alert('Expresión inválida. Debe ser un número, un operador y otro número.');
      return;
    }

    // Verificar que ambas partes sean números válidos
    const numero1 = parseFloat(partes[0]);
    const numero2 = parseFloat(partes[1]);
    if (isNaN(numero1) || isNaN(numero2)) {
      alert('Por favor ingrese números válidos.');
      return;
    }

    // Si pasa todas las validaciones, evaluar
    try {
      setInput(evaluate(input).toString());
    } catch (error) {
      alert('Error al evaluar la expresión.');
    }
  };

  return (
    <div className='App'>
      <Logo />
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear ={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
