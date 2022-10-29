import { FormEvent, useState } from "react";
import { message } from "../types";

export default function Home() {
  const [From, setFrom] = useState<string>()
  const [To, setTo] = useState<string>()
  const [Message, setMessage] = useState<string>()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault()

      const data = { 
        from: From, 
        to: To, 
        message: Message 
      }

      const endpoint = 'http://localhost:5000/api/v1/message/add'
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
      )
  }
  
  return (
    <div>
      <form onSubmit={(event) => {handleSubmit(event)}}>
        <label htmlFor="from">From:</label>
        <input type="text" onChange={(event) => setFrom((event.target as HTMLInputElement).value)} name="from" id="from"/><br />
        <label htmlFor="to">To:</label>
        <input type="text" onChange={(event) => setTo((event.target as HTMLInputElement).value)} name="to" id="to"/><br />
        <label htmlFor="message">message: </label>
        <input type="text" onChange={(event) => setMessage((event.target as HTMLInputElement).value)} name="message" id="message"/><br />
        <button type="submit">SEND</button>
      </form>
    </div>
  )
}

// export async function getServerSideProps() {
//   const message = await fetch('http://localhost:5000/api/v1/message/get');
//   const data = await message.json();
//   return {
//     props: {
//       data: data
//     },
//   }
// }