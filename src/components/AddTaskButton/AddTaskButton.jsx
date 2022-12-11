import React, { useState } from "react";
import AddTask from "../AddTask/AddTask";
import Task from "../Task/Task";
import styles from "../AddTaskButton/AddTaskButton.module.css";
import { useUserAuth } from "../../context/UserAuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddTaskButton = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  const { user } = useUserAuth();
  const isUserLoggedIn = user?.email;

  const navigate = useNavigate();
  const click_To_Open_Model = () => {
    // alert("oo");
    if (isUserLoggedIn) {
      setOpenAddModal(true);
    } else {
      toast.error("Please login  😊");
      navigate("/Login");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.addButton}>
        <button onClick={() => click_To_Open_Model()}>Add task +</button>
        <button onClick={() => navigate("/Home")}>View tasks</button>
      </div>
      {openAddModal && isUserLoggedIn && (
        <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal} />
      )}
    </div>
  );
};

export default AddTaskButton;
