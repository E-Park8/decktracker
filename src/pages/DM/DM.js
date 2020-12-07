import React from 'react'
import Card from '../../components/Card'

let characters = [
    {name: 'Yami', deck:'Dark Magician/Magician Girl'},
    {name: 'Seto', deck:'N/A'}]
   
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