// LIBRARIES
import { Typography, Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

// TYPES
type carouselItemProps = {
  imageSrc: string
  domain: string
  title: string
  description1: string
  description2: string
  linkText: string
  linkUrl: string
}

export const CarouselItem = ({
  imageSrc,
  domain,
  title,
  description1,
  description2,
  linkText,
  linkUrl
}: carouselItemProps) => {
  return (
    <div className='relative h-full w-full'>
      <img
        src={imageSrc}
        alt={domain}
        className='w-full object-cover aspect-video'
      />
      <div className='absolute inset-0 grid h-full w-full items-end bg-[#101010]/75'>
        <div className='m-auto w-2/4'>
          <Typography
            variant='h1'
            color='white'
            className='mb-4 text-3xl md:text-4xl lg:text-5xl'
          >
            {title}
          </Typography>
          <Typography variant='lead' color='white' className='mb-12'>
            <span>{description1}</span>
            <span className='hidden md:flex'>{description2}</span>
          </Typography>
          <div className='flex gap-2'>
            <Link to={linkUrl}>
              <Button size='lg' color='white'>
                {linkText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
