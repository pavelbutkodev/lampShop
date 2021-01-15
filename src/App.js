import React, {useEffect} from 'react';

import Nav from './component/Nav/Nav';

import lamp1 from './img/lamp1.png';
import lamp2 from './img/lamp2.png';

const App = () => {
  useEffect(() => {
    let checkLamp = JSON.parse(localStorage.getItem('lamps'));
    if (checkLamp === null) {
      localStorage.setItem('lamps', JSON.stringify(lamps))
    }
  }, [])

  const lamps = [
    {
      name: 'Gold', price: 243.00, image: lamp1, total: 3, id: 0
    },
    {
      name: 'Blue Desk', price: 250.00, image: lamp2, total: 3, id: 1
    },
  ];

  return (
    <div>
      <Nav/>
    </div>
  )
};

export default App;