// LIBRARIES
import { Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

// CONSTANTS
import { domainsData } from '../../constants/constants'

export const NavList = () => {
  return (
    <ul className='w-full mt-2 mb-4 flex flex-col justify-evenly gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      {domainsData?.map(({ domain, linkUrl }) => (
        <Typography
          key={domain}
          as='li'
          variant='h5'
          color='white'
          className='flex items-center gap-x-2 p-1 font-medium'
        >
          <Link to={linkUrl} className='flex items-center'>
            {domain}
          </Link>
        </Typography>
      ))}
    </ul>
  )
}
