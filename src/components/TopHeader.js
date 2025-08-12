
export default function TopHeader (){
    return (
        <header>
            <ul className="upper-bar">
                <li className="phone">Telefon: 0920 - 302 90</li>
                <li className="time">Helger: 11-20</li>
                <li className="time">Vardagar: 10-20</li>
            </ul>

            <a href="index.html" className="logo">Måttsund Restaurang</a>

            <ul className="navbar">
                <li className="navitem"><a href="index.html" className="navlink">Start</a></li>
                <li className="navitem"><a href="indexmenu.html" className="navlink">Meny</a></li>
                <li className="navitem"><a href="indextable.html" className="navlink">Nyheter</a></li>
                <li className="navitem"><a href="index.html" className="navlink">Kontakt</a></li>
                <li className="navitem"><a href="index.html" className="navlink">Om oss</a></li>
            </ul>
            
        </header>
    )
}