import { useEffect, useState } from 'react'

// LIBRARIES
import { useParams } from 'react-router-dom'
import { Card, CardBody, Typography } from '@material-tailwind/react'
import { update, createStore } from 'idb-keyval'

// COMPONENTS
import { Loader, useGetDetails } from '@swapi/components'
import { ListItem } from './detailed-view-list-item'
import { DetailedViewCardHeader } from './detailed-view-card-header'

// VARIABLES
let currentViews = 0

// TYPES
interface DetailedViewProps {
  sectionKey: string
}

export function DetailedView({ sectionKey }: DetailedViewProps) {
  // LOCAL STATES
  const [views, setViews] = useState(0)
  // URL PARAMS
  const { id = '' } = useParams()

  // FETCH DATA
  const { data, isError, isLoading } = useGetDetails(sectionKey, id)

  // DERIVED STATES
  const info = data?.data
  const entries = info ? Object.entries(info) : []

  // Indexed Database (IDB)
  // Views counters will be stored in different stores in IDB
  const customStore = createStore(sectionKey, 'keyval')
  useEffect(() => {
    /*
     * Caveat: In strict mode useEffect is executed twice in development mode.
     * So counter will increase by 2 in each visit
     * This issue will not happen in prod
     */
    update(
      id,
      (val: number | undefined) => {
        currentViews = (val || 0) + 1
        setViews(currentViews)
        return currentViews
      },
      customStore
    )
  }, [sectionKey, id])

  return (
    <Loader isLoading={isLoading} isError={isError} hasData={!!data}>
      {info ? (
        <div className='p-4 lg:p-8'>
          <Card className='w-full flex-column md:flex-row bg-transparent gap-x-8 rounded-none'>
            <DetailedViewCardHeader
              id={id}
              title={info?.name || info?.title}
              views={views}
              sectionKey={sectionKey}
            />
            <CardBody className='p-0 w-full m-0 flex flex-col gap-y-4'>
              <div className='bg-white w-full rounded-xl p-4 lg:px-6 mt-4 md:mt-0'>
                <Typography
                  variant='h5'
                  color='orange'
                  className='mb-4 uppercase'
                >
                  General Info
                </Typography>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-6 lg:gap-x-8'>
                  {entries?.map(
                    ([key, value]) =>
                      ![
                        'name',
                        'title',
                        'opening_crawl',
                        'created',
                        'edited',
                        'url',
                        'homeworld',
                        'people',
                        'films',
                        'species',
                        'vehicles',
                        'starships',
                        'characters',
                        'residents',
                        'pilots',
                        'planets'
                      ].includes(key) && (
                        <p key={key} className='mb-0'>
                          <>
                            <strong>
                              {key?.replace(/_/, ' ').toLocaleUpperCase()}
                            </strong>
                            : {value}
                          </>
                        </p>
                      )
                  )}
                </div>
              </div>
              {info.opening_crawl && (
                <ListItem
                  title='Opening Crawl'
                  data={[info.opening_crawl]}
                  fullWidth={true}
                  disableLink={true}
                />
              )}
              <ListItem title='Films' data={info.films} />
              <ListItem title='Species' data={info.species} />
              <ListItem title='Vehicles' data={info.vehicles} />
              <ListItem title='Starships' data={info.starships} />
              <ListItem title='Characters' data={info.characters} />
              <ListItem title='Residents' data={info.residents} />
              <ListItem title='Pilots' data={info.pilots} />
              <ListItem title='People' data={info.people} />
              <ListItem title='Planets' data={info.planets} />
            </CardBody>
          </Card>
        </div>
      ) : (
        <p>There is no data available</p>
      )}
    </Loader>
  )
}

export default DetailedView
