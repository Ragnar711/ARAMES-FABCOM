const Card = ({ style, index, name, param1, value1, param2, value2 }) => {
    return (
        <div className={style.card}>
            <div className={style.card1}>
                <div
                    style={{
                        fontSize: '1.5rem',
                        color: '#002060',
                    }}
                >
                    {index}
                </div>
                <div
                    style={{
                        color: '#002060',
                    }}
                >
                    {name}
                </div>
            </div>
            <div className={style.separator}></div>
            <div className={style.card2}>
                <div className={style.card_text}>
                    <span
                        style={{
                            paddingRight: '5px',
                            
                            fontSize: '0.9rem',
                        }}
                    >
                        {value1}
                    </span>
                    <span
                        style={{
                            paddingLeft: '5px',
                            color: '#00b050',
                            
                            fontSize:"0.6rem"
                        }}
                    >
                        <span className={style.line}></span> {param1}
                    </span>
                </div>
                <div className={style.card_text}>
                    <span
                        style={{
                            paddingRight: '5px',
                            
                            fontSize: '0.9rem',
                        }}
                    >
                        {value2}
                    </span>
                    <span
                        style={{
                            paddingLeft: '5px',
                            color: '#ff2f2f',
                            fontSize:"0.6rem"
                        }}
                    >
                        <span className={style.line}></span> {param2}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card
