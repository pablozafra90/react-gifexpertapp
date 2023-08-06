import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';


describe('Pruebas en el customHook useFetchGifs', () => {

    const category = 'Funny';

    test('Debe regresar un estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs(category) );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBe(true);

    });

    test('Debe regresar un arreglo de imágenes y isLoading en falso', async() => {

        const { result } = renderHook( () => useFetchGifs(category) );

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });
    
    
});
