import React from 'react'
import Bottomnav from './bottomnav/Bottomnav'
import Main from "./main/Main"
import TopNav from './topNav/TopNav'
import UserDisplay from './userDisplay/UserDisplay'

export default function Mobile() {
  return (
    <>
      <TopNav/>
      <UserDisplay/>
      <Main/>
      <Bottomnav/>
    </>
  )
}
