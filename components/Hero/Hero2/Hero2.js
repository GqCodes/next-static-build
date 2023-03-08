export default function Hero2() {
  return (
    <div className='hero hero2'>
      <div className='hero2__collection1'>
        <img
          src='https://images.pexels.com/photos/5096351/pexels-photo-5096351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          className='hero2__bg'
        />
        <div className='hero2__content-container1'>
          <div className='hero2__info'>
            <a href='#' className='hero2__button'>
              Men
            </a>
          </div>
        </div>
      </div>

      <div className='hero2__collection2'>
        <img
          src='https://images.pexels.com/photos/3394668/pexels-photo-3394668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          className='hero2__bg'
        />
        <div className='hero2__content-container2'>
          <div className='hero2__info'>
            <a href='#' className='hero2__button'>
              Women
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
