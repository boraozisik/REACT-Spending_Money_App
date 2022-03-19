
import BasketItem from './BasketItem';




function Basket({basket,total,products,resetBasket}){
    return(
        <>
            <div className="basket-container container">
                <h3>Shopping Details</h3>
                <ul>
                {basket.map(item => (

                <BasketItem key = {item.id} item = {item} product = {products.find(p => p.id === item.id)} />
                ))}

                </ul>
            <div className='total'>
            Total Spend: $ {total.toLocaleString()}
            </div>
                <button className = 'basket-reset-btn' onClick = {resetBasket}>Empty Basket</button>

            </div>

           
        </>
       
    )
}

export default Basket;