// @ts- nocheck

import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { ROOTER } from './constants/router.js'
import { Box } from '@chakra-ui/react'
import Create from './pages/Create/index.js'
import Settings from './pages/Settings/index.js'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Favorite = lazy(() => import('./pages/Favorite'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Articles = lazy(() => import('./pages/Articles'))
const ArticleDetail = lazy(() => import('./pages/ArticleDetail'))
const NotFound = lazy(() => import('./pages/NotFound'))
function App() {
  return (
    <>
      <Suspense fallback>
        <Header />
        <Box bg="red.50">
          <Routes>
            <Route path={ROOTER.HOME} element={<Home />} />
            <Route path={ROOTER.ABOUT} element={<About />} />/
            <Route path={ROOTER.FAVORITE} element={<Favorite />} />
            <Route path={ROOTER.FAQ} element={<FAQ />} />
            <Route path={ROOTER.ARTICLES} element={<Articles />} />
            <Route
              path={ROOTER.ARTICLES + '/:id'}
              element={<ArticleDetail />}
            />
            <Route path={ROOTER.CREATE} element={<Create />} />
            <Route path={ROOTER.SETTINGS} element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Suspense>
    </>
  )
}

export default App
