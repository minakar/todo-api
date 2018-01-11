import axios from "axios";
import { createAction } from "redux-actions";

export const fetchTodosRequest = createAction("FETCH_TODOS_REQUEST");
export const fetchTodosSuccess = createAction("FETCH_TODOS_SUCCESS", todos => ({
  todos
}));

export const fetchTodosFail = createAction("FETCH_TODOS_FAIL", error => ({
  error
}));

export const fetchTodos = () => {
  return dispatch => {
    dispatch(fetchTodosRequest());
    axios
      .get("/api/todos")
      .then(json => {
        dispatch(fetchTodosSuccess(json.data));
      })
      .catch(error => {
        fetchTodosFail(error);
      });
  };
};

export const storeTodoRequest = createAction("STORE_TODO_REQUEST");
export const storeTodoSuccess = createAction("STORE_TODO_SUCCESS", todo => ({
  todo
}));
export const storeTodoFail = createAction("STORE_TODO_FAIL");

export const storeTodo = text => {
  return function(dispatch) {
    dispatch(storeTodoRequest());
    axios
      .post("/api/todos", {
        text
      })
      .then(response => {
        dispatch(storeTodoSuccess(response.data));
      })
      .catch(error => {
        dispatch(storeTodoFail());
      });
  };
};
