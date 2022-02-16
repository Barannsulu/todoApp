import React, { useState } from "react";
import ListItem from "./ListItem";
import "./List.css";
import { Button, Input } from "@material-ui/core";
const List = () => {
  const [todos, setTodos] = useState([
    "İş Bulunacak",
    "Evlenilecek",
    "Saygınlık",
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  // clear todos window confirm
  const clearTodos = () => {
    const clear = window.confirm(
      "This will clear all your todos, are you sure you want to do this?"
    );
    if (clear) {
      setTodos([]);
    }
  };

  return (
    <div className="list">
      <form action="">
        <Input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="What is the plan?"
        />
        <Button
          type="submit"
          as
          disabled={!input}
          color="primary"
          variant="contained"
          onClick={handleSubmit}
        >
          Add to list
        </Button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <ListItem todo={todo} check={false} />
          </li>
        ))}
      </ul>
      <Button
        onClick={clearTodos}
        color="secondary"
        variant="contained"
        disabled={!todos.length}
      >
        Clear
      </Button>
    </div>
  );
};

export default List;
