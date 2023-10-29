// LIBRARIES
import cx from 'classnames'
import { Typography } from '@material-tailwind/react'

// COMPONENTS
import { domainsData } from '../constants/constants'
import { MostViewedItem } from './MostViewedItem'

export function MostViewed() {
  return (
    <div className='py-4 sm:py-6 md:py-8 lg:py-10'>
      <Typography color='orange' variant='h3' className='w-full text-center'>
        Most Viewed
      </Typography>
      <div
        className={cx(
          'flex flex-wrap',
          'gap-4 sm:gap-6 md:gap-8',
          'p-4 sm:p-6 md:p-8',
          'justify-center'
        )}
      >
        {domainsData.map(item => (
          <MostViewedItem
            key={item.sectionKey}
            sectionKey={item.sectionKey}
            details={item.details}
          />
        ))}
      </div>
    </div>
  )
}

export default MostViewed
