import { useCallback } from 'react'
import Particles from 'react-particles'
import { loadStarsPreset } from 'tsparticles-preset-stars'
import { Engine } from 'tsparticles-engine'

export function ParticlesBg() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadStarsPreset(engine)
  }, [])

  const particlesConfig = {
    preset: 'stars'
  }
  return <Particles options={particlesConfig} init={particlesInit} />
}

export default ParticlesBg
