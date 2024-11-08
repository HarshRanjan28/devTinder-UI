import React, {useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addUser} from "../utils/userSlice";
import {BASE_URL} from "../utils/constant";

const Login = () => {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [error, SetError] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post(BASE_URL + "/login", {
                emailId,
                password
            }, {
                withCredentials: true
            })
            dispatch(addUser(res.data));
            navigate("/feed");
        }
        catch (err) {
            SetError(err?.response?.data);
            console.log(err);
        }

    }

    return (
        <div className="flex justify-center mt-10">
            <div className="card bg-slate-300 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Login</h2>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input
                            type="email"
                            placeholder="Type Email"
                            className="input input-bordered w-full max-w-xs"
                            value={emailId}
                            onChange={(e) => setEmailId(e.target.value)}
                        />
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <input
                            type="email"
                            placeholder="Type Email"
                            className="input input-bordered w-full max-w-xs"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </label>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
