 import React, {useState} from 'react';
 import {FaArrowCircleUp} from 'react-icons/fa';
 import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

 import styled from 'styled-components';

  
 const ScrollButton = () =>{
  
   const [visible, setVisible] = useState(false)
  
   const toggleVisible = () => {
     const scrolled = document.documentElement.scrollTop;
     if (scrolled > 400){
       setVisible(true)
     } 
     else if (scrolled <= 400){
       setVisible(false)
     }
   };
  
   const scrollToTop = () =>{
     window.scrollTo({
       top: 0, 
       behavior: 'smooth'
      
     });
   };
  
   window.addEventListener('scroll', toggleVisible);
  
   return (
     <Button>
      <KeyboardArrowUpIcon onClick={scrollToTop} 
      style={{ width:'1.5em', height:'1.5em', backgroundColor:'#2C44B2', borderRadius:'50%', display: visible ? 'inline' : 'none' } } />
     </Button>
   );
 }
  
 export default ScrollButton;

 
  
 export const Content = styled.div`
    overflowY: scroll;
    height: 2500px;
 `;
  
 export const Button = styled.div`
    position: fixed; 
    width: 95%;
    left: 95.4%;
    bottom: 80px;
    height: 10px;
    // font-size: 3rem;
    z-index: 1;
    cursor: pointer;
    color: #fff;
  
 `

