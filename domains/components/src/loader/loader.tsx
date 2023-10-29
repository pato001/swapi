// LIBRARIES
import { FC, PropsWithChildren } from 'react'
import { Grid } from 'react-loader-spinner'

// TYPES
interface LoaderProps {
  isError: boolean
  isLoading: boolean
  hasData: boolean
}

const Loader: FC<PropsWithChildren<LoaderProps>> = ({
  isError,
  isLoading,
  hasData,
  children
}) => {
  if (isLoading)
    return (
      <Grid
        height='80'
        width='80'
        color='#44aee1'
        ariaLabel='loading data'
        radius='12.5'
        wrapperStyle={{ height: `${window.innerHeight}px` }}
        wrapperClass='bg-black flex w-full justify-center items-center'
        visible={true}
      />
    )
  if (isError) return <div>There was an error fetching the data</div>
  if (!hasData) return <div>There are no items available</div>
  return <>{children}</>
}

export default Loader
