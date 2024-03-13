import React from 'react'
import PageTitle from '../../components/PageTitle'
import {Tabs} from 'antd'
import MoviesList from './MoviesList'
import TheatresList from './TheatresList'
import UpcomeLists from './UpcomeLists'

function Admin() {
  return (
   <div>
    <PageTitle title='Admin'/>
    <Tabs defaultActiveKey='1'>
   <Tabs.TabPane tab="Movies" key='1'>
   <MoviesList/>

   </Tabs.TabPane>

   <Tabs.TabPane tab='Theatres' key='2'>
   <TheatresList/>
   </Tabs.TabPane>

   <Tabs.TabPane tab="Upcoming Movies" key="3">
           <UpcomeLists/>
        </Tabs.TabPane>

    </Tabs>
    
    
    </div>
  )
}

export default Admin