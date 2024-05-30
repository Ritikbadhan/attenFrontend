import axios from "axios";
 
const Api = axios.create({
    baseURL: 'http://localhost:3000/api/v1'
});

//Admin EndPoints
 export const loginAdmin = (userData) => Api.post('/admin/login',userData);
 export const registerUser = (firstName, lastName, email, password)=>Api.post("/", firstName , lastName,email,password )