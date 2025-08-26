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
    console.error("Error caught by ErrorBoundary:", error, errorInfo)
    }

    render() {
    if (this.state.hasError) {
        return (
        <div style={{ textAlign: "center", padding: 20, color: "red" }}>
            <h2>⚠️ An unexpected error occurred</h2>
            <p>Please try reloading the page.</p>
        </div>
        )
    }
    return this.props.children
    }
}
