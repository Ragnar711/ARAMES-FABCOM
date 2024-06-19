export const getTitle = (pathname) => {
    const uapRegex =
        /\/uap\/(UAP-Assemblage)\/(UAP-Plaque)\/(Charge-Finition)\//
    const machineRegex =
        /\/machine\/(machine6|machine7|machine9|machine10|machine11)\//

    if (pathname.match(uapRegex)) {
        const section = pathname.match(uapRegex)[1]
        return `Section - ${
            section.charAt(0).toUpperCase() + section.slice(1, 9) + ' ' + 'PE'
        }`
    } else if (pathname.match(machineRegex)) {
        const machine = pathname.match(machineRegex)[1]
        return `Résultat Ligne - ${machine.slice(7)}`
    }

    switch (pathname) {
        case '/dashboard':
            return 'Résultat usine'
        case '/historique':
            return 'Historique'
        case '/management':
            return 'Management 4.0 '
        case '/Planification':
            return 'Planification'
        case '/Recette':
            return 'Recette'
        case '/Fmts':
            return 'Fmts'
        default:
            return 'Résultat Ligne'
    }
}
