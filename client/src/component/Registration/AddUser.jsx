import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Button,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../service/api";

const Box = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  name: "",
  email: "",
  password: "",
  reEnterPassword: "",
};

const AddUser = () => {
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  const validateEmail = (e) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
      setError(null);
      return true;
    } else {
      setError("Email is invalid");
    }
  };

  const [user, setUser] = useState(defaultValue);
  const [error, setError] = useState(null);

  const addUserDetails = async () => {
    await addUser(user, navigate);
  };
  return (
    <Box>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => onValueChange(e)}
          name="name"
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onBlur={(e) => {
            validateEmail(e);
          }}
          placeholder="Enter Your Email"
          onChange={(e) => onValueChange(e)}
          name="email"
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </FormControl>
      <FormControl>
        <InputLabel>Password</InputLabel>
        <Input
          placeholder="Enter Your Password"
          onChange={(e) => onValueChange(e)}
          name="password"
        />
      </FormControl>
      <FormControl>
        <InputLabel>Confirm Password</InputLabel>
        <Input
          placeholder="Confirm Password"
          onChange={(e) => onValueChange(e)}
          name="reEnterPassword"
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => addUserDetails()}>
          ADD USER
        </Button>
      </FormControl>
    </Box>
  );
};

export default AddUser;
