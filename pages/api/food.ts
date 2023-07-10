// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  coffee: string | any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const data = await fetch("https://coffee.alexflipnote.dev/random.json")
    const datajson = await data.json()
  res.status(200).json({ coffee: datajson });
}
