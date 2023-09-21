import React, { useContext, createContext, useState, useEffect } from "react";

const GlobalContext = createContext();
const CreateContext = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [editOpen, setEditOpen] = useState(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);
  const [selectedValue, setSelectedValue] = useState("option1");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState("");

  const [storage, setStorage] = useState(() => {
    try {
      const data = localStorage.getItem("tasks");
      return data ? JSON.parse(data) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(storage));
  }, [storage]);
  return (
    <GlobalContext.Provider
      value={{
        open,
        handleOpen,
        handleClose,
        setStorage,
        storage,
        editOpen,
        setEditOpen,
        handleEditOpen,
        handleEditClose,
        selectedValue,
        setSelectedValue,
        date,
        setDate,
        description,
        setDescription,
        editId,
        setEditId
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useData = () => useContext(GlobalContext);
export default CreateContext;
