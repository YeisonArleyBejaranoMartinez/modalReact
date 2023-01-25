// componente usando useReducer
import { useReducer, useRef } from 'react'

const ListaTareas = () => {
    const inputRef = useRef()
    const [tasks, dispatch] = useReducer((state = [], action) => {
        switch (action.type) {
            case 'add_task': {
                return [...state,
                {
                    id: state.length,
                    tittle: action.tittle
                }
                ]
            }
            case'remove_task' :{
                return state.filter((task, index)=>index != action.index)

            }
            default: {
                return state;
            }
        }
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'add_task',
            tittle: inputRef.current.value
        })


    }
    return (
        <div>
            <h1>Lista de tareas</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Tarea</label>
                <input type="text" name='title' ref={inputRef} />
                <input type="submit" value="enviar" />
            </form>
            <div className='task'>
                {
                    tasks && tasks.map((task, index) => (
                        <div key={index}>
                            <p>{task.tittle}</p>
                            <button onClick={()=>dispatch({type: 'remove_task', index})}>Borrar</button>
                        </div>
                    )
                    )
                }

            </div>
        </div>

    )
}

export default ListaTareas