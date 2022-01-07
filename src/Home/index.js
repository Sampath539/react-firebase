import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
    }, []);
    return (
        <div>
            Home Component
            {
                users && users.map((user, index) =>
                    <div key={index}>{user.name} -- {user.email}</div>
                )
            }
        </div>
    )
}
export default Home;