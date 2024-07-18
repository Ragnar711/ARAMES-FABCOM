export const Parameters = {
    KPIs: {
        TRS: 'Taux de rendement synthétique',
        TP: 'Taux de performance',
        TD: 'Taux de disponibilité',
        TQ: 'Taux de qualité',
        Tde: 'Taux de déchets',
    },
    OFs: {
        'Macchi 1': 'Unité d’extrusion Macchi 1',
        'Macchi 2': 'Unité d’extrusion Macchi 2',
        'Varex': "Ligne d'assemblage 4",
    },
    Quantities: {
        'Qté Conf  [Kg]': 'Quantité totale produite conformes',
        'Qté NC [Kg]': 'Quantité totale Non conforme',
        'Qté Ret [Kg]': 'Quantité totale retouchée',
        'Qté déchet [Kg]': 'Quantité déchet déclarée vers recyclage',
    },
    Eng: {
        'Energie  [KWh]': 'Total consommation d’énergie active',
        'P [KW]': 'Total Puissance active ',
        'Q [KVAR]': 'Total puissance réactive',
        'cos ϕ [ ]': 'Facteur de puissance',
        'CO2 [Kg]': 'Total Empreinte carbone',
    },
    machine: {
        OF: {
            'N°OF': 'Numéro de l’ordre de fabrication',
            'Réf Art': 'Référence de l’article à réaliser',
            'Qté Obj': 'Quantité objectif à réaliser',
            Production: 'Quantité réalisée jusqu’à l’instant',
        },
        Process: {
            'Débit Rél [Kg/min]': 'Vitesse de débit réelle instantanée',
            'VT[m/min]': 'Vitesse de tirage instantanée',
            'VE [Tour/min]': 'Vitesse d’extrusion instantanée',
            'PM[Kg/m]': 'Poids au métre instantanée',
            'Débit Th[sec]': 'Débit théorique selon recette',
        },
        Alerte: {
            'Déchet  [Kg]': 'Dernier déchet enregistré par cause',
            'Arrêt [sec]': 'Dernier arrêt enregistré par cause',
            'Qté NC [Kg]': 'Dernière quantité NC déclarée par cause',
        },
    },
}
