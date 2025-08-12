export default function ImageContent() {
    return (
        <div className="welcome-menu">
            <div className="text-cloud">
                <p className="welcome-text">Välkommen till Måttsund Restaurang!</p>
            </div>

            <button href="indexmenu.html" className="menu-link" onClick={buttonClick}>Meny</button>
            
        </div>
    )
}

function buttonClick(){
    console.log('hej');
}