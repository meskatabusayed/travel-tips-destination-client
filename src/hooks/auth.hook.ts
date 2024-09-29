import { useMutation } from "@tanstack/react-query"
import { loginUser, registerUser } from "../services/AuthServices"
import { FieldValues } from "react-hook-form"
import { toast } from "sonner"

export const useUserRegistration = () => {
    return useMutation<any , Error , FieldValues>({
        mutationKey : ["USER_REGISTRATION"],
        mutationFn : async(userData) => await registerUser(userData),
        onSuccess: () => {
          toast.success("Registration Successfully")
    
        },
        onError: (error) => {
            toast.error(error.message)
    
        },
        
      })
}
export const useUserLogin = () => {
    return useMutation<any , Error , FieldValues>({
        mutationKey : ["USER_LOGIN"],
        mutationFn : async(userData) => await loginUser(userData),
        onSuccess: () => {
          toast.success("Login Successfully")
    
        },
        onError: (error) => {
            toast.error(error.message)
    
        },
        
      })
}