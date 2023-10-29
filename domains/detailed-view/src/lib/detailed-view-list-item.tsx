// LIBRARIES
import cx from 'classnames'
import { Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'

// TYPES
interface ListItemTypes {
  title: string
  data: string[]
  fullWidth?: boolean
  disableLink?: boolean
}

export const ListItem = ({
  title,
  data,
  fullWidth,
  disableLink
}: ListItemTypes) => {
  return data?.length ? (
    <div className='bg-white w-full rounded-xl p-4 lg:px-6'>
      <Typography variant='h5' color='orange' className='mb-4 uppercase'>
        {title}
      </Typography>
      <div
        className={cx(
          'grid',
          fullWidth ? 'grid-cols-1' : 'grid-cols-2',
          !fullWidth && 'sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
          'gap-4 md:gap-x-6 lg:gap-x-8'
        )}
      >
        {data.map((item: string) => {
          const link = item.replace('https://swapi.dev/api', '')
          const [section, id] = link.slice(1).split('/')
          return (
            <Fragment key={item}>
              {disableLink ? (
                <p className='mb-0'>{item}</p>
              ) : (
                <Link
                  to={link}
                  className='text-blue-900 underline underline-offset-2'
                >
                  {section} #{id}
                </Link>
              )}
            </Fragment>
          )
        })}
      </div>
    </div>
  ) : (
    <></>
  )
}
