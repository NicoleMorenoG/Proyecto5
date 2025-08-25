import { useState, useEffect } from "react"

export default function Home() {
    const [gatito, setGatito] = useState(null)

    const traerGatito = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(res => res.json())
        .then(data => setGatito(data[0].url))
        .catch(console.error)
    }

    useEffect(() => {
    traerGatito()
    }, [])

    return (
    <div style={{ textAlign: "center", padding: 20 }}>
        <h1>🐱 Gatito random</h1>
        {gatito ? (
        <img 
            src={gatito} 
            alt="Un lindo gatito" 
            style={{ maxWidth: 400, borderRadius: 10 }} 
        />
        ) : (
        <p>Cargando gatito...</p>
        )}
        <br /><br />
        <button
        onClick={traerGatito}
        style={{
            padding: "10px 20px",
            borderRadius: 8,
            border: "none",
            background: "#4f46e5",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer"
        }}
        >
        Otro gatito 🐾
        </button>
    </div>
    )
}
