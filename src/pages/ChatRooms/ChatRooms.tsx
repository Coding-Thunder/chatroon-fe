import { useState } from 'react';
import axios from 'axios';
import { notification } from 'antd';

const ChatRooms = () => {
  const [roomName, setRoomName] = useState<string>("")

  const handleRoomCreation = async () => {
    try {
      const { data } = await axios.post("http://localhost:5000/rooms/create", { chatroom: roomName, members: [] })
      if (data) notification.success({ message: "Room Created Successfully" })
    } catch (error: any) {
      notification.error(
        { message: "Room Already Exists" }
      )

    }
    setRoomName("")
  }
  return (
    <div>
      <div>
        Create a new room <br />
        <input value={roomName} onChange={e => setRoomName(e.target.value)} /><br />
        <button onClick={handleRoomCreation}>  Create Room</button>
      </div>
      Rooms Available
    </div >
  )
}

export default ChatRooms