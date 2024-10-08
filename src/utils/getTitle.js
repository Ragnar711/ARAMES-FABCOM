import { useLocation } from 'react-router-dom'

export const getTitle = (pathname) => {
    const uapRegex = /\/uap\/(UAP-Assemblage|UAP-Plaque|Charge-Finition)\/?/
    const machineRegex =
        /\/machine\/(Ligne-d'assemblage-TBS|Ligne-d'assemblage-1-SOVEMA|Ligne-d'assemblage-2-SOVEMA)\/?/

    if (uapRegex.test(pathname)) {
        const section = pathname.match(uapRegex)[1]
        return `Overview UAP - ${section.replaceAll('-', ' ')}`
    } else if (machineRegex.test(pathname)) {
        const machine = pathname.match(machineRegex)[1]
        return `Dashboard - ${machine.replaceAll('-', ' ')}`
    }

    switch (pathname) {
        case '/dashboard':
            return 'Real Time Usine - FABCOM'
        case '/historique':
            return 'Historique'
        case '/management':
            return 'Management 4.0'
        case '/planification':
            return 'Planification'
        case '/Recette':
            return 'Recette'
    }
}

export const location = () => {
    const { pathname } = useLocation()
    const title = getTitle(pathname)

    return title
}
