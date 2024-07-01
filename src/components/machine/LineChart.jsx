import yamazumi from '../../assets/yamazumi.png'

const LineChart = ({ style }) => {
    return (
        <div className={style.kpi}>
            <p className={style.title}>
                <img alt="icon" src={yamazumi} /> Évolution des indicateurs de
                performance
            </p>
            <div className={style.content}></div>
        </div>
    )
}

export default LineChart
