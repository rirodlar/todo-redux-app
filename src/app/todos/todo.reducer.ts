import { createReducer, on, Action } from '@ngrx/store';
import {borrar, crear, editar, limpiarTodo, toggle, toogleAll} from './todo.actions';
import {Todo} from './models/todo.model';


export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('comprar traje de iron man'),
  new Todo('robar escudo de capitan america')

]

const _todoReducer = createReducer(estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(limpiarTodo, (state) => state.filter(todo => !todo.completado)),

  on(borrar, (state, {id}) => state.filter(todo => todo.id !== id)),

  on(toogleAll, (state, {completado}) => state.map(todo => {
    return{
      ...todo,
      completado: completado
    }
  })),



//siempre retornar el state
//estaria errono => state[1].completado => se estaria manipualando el array
//romper la referencia del state y devolver un nuevo objeto
  on(toggle, (state, { id }) => {

          return state.map( todo => {  //regresa un nuevo arreglo
            if(todo.id === id){
              //todo.completado = !todo.completado;  (objeto pasado por referencia)
                return{
                  ...todo, //operador
                  completado: ! todo.completado
              }
        }else{
          return todo;
        }
      });
    }),

    on(editar, (state, { id, texto }) => {

      return state.map( todo => {  //regresa un nuevo arreglo
        if(todo.id === id){
          //todo.completado = !todo.completado;  (objeto pasado por referencia)
            return{
              ...todo, //operador
              texto: texto
          }
    }else{
      return todo;
    }
  });
})
);

export function todoReducer(state, action){
  return _todoReducer(state, action);
}
