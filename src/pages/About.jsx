export default function About() {

throw new Error("Prueba del ErrorBoundary")

    return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: 20 }}>
        <h1>Acerca de la app 😺</h1>
        <p>
        Esta aplicación muestra imágenes aleatorias de gatitos usando la API pública <code>The Cat API</code>.
        </p>
        <p>
        Fue creada para practicar React, hooks, rutas y consumo de APIs.
        </p>
    </div>
    )
}
