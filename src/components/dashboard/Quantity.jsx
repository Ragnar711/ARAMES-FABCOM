const Quantity = ({ style, quantity, value }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <div>
                <span className={style.spanKpi}>{quantity}:</span>
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
                            fontSize: '10px',
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
