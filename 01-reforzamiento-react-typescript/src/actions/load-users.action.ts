import axios from "axios"
import { UserListResponse } from "../interfaces/reqres.response"

export const loadUsersAction = async (page: number) => {
  try {
    // Esta es la API que vamos a consumir
    const { data } = await axios.get<UserListResponse>(`https://reqres.in/api/users?page=${page}`);

    // data es el nombre de la respuesta que nos da axios y es .data porque ahi vienen los datos en la API
    return data.data;
    
  } catch (error) {
    console.log(error);
    return [];
  }
}
