import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Friends from './pages/Friends'
import Layout from './components/Layout'

const App: FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='channels'>
          <Route path='@me'>
            <Route index element={<Friends />} />
            <Route
              path=':personalChannelId'
              element={<span>Personal Channel</span>}
            />
          </Route>
          <Route path='store' element={<span>Store</span>} />
          <Route path='shop' element={<span>Shop</span>} />
          <Route path=':serverId/:channelId' element={<span>Server!!!</span>} />
        </Route>
      </Route>
      <Route path='/' element={<Navigate to='/channels/@me' />} />
    </Routes>
  )
}

export default App
