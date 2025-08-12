

export default function PizzaItem(props){
    return (
        <div className="pizza">
            <h3>Vi rekommenderar!</h3>
            <h4>{props.name} . . . . . . . {props.price}Kr</h4>
            <p>{props.ingredients}</p>
        </div>
    )
}