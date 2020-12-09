import React from 'react'
import Card from '../../components/Card'

let characters = [
    {name: 'Yami', deck:'Dark Magician/Magician Girl'},
    {name: 'Seto', deck:'N/A'},
    {name: 'Joey', deck:'N/A'},
    {name: 'Mai', deck:'Harpie'},
    {name: 'Tea', deck:'N/A'},
    {name: 'Yugi', deck:'Magnet Warriors'},
    {name: 'Weevil', deck:'Insect'},
    {name: 'Rex', deck:'Dino'},
    {name: 'Mako', deck:'Water'},
    {name: 'Marik', deck:'Dark World with RA'},
    {name: 'Bakura', deck:'Basic Fiend Deck'},
    {name: 'Bandit Keith', deck:'Machines'},
    {name: 'Ishizu', deck:'Dark World'},
    {name: 'Odion', deck:'N/A'},
    {name: 'Pegasus', deck:'Toons'},
    {name: 'Mokuba', deck:'N/A'},
    {name: 'Paradox', deck:'Gate Guardian'},
    {name: 'Arkana', deck:'Dark Magician/Magician Girl'},
    {name: 'Espa Roba', deck:'Jinzo'},
    {name: 'Tristan', deck:'N/A'},
    {name: 'Lumis & Umbra', deck:'Masks'},
]

   
    // 'Seto', 'Joey', 'Mai', 'Tea', 'Yugi', 'Weevil', 'Rex', 'Mako', 'Marik', 'Bakura', 'Bandit Keith', 'Ishizu', 'Odion', 'Pegasus', 'Mokuba', 'Paradox', 'Arkana', 'Espa Roba', 'Tristan', 'Lumis and Umbra']




const DM = () => { 
    return (
        <> 
            <h1>Original Series</h1>
            {/* <ul>
                <li>{characters[0]}- Dark Magicians</li>
            </ul> */}
           
            {characters.map(characters => <Card characters = {characters}/>)}

        </>
    )
}

export default DM