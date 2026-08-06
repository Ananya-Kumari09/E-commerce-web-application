import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const handleLogin = async () => {

if (!email || !password) {
alert("Please fill all fields");
return;
}

try {
const response = await axios.post(
  "https://e-commerce-web-application-guzr.onrender.com/api/auth/login",
  {
    email,
    password,
  }
);

console.log(response.data);

localStorage.setItem(
  "token",
  response.data.token
);

localStorage.setItem(
  "user",
  JSON.stringify({
    loggedIn: true,
    ...response.data.user,
  })
);

alert("Login successful 🚀");

navigate("/");
}  catch (error) {

  console.log(error.response?.data);
  console.log(error);

  alert(
    error.response?.data?.message ||
    "Login Failed"
  );

}

};

return (
<div style={styles.bg}>
<div style={styles.card}>

    <h2 style={styles.title}>Login</h2>

    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      style={styles.input}
    />

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      style={styles.input}
    />

    <button onClick={handleLogin} style={styles.button}>
      Login
    </button>

    <p style={{ textAlign: "center" }}>
      Don't have an account?{" "}
      <Link to="/register">
        Register
      </Link>
    </p>

  </div>
</div>

);
};

const styles = {
bg: {
height: "100vh",
display: "flex",
justifyContent: "center",
alignItems: "center",
background: "#f5f5f5",
},

card: {
width: "340px",
padding: "25px",
background: "white",
borderRadius: "10px",
boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
display: "flex",
flexDirection: "column",
gap: "12px",
},

title: {
textAlign: "center",
},

input: {
padding: "10px",
borderRadius: "6px",
border: "1px solid #ddd",
},

button: {
padding: "10px",
background: "#111",
color: "white",
border: "none",
borderRadius: "6px",
cursor: "pointer",
},
};

export default Login;