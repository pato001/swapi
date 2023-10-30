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
        <div className='m-auto w-3/4 lg:w-2/4'>
          <Typography
            variant='h1'
            color='white'
            className='mb-4 text-md text-xl md:text-3xl lg:text-5xl'
            data-testid={`hero-title-${domain}`}
          >
            {title}
          </Typography>
          <Typography
            variant='lead'
            color='white'
            className='hidden md:block mb-12'
          >
            <span data-testid={`hero-description1-${domain}`}>
              {description1}
            </span>
            <span
              className='hidden xl:block'
              data-testid={`hero-description2-${domain}`}
            >
              {description2}
            </span>
          </Typography>
          <div className='flex gap-2'>
            <Link to={linkUrl}>
              <Button
                size='lg'
                color='white'
                data-testid={`hero-link-${domain}`}
              >
                {linkText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
