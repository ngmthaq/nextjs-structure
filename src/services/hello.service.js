import { DefaultApi } from "../api";

export const getUsers = async () => new DefaultApi().get("hello");
