import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../GifExpertApp";


describe('Test en <GifExpertApp/>', () => {

    test('Debe hacer match con snapshot', () => {
        
        const { container } = render( <GifExpertApp /> );
        expect(container).toMatchSnapshot();
        
    });
    
    test('Debe mostrar un título y un subtítulo', () => {
        
        render( <GifExpertApp /> );
        expect( screen.getAllByRole('heading').length ).toBe(2);
        //screen.debug();
        
    });
    test('Debe mostrar los botones de busca y borrar', () => {
        
        render( <GifExpertApp /> );
        expect( screen.getAllByRole('button').length ).toBe(2);
        expect( screen.getByText('Buscar') );
        expect( screen.getByText('Borrar') );
        //screen.debug();
        
    });

    test('Debe mostrar una lista vacia de categorias', () => {

        // GifExpertApp.mockReturnValue({
        //     categories: [ 'hola', ],
        //     repeated: true
        // })

        render( <GifExpertApp /> );
        //screen.debug();
        
    });
    
    
});
