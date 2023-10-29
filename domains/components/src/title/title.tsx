// LIBRARIES
import { Typography } from '@material-tailwind/react'

// TYPES
interface TitleProps {
  title: string
}

const Title = ({ title }: TitleProps) => {
  return (
    <Typography variant='h3' className='star-wars-font text-[#FFC107] pb-4'>
      {title}
    </Typography>
  )
}

export default Title
