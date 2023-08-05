const { render, screen, fireEvent } = require("@testing-library/react");
const { AddCategory } = require("../../components");

describe('Pruebas en <AddCategory />', () => {

    test('Debe de cambiar el valor de la caja de texto', () => {

        render( <AddCategory onNewCategory={ () => {} } />);
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Saitama'} })

        expect(input.value).toBe('Saitama');
        
    });

    test('Debe de llamar a OnNewCategory on submit si el input tiene valor', () => {

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');    
        const form = screen.getByLabelText('form');

        fireEvent.input( input, { target: { value: inputValue} })
        fireEvent.submit( form )

        expect(input.value).toBe('');

        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
        
        //screen.debug();
        
    });

    

    test('No debe de llamar a OnNewCategory on submit si el input está vacío', () => {

        const inputValue = '';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');    
        const form = screen.getByLabelText('form');

        fireEvent.input( input, { target: { value: inputValue} })
        fireEvent.submit( form )

        expect(input.value).toBe('');

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
        
        //screen.debug();
        
    });
    
    
    
    
});
