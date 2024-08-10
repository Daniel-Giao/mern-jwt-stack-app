import { useState } from "react";

const Signup = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password);
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>
            <label>Email:</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button>Sign up</button>
        </form>
    );
}

export default Signup;