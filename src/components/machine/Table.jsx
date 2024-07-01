import table from '../../assets/table.png'

const Table = ({ style }) => {
    return (
        <div className={style.table}>
            <p className={style.title}>
                <img alt="icon" src={table} /> Historique des résultats - 24 h
                [date dynamique dès l’ouverture de la session]
            </p>
            <div className={style.content}></div>
        </div>
    )
}

export default Table
