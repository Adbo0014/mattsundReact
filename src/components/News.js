import PizzaItem from "./PizzaItem";

export default function News(){
    return(
        <div className="news">
            <div className="first-news">
                <PizzaItem price="75" ingredients="Tomatsås, ost, Skinka" name="Vesuvio" />
                <PizzaItem price="80" ingredients="Tomatsås, ost, Skinka, Ananas" name="Hawaii" />
            </div>

            <div className="second-news">
                <PizzaItem price="95" ingredients="Kebab, lök, tomat, peperoni, dressing" name="Kebabpizza" />
                <PizzaItem price="80" ingredients="Skinka, champinjoner, räkor, musslor" name="Quatro" />
            </div>
        </div>
    )
}