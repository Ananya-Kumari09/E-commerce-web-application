import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {

const navigate = useNavigate();

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const handleRegister = async (e) => {

e.preventDefault();

if (!name || !email || !password || !confirmPassword) {
  alert("Please fill all fields");
  return;
}

if (password !== confirmPassword) {
  alert("Passwords do not match");
  return;
}

try {

const response = await axios.post(
"https://e-commerce-web-application-guzr.onrender.com/api/auth/register",
{
name,
email,
password,
}
);

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

alert("Account created successfully 🚀");

navigate("/");

} catch (error) {

alert(
error.response?.data?.message ||
"Registration Failed"
);

}

};

return (
<div className="auth-page">

  <div className="auth-box">

    <h1>Create Account</h1>

    <p>
      Join NOVA and start shopping today.
    </p>

    <form
      className="auth-form"
      onSubmit={handleRegister}
    >

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) =>
          setConfirmPassword(e.target.value)
        }
      />

      <button type="submit">
        Register
      </button>

    </form>

    <span>
      Already have an account?{" "}
      <Link to="/login">
        Login
      </Link>
    </span>

  </div>

</div>

);

};

export default Register;