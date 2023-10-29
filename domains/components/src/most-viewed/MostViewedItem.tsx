import ProfileCard from '../card/card'
import useGetDetails from '../hooks/useGetDetails'
import useGetHighestValue from '../hooks/useGetHighestValue'
import Loader from '../loader/loader'

// TYPES
interface MostViewedItemTypes {
  sectionKey: string
  details: {
    key: string
    name: string
    description: string
    img?: string
  }
}

export const MostViewedItem = ({
  sectionKey,
  details
}: MostViewedItemTypes) => {
  // IDB
  const { key, value } = useGetHighestValue(sectionKey)

  // URL Params
  const id = parseInt(key as string, 10)

  // FETCH DATA
  const { data, isError, isLoading } = useGetDetails(sectionKey, key as string)
  const info = data?.data

  return value ? (
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <Loader isLoading={isLoading} isError={isError} hasData={!!info}>
        {details && info && (
          <ProfileCard
            name={info[details.name] as string}
            detail={`${value} views`}
            link={`/${sectionKey}${info?.url?.split(sectionKey)?.[1]}`}
            img={`https://starwars-visualguide.com/assets/img/${
              details.img || sectionKey
            }/${id}.jpg`}
          />
        )}
      </Loader>
    </div>
  ) : (
    <></>
  )
}
