import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName : string;
    quantity : number;
}

const itemsInCart : ItemInCart[] = [
    { productName : 'Nintendo Switch 2', quantity : 10 },
    { productName : 'Pro Controller', quantity : 5 },
    { productName : 'Super Smash', quantity : 2 },
]

export function FirstStepsApp() {
    return(
        <>
        <h1>Carrito de compras</h1>

        {itemsInCart.map( item => (
            <ItemCounter key={item.productName}
                productName={item.productName} 
                quantity={item.quantity} 
            />
        ))}

        {/* <ItemCounter productName ="Nintendo Switch 2" quantity={10}/>
        <ItemCounter productName ="Pro Controller" quantity={5}/>
        <ItemCounter productName ="Super Smash" quantity={2}/> */}

        {/*<h1>Heli, Mundo!</h1>
        <p>Mi primero parrafo</p>

        <button>Presioname</button>

        <div>
            <h2>Hola, estoy dentro de un div</h2>
        </div>*/}
        </>
    )
}