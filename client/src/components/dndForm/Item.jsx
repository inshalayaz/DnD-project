import { Divider, Typography } from "@mui/material";
import { useDrag } from "react-dnd";

const Item = ({ id, type }) => {
  const [, drag] = useDrag(() => ({
    type: "INPUT",
    item: { type: type },
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
