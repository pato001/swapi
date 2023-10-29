import { KeyboardEvent, SyntheticEvent, useState } from 'react'

// LIBRARIES
import { IconButton, Input } from '@material-tailwind/react'
import { useLocation } from 'react-router-dom'

// COMPONENTS
import { Loader, ProfileCard, Title, useGetList } from '@swapi/components'
import { useEffect } from 'react'

// TYPES
interface ListTypes {
  sectionKey: string
  domain: string
  details: {
    key: string
    name: string
    description: string
    img?: string
  }
}

export function List({ sectionKey, domain, details }: ListTypes) {
  // LOCAL STATES
  const [search, setSearch] = useState('')
  const [inputValue, setInputValue] = useState('')

  // FETCH DATA
  const { data, isError, isLoading } = useGetList(sectionKey, search)
  const hasData = data?.data?.count > 0

  // HOOKS
  const location = useLocation()
  useEffect(() => {
    setSearch('')
    setInputValue('')
  }, [location.pathname])

  // METHODS
  const handleChange = ({
    currentTarget
  }: SyntheticEvent<HTMLInputElement>) => {
    if (!currentTarget.value) setSearch('')
    setInputValue(currentTarget.value)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      triggerSearch()
    }
  }

  const triggerSearch = () => {
    setSearch(inputValue)
  }

  return (
    <div className='p-4 md:p-8'>
      <div className='flex justify-between '>
        <Title title={domain} />
        <div className='relative flex w-full max-w-[24rem]'>
          <Input
            type='search'
            label='Search'
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className='pr-20'
            containerProps={{
              className: 'min-w-0'
            }}
            color='white'
            crossOrigin={undefined}
          />
          <IconButton
            size='sm'
            color={inputValue ? 'cyan' : 'gray'}
            disabled={!(inputValue.length > 3)}
            className='!absolute right-1 top-1 rounded'
            onClick={triggerSearch}
          >
            <i className='fa fa-search text-lg text-white' />
          </IconButton>
        </div>
      </div>
      <Loader isLoading={isLoading} isError={isError} hasData={hasData}>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8'>
          {data?.data?.results.map((item: any, i: number) => (
            <ProfileCard
              key={item[details.key]}
              name={item[details.name]}
              detail={item[details.description]}
              link={`/${sectionKey}${item?.url?.split(sectionKey)?.[1]}`}
              img={`https://starwars-visualguide.com/assets/img/${
                details.img || sectionKey
              }/${i + 1}.jpg`}
            />
          ))}
        </div>
      </Loader>
    </div>
  )
}

export default List
