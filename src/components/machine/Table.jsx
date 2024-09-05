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
        render: (text) => <span>{text.toFixed(2)} pcs</span>,
    },
    {
        title: 'Qté NC',
        dataIndex: 'Qté NC',
        render: (text) => <span>{text.toFixed(2)} pcs</span>,
    },
    {
        title: 'Arrêts',
        dataIndex: 'Arrêts',
    },
    {
        title: 'TRS',
        dataIndex: 'TRS',
        render: (text) => <span>{text.toFixed(2)} %</span>,
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
        render: (text) => <span>{text.toFixed(2)}</span>,
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
        render: (text) => <span>{text.toFixed(2)}</span>,
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
        render: (text) => <span>{text.toFixed(2)}</span>,
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
        render: (text) => <span>{text.toFixed(2)}</span>,
    },
]

const TableHisto = ({ style, data }) => {
    const tableData = Array.isArray(data) ? data : []
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
                <Table
                    columns={columns}
                    dataSource={tableData}
                    pagination={false}
                />
            </div>
        </ConfigProvider>
    )
}

export default TableHisto
