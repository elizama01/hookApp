// import React from "react";
// import ReactDOM from "react-dom";
// import { CounterWithCustomHook } from "./components/01-useState/CounterWithCustomHook";
// // import { CounterApp } from "./components/01-useState/CounterApp";
// // import { HookApp } from "./HookApp";

// // const root = ReactDOM.createRoot(document.getElementById("root"));
import { createRoot } from 'react-dom/client';
// import { CallBackHook } from './components/06-memos/CallBackHook';
// import { Padre } from './components/07-tarea-memo/Padre';
// import { TodoApp } from './components/08-useReducer/TodoApp';
import { MainApp } from './components/09-useContext/MainApp';
// import { MemoHook } from './components/06-memos/MemoHook';
// // ReactDOM.render(
// //     <CounterWithCustomHook />,
// //     document.getElementById('root')
// // );
// const divRoot = document.querySelector('#root')
// ReactDOM.render( <CounterWithCustomHook />, divRoot );
// import { SimpleForm } from "./components/02-userEffect/SimpleForm";
// import { FormWithCustomHook } from './components/02-userEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { Layout } from './components/0-5-useLayoutEffects/Layout';
// import { Memorize } from './components/06-memos/Memorize';
// import'./components/08-useReducer/intro-reducer';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<MainApp/>);