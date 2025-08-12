import { Link } from "react-router-dom";

export default function TopHeader (){
    return (
        <header>
            <ul className="upper-bar">
                <li className="phone">Telefon: 0920 - 302 90</li>
                <li className="time">Helger: 11-20</li>
                <li className="time">Vardagar: 10-20</li>
            </ul>
            
            <Link to="/" className="logo">Måttsund Restaurang</Link>
            
            <nav>
                <ul className="navbar">
                    <li className="navitem"><Link to="/" className="navlink">Start</Link></li>
                    <li className="navitem"><Link to="/menu" className="navlink">Meny</Link></li>
                    <li className="navitem"><Link to="/table" className="navlink">Nyheter</Link></li>
                    <li className="navitem"><Link to="/" className="navlink">Kontakt</Link></li>
                    <li className="navitem"><Link to="/" className="navlink">Om oss</Link></li>
                </ul>
            </nav>
            
            
        </header>
    )
}