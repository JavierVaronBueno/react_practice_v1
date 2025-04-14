import React from "react";
import '../hojas-de-estilo/Tarea.css'
import { AiFillCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  // Depuración: Verifica si eliminarTarea es una función
  console.log('Props en Tarea:', { id, texto, completada, completarTarea, eliminarTarea });
  console.log('eliminarTarea es función:', typeof eliminarTarea === 'function');
  
  return (
    <div className={
        completada ? 'tarea-contenedor completada' : 'tarea-contenedor'
      }
    >
      <div 
        className='tarea-texto'
        onClick={() => completarTarea(id)}
      >
        {texto}
      </div>
      <div 
        className='tarea-tenedor-iconos'
        onClick={() => eliminarTarea(id)}
      >
        <AiFillCloseCircle className='tarea-icono' />
      </div>
    </div>
  );
}

export default Tarea;