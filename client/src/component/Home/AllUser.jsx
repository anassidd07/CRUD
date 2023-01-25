import { useState } from "react";
import { useEffect } from "react";
import { delUser, getAds } from "../../service/api";
import "./alluser.css";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { Link } from "react-router-dom";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

const AllUser = () => {
  
  const [user, setUser] = useState();
  const getAllUsers = async () => {
    const response = await getAds();
    setUser(response);
  };

  const deleteUser = async (id) => {
    await delUser(id);
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Password</TableCell>
            <TableCell align="center">UPDATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ justifyContent: "space-between" }}>
          {user?.data?.map((e) => {
            return (
              <TableRow>
                <TableCell align="center">{e._id}</TableCell>
                <TableCell align="center">{e.name}</TableCell>
                <TableCell align="center">{e.email}</TableCell>
                <TableCell align="center">{e.password}</TableCell>
                <TableCell>
                  <Button variant="contained" style={{marginRight: 10}} component={Link} to={`/edit/${e._id}`}>Edit</Button>
                  <Button variant="contained" color="secondary" onClick={() => deleteUser(e._id)}>Delete</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllUser;
