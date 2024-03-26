import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
// import { TbLayoutDashboard } from 'react-icons/tb'

const MainMenu = ({ active }) => {
  const navigate = useNavigate()

  return (
    <Menu
      // theme='dark'
      mode={'inline'}
      defaultSelectedKeys={[active]}
      style={{
        // background: 'var(--sidebar)',
        background: 'var(--primary)',
        minHeight: '83vh',
      }}
    >
      <Menu.Item
        key='home'
        className={'sidebar-menu'}
        // icon={<TbLayoutDashboard className='menu-icon' />}
        onClick={() => navigate('/home')}
      >
        Home
      </Menu.Item>
      <Menu.Item
        key='services'
        className={'sidebar-menu'}
        // icon={<TbLayoutDashboard className='menu-icon' />}
        onClick={() => navigate('/settings')}
      >
        Settings
      </Menu.Item>
      <Menu.Item
        key='services'
        className={'sidebar-menu'}
        // icon={<TbLayoutDashboard className='menu-icon' />}
        onClick={() => {
          localStorage.clear();
          navigate("/login");
        }}
      >
        Logout
      </Menu.Item>
    </Menu>
  )
}

export default MainMenu
