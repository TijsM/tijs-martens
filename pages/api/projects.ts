// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";

export type ProjectData = {
  title: string;
  body: string;
  link: string;
  role: string;
  side?: boolean;
};

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID as string
);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectData[]>
) {
  const airtableData: ProjectData[] = [];

  const requestSideProjects = req.query.side === "true";

  base("projects")
    .select({
      maxRecords: 100,
      view: "Grid view",
    })
    .eachPage(
      function page(records) {
        records.forEach(function (record) {
          const isSideProject = !!record.get("side");
          const formattedProject: ProjectData = {
            title: record.get("title") as string,
            body: record.get("body") as string,
            link: record.get("link") as string,
            role: record.get("role") as string,
          };

          if (requestSideProjects === isSideProject) {
            airtableData.push(formattedProject);
          }
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
