import Imagen from "./Imagen"
const Contenido = () => {
    let imagenes = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <main>
            <h1>Galeria de imagenes</h1>
            <div >
                {
                    imagenes.map((img) => (
                        <Imagen />
                    ))
                }

            </div>
        </main>
    )
}

export default Contenido