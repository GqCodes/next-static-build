export default function Hero1() {
  return (
    <div className='hero hero1'>
      <img
        src='https://images.pexels.com/photos/4577398/pexels-photo-4577398.jpeg?auto=compress&cs=tinysrgb&w=1600'
        className='hero1__bg'
      />
      <div className='hero1__content-container'>
        <div className='hero1__info'>
          <h1 className='hero1__title'>Dummy Title</h1>
          <p className='hero1__paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, magnam.</p>
          <a href='#' className='hero1__button'>
            View More
          </a>
        </div>
      </div>
      <h1>Hero 1</h1>
    </div>
  );
}
