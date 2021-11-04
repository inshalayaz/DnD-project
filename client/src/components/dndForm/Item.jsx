import { Grid, Typography } from "@mui/material";
import { useDrag } from "react-dnd";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

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
        <Grid item xs={12}>
          <PersonOutlineOutlinedIcon />
        </Grid>
        {type.toUpperCase()}
      </Typography>
      {/* <Divider /> */}
    </div>
  );
};

export default Item;
