import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Artist } from "../../typings"

const query = groq`
    *[_type == 'artists']
`

type Data = {
    artists:Artist[];

};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const artists: Artist[] = await sanityClient.fetch(query)
    res.status(200).json({ artists })
  }
  