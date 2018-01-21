import * as actions from "../actions";
import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

const defaultState = {
  items: [],
  is_fetching: false
};

const todos = handleActions(
  {
    [actions.fetchTodosRequest](state) {
      return { ...state, is_fetching: true };
    },

    [actions.fetchTodosSuccess](state, { payload: { todos } }) {
      return { ...state, items: todos, is_fetching: false };
    },
    [actions.storeTodoRequest](state) {
      return state;
    },
    [actions.storeTodoSuccess](state, { payload: { todo } }) {
      return { ...state, items: [todo, ...state.items] };
    }
  },
  defaultState
);

const rootReducer = combineReducers({ todos });

export default rootReducer;
