import React, { useState } from "react";
import matrix from '../../img/matrix.jpg';


export const Todolist = () => {
    const [task, setTask] = useState('')
    const [list, setList] = useState(
        ['Levantarse a las 5 de la mañana y hacer 300 burpees.', 
        'Rezar al Dios Brendam Eich por su locura y salud mental, de rodillas y con el portátil en lo más alto.', 
        'Programar, programar y programar hasta que aparezca Matrix en la pantalla.',
        'Cinco minutos de Tinder antes de acostarse.',
        'Emborrachar a Edu el sábado.',]);

    const handleTask = (event) => {
        setTask(event.target.value)
    }

    const deleteOneTask = (item) => {
    console.log(item)
    setList(list.filter((element) => element !== item))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (task.trim() !== '') {
            setList([...list, task]);
            setTask('');
        } else
            setTask('');
    }
    return (
        <>
            <div className="container text-center">
                <h1 className="text-warning text-center border border-danger border-5 mt-3 p-3 d-inline-flex rounded-circle">Pending Tasks</h1>
                <h2 className="text-success text-center border border-success border-2 mt-5 col-3 rounded">New Task</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mt-3">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write a new task, don't forget to make it!"
                            value={task} onChange={handleTask} />
                    </div>
                </form>
                <h2 className="text-primary mt-5">~Tasks list~</h2>
                <ul className="list-group ">
                    {list.map((item, id) => <li key={id} className="list-group-item text-start  hidden-icon">{item}
                        <span className="float-end" onClick={()=> deleteOneTask(item)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash text-danger" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg></span>
                    </li>)}
                    <li className="list-group-item text-end text-muted bg-light">
                        {list.length} tasks
                    </li>
                    <img src={matrix} height='200px' width='300px' className="rounded mx-auto d-block pt-5"/>
                </ul>
            </div>
        </>
    );
};

/* 
1- Siempre que se vaya a usar un imput hacerlo con un <form><form/>, poner el método Onsubmit para que al pulsar el enter haga el mismo
   efecto de un 'botón de enviar'. Hay que adaptar las etiquetas a jsx (className, htmlFor, cerrar cocodrilos...).
2- Para controlar el input declaramos una función/ variable con useState y le ponemos un valor. Value es la variable y el evento que
   la modifica sería onChange. Se puede definir la función dentro de Onchange = {(event => setTask(event.target.value)} o ponerle el
   nombre handle'lo que sea' y definirla arriba como en este ejemplo.
3- Al crear la función handleSubmit se pone siempre event.preventDefault como Regla de Oro, así no refresca la página cada vez que 
   presionemos enter, si no que solo afecta al elemento del array que va a aparecer en la lista.
4- Se crea la <ul>/<li> en la que se van a ir acumulando las tareas escritas en el imput.
5- Arriba definimos un array como estado para que cuando agregues algo en el imput se renderice en el <ul>.
6- En el <li> mostramos la cantidad de elementos del array con '.length' (list.length)
7- En el <ul> hacemos una función .map() para recorrer el array con las tareas 
   {list.map((item, id) => <li className="list-group-item">{item}</li>)}.
8- Con el método 'Spread Operator(...)' vamos a a agregar a setList los elementos de la lista + el siguiente (task)
9- Lo del 'id/key' no lo entiendo muy bien, supongo que cada tarea tendrá un id y así si hay 2 iguales y le damos a borrar solo se
   borra una. Ni idea, copiado tal cual.
10- Cuando le das a enter para meter una tarea en la lista, el input de la tarea tiene que quedarse vacío de nuevo, para eso ponemos
    setTask('') en la función handleSubmit, para que cuando pase la tarea vuelva al estado '' (en blanco).
11- Para evitar que se agreguen elementos vacíos en la list (presionando enter) ponemos una condición de que si task es distinto de
    vacío agrega la lista    if (task !== '') devuelve { setList ...}.
12- Para evitar agregar elementos vacíos (espacios) se usa el método .trim en task (task.trim !== '') elimina los espacios en blanco.
13- Para que vuelva a no tener nada el imput repetimos el setTask('') fuera del if, es decir else {setTask('')}.
14- Se inserta un icono 'trash' en la <li> para que cada vez que se escriba una tarea y se pulse enter aparezca la nueva tarea con el 
    icono de borrar. Con css y las propiedades hidden y hover solo se ve el icono si pasamos el ratón por encima de cualquier parte de 
    la <li>.
15- Para que el icono 'borre' la tarea se define el evento Onclick que va a llamar a una función que definimos arriba (deleteTask).
    La función en sí no borra nada, si no que devuelve un array con toda la lista de las tareas menos la que hemos quitado. Para ello
    se usa el 'método filter()', (list.filter((element) => element !== item)) pero sería incompleto ya que así solo filtra, pero el 
    elemento sigue en el array inicial. Para quitarlo definitivamente tenemos que meterlo todo en el setList.
*/
