// LIBRARIES
import { useQuery } from '@tanstack/react-query'

// COMPONENTS
import { useAxios } from './useAxios'

const useGetDetails = (section: string, id: string) => {
  const axios = useAxios()

  return useQuery(
    ['details', section, id],
    () => axios.getDetails(section, id),
    {
      enabled: true
    }
  )
}

export default useGetDetails
