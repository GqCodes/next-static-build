import AnnounceBar from '@/components/AnnounceBar/AnnounceBar';
import { Bebas_Neue } from 'next/font/google';
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

export default function Header4() {
  return (
    <>
      <AnnounceBar />
      <header className='header header4'>
        <div className='header4__logo'>
          <a href='/link' className={bebasNeue.className}>
            Company
          </a>
        </div>

        <div className='header4__collections-nav'>
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
    </>
  );
}
