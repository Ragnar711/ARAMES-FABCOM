import { useState } from 'react'

const Select = ({ data, style }) => {
    const [uap, setUap] = useState('')
    const uaps = Object.keys(data)

    return (
        <div className={style.selects}>
            <select
                className={style.selector}
                onChange={(e) => setUap(e.target.value)}
            >
                <option value="" disabled selected>
                    Sélectionner UAP
                </option>
                {uaps.map((uap) =>
                    data[uap].machines.length !== 0 ? (
                        <option key={uap} value={uap}>
                            {uap}
                        </option>
                    ) : null
                )}
            </select>
            <select className={style.selector}>
                <option value="" disabled selected>
                    Sélectionner Ligne
                </option>
                {data[uap]?.machines?.map((uap) => (
                    <option key={uap.machine} value={uap.machine}>
                        {uap.machine}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select
