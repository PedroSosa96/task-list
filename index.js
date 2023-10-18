const formulario = document.querySelector('#formulario');
const input = document.querySelector('#input');
const inputAdd = document.querySelector('#input-add');
const boton = document.querySelector('#boton');
const list = document.querySelector('#list');


let taskValidation = false

inputAdd.addEventListener('input', e => {

const boton1 = inputAdd.parentElement.children[1];

console.log('evento');

    if (inputAdd.value === '') {
console.log('deshabilitar');

    boton1.setAttribute('disabled',true);
    }   else {
console.log('habilitar');

        boton1.removeAttribute('disabled')
    }
}
);

console.log('boton1')

formulario.addEventListener('submit', e => {
    e.preventDefault();
    const newContact = document.createElement('li');
    newContact.classList.add('list-item');
    newContact.innerHTML = `

    <div class="li-row">
    <div id="borrar">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="delete-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
    </div>
    <input type="text" id="listName" value="${inputAdd.value}" class="no-edit" readonly>
    <div id="agregar">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="check-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
    </div>
    </div>

    
    `;
  
    console.log('imprimir tarea'),
    // console.log('list-btn');
  
   
    list.append(newContact);
    inputAdd.value = '';

    // desactivo el boton de agregar    
    boton.setAttribute('disabled',true);

  });

  
    // creo el evento para los botones de editar y agregar en el li
    list.addEventListener('click', e => {

        // boton de borrar
        if (e.target.closest('.delete-icon')) {
            e.target.closest('.delete-icon').parentElement.parentElement.remove();
            // localStorage.setItem('.tareas'), list.innerHTML // validar con el profesor, si el local storage va aca o a lo ultimo de mi co
        };
     
        console.log('delete-task')

        if(e.target.closest('.check-icon')) {
            const editBtn = e.target.closest('.check-icon');
            const tarea = editBtn.parentElement.parentElement.children[1];
            
        
            if(!tarea.classList.contains('edit-task')){
            tarea.removeAttribute('readonly');
            tarea.classList.remove('no-edit');
            tarea.classList.add('edit-task');

            console.log('edit-task')
        }
        
        else {
            tarea.setAttribute('readonly', true);
            tarea.classList.add('no-edit');
            tarea.classList.remove('edit-task');
    
            console.log('fuap');
            localStorage.setItem('contacts', list.innerHTML);

        }
    }
});
    