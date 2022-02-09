import React, { useReducer, useRef } from 'react';


const initialState = { patients: [] };

function reducer(state, action) {
    switch (action.type) {
        case 'Add':
            const newPatient = { name: action.name }
            const allpatients = [...state.patients, newPatient]
            return { patients: allpatients };
        case 'Remove':
            const rem = state.patients.filter(p => p.name !== action.name)

            return { patients: rem }

        default:
            throw new Error();
    }
}
const PracticeReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const nameref = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'Add', name: nameref.current.value })
        nameref.current.value=''

    }
    const RemoveP = (name) => {
        dispatch({ type: 'Remove', name: name })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameref}></input>
            </form>

            {
                state.patients.map(p => <li key={'ad'} onClick={()=>RemoveP(p.name)}>{p.name}</li>)
            }

        </div>
    );
};

export default PracticeReducer;