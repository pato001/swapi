// LIBRARIES
import Axios from 'axios'

// TYPES
import { GetListResponse } from '../types/GetListResponse'
import { GetDetailsResponse } from '../types/GetDetailsResponse'

// Define an axios instance with no authorization header (Useful for public api access)
const axiosNoAuthHeader = Axios.create({
  baseURL: 'https://swapi.dev/api'
})

// Define custom hook that has all api calls
export const useAxios = () => {
  return {
    getList: (section: string, search: string) =>
      axiosNoAuthHeader.get<GetListResponse>(
        search ? `/${section}?search=${search}` : `/${section}`
      ),
    getDetails: (section: string, id: string) =>
      axiosNoAuthHeader.get<GetDetailsResponse>(`/${section}/${id}`)
  }
}
