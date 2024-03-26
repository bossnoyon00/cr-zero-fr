import VerticalLayout from './VerticalLayout'
import MobileLayout from './MobileLayout'
import Footer from '../pages/LandingPageCom/Footer'

const Layout = ({ children, active }) => {
  return (
    <div className='layout'>
      <VerticalLayout children={children} active={active} />
      <MobileLayout active={active}>{children}</MobileLayout>
      <Footer />
    </div>
  )
}

export default Layout
