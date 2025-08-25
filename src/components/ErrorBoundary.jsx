import React from "react"

export default class ErrorBoundary extends React.Component {
    constructor(props) {
    super(props)
    this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
    return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
    console.error("Error capturado por ErrorBoundary:", error, errorInfo)
    }

    render() {
    if (this.state.hasError) {
        return (
        <div style={{ textAlign: "center", padding: 20, color: "red" }}>
            <h2>⚠️ Ocurrió un error inesperado</h2>
            <p>Por favor intenta recargar la página.</p>
        </div>
        )
    }
    return this.props.children
    }
}
