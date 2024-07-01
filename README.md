# react_practice_v1
Inicio de prácticas reaccionar 29 de junio de 2024, aquí están los proyectos de aprendizaje y retroalimentación sobre buenas prácticas de programación utilizando la tecnología React.

# Conocimientos basicos
  - HTML5.
  - CSS3.
  - JavaScript/ES6.

# Requisitos Tecnicos
  - Node JS.
# React

**Biblioteca** de JavaScript de código abierto (Open Source) diseñado para crear interfaces de usuario.

  > **Biblioteca:**
  Conjunto de implementaciones o subprogramas que podemos usar en nuestro código

### Ventajas de React
  - Facil de aprender.
  - Componentes reutilizables.
  - Crea aplicaciones dinámicas.
  - Buen desempeño.

# Conceptos Básicos

## Componente
Parte de la interfaz de usuario que es independiente y reusable.
  - ***Funcionales:***  Función de JavaScript/ES6 que retorna un elemento de React (JSX).
    ***Características:***
    - Debe retornar un elemento de React (JSX).
    - Debe comenzar con una letra mayúscula.
    - Puede recibir valores si es necesario.
      
    ***Ejemplo:***
    > props = "Properties"
    ```
    function Saludo(props) {
      return <h1>¡Hola, {props.nombre}!</h1>;
    }
    ```
  - ***De Clase:*** Clases de ES6 (JavaScript moderno) que retorna un elemento JSX.
    ***Caracteristicas:***
    - Debe extender **React.Component**.
    - Debe tener un método **render()** para retornar un elemento de JSX.
    - Puede recibir valores si es necesario.
    ***Ejemplo:***
    ```
    class Saludo extends React.Component {
      render() {
        return <h1>¡Hola, {this.props.nombre}!</h1>;
      }
    }
    ```
## Props
Argumentos de puede recibir un componente de React.
Podemos tener componentes dentro de componentes, pero solo podemos enviar props de el "padre al hijo".

## Estado (State) de un componente
Representación en JavaScript del conjunto de propiedades de un componente y sus valores actuales.
En este concepto. "propiedades" no se refiere a los props, sino a información que se representa sobre el componente.

## ¿Por qué Componetes de Clase? 

>Anteriormente, usábamos componentes de clase para poder trabajar con "estados" de nuestros componentes.

> En versiones anteriores de React (anteriores a 16.8), **no** podíamos hacerlo en componentes funcionales.

## Hooks
> Ahora si podemos asignar y actualizar el estado de un componente funcional en React con los **hooks**.

Son Funciones espaciales que permiten trabajar con estados en componentes funcionales y otros aspectos de React. Todo esto lo podemos lograr **sin** escribir un componente de clase. Esto nos permite escribir código mucho más conciso y fácil de entender.

## Event Listener
Función de JavaScript que es ejecutada cuando ocurre un evento específico. Rambien podemos referirnos a esta función como **Event Handler**.

## Introducción a JSX
### JSX (JavaScript XML).
Extension de React para la sintaxis de JavaScript. Nos permite describir en JavaScript cómo se verán los componentes usando una estructura similares (no necesariamente su estilo) a HTML.

  ***Ventajas de JSX:***
  - Estructura más fácil de visualizar.
  - Errores y advertencias más útiles.

  ***Ejemplo:***
  ```
  const elemento = <h1>¡Hola, Mundo!</h1>;
  ```
  Otro ejemplo.
  ```
  import React from 'react';
  import '../hojas-de-estilo/Contador.css';

  function Contador({ numClics }) {
    return (
      <div className="contador">
        {numClics}
      </div>
    );
  }
  ```
  Otro ejemplo.
  ```
  import React from 'react';
  import '../hojas-de-estilo/BotonClear.css';

  const BotonClear = (props) => {
    <div className="contador">
        {numClics}
    </div>
  }

  export default BotonClear;
  ```
### Elementos en JSX
Unidades más pequeñas en React. Definen lo que se ve en la pantalla. Con JSX, podemos crear y usar cualquier elemento HTML.

### Atributos
Puedes agregar **atributos** a tus elementos den JSX para especificar ciertas características.

  - ***class:***  **class** es una palabra reservada en JavaScript que podemos usar para crear una clase. Por eso necesitamos escribir este atributo de forma distinta en JSX.

  ***Ejemplo:***
  ```
  <h1 className="titulo-azul">¡Hola, Mundo!</h1>
  ``` 
  - ***for:***  **for** es otro atributo que se escribe de forma distinta.

  ***Ejemplo:***
  ```
  <label htmlFor="css">CSS</label>
  ```
  - ***style:***  El atributo **style** acepta un objeto JavaScript con propiedades CSS escritas en **camelCase**.

  ***Ejemplo:***
  Definimos un estrilo para una etiqueta ***div***.
  ```
  const estiloDiv = {
    color: 'yellow',
    backgroundColor: 'black'
  };
  ```
  De esta forma la usamos.
  ```
  <h1 style={estiloDiv}>¡Hola, Mundo!</h1>
  ``` 
  De esta forma nos permite definir un objeto JavaScript directamente.
  ```
  <h1 style={{ color: 'yellow', backgroundColor: 'black' }}>¡Hola, Mundo!</h1>
  ```
  [aquí](https://es.legacy.reactjs.org/docs/dom-elements.html) mas atributos del DOM reconocidos por React.

## Elementos VS. Componentes
> Los elementos en React están "hechos" de elemnetos. Los componetes don mas complejos y los elementos son bloques fundamentales que los componen.

## React DOM
Paquete que facilita la interacción y actualización del DOM en aplicaciones React.

### DOM (Document Object Model)
Respresnetación en el navegador de todos los elementos que conforman una página o aplicación web.

## Estructura de un Componente
Al igual que en HTML, los elementos pueden ser **anidados** en JSX para formar estructuras más complejas.

























