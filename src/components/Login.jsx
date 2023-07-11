import React from 'react';
import styled from "styled-components";
const Login = () => {
  return (
       <Container>
           <Nav>
               <a href="/index.html">
                 <img src='/images/login-logo.svg' alt='' />
               </a>
               <div>
                <Join>Join Now </Join>
                <SignIn>Sign In</SignIn>
               </div>
           </Nav>
           <Section>
             <Hero>
                <h1>Welcome to your profesional community ! </h1>
                <img src="/images/login-hero.svg" alt="" />
             </Hero>
             <Form>
                <Google>
                    <img  src="/images/google.svg" alt="" /> 
                    Sign in with Google
                </Google>
             </Form>
           </Section>
       </Container>
  )
}

const Container =  styled.div``
const Nav =  styled.nav``
const Join =  styled.a``
const SignIn =  styled.a``
const Section = styled.section``
const Hero = styled.div``
const Form = styled.div``
const Google =  styled.button``


export default Login
