const Of = ({ style, machine, NOF }) => {
    return (
        <div className={style.divSPan}>
            <div>
                {' '}
                <span
                    className={style.spanKpi}
                    style={{
                        fontSize: '0.4rem',
                        color: 'black',
                    }}
                >
                    {machine}:
                </span>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '29%',
                }}
            >
                <span className={style.value}>
                    <sub
                        style={{
                            color: 'black',
                            width: '100%',
                            fontSize: '0.3rem',
                        }}
                    >
                        N°OF
                    </sub>{' '}
                    <span style={{ color: 'black' }}>|</span>
                </span>
                <span
                    style={{
                        fontSize: '0.4rem',
                        color: '#4C78C7',
                        fontWeight: 'bold',
                    }}
                >
                    {NOF}
                </span>
            </div>
        </div>
    )
}

export default Of
