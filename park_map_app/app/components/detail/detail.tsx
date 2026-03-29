import React from 'react'
import Content from './parts/Content'
import ContentData from './parts/contentData'
import NationalFacilities from './parts/NationalFacilities'

const Detail = () => {
  return (
    <div >
      <div >
      <NationalFacilities />
      { ContentData.map((contentItem,index) => {
      return <Content title = {contentItem.title} imgPath={ contentItem.imgPath } info = {contentItem.info} url = {contentItem.url} id={index} key={index}/>
      })}
      </div>
    </div>

  )
}

export default Detail