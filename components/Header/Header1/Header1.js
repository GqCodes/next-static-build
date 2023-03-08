import { Bebas_Neue } from 'next/font/google';
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

export default function Header1() {
  return (
    <header className='header header1'>
      <div className='header1__collections-nav'>
        <a href='/link'>Link</a>
        <a href='/link'>Link</a>
        <a href='/link'>Link</a>
      </div>

      <div className='header1__logo'>
        <a href='/link' className={bebasNeue.className}>
          Company
        </a>
      </div>

      <div className='header1__collections-nav'>
        <a href='/link'>Link</a>
        <a href='/link'>Link</a>
        <a href='/link'>Link</a>
        <a href='/cart'>
          <i className='fas fa-shopping-cart'></i>
        </a>
        <a href='/cart'>
          <i className='fas fa-user'></i>
        </a>
      </div>
    </header>
  );
}
