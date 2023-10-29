import { render } from '@testing-library/react'

import ParticlesBg from './particles-bg'

describe('ParticlesBg', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ParticlesBg />)
    expect(baseElement).toBeTruthy()
  })
})
