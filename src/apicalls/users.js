const {axiosInstance} = require('.')

// register new User

export const RegisterUser = async (payload)=>{
    try {
        const response= await axiosInstance.post('/api/user/register',payload)
        return response.data
    } catch (error) {
        return error
    }
}

// login new user 

export const LoginUser = async (payload)=>{
    try {
        const response = await axiosInstance.post('/api/user/login' , payload)

        return response.data
    } catch (error) {
        return error
    }
}

// get-current user

export const GetCurrentUser=async()=>{
    try {
        const response= await axiosInstance.get('api/user/get-current-user')
      return response.data
    } catch (error) {
        return error
    }
}
