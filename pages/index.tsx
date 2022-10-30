import { useState, MouseEvent } from "react";
import { toast, Toaster } from "react-hot-toast";
import { SERVER_URI } from "../constants";
import Input from '@mui/material/TextField'
import Button from '@mui/material/Button';

export default function Home() {
  const [From, setFrom] = useState<string>()
  const [To, setTo] = useState<string>()
  const [Message, setMessage] = useState<string>()

  async function handleSubmit(event: MouseEvent<HTMLButtonElement>) {
      event.preventDefault()

      const data = { 
        from: From, 
        to: To, 
        message: Message 
      }

      const endpoint = `${SERVER_URI}/api/v1/message/add`
      const headers = {
        "Content-Type": 'application/json'
      };

      const response = await fetch(
        `${endpoint}`,
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: headers
        }
      ).then(() => {
        setFrom('')
        setTo('')
        setMessage('')
        toast(
          'Message Sent',
          {
            icon: getCheckMark(),
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }
        )
      })

      return response
  }
  
  return (
    <div className="grid grid-cols-3">
      <Toaster 
        position="bottom-right"
        reverseOrder={true}
      />
      <div className="card w-96 shadow-xl bg-slate-500">
        <div className="card-body">
          <h1 className="card-title">menfess</h1>
          <Input 
            id="From"
            label='From'
            variant="filled"
            value={From}
            onChange={(event) => {
              setFrom((event.target as HTMLInputElement).value)
            }}
            color="primary"
          /><br />
          <Input 
            id="To"
            label='To'
            variant="filled"
            value={To}
            onChange={(event) => {
              setTo((event.target as HTMLInputElement).value)
            }}
            color="primary"
          /><br />
          <Input 
            id="Message"
            label='Message'
            variant="filled"
            value={Message}
            onChange={(event) => {
              setMessage((event.target as HTMLInputElement).value)
            }}
            color="primary"
            multiline
          /><br />
          <Button
            variant="contained"
            className="bg-slate-700"
            onClick={(event) => {
              handleSubmit(event)
            }}
          >
            Send
          </Button>
        </div>
      </div>
      <div className="card w-96 shadow-xl bg-slate-500">
        <div className="card-body">
          <h1 className="card-title">Songfess</h1>
          <Input 
            id="From"
            label='From'
            variant="filled"
            value={From}
            onChange={(event) => {
              setFrom((event.target as HTMLInputElement).value)
            }}
            color="primary"
          /><br />
          <Input 
            id="To"
            label='To'
            variant="filled"
            value={To}
            onChange={(event) => {
              setTo((event.target as HTMLInputElement).value)
            }}
            color="primary"
          /><br />
          <Input 
            id="Song"
            label='Song'
            variant="filled"
            value={Message}
            onChange={(event) => {
              setMessage((event.target as HTMLInputElement).value)
            }}
            color="primary"
            multiline
          /><br />
          <Button
            variant="contained"
            className="bg-slate-700"
            onClick={(event) => {
              handleSubmit(event)
            }}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}

function getCheckMark() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#38d11d" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </svg>
  )
}