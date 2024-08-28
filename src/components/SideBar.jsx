import { useEffect, useState, lazy, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/sideNav.scss'
import profile from '../assets/user.png'
import Loader from './Loader'

const List = lazy(() => import('./Links'))

const Sidebar = () => {
    const navigate = useNavigate()

    const [closeMenu, setCloseMenu] = useState(true)

    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu)
    }

    useEffect(() => {
        const session = sessionStorage.getItem('user')
        if (!session) {
            navigate('/login')
        }
    }, [navigate])

    return (
        <div className={closeMenu === false ? 'sidebar' : 'sidebar active'}>
            <div
                className={
                    closeMenu === false
                        ? 'burgerContainer'
                        : 'burgerContainer active'
                }
            >
                <div className="burgerTrigger" onClick={handleCloseMenu}></div>
                <div className="burgerMenu"></div>
            </div>
            <div
                className={
                    closeMenu === false
                        ? 'profileContainer'
                        : 'profileContainer active'
                }
            >
                <img src={profile} alt="profile" className="profile" />
                <div className="profileContents">
                </div>
            </div>
            <div
                className={
                    closeMenu === false
                        ? 'contentsContainer'
                        : 'contentsContainer active'
                }
            >
                <Suspense fallback={<Loader />}>
                    <List />
                </Suspense>
            </div>
        </div>
    )
}

export default Sidebar
