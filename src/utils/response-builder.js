function build(success = true, data = {}, meta = {}) {
  return {
    success,
    serverCode: meta.code ? parseInt(meta.code, 10) : undefined,
    message: meta.message,
    data
  }
}

export default {
  build
}
