import '../css/funciones.css'
import { Tarea } from '../clases';
import {listaTarea} from '../index.js'
//Referencias al HTML
const divTareaLista = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

export const crearTareaHtml = (tarea)=>{
    const htmlTarea = `
    <li class="${(tarea.completado) ? "completed" : ''}" data-id="${tarea.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(tarea.completado) ? "checked":''}>
            <label>${tarea.descripcion}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;
    const div = document.createElement('DIV');
    div.innerHTML = htmlTarea;

    divTareaLista.append(div.firstElementChild);
    return div;
}

//Eventos
txtInput.addEventListener('keyup',(evento)=>{
    //console.log(evento);
    if(evento.keyCode === 13 && txtInput.value.length > 0 ){
        const nuevaTarea = new Tarea(txtInput.value);
        listaTarea.nuevaTarea(nuevaTarea);
        //console.log(listaTarea);
        crearTareaHtml(nuevaTarea);
        txtInput.value = '';
    }
})

divTareaLista.addEventListener('click',(evento)=>{
    const nombreElemento = evento.target.localName;
    const tareaElemento = evento.target.parentElement.parentElement;
    const tareaId = tareaElemento.getAttribute('data-id');
    
    if(nombreElemento.includes('input')){
        listaTarea.marcarCompletado(tareaId);
        tareaElemento.classList.add('completed')
    }
    //console.log(tareaElemento)
})
