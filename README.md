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

## Estado (State)
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

  ***Ventajas de JSX:**
  - Estructura más fácil de visualizar.
  - Errores y advertencias más útiles.

  ***Ejemplo:***
  ```
  const elemento = <h1>!Hola, Mundo</h1>;
  ```

  




















