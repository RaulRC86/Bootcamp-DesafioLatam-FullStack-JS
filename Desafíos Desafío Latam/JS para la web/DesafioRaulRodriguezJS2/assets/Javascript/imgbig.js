export const imgBig = document.querySelector('.imagenBig');
export const currentHeight = window.getComputedStyle(imgBig).height;
export const grandeImagen = () => {

  
    if (currentHeight === '200px') {
      imgBig.style.height = '200%';
    } else {
      imgBig.style.height = '200px';
    }
  };