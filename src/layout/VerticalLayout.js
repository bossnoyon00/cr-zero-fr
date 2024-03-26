import React from 'react'
// import { Layout, Switch } from 'antd'
import { Layout } from 'antd'

// import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md'
// import { useDispatch, useSelector } from 'react-redux'

// import WhiteLogo from '../assets/Logo.png'
// import BlueLogo from '../assets/blueLogo.png'
// import MainMenu from './MainMenu'
// import { toggleTheme } from '../redux'

import Navbar from '../components/LayoutComponents/Navbar'

const VerticalLayout = ({ children }) => {
  // const dispatch = useDispatch()
  const { Header, Content } = Layout
  // const theme = useSelector((state) => state.theme.theme)

  return (
    <div className='v-layout'>
      <Layout>
        <Layout className='site-layout'>
          <Header className='mainHeader'>
            <Navbar />
          </Header>
          <Content className='main-content'>{children}</Content>
          {/* <Footer className='mainFooter'>
            <FooterComponent />
          </Footer> */}
        </Layout>
      </Layout>
    </div>
  )
}

export default VerticalLayout
