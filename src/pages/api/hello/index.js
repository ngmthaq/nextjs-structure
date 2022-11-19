// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { HelloRepo } from "../../../repo";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const users = await HelloRepo.getUsers();
    res.status(200).json(users);
  } else if (req.method === "POST") {
    res.status(200).json({ message: "POST METHOD" });
  } else {
    res.status(200).json({ message: "ANOTHER METHOD" });
  }
}
