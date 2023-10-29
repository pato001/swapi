// LIBRARIES
import { Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

// CONSTANTS
import { domainsData } from '../constants/constants'

const SimpleFooter = () => {
  return (
    <footer className='flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between px-4'>
      <Typography color='white' className='font-normal'>
        &copy; 2023 Madeleine Solutions
      </Typography>
      <ul className='flex flex-wrap items-center gap-y-2 gap-x-8'>
        {domainsData.map(({ linkUrl, domain }) => (
          <li key={domain}>
            <Link
              to={linkUrl}
              className='font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500'
            >
              {domain}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default SimpleFooter
