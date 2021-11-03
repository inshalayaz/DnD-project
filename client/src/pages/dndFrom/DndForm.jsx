import React, { useContext, useRef } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Sidebar from "../../components/sidebar/Sidebar";
import Appbar from "../../components/dndForm/Appbar";
import { Button, Typography } from "@mui/material";
import { useDrop } from "react-dnd";
import { DndContext } from "../../context/dndContext/dndContext";
// import { getFields } from "../../context/dndContext/apiCall";
import { v4 as uuidv4 } from "uuid";

const mdTheme = createTheme();

function DashboardContent() {
  const { board, setBoard } = useContext(DndContext);

  const formRef = useRef();

  const [, drop] = useDrop(() => ({
    accept: "INPUT",
    drop: (item) => addImageToBoard(item.type),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = async (type) => {
    const uuid = uuidv4();

    const newItem = { uuid, type };
    setBoard((board) => [...board, newItem]);
  };

  const removeField = (e, uuid) => {
    console.log(board);
    const newBoard = board.filter((field) => uuid !== field.uuid);
    setBoard(newBoard);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        {/* App Bar */}
        <Appbar />

        {/* Sidebar */}
        <Sidebar />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                  ref={drop}
                >
                  <Typography variant="h4">Build Your Form</Typography>
                  <form
                    style={{ marginTop: 20 }}
                    className="Board"
                    onSubmit={handleSubmit}
                    ref={formRef}
                  >
                    {board.map((field) => {
                      // console.log(board);

                      return (
                        <div className="inputs" key={field.uuid}>
                          <input
                            key={field.id}
                            type={field.type}
                            id={field.id}
                            placeholder={field.type}
                          />

                          <Button
                            type="primary"
                            danger
                            onClick={(e) => removeField(e, field.uuid)}
                            className="btn"
                          >
                            Delete
                          </Button>
                          <br />
                        </div>
                      );
                    })}

                    {board.length ? (
                      <button
                        type="submit"
                        value="Submit"
                        style={{ marginTop: "30px" }}
                      >
                        Submit
                      </button>
                    ) : (
                      ""
                    )}
                  </form>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default DashboardContent;
