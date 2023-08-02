import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const onNewCategory = ( newCategory ) => {

    const exist = categories.find( e => {
        return e.toLowerCase() === newCategory.toLowerCase()
    });

    if (exist) {
      console.log('category already exist: ' + exist + ' === ' + newCategory);
      return;
    }

    setCategories([newCategory, ...categories]);
    console.log('category is new: ' + exist + ' === ' + newCategory);
  }

  const [categories, setCategories] = useState([]);
  
  const clearAll = () => { setCategories([]); }

  return (
    <>
        <h1>¡Gracias por estar aquí!</h1>

        <h4>Esto es una práctica de React sencilla en la que el usuario obtiene 10 resultados de Giphy por cada input.<br/>Están capadas las duplicidades de búsquedas, aun diferenciándolas por mayúsculas o minúsculas. Se deja console log habilitado para entender esta última funcionalidad.</h4>

        <div className="tool-content">

          {/* Input */}
          <AddCategory onNewCategory={ onNewCategory }/>

          <button onClick={ clearAll } className="buttons f-left">Clear all</button>

        </div>

        {/*listado de gifs*/}
        <ol>
          { categories.map( cat => (
                <GifGrid key={ cat } category={ cat }/>
              )
          ) }
        </ol>
        {/*Gif item*/}
    </>
  )
};
