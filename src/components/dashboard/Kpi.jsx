import { getColor } from '../../utils/getColor'

const Kpi = ({ kpi, value, style }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}
        >
            <div>
                <span className={style.titreValue}>
                    <sub
                        style={{
                            fontSize: '10px',
                            color: 'black',
                            fontWeight: 'bold',
                        }}
                    >
                        {kpi}
                    </sub>
                    {}|
                </span>
            </div>
            <div style={{ marginLeft: '11px' }}>
                <span
                    style={{
                        fontSize: '14px',
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
