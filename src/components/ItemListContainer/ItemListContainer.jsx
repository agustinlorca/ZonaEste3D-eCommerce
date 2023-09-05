
import "./itemListContainer.css";

const ItemListContainer = ({greeting}) => {
    return(
        <div className="item-list-container">
           <h3>{greeting}</h3>
        </div>
    )
}
export default ItemListContainer;