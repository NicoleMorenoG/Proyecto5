import { useState, useEffect } from "react"

function App() {
  const [gatito, setGatito] = useState(null)

  // Fetch al cargar el componente
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(res => res.json())
      .then(data => {
        setGatito(data[0].url)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🐱 Gatito random</h1>
      {gatito ? (
        <img src={gatito} alt="Un lindo gatito" style={{ maxWidth: "400px", borderRadius: "10px" }} />
      ) : (
        <p>Cargando gatito...</p>
      )}
    </div>
  )
}

export default App
