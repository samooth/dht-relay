import Spaceswarm from 'spaceswarm'

export async function withSwarm (dht, cb) {
  const swarm = new Spaceswarm({ dht })

  try {
    await cb(swarm)
  } finally {
    await swarm.destroy()
  }
}
