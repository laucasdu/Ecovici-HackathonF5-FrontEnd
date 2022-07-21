import Carousel from 'styled-components-carousel';
import foto1 from '../../assets/img/01texto.png'
import foto2 from '../../assets/img/banner_02.png';
import foto3 from '../../assets/img/amarilla.jpg';
import { Carusel } from './Carrousel.style';

 
function Carrousel() {
    return (

        <Carousel
        center
        infinite
        showArrows
        slidesToShow={2}
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