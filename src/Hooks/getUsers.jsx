import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const getUser = () => {
  const [axiosSecure] = useAxios();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return [users, refetch];
};

export default getUser;
