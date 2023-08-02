const { render } = require("@testing-library/react")
const { GifItem } = require("../../components/GifItem")

describe('Pruebas en <GifItem/>', () => { 

    test('Debe hacer match con el snapshot', () => { 

        const title = 'Saitama';
        const url = "https://one-punch.com/saitama.jpg"
        
        const { container } = render( <GifItem title={ title } url={ url } />)
        expect( container ).toMatchSnapshot();

    })

 })