const Of = ({ style, machine, NOF }) => {
    return (
        <div className={style.divSPan}>
            <div>
                {' '}
                <span className={style.spanKpi}>{machine}:</span>
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
                        }}
                    >
                        N°OF
                    </sub>{' '}
                    <span style={{ color: 'black' }}>|</span>
                </span>
                <span
                    style={{
                        fontSize: '10px',
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
