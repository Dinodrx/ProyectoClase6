import Item from "./Item"

function ItemLits({products}) {

    
    return(
        products.map(p =>
            <Item id={p.id} name = {p.name}
            image= {p.image}
            key ={p.id}/>
            )
    )   
    
}


export default ItemLits