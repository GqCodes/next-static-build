// import Header1 from '../Header/Header1/Header1';
// import Header2 from '../Header/Header2/Header2';
import Header3 from '../Header/Header3/Header3';

export default function MainLayout({ children }) {
  return (
    <div className='fixed-nav nav-transparent'>
      {/* <Header1 /> */}
      {/* <Header2 /> */}
      <Header3 />
      <main>{children}</main>
      <footer>Footer</footer>
      {/* <Navbar />
      <main>{children}</main>
      <Footer /> */}
    </div>
  );
}
