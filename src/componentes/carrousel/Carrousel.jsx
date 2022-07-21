import Carousel from 'styled-components-carousel';
import foto1 from '../../assets/img/bici1.jpg'
import foto2 from '../../assets/img/bici2.jpg';
import foto3 from '../../assets/img/bici4.jpg';
import { Carusel } from './Carrousel.style';

 
function Carrousel() {
    return (

    <Carousel
        center
        infinite
        showArrows
        showIndicator
        slidesToShow={3}
    >
         <section>  
                     <Carusel src= {foto1} ></Carusel>
        </section>
        <section>
        <Carusel src= {foto2} ></Carusel>
        </section>
        <section>
        <Carusel src= {foto3} ></Carusel>
        </section>
    </Carousel>
)
}

export default Carrousel;