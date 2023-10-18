import React from 'react'
import {Slideshow, Slide, TextoSlide} from './Slideshow'
import './Carousel.css'
import styled from 'styled-components'
import Carouselimg from '../../assets/img/Sliderhome.jpg'


export const Carouselhome = () => {
  return (
    <main>
			

			
			<Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="5000">
				<Slide>
					
						<img src={Carouselimg} alt=""/>
					
					 <TextoSlide /*colorFondo="navy"*/> 
						<p> Texto de prueba</p>
					</TextoSlide>
				</Slide>
				<Slide>
					
						<img src={Carouselimg} alt=""/>
					
					<TextoSlide>
						<p> Texto de prueba</p>
					</TextoSlide>
				</Slide>
				<Slide>
					
						<img src={Carouselimg} alt=""/>
					
					<TextoSlide>
						<p> Texto de prueba</p>
					</TextoSlide>
				</Slide>
				<Slide>
					
						<img src={Carouselimg} alt=""/>
					
					<TextoSlide>
						<p> Texto de prueba</p>
					</TextoSlide>
				</Slide>
			</Slideshow>
		</main>
	);
}

const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
`;
 


 



