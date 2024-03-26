import React from 'react'

import CreatePostForm from '../components/PageComponents/CreatePostForm'
import Layout from '../layout/Layout'
import MetaData from '../components/other/MetaData'

const CreatePostPage = () => {
  return (
    <Layout>
      <MetaData title={'Affiliated Refer'} />
      <div className='create-post-page-container'>
        <CreatePostForm />
      </div>
    </Layout>
  )
}

export default CreatePostPage
