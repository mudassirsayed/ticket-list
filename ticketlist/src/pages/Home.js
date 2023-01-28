import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    marginTop: 100,
    minWidth: 900,
  },
});
const useButtonStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
export default function Home() {
  const classes = useStyles();
  const buttonStyles = useButtonStyles();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  let navigate = useNavigate();
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      dispatch(deleteUser(id));
    }
  };
  //NOTE : HERE IN ONCLICK OF HANDLEDELETE BUTTON I WAS NOT USING CALLBACK FUNCTION - onClick{handleDeleteUser(user.id)}
  // SO IT WAS DIRECTLY DELETING ALL THE DATA WITHOUT
  // PERFORMING ANY EVENT SO I HAVE ADDED CALLBACK FUNCTION TO DELETE SPECIFIC USER - onClick{() => handleDelete(user.id)}
  return (
    <div>
      <div className={buttonStyles.root}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/addticket")}
        >
          CREATE TICKET
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Ticket Id</StyledTableCell>
              <StyledTableCell align="center">Type</StyledTableCell>
              <StyledTableCell align="center">Module</StyledTableCell>
              <StyledTableCell align="center">Priority</StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">RiseIn</StyledTableCell>
              <StyledTableCell align="center">DeliverIn</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <StyledTableRow key={user.ticketId}>
                  <StyledTableCell component="th" scope="row">
                    {user.ticketId}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.type}</StyledTableCell>
                  <StyledTableCell align="center">
                    {user.module}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.priority}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.title}</StyledTableCell>
                  <StyledTableCell align="center">
                    {user.riseIn}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.deliverIn}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.status}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <div className={buttonStyles.root}>
                      <ButtonGroup
                        variant="contained"
                        aria-label="contained primary button group"
                      >
                        <Button
                          style={{ marginRight: "5px" }}
                          color="secondary"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          Delete
                        </Button>
                        <Button
                          color="primary"
                          onClick={() => navigate(`/editticket/${user.id}`)}
                        >
                          Edit
                        </Button>
                      </ButtonGroup>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
