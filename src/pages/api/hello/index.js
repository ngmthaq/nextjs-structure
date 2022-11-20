// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { HelloRepo } from "../../../repo";

const handler = async (req, res) => {
  if (req.method === "GET") {
    return getUsers(req, res);
  } else if (req.method === "POST") {
    res.status(200).json({ message: "POST METHOD" });
  } else {
    res.status(200).json({ message: "ANOTHER METHOD" });
  }
};

const getUsers = async (req, res) => {
  const users = await HelloRepo.getUsers();
  res.status(200).json(users);
};

export default handler;
