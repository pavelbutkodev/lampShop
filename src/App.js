import React,{useEffect} from 'react';

import Nav from './component/Nav/Nav';

import lamp1 from './img/lamp1.png';
import lamp2 from './img/lamp2.png';

const App = () => {
    useEffect(()=>{
        let check_lamp = JSON.parse(localStorage.getItem('lamps'));
        if (check_lamp === null) {
            localStorage.setItem('lamps', JSON.stringify(lamps))
        }
    },[])

    const lamps = [
        {
            name: 'Gold', price: 243.00, image: lamp1, total: 2, id:1
        },
        {
            name: 'Blue Desk', price: 250.00, image: lamp2, total: 1, id:2
        },
    ];

    return(
        <div>
            <Nav lamps={lamps}/>
        </div>
    )
};

export default App;