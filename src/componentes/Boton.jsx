import React from 'react';
import '../estilos/Boton.css'

function Boton(props) {

  const esOperador = valor => {
    /* siNaN confirma si una cadena de caracteres no es un número */
    return isNaN(valor) && (valor !== '.') && (valor !== '='); // retorna false o true
  };

  return (
    <div
    /* vamos a evaluar si el contenido del boton es operador o número para asignarle una clase, la constante esOperador esta tomando el valor de props.children.
    trimEnd() es un métodod que permite elminar spacios al final de la cadea de caracteres    */ 

      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}

      /* agregarInput (manejarClic={agregarInput}) necesita un valor, en este evento se lo damos con props.children con una función anonima */
      onClick={() => props.manejarClic(props.children)}>

      {props.children}

    </div>
  );
}

export default Boton;