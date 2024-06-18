import { useReducer, useState, useEffect, useMemo, lazy, Suspense } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

import style from './styles/Dashboard.module.css'

import { context } from './utils/context'
import { getTitle } from './utils/getTitle'

const Main = lazy(() => import('./pages/Main'))
const Login = lazy(() => import('./pages/Login'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Uap = lazy(() => import('./pages/Uap'))

const Header = lazy(() => import('./components/header/Header'))
const SideBar = lazy(() => import('./pages/SideBar'))

const Maintenance = lazy(() => import('./components/Maintenance'))
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
        title: 'Résultat usine',
        user: { Id: NaN, Interface: null },
    })
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

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
        <>
            <context.Provider value={contextValue}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        width: '100vw',
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
                            {width < 1536 ? (
                                <Suspense fallback={<Loader />}>
                                    {' '}
                                    <Maintenance />{' '}
                                </Suspense>
                            ) : (
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
                                        path="*"
                                        element={
                                            <Suspense fallback={<Loader />}>
                                                {' '}
                                                <NotFound />{' '}
                                            </Suspense>
                                        }
                                    />
                                </Routes>
                            )}
                        </div>
                    </section>
                </div>
            </context.Provider>
            {state.loading ? <Loader /> : <></>}
        </>
    )
}

export default App
