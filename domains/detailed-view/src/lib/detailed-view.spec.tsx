import { render } from '@testing-library/react'

import DetailedView from './detailed-view'

describe('DetailedView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailedView />)
    expect(baseElement).toBeTruthy()
  })
})
