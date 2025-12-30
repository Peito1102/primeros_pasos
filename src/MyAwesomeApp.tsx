import { useState } from "react";

const address = {
    zipCode : '15074',
    country : 'Perú'
};
const firstName = 'Renzo';
const lastName = 'Vasquez';
const favoriteGames = ['Zelda', 'Mario', 'Metroid'];


export function MyAwesomeApp() {

    
    const [isActive, setIsActive] = useState(true);
    

    return (
        <>
        <hr />
        <h1>{firstName}</h1>
        <h3>{lastName}</h3>
        <ul>
            {favoriteGames.map((game) => (
            
            <li>{game}</li>
        ))}
        </ul>
        <div>
            <p>{isActive ? "Estoy activo" : "Ahora ya no"}</p>
        </div>
        
        <div>
            <p style={{
                backgroundColor : isActive ? 'blue' : 'red',    
                borderRadius : '11px',
                padding : '8px',
            }}
            >{address.zipCode} - {address.country}</p> 
            {/*<p>{Json.stringify(address)}</p> es otra forma de mostrar*/}
        </div>

        <button onClick={() => setIsActive(!isActive)}>{isActive ? "Desactivar" : "Activar"}</button>

        </>
    )
}