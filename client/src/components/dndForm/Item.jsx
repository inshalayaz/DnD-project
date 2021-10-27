import { Divider, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const Item = ({ id, type }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "INPUT",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div>
      <Typography variant="body1" key={id} style={{ marginTop: 20 }} ref={drag}>
        {type}
      </Typography>
      <Divider />
    </div>
  );
};

export default Item;
