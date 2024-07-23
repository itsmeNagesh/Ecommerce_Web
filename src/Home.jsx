import React from 'react'
import styled from 'styled-components'
import HeroSection from './components/HeroSection'
import './home.css'
function Home() {
  const myData={
    name:"Buy4me Store "
  }
  return (
    <Wrapper className='home'><HeroSection myData={myData}/></Wrapper>
  )
}
const Wrapper=styled.section`
// background-color:${({theme})=>theme.colors.bg};
// color:${({theme})=>theme.colors.color};

`
export default Home