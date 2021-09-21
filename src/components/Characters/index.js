import "./style.css"
import { CharCard } from "../CharCard"

export const Characters = ({characterList}) => {
    return(
        <div className="container">


        {characterList.map((char) => 
        <CharCard 
        index={char.id}
        char={char}/>
        
        )}
            
        </div>

       
    )
} 