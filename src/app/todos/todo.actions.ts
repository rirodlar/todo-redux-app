import {createAction, props} from '@ngrx/store'

export const crear = createAction(
    '[TODO] crear todo',
     props<{ texto: string }>()
);

export const toggle = createAction(
    '[TODO] Toogle todo',
     props<{ id: number }>()
);

export const editar = createAction(
    '[TODO] Editar Todo',
     props<{ id: number, texto: string }>()
);


export const borrar = createAction(
    '[TODO] Borrar Todo',
     props<{ id: number }>()
);

export const toogleAll = createAction(
    '[TODO] toogleAll',
     props<{ completado: boolean }>()
);

export const limpiarTodo = createAction(
  '[TODO] Limpiar Todo'
);

