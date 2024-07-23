import React from 'react'
import styled from 'styled-components'
import HeroSection from './components/HeroSection'
function Home() {
  const myData={
    name:"Storeed Item"
  }
  return (
    <Wrapper className=''><HeroSection myData={myData}/></Wrapper>
  )
}
const Wrapper=styled.section`
// background-color:${({theme})=>theme.colors.bg};
// color:${({theme})=>theme.colors.color};

`
export default Home