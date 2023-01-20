import React from 'react'

const Avatar = ({children,backgroundColor,px,py,color,borderRadius,fontSize,textAlign,cursor}) => {
  const style={
    backgroundColor,
    padding:  `${px} ${py}`,
    color:color ||'black',
    borderRadius,
    fontSize,
    textAlign:"center",
    cursor: cursor || null

  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar
