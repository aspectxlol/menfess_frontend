// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  // const response = await fetch(`${endpoint}`, {method: 'POST', body: JSON.stringify(JSON.parse(req.body)) })
}
