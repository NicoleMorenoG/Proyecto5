import { useState, useEffect } from "react"

export default function Facts() {
    const [fact, setFact] = useState("Loading…")

    const traerFact = () => {
    fetch("https://meowfacts.herokuapp.com/")
        .then(res => res.json())
        .then(data => setFact(data.data[0]))
        .catch(err => {
        console.error(err)
        setFact("Oops, something went wrong 🐾")
        })
    }

    useEffect(() => { traerFact() }, [])

    return (
    <div className="max-w-xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">😻 Random Cat Fact</h1>
        <p className="text-gray-700 italic mb-6">{fact}</p>
        <button
        onClick={traerFact}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
        Give me another fact 🐾
        </button>
    </div>
    )
}
