import axios from "axios";
import { useState } from "react";
import "./App.css";

const BASE_URL = "https://userapp-backend-clean-2.onrender.com";

function App() {

    // Form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    // Users list
    const [users, setUsers] = useState([]);

    // Submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            name: name,
            email: email,
            phone: phone,
            password: password
        };

<<<<<<< HEAD
  axios.post(`${BASE_URL}/api/users`, user)

=======
        axios.post("https://userapp-backend-clean-2.onrender.com/api/users", user)
>>>>>>> b8cdd820ec6a6c3bd9ce0970391049fe2f487eaa
            .then(() => {
                alert("User Added Successfully!");

                // Clear form
                setName("");
                setEmail("");
                setPhone("");
                setPassword("");

            })
            .catch(err => {
                console.log(err);
                alert("Error while saving user");
            });
    };

    // View users
    const handleView = () => {
<<<<<<< HEAD
axios.get(`${BASE_URL}/api/users`)
=======
        axios.get("https://userapp-backend-clean-2.onrender.com/api/users")
>>>>>>> b8cdd820ec6a6c3bd9ce0970391049fe2f487eaa
            .then(res => {
                setUsers(res.data);
            })
            .catch(err => {
                console.log(err);
                alert("Error while fetching users");
            });
    };

    return (
        <div className="container glass fade-in float">

            <h2>User Registration</h2>

            <form onSubmit={handleSubmit} className="form">

                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Add User</button>

            </form>

            <button className="view-btn" onClick={handleView}>
                View Users
            </button>

            {
                users.length > 0 && (

                    <table>

                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Password</th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.password}</td>
                                </tr>
                            ))
                        }
                        </tbody>

                    </table>
                )
            }

        </div>
    );
}

export default App;
