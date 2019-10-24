import config from '../configs'

const defaultPhoto = () => {
  return config.S3.host + config.amazon.name.defaultPhoto
}

const photo = (name) => {
  return name ? (config.S3.host + config.amazon.prefix.thumbnail + name) : defaultPhoto()
}

export default {
  photo
}
