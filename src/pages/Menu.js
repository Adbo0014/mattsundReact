import PizzaItem from "../components/PizzaItem";


export default function Menu(){
    return(
        <div>
            <div class="pizza-menu">
                <div class="pizza-filler">
                    <img src="/pizza1.jpg" alt="Pizza" id="pizza-pic-first" onmouseover="blurPicture()" onmouseleave="focusPicture()" />
                    <p class="pizza-text">Pizza</p>
                </div>

                <div className="news">
                    <div class="first-news">
                        <PizzaItem name='Kebab' price='75' ingredients='Kebab'/>
                        <PizzaItem name='Kebab' price='75' ingredients='Kebab'/>
                        <PizzaItem name='Kebab' price='75' ingredients='Kebab'/>
                        <PizzaItem name='Kebab' price='75' ingredients='Kebab'/>
                    </div>

                    <div class="second-news">
                        <PizzaItem name='Kebab' price='75' ingredients='Kebab'/>
                        <PizzaItem name='Kebab' price='75' ingredients='Kebab'/>
                        <PizzaItem name='Kebab' price='75' ingredients='Kebab'/>
                        <PizzaItem name='Kebab' price='75' ingredients='Kebab'/>
                    </div>
                </div>

                <div class="pizza-filler-second">
                    <div class="pizza-filler">
                        <img src="/pizza1.jpg" alt="Vego Pizza" class="pizza-pic-second" id="pizza-pic-second" onmouseover="onHoverPicture()" onmouseleave="onLeavePicture()" />
                        <p class="pizza-text">Vego Pizza</p>
                    </div>
                </div>
                
                <div className="news">
                    <div class="first-news">
                        <PizzaItem name='Kebab' price='75' ingredients='Kebab'/>
                        <PizzaItem name='Kebab' price='75' ingredients='Kebab'/>
                        <PizzaItem name='Kebab' price='75' ingredients='Kebab'/>
                        <PizzaItem name='Kebab' price='75' ingredients='Kebab'/>
                    </div>

                    <div class="second-news">
                        <PizzaItem name='Kebab' price='75' ingredients='Kebab'/>
                        <PizzaItem name='Kebab' price='75' ingredients='Kebab'/>
                        <PizzaItem name='Kebab' price='75' ingredients='Kebab'/>
                        <PizzaItem name='Kebab' price='75' ingredients='Kebab'/>
                    </div>
                </div>
            </div>
        </div>
    )
}