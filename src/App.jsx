import { useReducer, useEffect, useMemo, lazy, Suspense } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import style from './styles/Dashboard.module.css'
import { context } from './utils/context'
import { getTitle } from './utils/getTitle'

const Header = lazy(() => import('./components/header/Header'))
const SideBar = lazy(() => import('./pages/SideBar'))
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

const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_TITLE':
            return { ...state, title: action.payload }
        case 'LOADING_ON':
            return { ...state, loading: true }
        case 'LOADING_OFF':
            return { ...state, loading: false }
        default:
            return state
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        title: 'Real Time Usine - FABCOM',
        user: { Id: NaN, Interface: null },
    })

    const location = useLocation()

    const navigate = useNavigate()

    const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch])

    useEffect(() => {
        const session = sessionStorage.getItem('user')
        if (!session) {
            navigate('/login')
        }
    }, [navigate])

    useEffect(() => {
        dispatch({
            type: 'CHANGE_TITLE',
            payload: getTitle(location.pathname),
        })
    }, [location])

    return (
        <context.Provider value={contextValue}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    height: '100vh',
                }}
                id="subroot"
            >
                {location.pathname !== '/login' ? <SideBar /> : <></>}
                <section
                    id={style['section-dashboard']}
                    className="close-section"
                >
                    {location.pathname !== '/login' ? <Header /> : <></>}
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
        </context.Provider>
    )
}

export default App
