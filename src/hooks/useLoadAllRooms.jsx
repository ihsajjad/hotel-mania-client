import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useLoadAllRooms = () => {
  const { axiosSecure } = useAxiosSecure();
  const { data: rooms = [], isLoading } = useQuery({
    queryKey: ["rooms"],
    queryFn: async () => {
      const res = await axiosSecure.get("/rooms");
      return res.data;
    },
  });

  return { rooms, isLoading };
};

export default useLoadAllRooms;
