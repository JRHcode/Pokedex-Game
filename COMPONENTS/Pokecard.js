const Pokecard = ({name, type, base_experience, id}) => {
    return (
        <div className="card">
            <h5 className="card-title">{name}</h5>
            <img className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name}/>
            <div className="card-body"> 
                <p className="card-text">Type: {type}</p>
                <p className="card-text">EXP: {base_experience}</p>
            </div>
        </div>
)};