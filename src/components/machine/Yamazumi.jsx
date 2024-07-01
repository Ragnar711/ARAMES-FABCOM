import yamazumi from '../../assets/yamazumi.png'

const Yamazumi = ({ style }) => {
    return (
        <div className={style.yamazumi}>
            <p className={style.title}>
                <img alt="icon" src={yamazumi} /> Yamazumi chart
            </p>
            <div className={style.content}></div>
        </div>
    )
}

export default Yamazumi
