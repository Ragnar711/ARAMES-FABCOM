import style from '../styles/Historique.module.css'
import filtre from '../assets/filtre.png'
import recherche from '../assets/recherche.png'
import table from '../assets/table.png'
import Loader from '../components/Loader'
import { lazy, Suspense } from 'react'
import { machineData } from '../config/config'
import { DatePicker, Space, ConfigProvider, Table } from 'antd'

const Select = lazy(() => import('../components/historique/Select'))
const GenericSelect = lazy(() =>
    import('../components/historique/GenericSelect')
)
const Button = lazy(() => import('../components/historique/Button'))

const users = ['user1', 'user2', 'user3', 'user4']

const columns = [
    {
        title: 'Post/heure',
        dataIndex: 'Post/heure',
    },
    {
        title: 'N°OF',
        dataIndex: 'N°OF',
    },
    {
        title: 'Qté Prod OK',
        dataIndex: 'Qté Prod OK',
    },
    {
        title: 'Qté NC',
        dataIndex: 'Qté NC',
    },
    {
        title: 'Arrêts',
        dataIndex: 'Arrêts',
    },
    {
        title: 'TRS',
        dataIndex: 'TRS',
    },
    {
        title: 'Cons. Plaque',
        dataIndex: 'Cons. Plaque',
    },
    {
        title: 'Cons. Enveloppe',
        dataIndex: 'Cons. Enveloppe',
    },
    {
        title: 'Cons. Bac',
        dataIndex: 'Cons. Bac',
    },
    {
        title: 'Cons. Couvercle',
        dataIndex: 'Cons. Couvercle',
    },
]

const data = [
    {
        key: '1',
        'Post/heure': 'Matin I 10h',
        'N°OF': 605847,
        'Qté Prod OK': 367,
        'Qté NC': 30,
        Arrêts: '00:03:25',
        TRS: '55%',
        'Cons. Plaque': 10,
        'Cons. Enveloppe': 20,
        'Cons. Bac': 10,
        'Cons. Couvercle': 30,
    },
    {
        key: '2',
        'Post/heure': 'Matin I 11h',
        'N°OF': 605847,
        'Qté Prod OK': 357,
        'Qté NC': 20,
        Arrêts: '00:01:25',
        TRS: '65%',
        'Cons. Plaque': 5,
        'Cons. Enveloppe': 5,
        'Cons. Bac': 0,
        'Cons. Couvercle': 0,
    },
    {
        key: '3',
        'Post/heure': 'Matin I 12h',
        'N°OF': 605847,
        'Qté Prod OK': 307,
        'Qté NC': 0,
        Arrêts: '00:00:25',
        TRS: '85%',
        'Cons. Plaque': 0,
        'Cons. Enveloppe': 0,
        'Cons. Bac': 0,
        'Cons. Couvercle': 0,
    },
]

const Historique = () => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    DatePicker: {
                        colorBorder: 'black',
                        colorTextPlaceholder: 'black',
                    },
                },
            }}
        >
            <div className={style.container}>
                <div className={style.filters}>
                    <p className={style.title}>
                        <img alt="icon" src={filtre} /> Filtre de recherche
                    </p>
                    <div className={style.content}>
                        <div className={style.select}>
                            <div className={style.div1}>
                                <Suspense fallback={<Loader />}>
                                    <Select style={style} data={machineData} />
                                </Suspense>
                            </div>
                            <div className={style.div2}>
                                <GenericSelect
                                    title="Sélectionner Opérateur"
                                    data={users}
                                    style={style}
                                />
                            </div>
                            <div className={style.div3}>
                                <GenericSelect
                                    title="Entre N°OF"
                                    data={users}
                                    style={style}
                                />
                            </div>
                        </div>
                        <div className={style.date}>
                            <Suspense fallback={<Loader />}>
                                <Button text="Afficher J-1" style={style} />
                                <Button text="Afficher W-1" style={style} />
                                <Button text="Afficher M-1" style={style} />
                            </Suspense>
                        </div>
                        <div className={style.calendar}>
                            <Suspense fallback={<Loader />}>
                                <Button
                                    text="Afficher calendrier"
                                    style={style}
                                />
                            </Suspense>
                            <div>
                                <Space direction="horizontal">
                                    <DatePicker placeholder="De: xx/xx/xxxx" />
                                    <DatePicker placeholder="À : xx/xx/xxxx" />
                                </Space>
                            </div>
                        </div>
                        <div className={style.recherche}>
                            <img src={recherche} alt="recherche" />
                            <button>Recherche</button>
                        </div>
                    </div>
                </div>
                <div className={style.table}>
                    <ConfigProvider
                        theme={{
                            components: {
                                Table: {
                                    headerBg: '#b3c6e7',
                                    headerFilterHoverBg: '#b3c6e7',
                                    headerSortActiveBg: '#b3c6e7',
                                    headerSortHoverBg: '#b3c6e7',
                                    headerSortUpBg: '#b3c6e7',
                                    headerSortDownBg: '#b3c6e7',
                                },
                            },
                        }}
                    >
                        <div className={style.table}>
                            <div className={style.table_title}>
                                <p className={style.title}>
                                    <img alt="icon" src={table} /> Historique
                                    des résultats - Ligne Sovema 1 [de
                                    xx/xx/xxxx à xx/xx/xxxx]
                                </p>
                                <div className={style.recherche}>
                                    <img src={table} alt="excel" />
                                    <button>Exporter</button>
                                </div>
                            </div>
                            <Table
                                columns={columns}
                                dataSource={data}
                                pagination={false}
                            />
                        </div>
                    </ConfigProvider>
                </div>
            </div>
        </ConfigProvider>
    )
}

export default Historique
