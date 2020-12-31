const uploadFile = async (src) => {
  console.log('Uploading....')
  try {
    const data = new FormData()
    data.append('file', src)
    data.append('upload_preset', 'kevinutoft_website')

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/kutoft/image/upload',
      {
        method: 'POST',
        body: data,
      }
    )

    const file = await res.json()
    return {
      status: 'success',
      image: file.secure_url,
    }
  } catch (err) {
    return {
      status: 'error',
      image: '',
    }
  }
}

export default uploadFile
