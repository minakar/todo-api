import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchTodos, storeTodo } from "../actions";
import linkState from "linkstate";
import styled from "styled-components";

const Title = styled.h1`
  color: #111;
  border-bottom: 1px solid #bbb;
  padding-bottom: 6px;
  margin-bottom: 1em;
`;

const Container = styled.div`
  max-width: 35em;
  margin: 0 auto;
  padding: 2em 0 0 2em;
`;

const Button = styled.button`
  font-size: 1em;
  padding-left: 1em;
  padding-right: 1em;
  background-color: #222;
  color: #fff;
  border: #333;
  &:hover {
    color: #f0f0f0;
  }
`;

class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }
  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos();
  }

  handleSubmit = e => {
    this.props.storeTodo(e.target.text.value);
    this.setState({ text: "" });
  };

  render() {
    let todos = this.props.todos;
    return (
      <Container>
        <Title>todo-api client</Title>
        <form
          className="clearfix"
          action="javascript:"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            placeholder="New Todo"
            name="text"
            value={this.state.text}
            onChange={linkState(this, "text")}
          />
          <Button type="submit">Add</Button>
        </form>
        <ul>
          {todos.map(todo => {
            return <li key={todo.id}>{todo.text}</li>;
          })}
        </ul>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const items = state.todos.items;
  const is_fetching = state.todos.is_fetching;

  return {
    todos: items,
    is_fetching
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchTodos, storeTodo }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
