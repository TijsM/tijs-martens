// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";

export type ArticleData = {
  title: string;
  body: string;
  link: string;
};

const base = new Airtable({
  apiKey: process.env.AIRTABLE_APIAIRTABLE_PERSONAL_ACCESS_TOKEN_KEY,
}).base(process.env.AIRTABLE_BASE_ID as string);

console.log({
  apiKey: process.env.AIRTABLE_APIAIRTABLE_PERSONAL_ACCESS_TOKEN_KEY,
  baseId: process.env.AIRTABLE_BASE_ID,
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ArticleData[]>
) {
  const airtableData: ArticleData[] = [];

  base("Articles")
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
