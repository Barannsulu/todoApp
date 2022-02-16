import React, { useState } from "react";
import { Button, InputLabel, FormControl, Input } from "@material-ui/core";
const ListItem = ({ todo }) => {
  const [lineThrough, setLineThrough] = useState(false);
  const [check, setCheck] = useState(true);

  return (
    <div>
      <span style={{ textDecoration: lineThrough ? "line-through" : null }}>
        {todo}
      </span>
      <Button
        onClick={() => {
          setLineThrough(!lineThrough);
          setCheck(!check);
          console.log(check);
        }}
        color="primary"
      >
        CHECKED
      </Button>
    </div>
  );
};

export default ListItem;
