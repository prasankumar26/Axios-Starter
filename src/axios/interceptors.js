import axios from 'axios'

const authFetch = axios.create({
    baseURL: 'https://course-api.com',
})

authFetch.interceptors.request.use((request) =>{
    request.headers.common['Accept'] = 'application/json'
    console.log('req sent');
    return request
}, (error) =>{
    return Promise.reject(error)
})
authFetch.interceptors.response.use((response) =>{
    console.log('Got Response');
    return response
}, (error) =>{
    console.log(error.response);
    if(error.response.status === 404){
        console.log('NOT FOUND');
    }
    return Promise.reject(error)
})


// authFetch.interceptors.request.use(
//     (config) => {
//       config.headers.common['Authorization'] = `Bearer ${state.token}`
//       return config
//     },
//     (error) => {
//       return Promise.reject(error)
//     }
//   )

export default authFetch