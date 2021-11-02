import { createContext, useState } from "react";

export const DndContext = createContext({});

export const DndContextProvider = ({ children }) => {
  const [board, setBoard] = useState([]);
  const [fields, setFields] = useState([]);
  const [fieldArr, setFieldArr] = useState([]);
  return (
    <DndContext.Provider
      value={{ board, setBoard, fields, setFields, fieldArr, setFieldArr }}
    >
      {children}
    </DndContext.Provider>
  );
};
