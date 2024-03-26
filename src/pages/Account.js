import React from 'react'

import Profile from '../components/PageComponents/Profile'
import Layout from '../layout/Layout'
import MetaData from '../components/other/MetaData'

const Account = () => {
  return (
    <Layout>
      <MetaData title={'Affiliated Refer'} />
      <div className='account-container'>
        <Profile />
      </div>
    </Layout>
  )
}

export default Account
