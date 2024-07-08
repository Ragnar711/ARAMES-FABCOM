import { useEffect, lazy, Suspense } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import style from './styles/Dashboard.module.css'

const Planification = lazy(() => import('./pages/Planification'))
const Management = lazy(() => import('./pages/Management'))
const Historique = lazy(() => import('./pages/Historique'))
const Machine = lazy(() => import('./pages/Machine'))
const Uap = lazy(() => import('./pages/Uap'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Main = lazy(() => import('./pages/Main'))
const Login = lazy(() => import('./pages/Login'))
const NotFound = lazy(() => import('./components/NotFound'))

import Loader from './components/Loader'
import Header from './components/Header'
import SideBar from './components/SideBar'

const App = () => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const session = sessionStorage.getItem('user')
        if (!session) {
            navigate('/login')
        }
    }, [navigate])

    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
            }}
        >
            {location.pathname !== '/login' ? <Header /> : <></>}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                {location.pathname !== '/login' ? <SideBar /> : <></>}
                <section
                    id={style['section-dashboard']}
                    className="close-section"
                >
                    <div id={style['content']}>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <Suspense fallback={<Loader />}>
                                        {' '}
                                        <Main />{' '}
                                    </Suspense>
                                }
                            />
                            <Route
                                path="/login"
                                element={
                                    <Suspense fallback={<Loader />}>
                                        {' '}
                                        <Login />{' '}
                                    </Suspense>
                                }
                            />
                            <Route
                                path="/dashboard"
                                element={
                                    <Suspense fallback={<Loader />}>
                                        {' '}
                                        <Dashboard />{' '}
                                    </Suspense>
                                }
                            />
                            <Route
                                path="/uap/:section"
                                element={
                                    <Suspense fallback={<Loader />}>
                                        {' '}
                                        <Uap />{' '}
                                    </Suspense>
                                }
                            />
                            <Route
                                path="/machine/:machine"
                                element={
                                    <Suspense fallback={<Loader />}>
                                        {' '}
                                        <Machine />{' '}
                                    </Suspense>
                                }
                            />
                            <Route
                                path="/historique"
                                element={
                                    <Suspense fallback={<Loader />}>
                                        {' '}
                                        <Historique />{' '}
                                    </Suspense>
                                }
                            />
                            <Route
                                path="/management"
                                element={
                                    <Suspense fallback={<Loader />}>
                                        {' '}
                                        <Management />{' '}
                                    </Suspense>
                                }
                            />
                            <Route
                                path="/planification"
                                element={
                                    <Suspense fallback={<Loader />}>
                                        {' '}
                                        <Planification />{' '}
                                    </Suspense>
                                }
                            />{' '}
                            <Route
                                path="*"
                                element={
                                    <Suspense fallback={<Loader />}>
                                        {' '}
                                        <NotFound />{' '}
                                    </Suspense>
                                }
                            />
                        </Routes>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App
