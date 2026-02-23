import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isloading: isDeleting, mutate: deleteCabin } = useMutation({
    //mutate is the func which we use to delete
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        //this make the reactQuery reload the page after deleting to show the new data after delete
        queryKey: ["cabins"], // this line determine what will be refetched
      });
      toast.success("cabin successfully deleted");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
