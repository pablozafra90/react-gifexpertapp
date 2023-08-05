import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
//import { useOnNewCategory } from "./hooks/useOnNewCategory";

export const GifExpertApp = () => {

  
  const [categories, setCategories] = useState([]);
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
  
  const clearAll = () => { setCategories([]); setRepeated(false); }
    

  //const { categories, repeated, clearAll } = useOnNewCategory( );

  return (
    <>
        <h1>¡Gracias por estar aquí!</h1>

        <h4>Esto es una práctica de React sencilla en la que el usuario obtiene 10 resultados de Giphy por cada búsqueda.<br/>Como extra, están capadas las duplicidades de búsquedas, aun diferenciándolas por mayúsculas o minúsculas.</h4>

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
