import {message} from 'antd'
import React,{useEffect} from 'react'
import {GetCurrentUser} from '../apicalls/users'
import {useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {SetUser, setUser} from '../redux/userSlice'
import {HideLoading,ShowLoading} from '../redux/loaderSlice'

function ProtectedRoute({children}){
    const {user}=useSelector((state)=>state.users)

    const navigate= useNavigate()
    const dispatch=useDispatch()

    const getPresentUser= async()=>{
        try {
            dispatch(ShowLoading())
            const response= await GetCurrentUser()
            dispatch(HideLoading())

            if(response.success){
                dispatch(SetUser(response.data))
            }
            else{
                dispatch(SetUser(null))
                message.error(response.message)
                localStorage.removeItem('token')
                navigate('/login')
            }
        } catch (error) {
            dispatch(HideLoading())
            dispatch(SetUser(null))
            message.error(error.message)
            
        }
    }

    useEffect(()=>{
        if(localStorage.getItem('token')){
            getPresentUser()
        }

        else{
            navigate('/login')
        }
    },[])

    return(
        user &&(
          <div className="layout p-1">
            <div className="header bg-primary flex justify-between p-2">
              <div>
                <h1 className="text-2xl text-white cursor-pointer"
                >Event Ease</h1>
              </div>
    
              <div className="bg-white p-1 flex gap-1">
                <i className="ri-shield-user-line text-primary mt-1"></i>
                <h1
                  className="text-sm underline" onClick={()=>{
                    if(user.isAdmin){
                      window.location.href='/admin'
                    }
                    else{
                      window.location.href='/profile'
                    }
                  }}>
                  {user.name}
                </h1>
    
                <i
                  className="ri-logout-box-r-line mt-1" onClick={()=>{
                    localStorage.removeItem('token')
                   window.location.href='/login'
                  }}></i>
              </div>
            </div>
            <div className="content mt-1 p-1">{children}</div>
          </div>
        )
      );
    }
    
    export default ProtectedRoute;
      
