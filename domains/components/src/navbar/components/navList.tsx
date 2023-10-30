// LIBRARIES
import cx from 'classnames'
import { Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

// CONSTANTS
import { domainsData } from '../../constants/constants'

export const NavList = () => {
  return (
    <ul
      className={cx(
        'w-full flex flex-col lg:flex-row',
        'justify-evenly lg:items-center',
        'gap-2 lg:gap-6',
        'mt-2 mb-4 lg:mb-0 lg:mt-0'
      )}
    >
      {domainsData?.map(({ domain, linkUrl }) => (
        <Typography
          key={domain}
          as='li'
          variant='h5'
          color='white'
          className='flex items-center gap-x-2 p-1 font-medium'
        >
          <Link
            to={linkUrl}
            className='flex items-center'
            data-testid={`navbar-item-${domain}`}
          >
            {domain}
          </Link>
        </Typography>
      ))}
    </ul>
  )
}
