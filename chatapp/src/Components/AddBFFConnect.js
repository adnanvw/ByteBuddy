import axios from 'axios';
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import './BFFConnect.css'

function AddByteBuddy({addchattoggler,addchattoggle}) {

    const [ByteBuddyusername, setByteBuddyUsername] = useState()
    const { user } = useContext(AuthContext)

    const API_URL = process.env.REACT_APP_API_URL

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.get(`${API_URL}api/users/?username=${ByteBuddyusername}`)
            setByteBuddyUsername("")
            const data = {
                senderId: user._id,
                receiverId: response.data._id
            }
            await axios.post(API_URL+'api/chatrooms', data)
        }
        catch (err) {
        }
        window.location.reload();
    }

    return (
        <div className='add-ByteBuddy-background'>
            <div className={addchattoggle?"add-ByteBuddy-open":"add-ByteBuddynnectnnectnnect-close"}>
                <div className="close-div" ><span onClick={addchattoggler}><p className="close-symbol">x</p></span></div>
                <form>
                    <img className='add-ByteBuddyimg' src='assets/addByteBuddy.png' alt=''></img>
                    <input type="text" placeholder="Enter Username of ByteBuddy" value={ByteBuddyusername} onChange={(e) => { setByteBuddyUsername(e.target.value) }} required />
                    <button onClick={handleSubmit}>ADD ByteBuddy</button>
                </form>
            </div>
        </div>
    )
}

export default AddByteBuddy
