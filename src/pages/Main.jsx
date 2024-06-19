import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Main = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const session = sessionStorage.getItem('user')
        if (session) {
            navigate('/dashboard')
        } else {
            navigate('/login')
        }
    }, [navigate])
    return <main>Loading...</main>
}

export default Main
