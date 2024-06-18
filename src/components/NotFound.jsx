import { useEffect } from 'react'

const NotFound = () => {
    useEffect(() => {
        window.location.href = '/404'
    })
    return <></>
}

export default NotFound
