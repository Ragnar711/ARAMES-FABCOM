const Of = ({ style, machine, NOF }) => {
    return (
        <div className={style.divSPan}>
            <div>
                {' '}
                <span className={style.titreBloc}>
                    {machine.replaceAll('-', ' ')}
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
                    <span className={style.titreValue}>
                        <sub
                            style={{
                                fontSize: '0.4rem',
                                color: 'black',
                                fontWeight: 'bold',
                            }}
                        >
                            N°OF
                        </sub>{' '}
                        |
                    </span>
                </div>
                <div style={{ marginLeft: '11px' }}>
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
        </div>
    )
}

export default Of
