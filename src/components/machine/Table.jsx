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
        title: 'Ref. Plaque',
        dataIndex: 'Ref. Plaque',
        colSpan: 0,
    },
    {
        title: 'Cons. Plaque',
        dataIndex: 'Cons. Plaque',
        colSpan: 2,
    },
    {
        title: 'Ref. Enveloppe',
        dataIndex: 'Ref. Enveloppe',
        colSpan: 0,
    },
    {
        title: 'Cons. Enveloppe',
        dataIndex: 'Cons. Enveloppe',
        colSpan: 2,
    },
    {
        title: 'Ref. Bac',
        dataIndex: 'Ref. Bac',
        colSpan: 0,
    },
    {
        title: 'Cons. Bac',
        dataIndex: 'Cons. Bac',
        colSpan: 2,
    },
    {
        title: 'Ref. Couvercle',
        dataIndex: 'Ref. Couvercle',
        colSpan: 0,
    },
    {
        title: 'Cons. Couvercle',
        dataIndex: 'Cons. Couvercle',
        colSpan: 2,
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
        'Ref. Plaque': 'REF123',
        'Cons. Plaque': 15,
        'Ref. Enveloppe': 'REF456',
        'Cons. Enveloppe': 20,
        'Ref. Bac': 'REF789',
        'Cons. Bac': 10,
        'Ref. Couvercle': 'REF101112',
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
        'Ref. Plaque': 'REF122',
        'Cons. Plaque': 5,
        'Ref. Enveloppe': 'REF455',
        'Cons. Enveloppe': 5,
        'Ref. Bac': 'REF788',
        'Cons. Bac': 0,
        'Ref. Couvercle': 'REF101113',
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
        'Ref. Plaque': 'REF121',
        'Cons. Plaque': 0,
        'Ref. Enveloppe': 'REF454',
        'Cons. Enveloppe': 0,
        'Ref. Bac': 'REF787',
        'Cons. Bac': 0,
        'Ref. Couvercle': 'REF101114',
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
