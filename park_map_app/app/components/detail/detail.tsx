import React from 'react'
import Content from './parts/Content'
import ContentData from './parts/contentData'

const Detail = () => {
  return (
    <div>
    { ContentData.map((contentItem,index) => {
      return <Content title = {contentItem.title} imgPath={ contentItem.imgPath } info = {contentItem.info} url = {contentItem.url} id={index} key={index}/>
    })}
    </div>

  )
}

export default Detail