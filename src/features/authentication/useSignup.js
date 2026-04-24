import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ email, password, fullName }) =>
      signupApi({ email, password, fullName }),

    onSuccess: (user) => {
      toast.success("User created successfully");
    },

    onError: (error) => {
      console.error(error);
      toast.error("Something went wrong");
    },
  });

  return { signup, isLoading };
}
