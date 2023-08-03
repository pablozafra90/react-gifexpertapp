import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [repeated, setRepeated] = useState(false)

  const onNewCategory = ( newCategory ) => {

    const exist = categories.find( e => {
        return e.toLowerCase() === newCategory.toLowerCase()
    });

    if (exist) {
      //console.log('category already exist: ' + exist + ' === ' + newCategory);
      setRepeated(true);
      return;
    }

    setCategories([newCategory, ...categories]);
    setRepeated(false);
    //console.log('category is new: ' + exist + ' === ' + newCategory);
  }

  const [categories, setCategories] = useState([]);
  
  const clearAll = () => { setCategories([]); setRepeated(false); }

  return (
    <>
        <h1>¡Gracias por estar aquí!</h1>

        <h4>Esto es una práctica de React sencilla en la que el usuario obtiene 10 resultados de Giphy por cada input.<br/>Como extra, están capadas las duplicidades de búsquedas, aun diferenciándolas por mayúsculas o minúsculas.</h4>

        <div className="tool-content">

          {/* Input */}
          <AddCategory onNewCategory={ onNewCategory }/>
          
          <button type="submit" form="form01" value="{SubmitEvent}" className="buttons">Buscar</button>

          <button onClick={ clearAll } className="buttons">Borrar</button>

        </div>

        { repeated && (<h5 className="error-msg">Esta búsqueda está repetida!</h5>) }

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
