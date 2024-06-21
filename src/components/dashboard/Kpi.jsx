import { getColor } from '../../utils/getColor'

const Kpi = ({ kpi, value, style }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
            }}
        >
            <div>
                <span className={style.titreValue}>
                    <sub
                        style={{
                            fontSize: '0.3rem',
                            color: 'black',
                            fontWeight: 'bold',
                        }}
                    >
                        {kpi}
                    </sub>{' '}
                    |
                </span>
            </div>
            <div style={{ marginLeft: '11px' }}>
                <span
                    style={{
                        fontSize: '0.4rem',
                        color: getColor(value, kpi.toLowerCase()),
                        fontWeight: 'bold',
                    }}
                >
                    {value} %
                </span>
            </div>
        </div>
    )
}

export default Kpi
