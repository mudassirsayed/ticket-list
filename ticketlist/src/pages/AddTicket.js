import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
  main: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

function AddTicket() {
  const classes = useStyles();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [state, setState] = useState({
    ticketId: "",
    type: "",
    module: "",
    priority: "",
    title: "",
    riseIn: "",
    deliverIn: "",
    status: "",
  });
  const [error, setError] = useState("");

  const { ticketId, type, module, priority, title, riseIn, deliverIn, status } =
    state;
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !ticketId ||
      !type ||
      !module ||
      !priority ||
      !title ||
      !riseIn ||
      !deliverIn ||
      !status
    ) {
      setError("Please fill all the input fields");
    } else {
      dispatch(addUser(state));
      navigate("/");
      setError("");
    }
  };
  return (
    <div className={classes.main}>
      <Button
        style={{ width: "100px ", marginTop: "20px", alignSelf: "center" }}
        variant="contained"
        color="secondary"
        onClick={() => navigate("/")}
      >
        Go Back
      </Button>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <h2>Add Ticket</h2>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="ticketId"
          value={ticketId}
          name="ticketId"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="type"
          value={type}
          name="type"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="module"
          value={module}
          name="module"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="priority"
          value={priority}
          name="priority"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="title"
          value={title}
          name="title"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="riseIn"
          value={riseIn}
          name="riseIn"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="deliverIn"
          value={deliverIn}
          name="deliverIn"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="status"
          value={status}
          name="status"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <Button
          style={{ width: "100px", marginTop: "30px", marginLeft: "150px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default AddTicket;
