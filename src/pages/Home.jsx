import { useState, useEffect } from "react"

export default function Home() {
    const [gatito, setGatito] = useState(null)

    const traerGatito = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(res => res.json())
        .then(data => setGatito(data[0].url))
        .catch(console.error)
    }

    useEffect(() => { traerGatito() }, [])

    return (
    <div className="min-h-screen bg-gray-50">
        <nav className="max-w-4xl mx-auto px-4 py-6">
        </nav>

        <main className="max-w-4xl mx-auto px-4 pb-16 text-center">
        <h1 className="text-3xl font-extrabold mb-6">
            🐱 Random Cat
        </h1>

        {gatito ? (
            <img
            src={gatito}
            alt="Un lindo gatito"
            className="mx-auto rounded-xl shadow max-w-md w-full max-h-[70vh] object-contain"
            />
        ) : (
            <p className="text-gray-600">Loading cat...</p>
        )}

        <div className="mt-6">
            <button
            onClick={traerGatito}
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95 transition"
            >
            Another Cat 🐾
            </button>
        </div>
        </main>
    </div>
    )
}
