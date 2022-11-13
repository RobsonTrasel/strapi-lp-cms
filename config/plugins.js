module.exports = ({env}) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_secret: env('CLOUDINARY_SECRET'),
        api_key: env('CLOUDINARY_KEY')
      },
      actionsOptions: {
        upload: {},
        uploadStream: {},
        delete: {}
      }
    }
  }
})
