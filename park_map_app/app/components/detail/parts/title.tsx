import React from 'react'

type Props = {
    title : string
}

const Title = ({title}:Props) => {
  return (
    <h3>{title}</h3>
  )
}

export default Title