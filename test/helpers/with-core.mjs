import Spacecore from 'bitspacecore'
import RAM from 'random-access-memory'

export async function withCore (options, cb) {
  if (typeof options === 'function') {
    cb = options
    options = {}
  }

  const core = new Spacecore(RAM, options)
  await core.ready()

  try {
    await cb(core)
  } finally {
    await core.close()
  }
}
