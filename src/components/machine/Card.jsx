const Card = ({ style, index, name, param1, value1, param2, value2 }) => {
    return (
        <div className={style.card}>
            <div className={style.card1}>
                <div>{index}</div>
                <div>{name}</div>
            </div>
            <div></div>
            <div>
                <div>
                    <span>{param1}</span>|<span>{value1}</span>
                </div>
                <div>
                    <span>{param2}</span>|<span>{value2}</span>
                </div>
            </div>
        </div>
    )
}

export default Card
