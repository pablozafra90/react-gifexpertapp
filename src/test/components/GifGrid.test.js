import { getAllByRole, render, screen } from '@testing-library/react';
import { GifGrid } from '../../components';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {

    const category = 'funny';

    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
    })

    test('Debe mostrar el loading inicialmente', () => {

        render( <GifGrid category={category} /> );
        expect( screen.getByText( 'Cargando...' ) );
        
    });

    test('Debe mostrar el nombre de la categoría', () => {

        render( <GifGrid category={category} /> );
        expect( screen.getByText( category ) );
        
    });

    test('Debe mostrar items cuando se cargan las imágenes de con useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'funny',
                url: 'https://holaquetal.es/funny.jpg'
            },
            {
                id: 'DFG',
                title: 'sad',
                url: 'https://holaquetal.es/sad.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifGrid category={category} /> );

        expect( screen.getAllByRole('img').length ).toBe(2);
        
    });
    
    
    
});
