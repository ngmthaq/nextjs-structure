// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { DefaultDatabase } from "../../../database";

const handler = async (req, res) => {
  if (req.method === "GET") {
    return handleGetMethod(req, res);
  } else if (req.method === "POST") {
    res.status(200).json({ message: "POST METHOD" });
  } else {
    res.status(200).json({ message: "ANOTHER METHOD" });
  }
};

const handleGetMethod = async (req, res) => {
  const users = await new DefaultDatabase().query("SELECT * FROM users");
  res.status(200).json(users);
};

export default handler;
