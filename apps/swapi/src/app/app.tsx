import { Fragment } from 'react'

// LIBRARIES
import { Routes, Route } from 'react-router-dom'

// DOMAINS
import { Home } from '@swapi/home'
import { List } from '@swapi/list'
import { DetailedView } from '@swapi/detailed-view'

// COMPONENTS
import { domainsData, Footer, Navbar, ParticlesBg } from '@swapi/components'

// STYLING
import './app.css'

export function App() {
  return (
    <>
      <ParticlesBg />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {domainsData.map(item => (
          <Fragment key={item.linkUrl}>
            <Route
              path={item.linkUrl}
              element={
                <List
                  sectionKey={item.sectionKey}
                  domain={item.domain}
                  details={item.details}
                />
              }
            />
            <Route
              path={`${item.linkUrl}/:id`}
              element={<DetailedView sectionKey={item.sectionKey} />}
            />
          </Fragment>
        ))}
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
