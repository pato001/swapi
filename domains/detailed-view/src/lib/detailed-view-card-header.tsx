import { SyntheticEvent } from 'react'

// LIBRARIES
import { CardHeader, Typography } from '@material-tailwind/react'

// TYPES
interface DetailedViewCardHeaderProps {
  title: string
  views: number
  sectionKey: string
  id: string
}

export const DetailedViewCardHeader = ({
  title,
  views,
  sectionKey,
  id
}: DetailedViewCardHeaderProps) => {
  // METHOD: Set placeholder image if custom image does not load properly
  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src =
      'https://starwars-visualguide.com//assets/img/big-placeholder.jpg'
  }

  return (
    <CardHeader
      shadow={false}
      floated={false}
      className='m-0 w-full xs:w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/5 shrink-0 rounded-xl mx-auto bg-white p-2'
    >
      <img
        src={`https://starwars-visualguide.com/assets/img/${
          sectionKey === 'people' ? 'characters' : sectionKey
        }/${id}.jpg`}
        alt='card-image'
        className='h-full w-full object-cover rounded-xl'
        onError={handleImageError}
      />
      <div className='absolute inset-0 grid h-full w-full items-end justify-center bg-[#101010]/25'>
        <Typography
          variant='h4'
          color='orange'
          className='mb-4 uppercase p-2 pt-1 bg-black/75 rounded-xl text-center'
        >
          {title}
        </Typography>
      </div>
      <div className='absolute inset-0 grid h-full w-full items-start justify-end bg-[#101010]/25'>
        <Typography
          variant='h6'
          color='orange'
          className='mb-0 uppercase p-2 m-3 py-1 bg-black/75 rounded-xl text-center'
        >
          {views} <i className='fa fa-eye ms-2' />
        </Typography>
      </div>
    </CardHeader>
  )
}
