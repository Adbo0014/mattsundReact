

export default function Contact() {
    return(
        <div className="contact">

            <div className="contact-us">
                <h2>Har du frågor? <br /> Kontakta oss!</h2>
                <p>Telefon: 0920 - 302 20</p>
                <form action="adrianboman99@gmail.com" method="POST">
                    <input type="text" name="name" placeholder="Namn" required className="contact-name" />
                    <input type="text" name="meddelande" placeholder="Mail" required className="contact-message" />
                    <textarea name="Message" cols="30" rows="10" placeholder="Skriv här"></textarea>
                    <button type="submit">Skicka</button>
                </form>
            </div>

            <div className="contact-video">
                <video controls>
                    <source src="/Yerushalayim.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

        </div>
    )
}