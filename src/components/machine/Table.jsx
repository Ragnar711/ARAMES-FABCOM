import table from '../../assets/table.png'
import { Table, ConfigProvider } from 'antd'

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

const TableHisto = ({ style }) => {
    return (
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
                <p className={style.title}>
                    <img
                        alt="icon"
                        src={table}
                        style={{
                            width: '2.5%',
                            height: 'auto',
                        }}
                    />{' '}
                    Historique des résultats - 24 h [date dynamique dès
                    l’ouverture de la session]
                </p>
                <Table columns={columns} dataSource={data} pagination={false} />
            </div>
        </ConfigProvider>
    )
}

export default TableHisto
