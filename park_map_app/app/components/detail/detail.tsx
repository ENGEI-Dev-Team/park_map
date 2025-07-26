import React from 'react'
import Content from './parts/Content'
import ContentData from './parts/contentData'
import NationalFacilities from './parts/NationalFacilities'
import styles from './parts/Detail.module.css'

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