import React, { useState } from 'react';
import List from './List';
import Modal from './Modal';

function App({id, name}) {

  const [people, setPeople] = useState([]);
  const [ isShowing, setIsShowing] = useState(false);

  
  function toggle () {
      setIsShowing(!isShowing);
  }

  const addPeople = () => {
    toggle()
  }

  return <main>
      {isShowing && <Modal toggle={toggle} people={people} setPeople={setPeople} />}
    
    <section className="container">
      <h3> you have {people.length} birthdays today </h3>
      <List people={people} setPeople={setPeople} id={id} />
      <button onClick={()=> addPeople()}>add someone</button>
      <button onClick={()=> setPeople([])}>clear all</button>
    </section>

  </main>;

}

export default App;
