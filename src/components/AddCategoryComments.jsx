// 1. Creamos un componente

import { useState } from "react";

/* export const AddCategory = () => {

    return (
        <input 
            type="text"
            placeholder="Buscar Gifs"
        />
    )
}
 */

export const AddCategory = () => {
  //2. Cada componente puede tener su ppio estado (state), es decir, sus propios Hooks, useStates

  //4. Manejaremos el estado del input abajo. inputValue el nombre que le doy. usestat es el snipet para que me salga la cosnt que sigue y el inputValue inicial sera un string vacio o le puedpo poner algun string, en este caso en el campo del input se vera One Punch
  const [inputValue, setInputValue] = useState("One Punch");

  //7. Creo una funcion con el nombre que quiera
  //9. Entonces en la funcion puedo recibir un evento (event) pero se puede hacer de otra forma, ya no recibimos event lo cambiamos por target e igual abajo en el .11
  const onInputChange = ({ target }) => {
    //10. hagamos console.log del evento y presionando cualquier tecla en console del nav vemos el evento que se dispara y alli dentro del target esta el value que en este caso esl Hola Mundo el .target.value es porque sale mucha info en el cosole y vemos que el input va cambiando en consola o esta recibiendo el cambio alli
    // console.log( target.value );
    // setInputValue('Hola Mundo');
    //11. entonces cambiamos por event.target.value y ya podemos escribir en el campo y recibir nuevos valores
    setInputValue(target.value);
  };

  //14.
  const onSubmit = (event) => {
    //console.log(event); // Y vemos que sigue haciendo refesh el navegador para eso...
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    //12. metemos todo en un form y puedo usar Fragmento <> </>  pero estos se usan cuando tengo mas de un elemento que sera en nodo root de ese componente aqui form es el unico elemento que se usara y nada mas, pero si puedo tener varios inputs
    <form onSubmit={(event) => onSubmit(event)}>
      {/* 3. EN Este caso necesitamos manejar el estado de este input, 
            13. luego uso los eventos de JS onSubmit que tiene el evento funcion flecha y luego de nuevo el event */}
      <input
        type="text"
        placeholder="Buscar Gifs"
        //5. Si quiero el inputValue que tiene el string vacio sea el valor que tenga este input por defecto y no deja      escribir     en    el
        value={inputValue}
        // 6. implementamos el metodo onChange y con la funcion de arriba ya se habilita el campo pero aun no puedo escribir
        // 8. Luego tenemos un evento y ese evento lo mando a la funcion onInputChange al poner el cursor en el 2do event   vemos que es un ChangeEvent
        // onChange={ (event) => onInputChange(event) }
        //11. Quitamos y solo dejo onInputChange y hace lo mismo que antes
        onChange={onInputChange}
      />
    </form>
  );
};
