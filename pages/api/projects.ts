// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";

type Data = {
  title: string;
  body: string;
  link: string;
  role: string
};

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID as string
);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const airtableData: Data[] = [];

  base("projects")
    .select({
      maxRecords: 100,
      view: "Grid view",
    })
    .eachPage(
      function page(records) {
        records.forEach(function (record) {
          //@ts-ignore

          airtableData.push({
            title: record.get("title") as string,
            body: record.get("body") as string,
            link: record.get("link") as string,
            role: record.get("role") as string,
          });
        });

        res.status(200).json(airtableData);
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
}
