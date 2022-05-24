const initialState = [{
    id: 1,
    todo: "Comprar pan",
    done: false,
}]

//cuando esta en constante cambio se recomienda utilizar todoReducer
const todoReducer = (state = initialState, action) => {
    if (action?.type === "agregar") {
        return [...state, action.payload];
    }
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: "Comprar leche",
    done: false,
}

const agregarTodoAction = {
    type: "agregar",
    payload: newTodo
}

todos = todoReducer(todos,agregarTodoAction);

console.log(todos);