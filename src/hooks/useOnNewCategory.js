import { useState } from "react";

export const useOnNewCategory = ( newCategory ) => {

    const [categories, setCategories] = useState([]);
    const [repeated, setRepeated] = useState(false)
    
    const clearAll = () => { setCategories([]); setRepeated(false); }

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

    return {
        categories,
        repeated,
        clearAll
    }
}