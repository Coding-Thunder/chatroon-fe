import axios from 'axios'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { notification } from 'antd';

const SingnUp: FC = () => {

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()

    const clearFields = () => {
        setEmail("")
        setName("")
        setPassword("")
    }
    const handleSubmit = async () => {
        try {
            const { data: { token } } = await axios.post("http://localhost:5000/auth/signup", { fullName: name, email, password });
            if (token) {
                notification.success({ message: "Sign up Successfull" })
                navigate("/login")
            }
            clearFields()
        } catch (error: any) {
            notification.error({ message: "User Already Exists" })
        }
    }
    return (
        <div>
            <div>
                <span>Name</span>
                <input value={name} onChange={e => setName(e.target.value)} type="text" />
            </div>
            <div >
                <span>Email</span>
                <input value={email} onChange={e => setEmail(e.target.value)} type="text" />
            </div>
            <div >
                <span>Phone</span>
                <input value={password} onChange={e => setPassword(e.target.value)} type="text" />
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default SingnUp