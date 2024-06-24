const Quantity = ({ style, quantity, value }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
            }}
        >
            <div>
                <span
                    className={style.spanKpi}
                    style={{
                        fontSize: '0.4rem',
                        color: 'black',
                    }}
                >
                    {quantity}
                </span>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '29%',
                }}
            >
                <div>
                    <span className={style.value}>
                        <sub
                            style={{
                                color: 'black',
                                fontSize: '0.3rem',
                                width: '100%',
                            }}
                        >
                            Kg
                        </sub>{' '}
                        <span style={{ color: 'black' }}>|</span>
                    </span>
                </div>

                <div>
                    <span
                        style={{
                            fontSize: '0.4rem',
                            color: '#4C78C7',
                            fontWeight: 'bold',
                        }}
                    >
                        {value}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Quantity
