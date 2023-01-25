import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Button,
  Typography,
  styled,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addUser, getUser, updateUser } from "../../service/api";

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


const EditUser = () => {
  
  const [user, setUser] = useState(defaultValue);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [oldUser, setOldUser] = useState();
  console.log('first',oldUser?.data?.name)
  const editUserDetails = async () => {
    await updateUser(user, navigate,id);
  };
  // 
  const loadUser = async () => {
    const response = await getUser(id);
    setOldUser(response);
    setUser(response?.data);
  };
  
  useEffect( () => {
    
    loadUser();
    
    console.log('useeffect')
  }, []);
  
  const onValueChange = (e) => {
     setUser({ ...user, [e.target.name]: e.target.value });
   console.log(user);
  };

  const navigate = useNavigate();

  
  const validateEmail = (e) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
      setError(null);
      return true;
    } else {
      setError("Email is invalid");
    }
  };
  

  return (
    <Box>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        {console.log('second',oldUser?.data?.name)}
        <Input
          placeholder="Enter Your Name"
            onChange={(e) => onValueChange(e)}
          name="name"
          value={user.name}
        />
      </FormControl>
      {console.log('third',oldUser?.data?.name)}
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
           value={user.email}
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
           value={user.password}
          placeholder="Enter Your Password"
          onChange={(e) => onValueChange(e)}
          name="password"
        />
      </FormControl>
      <FormControl>
        <InputLabel>Confirm Password</InputLabel>
        <Input
          //  value={user.password}
          placeholder="Confirm Password"
          onChange={(e) => onValueChange(e)}
          name="reEnterPassword"
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => editUserDetails()}>
          UPDATE USER
        </Button>
      </FormControl>
    </Box>
  );
};

export default EditUser;
