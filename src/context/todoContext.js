import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todomsg: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todomsg) => {},
  updateTodo: (id, todomsg) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const Todoprovider = TodoContext.Provider;
