// import React from 'react'        //YA no se usa la importacion de react, despues de la version 17 ya no es necesario

// Los HOOKS son funciones que permiten a los componentes funcionales de React acceder y utilizar características propias de los componentes de clase, como el estado y el ciclo de vida. Esto permite a los desarrolladores crear componentes funcionales más complejos y poderosos. 
// Los hooks son funciones de JavaScript, pero imponen dos reglas adicionales: solo llamar Hooks en el nivel superior y solo llamar Hooks desde componentes de función de React.
// Un hook es una función que se llama en un componente de función para agregarle un estado local. React mantendrá este estado entre re-renderizados. useState devuelve un par: el valor de estado actual y una función que le permite actualizarlo. Puedes llamar a esta función desde un controlador de eventos o desde otro lugar. Es similar a this.setState en una clase, excepto que no combina el estado antiguo y el nuevo.

//Importar el useState
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
// import { GifGrid } from "./components/GifGrid";


//Este es un Functional Component con rafc
export const GifExpertApp = () => {
  //Siempre usar un valor iniciarlen useState() con la importacion de useState y aqui ya tenemos un espacio en memoria para manejar las categorias. Lo inicializamos como un arreglo [] y con la categoria que quiera
  const [categories, setCategories] = useState([ 'One Punch' ]); //despues de todo necesitamos que actualizar este useState, pero desde abajo en el <AddCategory />

  const onAddCategory = ( newCategory ) => {

    if ( categories.includes(newCategory) ) return;

    // console.log(newCategory);
    // categories.push(newCategory);

    /* ... operador Spread para agregar categorias, hace una copia de todas las categorias y al final pongo la nueva categoria Esta es una forma de hacerlo */
    setCategories([ newCategory, ...categories ]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>Gif Expert App</h1>
      {/* Input */}
      {/* Mando la referencia a la funcion, setCategories es una propiedad del component AddCategory el cual recibira esa funcion { setCategories }    */}
      <AddCategory 
        // setCategories={setCategories}
        onNewCategory={ (value) => onAddCategory(value) }
      />

      {/* Listado de items o gifs */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {/* Expresion de JS {} y tomamos el arreglo de categorias. .map es propio de los arreglos en JS y este permite barrer c/u de los elementos del arreglo, del useState y regresar algo nuevo. Funcion de Flecha */}
      {
          categories.map(( category ) => (
            <GifGrid 
              key={ category } 
              category={ category } /> 
          ))
      }
      {/* <li>ABC</li> */}
    </>
  );
};

// ApiKit  RuVOGa9robnLHpNb9xQoCTCLPr3qbiGB
