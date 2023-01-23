import { FC, useState } from 'react';
import axios from 'axios';
import { notification } from 'antd';

const Login: FC = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const clearFields = () => {
        setEmail("")
        setPassword("")
    }
    const handleSubmit = async () => {
        try {
            const { data: { token } } = await axios.post("http://localhost:5000/auth/signin", { email, password })
            if (token) {
                sessionStorage.setItem("user", token)
                notification.success({ message: "Login Succesfull" })
            }
        } catch (error: any) {
            notification.error({ message: "Invalid Credetials" })
        }
        clearFields()
    }
    return (
        <div>
            <div >
                <span>Email</span>
                <input value={email} onChange={e => setEmail(e.target.value)} type="text" />
            </div>
            <div >
                <span>Password</span>
                <input value={password} onChange={e => setPassword(e.target.value)} type="text" />
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login