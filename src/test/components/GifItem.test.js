const { render, screen } = require("@testing-library/react")
const { GifItem } = require("../../components/GifItem")

describe('Pruebas en <GifItem/>', () => { 

    const title = 'Saitama';
    const url = "https://one-punch.com/saitama.jpg"

    test('Debe hacer match con el snapshot', () => { 
        
        const { container } = render( <GifItem title={ title } url={ url } />)
        expect( container ).toMatchSnapshot();

    })

    test('Debe de mostrar la imagen con la URL y el ALT indicado', () => {

        render( <GifItem title={ title } url={ url } />);
        //screen.debug();
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
        
    });

    test('Debe de mostrar el título en la card', () => {

        render( <GifItem title={ title } url={ url } />);
        
        expect(screen.getByText(title)).toBeTruthy();

    });
    
    

 })
 