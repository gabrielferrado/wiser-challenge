import axios from "axios";
import User from "@/interfaces/user";

export const Api = {
  getUsers: async (): Promise<User[]> => {
    const res = await axios.get(
      "https://6035400a6496b9001749ea73.mockapi.io/users",
    );
    return res.data;
  },
};
