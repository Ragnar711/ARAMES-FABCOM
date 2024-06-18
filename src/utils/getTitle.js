export const getTitle = (pathname) => {
    const uapRegex = /\/uap\/(extrusionPE)/
    const machineRegex =
        /\/machine\/(machine6|machine7|machine9|machine10|machine11)/

    const uapMatch = pathname.match(uapRegex)
    const machineMatch = pathname.match(machineRegex)

    if (uapMatch) {
        const section = uapMatch[1]
        return `Section - ${
            section.charAt(0).toUpperCase() + section.slice(1, 9)
        } PE`
    } else if (machineMatch) {
        const machine = machineMatch[1]
        return `Résultat Ligne - ${machine.slice(7)}`
    }

    const titles = {
        '/dashboard': 'Résultat usine',
        '/historique': 'Historique',
        '/management': 'Management 4.0',
        '/Planification': 'Planification',
        '/Recette': 'Recette',
        '/Fmts': 'Fmts',
    }

    return titles[pathname] || 'Résultat Ligne'
}
