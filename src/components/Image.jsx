import { IKImage } from 'imagekitio-react'
import React from 'react'

export default function Image({ path, alt, className, w, h }) {
  return (
    <IKImage
        urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
        path={path}
        className={className}
        transformation={[{
          height: h,  
          width: w
        }]}
        alt={alt}
        loading="lazy"
        lqip={{ active: true, quality: 20 }}
      />
  )
}
