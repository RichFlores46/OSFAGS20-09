const splide = new Splide('.gallery', {
  type   : 'loop',
  drag   : 'free',
  focus  : 'center',
  perPage: 3,
  arrows: false,
  pagination: false,
  autoWidth: true,
  gap: 30,
  autoScroll: {
    speed: 1.1, 
  }
} );


splide.mount( window.splide.Extensions );
