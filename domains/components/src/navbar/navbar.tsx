import { useState, useEffect } from 'react'

// LIBRARIES
import { Navbar, IconButton, Collapse } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

// COMPONENTS
import { NavList } from './components/navList'
import { CloseIcon } from './components/closeIcon'
import { HamburgerIcon } from './components/hamburgerIcon'

const MyNavbar = () => {
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  return (
    <div className='flex flex-col w-full border-b border-white'>
      <Link to='/'>
        <h1 className='star-wars-font text-[#FFC107] text-center text-4xl leading-none pt-2'>
          STAR
          <br />
          WARS
        </h1>
      </Link>
      <Navbar
        className='mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4'
        variant='filled'
        color='transparent'
      >
        <div className='container mx-auto flex items-center justify-between text-blue-gray-900 w-full'>
          <div className='hidden lg:flex w-full'>
            <NavList />
          </div>
          <IconButton
            variant='text'
            className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? <CloseIcon /> : <HamburgerIcon />}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <div className='container mx-auto'>
            <NavList />
          </div>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default MyNavbar
