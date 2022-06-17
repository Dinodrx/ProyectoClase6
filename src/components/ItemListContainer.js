import { useEffect,useState } from 'react';
import custonFetch from '../utils/customFetch';
import productos from '../utils/productos';
import ItemLits from './ItemList';



const ItemListContainer = () => {
    
    const[items, setItems] = useState([])

    useEffect(()=>{
        custonFetch(3000,productos)
        .then(resultado => setItems(resultado))
    },[items])


    if (items.length > 0)
    {
    return (
        <div>
            <ItemLits products={items}/>
        </div>
    )

}else{
    return(
    <div>
        <p>Cargando...</p>
    </div>
    )

}
}


export default ItemListContainer