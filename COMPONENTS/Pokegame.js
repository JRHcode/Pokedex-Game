// Define pokemonList in Pokegame.js
const pokemonList = [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
];

const Pokegame = () => {
    
    const shuffledPokemonList = [...pokemonList].sort(() => Math.random() - 0.5);

    
    const hand1 = shuffledPokemonList.slice(0, 4);
    const hand2 = shuffledPokemonList.slice(4, 8);
    // Calculate the total EXP for each hand
    const totalExpHand1 = hand1.reduce((acc, curr) => acc + curr.base_experience, 0);
    const totalExpHand2 = hand2.reduce((acc, curr) => acc + curr.base_experience, 0);

    //Determine the winning hand
    const isHand1Winner = totalExpHand1 > totalExpHand2;
    const isHand2Winner = totalExpHand2 > totalExpHand1;

    return (
        <div className="hands">
            <div>
                <h2>CPU Hand (Total EXP: {totalExpHand1})</h2>
                <Pokedex pokemonList={hand1} isWinner={isHand1Winner}/>
                <p></p>
            </div>
            <div>
                <h2>Your Hand (Total EXP: {totalExpHand2})</h2>
                <Pokedex pokemonList={hand2} isWinner={isHand2Winner}/>
            </div>
        </div>
    );
};

