import { render } from '@testing-library/react'

import MostViewed from './most-viewed'

describe('MostViewed', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MostViewed />)
    expect(baseElement).toBeTruthy()
  })
})
