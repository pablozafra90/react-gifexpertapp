import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ( { category } ) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        //console.log( image );
                        <GifItem key={ image.id } { ...image } />
                     ) )
                }
                {
                    images.length === 0 && (
                        <h4>Vaya, no hay resultados de {category}. ¿Quieres probar con otra cosa?</h4>
                    )
                }
            </div>

        </>
    )

}
