import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import shortid from 'shortid';

function App() {

  const  [tarea, setTarea] = React.useState('')
  const  [tareas, setTareas] = React.useState([])


  const agregarTarea = e => {
    e.preventDefault()
    console.log( tarea )

    if( !tarea.trim()) {
       console.log('Esta vacio  ')
       return
    }

    setTareas( [
      ...tareas,
      {id:shortid.generate(), nombreTarea:tarea}
    ])

    setTarea('')
    console.log('ya limpio')
   
  }

  const eliminarTarea = (id) => {
    const arrayFiltrado = tareas.filter( item => item.id !== id )
    setTareas( arrayFiltrado )
  }

  
  return (
    <div className="container mt-5">
      <h3 className="text-center">CRUD SIMPLE</h3>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Tareas</h4>
          <ul className="list-group">

            {
              tareas.map( item => ( 
                <li className="list-group-item" key={item.id}>
                <span className="lead">{ item.nombreTarea}</span>
                <button className="btn btn-danger btn-sm float-right"
                        onClick={ () => eliminarTarea( item.id) }>Eliminar</button>
                <button className="btn btn-warning btn-sm mx-2 float-right">Editar</button>            
                </li>
              ))
            }
            
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Formulario</h4>
            <form onSubmit={ agregarTarea}>
              <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Ingrese Tarea"
                  onChange={ e => setTarea( e.target.value )}
                  value={tarea}
              />
              <button className="btn btn-dark btn-block" type="submit">Agregar</button>
            </form>
          </div>
      </div>
    </div>
  );
}

export default App;
