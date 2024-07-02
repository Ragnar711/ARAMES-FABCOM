import table from '../../assets/table.png'
import { Table } from 'antd'

const columns = [
    {
        title: 'Post/heure',
        dataIndex: 'Post/heure',
        sorter: {
            compare: (a, b) => a['Post/heure'].localeCompare(b['Post/heure']),
            multiple: 1,
        },
    },
    {
        title: 'N°OF',
        dataIndex: 'N°OF',
        sorter: {
            compare: (a, b) => a['N°OF'] - b['N°OF'],
            multiple: 2,
        },
    },
    {
        title: 'Qté Prod OK',
        dataIndex: 'Qté Prod OK',
        sorter: {
            compare: (a, b) => a['Qté Prod OK'] - b['Qté Prod OK'],
            multiple: 3,
        },
    },
    {
        title: 'Qté NC',
        dataIndex: 'Qté NC',
        sorter: {
            compare: (a, b) => a['Qté NC'] - b['Qté NC'],
            multiple: 4,
        },
    },
    {
        title: 'Arrêts',
        dataIndex: 'Arrêts',
        sorter: {
            compare: (a, b) => a['Arrêts'].localeCompare(b['Arrêts']),
            multiple: 5,
        },
    },
    {
        title: 'TRS',
        dataIndex: 'TRS',
        sorter: {
            compare: (a, b) => parseFloat(a['TRS']) - parseFloat(b['TRS']),
            multiple: 6,
        },
    },
    {
        title: 'Cons. Plaque',
        dataIndex: 'Cons. Plaque',
        sorter: {
            compare: (a, b) => a['Cons. Plaque'] - b['Cons. Plaque'],
            multiple: 7,
        },
    },
    {
        title: 'Cons. Enveloppe',
        dataIndex: 'Cons. Enveloppe',
        sorter: {
            compare: (a, b) => a['Cons. Enveloppe'] - b['Cons. Enveloppe'],
            multiple: 8,
        },
    },
    {
        title: 'Cons. Bac',
        dataIndex: 'Cons. Bac',
        sorter: {
            compare: (a, b) => a['Cons. Bac'] - b['Cons. Bac'],
            multiple: 9,
        },
    },
    {
        title: 'Cons. Couvercle',
        dataIndex: 'Cons. Couvercle',
        sorter: {
            compare: (a, b) => a['Cons. Couvercle'] - b['Cons. Couvercle'],
            multiple: 10,
        },
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

const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
}

const TableHisto = ({ style }) => {
    return (
        <div className={style.table}>
            <p className={style.title}>
                <img alt="icon" src={table} /> Historique des résultats - 24 h
                [date dynamique dès l’ouverture de la session]
            </p>
            <Table
                columns={columns}
                dataSource={data}
                onChange={onChange}
                pagination={false}
            />
        </div>
    )
}

export default TableHisto
