// LIBRARIES
import Axios from 'axios'

// Define an axios instance with no authorization header (Useful for public api access)
const axiosNoAuthHeader = Axios.create({
  baseURL: 'https://swapi.dev/api'
})

// Define custom hook that has all api calls (with and without authorization header)
export const useAxios = () => {
  return {
    getList: (section: string, search: string) =>
      axiosNoAuthHeader.get(
        search ? `/${section}?search=${search}` : `/${section}`
      ),
    getDetails: (section: string, id: string) =>
      axiosNoAuthHeader.get(`/${section}/${id}`)
  }
}
