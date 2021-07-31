import React, { useState } from 'react'
import {v4 as uuid} from 'uuid';


const Modal = ({ people, toggle, setPeople }) => {



    const [id, setId] = useState(0)
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();
        setPeople((oldPeople) => [...oldPeople, {
            id: uuid(),
            name: name,
            age: age,
            image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
        }
        ])

        toggle();
    };

    return (
        <>

            <div className="overlay"></div>
            <div className="modal">
                <div className="close" onClick={() => toggle()}>X</div>

                <form onSubmit={handleSubmit} >

                    <label htmlFor="name">Name:</label>
                    <input type="text" name={name} placeholder="full name" onChange={(e) => setName(e.target.value)} />

                    <label htmlFor="age">Age:</label>
                    <input type="text" age={age} placeholder="age" onChange={(e) => setAge(e.target.value)} />

                    <button type="submit" onClick={() => setId(id + 1)}>ADD</button>
                </form>

            </div>



        </>
    )
}

export default Modal
