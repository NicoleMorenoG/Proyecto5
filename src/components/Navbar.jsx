import { Link, NavLink } from "react-router-dom"

const linkStyle = ({ isActive }) => ({
    padding: "8px 12px",
    borderRadius: 8,
    textDecoration: "none",
    color: isActive ? "white" : "#111",
    background: isActive ? "#111" : "transparent",
})

export default function Navbar() {
    return (
    <div style={{ borderBottom: "1px solid #eee", background: "#fff" }}>
        <nav style={{ maxWidth: 960, margin: "0 auto", padding: 12, display: "flex", gap: 8, alignItems: "center" }}>
        <Link to="/" style={{ fontWeight: 700, marginRight: 10, textDecoration: "none", color: "#111" }}>
            Gatitos React 🐱
        </Link>
        <NavLink to="/" style={linkStyle} end>Inicio</NavLink>
        <NavLink to="/about" style={linkStyle}>About</NavLink>
        </nav>
    </div>
    )
}
