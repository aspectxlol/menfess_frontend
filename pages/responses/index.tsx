import { message } from "../../types";

export default function Responses({ data }: { data: message[] } ): JSX.Element {
  return (
    <div>
      {data.map((data) => 
        <div key={data.id}>
          <h1>From: {data.from? data.from : 'anonymus'}</h1>
          <h1>To: {data.to? data.to : 'anonymus'}</h1>
          <p>{data.message}</p>
        </div>
      )}
    </div>
  )
}

export async function getServerSideProps() {
  const message = await fetch('http://localhost:5000/api/v1/message/get');
  const data = await message.json();
  return {
    props: {
      data: data
    },
  }
}