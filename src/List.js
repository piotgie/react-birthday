import React from 'react';

const List = ({ people, id, setPeople, name }) => {

  const removePerson = (id) => {
    const afterRemove = people.filter((person)=> person.id !== id)
    setPeople(afterRemove)
  }

  return (
    <>

       {people.map((person) => {
        const { id, name, age, image } = person;
        return <article key={id} className="person">
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
          <button className="buttonx" onClick={()=>removePerson(id)}>x</button>
        </article>

      })}

    </>
  );
};

export default List;
