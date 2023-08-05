import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        //console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //console.log(inputValue);
        if (inputValue.trim().length <= 0) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit} id="form01" aria-label="form">
            <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}
            />
        </form>
    )

}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}