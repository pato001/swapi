// LIBRARIES
import { SyntheticEvent } from 'react'
import {
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Card,
  Button
} from '@material-tailwind/react'
import { Link } from 'react-router-dom'

// TYPES
interface CardProps {
  name: string
  detail: string
  link: string
  img: string
}

const ProfileCard = ({ name, detail, link, img }: CardProps) => {
  // METHOD: Set placeholder image if custom image does not load properly
  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src =
      'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
  }

  return (
    <Card className='m-0 p-0 h-full'>
      <CardHeader floated={false} className=''>
        <img
          src={img}
          alt={`${name}-picture`}
          className='w-auto'
          onError={handleImageError}
        />
      </CardHeader>
      <CardBody className='text-center flex-grow'>
        <Typography
          variant='h4'
          color='blue-gray'
          className='mb-2'
          title='profile-card-name'
        >
          {name}
        </Typography>
        <Typography color='blue-gray' className='font-medium' textGradient>
          {detail}
        </Typography>
      </CardBody>
      <CardFooter className='flex justify-center gap-7 pt-2'>
        <Link to={link}>
          <Button size='lg' color='amber'>
            See More Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default ProfileCard
