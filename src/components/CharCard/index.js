import "./style.css"

export const CharCard = ({char: {name, image, species, status}}) => {
    return(
        <>
        
        {status === "Alive" ? (
            
        <div className="card-alive">
            <label>{name}</label>
            <img className="picture" src={image} alt={name}></img>
            <p>{species}</p>
        </div>

        ) : (

        <div className="card-dead">
            <label>{name}</label>
            <img className="picture" src={image} alt={name}></img>
            <p>{species}</p>
        </div>
        )}
        
        </>
    )
}