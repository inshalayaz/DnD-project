import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Sidebar from "../../components/dndForm/Sidebar";
import Appbar from "../../components/dndForm/Appbar";
import { Button, Typography } from "@mui/material";
import { useDrop } from "react-dnd";

const mdTheme = createTheme();

const FieldList = [
  {
    id: 1,
    type: "text",
  },
  {
    id: 2,
    type: "radio",
  },
  {
    id: 3,
    type: "checkbox",
  },
  {
    id: 4,
    type: "email",
  },
];

function DashboardContent() {
  const [board, setBoard] = useState([]);
  const [, drop] = useDrop(() => ({
    accept: "INPUT",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const item = FieldList.filter((field) => id === field.id);
    setBoard((board) => [...board, item[0]]);
  };

  const removeField = (e, id) => {
    console.log(board);
    const newBoard = board.filter((field) => id !== field.id);
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
                  >
                    {board.map((field) => {
                      return (
                        <div className="inputs">
                          <input
                            type={field.type}
                            id={field.id}
                            placeholder={field.type}
                          />

                          <Button
                            type="primary"
                            danger
                            onClick={(e) => removeField(e, field.id)}
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
