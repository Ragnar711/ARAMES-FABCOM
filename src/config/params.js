export const Parameters = {
    KPIs: {
        TRS: 'Taux de rendement synthétique',
        TP: 'Taux de performance',
        TD: 'Taux de disponibilité',
        TQ: 'Taux de qualité',
        Tde: 'Taux de déchets',
    },
    OFs: {
        TBS: 'Ligne d’assemblage TBS',
        SOVEMA1: 'Ligne d’assemblage SOVEMA 1',
        SOVEMA2: 'Ligne d’assemblage SOVEMA 2',
        'Ligne 4': "Ligne d'assemblage 4",
        'Ligne 5': "Ligne d'assemblage 5",
    },
    Quantities: {
        'Qté Conf [batterie]': 'Quantité totale produite conformes',
        'Qté NC [batterie]': 'Quantité totale Non conforme',
        'Qté Ret [batterie]': 'Quantité totale retouchée',
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
            'TC Env [sec]': 'Cadence  réelle de la phase enveloppeuse',
            'TC COS [sec]': 'Temps de cycle réel de la phase COS',
            'TC SC [sec]': 'Temps de cycle réel soudure des connexions',
            'TC BC [sec]': 'Temps de cycle réel soudure Bac/Couvercle',
            'TC th [sec]': 'Temps de cycle théorique de la ligne',
        },
        Alerte: {
            'Déchet [Kg]': 'Dernier déchet enregistré par cause',
            'Arrêt [sec]': 'Dernier arrêt enregistré par cause',
            'Qté NC [Kg]': 'Dernière quantité NC déclarée par cause',
        },
    },
}
