// LIBRARIES
import { useQuery } from '@tanstack/react-query'

// COMPONENTS
import { useAxios } from './useAxios'

const useGetList = (section: string, search: string) => {
  const axios = useAxios()

  return useQuery(
    ['list', section, search],
    () => axios.getList(section, search),
    {
      enabled: true
    }
  )
}

export default useGetList
