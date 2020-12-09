import React from 'react'
import Card from '../../components/Card'

let characters = [
    {name: 'Jaden', deck:'Elemental Heroes, Neos'},
    {name: 'Aster', deck:'Destiny Heroes'}]
   
    // 'Seto', 'Joey', 'Mai', 'Tea', 'Yugi', 'Weevil', 'Rex', 'Mako', 'Marik', 'Bakura', 'Bandit Keith', 'Ishizu', 'Odion', 'Pegasus', 'Mokuba', 'Paradox', 'Arkana', 'Espa Roba', 'Tristan', 'Lumis and Umbra']




const GX = () => { 
    return (
        <> 
            <h1>GX</h1>
            {/* <ul>
                <li>{characters[0]}- Dark Magicians</li>
            </ul> */}
           
            {characters.map(characters => <Card characters = {characters}/>)}

        </>
    )
}

export default GX