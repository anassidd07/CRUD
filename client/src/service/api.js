import axios from "axios";

const URL = "http://localhost:8000";


  export const getAds = async () => {
    const res = await axios.get("http://localhost:8000/home");
    return res.data;
  };

  export const getUser = async (id) => {
    console.log(id);
    const res = await axios.get(`http://localhost:8000/edit/${id}`);
    return res.data;
  };


export const addUser = (data, navigate) => {
  const { name, email, password, reEnterPassword } = data;

  if (name && email && password && password === reEnterPassword) {
    axios.post(`${URL}/add`, data).then((res) => {
      alert(res.data.message);
      navigate("/login");
    });
  } else {
    alert("invalid iput");
  }
};

export const loginUser = (data, navigate, setLoginUser) => {
  const { email, password } = data;
  
  if (email && password) {
    axios.post(`${URL}/login`, data).then((res) => {
      alert(res.data.message);
      if (res.status === 200) {
        //setLoginUser(res.data.user);
        navigate("/home");
      }
    });
  } else {
    alert("invaalid iput");
  }
};


export const updateUser = async(data, navigate, id) => {
  const { name, email, password, reEnterPassword } = data;
  console.log("editconsole",id);
  if (name && email && password && password === reEnterPassword) {
    await axios.post(`${URL}/update/${id}`, data).then((res) => {
      alert(res.data.message);
      navigate("/home");
    });
  } else {
    alert("invalid iput");
  }
};

export const delUser = async (id) => {
  console.log(id);
  const res = await axios.delete(`http://localhost:8000/delete/${id}`);
  alert (res.data.message);
  window.location.reload();
};