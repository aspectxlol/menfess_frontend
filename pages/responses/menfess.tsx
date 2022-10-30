import { SERVER_URI } from "../../constants";
import { message } from "../../types";
import {Toaster, toast} from 'react-hot-toast'

export default function menfess({ data }: { data: message[] } ) {
  return (
    <div>
      <Toaster 
        position="bottom-right"
        reverseOrder={true}
      />
      <div className="grid grid-cols-3">
        {data.map((data) => 
          <div className="card w-96 shadow-xl bg-slate-800 m-1" key={data.id}>
            <div className="card-body"> 
              <h2 className="card-title">
                From: {data.from? data.from : '-'}
                <br />
                To: {data.to? data.to : '-'}
              </h2>
              <p>{data.message}</p>
              <div className="card-actions justify-end">
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    navigator.clipboard.writeText(`From: ${data.from? data.from : '-'}\nTo: ${data.to? data.to : '-'}\n${data.message}`)
                    toast(
                      'Copied to clipboard',
                      {
                        icon: getCheckMark(),
                        style: {
                          borderRadius: '10px',
                          background: '#333',
                          color: '#fff',
                        },
                      }
                    )
                  }}
                >Copy</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const message = await fetch(`${SERVER_URI}/api/v1/message/get`);
  const data = await message.json();
  return {
    props: {
      data: data
    },
  }
}

function getCheckMark() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#38d11d" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </svg>
  )
}