import { useState } from "react";
import './ItemCounter.css';

interface Props {
    productName : string;
    quantity? : number;
}

export const ItemCounter = (props : Props) => {

    const [count, setCount] = useState(props.quantity ?? 1);

    const handleAdd = () => {
        if(count >= 20) return;
        setCount(count + 1);
    }

    const handleSubtract = () => {
        if(count === 1) return;
        setCount(count - 1);
    }

    /*console.log(props);
    const handleClick = () => {
        console.log(`Click ${props.productName}`);
    }*/
  return (
    <section className="item-row">
        <span style={{
            width : '150px'
        }}>{props.productName}</span>
        <button onClick={handleSubtract}>-1</button>
        <span style={{
            width : 150,
            color : count <=1 ? 'red' : count >= 20 ? 'blue' : 'black',
            paddingLeft : '115px'
        }} 
        >{count}</span>
        <button 
        onMouseEnter={() => {
            console.log(`Mouse enter ${props.productName}`)
        }}
        onClick={handleAdd}
        >+1</button>
    </section>
  )
}
