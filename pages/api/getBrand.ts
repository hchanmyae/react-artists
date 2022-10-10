import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Brand } from "../../typings"

const query = groq`
*[_type == 'brands'] | order(title asc) {title, brand}
`

type Data = {
    brands:Brand[];

};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const brands: Brand[] = await sanityClient.fetch(query)
    res.status(200).json({ brands })
  }
  