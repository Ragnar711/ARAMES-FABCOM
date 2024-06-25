import { useState } from 'react'

const QueryBuilder = () => {
    const [selectFields, setSelectFields] = useState([])
    const [functions, setFunctions] = useState([])
    const [filters, setFilters] = useState([])
    const [groupBy, setGroupBy] = useState([])
    const [orderBy, setOrderBy] = useState([])
    const [limit, setLimit] = useState('')
    const [queryResult, setQueryResult] = useState(null)

    const availableFields = {
        Date: 'datte',
        Poste: 'poste',
        NOF: 'of',
        QD: 'qt_dechets',
        QNC: 'qt_non_conf',
        TRS: 'trs',
        TQ: 'tq',
        TP: 'tp_moy',
        TD: 'td',
        Tdech: 'd',
    }
    const availableFunctions = ['AVG', 'SUM', 'COUNT', 'MIN', 'MAX']
    const availableGroupBy = ['day', 'month', 'year', 'of', 'poste']

    const buildQuery = () => {
        let query = 'SELECT '

        // Add selected fields and functions
        query += selectFields.join(', ') + ' '

        // Add functions
        functions.forEach((func) => {
            query += `${func.func}(${func.field}) AS ${func.alias}, `
        })

        // Remove trailing comma and space
        query = query.trim().replace(/,$/, '')

        query += ' FROM historique'

        // Add filters
        if (filters.length > 0) {
            query += ' WHERE '
            filters.forEach((filter) => {
                query += `${filter.field} ${filter.operator} ${filter.value} AND `
            })
            query = query.replace(/ AND $/, '')
        }

        // Add group by
        if (groupBy.length > 0) {
            query += ' GROUP BY ' + groupBy.join(', ')
        }

        // Add order by
        if (orderBy.length > 0) {
            query += ' ORDER BY ' + orderBy.join(', ')
        }

        // Add limit
        if (limit) {
            query += ' LIMIT ' + limit
        }

        return query
    }

    return (
        <div>
            <h1>SQL Query Builder</h1>
            <div>
                <h2>Select Fields</h2>
                {Object.keys(availableFields).map((field) => (
                    <label key={field}>
                        <input
                            type="checkbox"
                            value={field}
                            onChange={(e) => {
                                if (e.target.checked) {
                                    setSelectFields([
                                        ...selectFields,
                                        availableFields[field],
                                    ])
                                } else {
                                    setSelectFields(
                                        selectFields.filter(
                                            (f) => f !== availableFields[field]
                                        )
                                    )
                                }
                            }}
                        />
                        {field}
                    </label>
                ))}
            </div>

            <div>
                <h2>Functions</h2>
                {availableFunctions.map((func) => (
                    <div key={func}>
                        <label>
                            {func}
                            <select
                                onChange={(e) => {
                                    const value = e.target.value
                                    if (value !== '') {
                                        setFunctions([
                                            ...functions,
                                            {
                                                func,
                                                field: value,
                                                alias: `${func}_${value}`,
                                            },
                                        ])
                                    }
                                }}
                            >
                                <option value="">Select Field</option>
                                {Object.keys(availableFields).map((field) => (
                                    <option key={field} value={field}>
                                        {field}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                ))}
            </div>

            <div>
                <h2>Filters</h2>
                {Object.keys(availableFields).map((field) => (
                    <div key={field}>
                        <label>
                            {field}
                            <select
                                onChange={(e) => {
                                    const operator = e.target.value
                                    if (operator !== '') {
                                        const value = prompt(
                                            `Enter value for ${field} ${operator}`
                                        )
                                        if (value !== null) {
                                            setFilters([
                                                ...filters,
                                                { field, operator, value },
                                            ])
                                        }
                                    }
                                }}
                            >
                                <option value="">Select Operator</option>
                                <option value="=">=</option>
                                <option value="!=">!=</option>
                                <option value="<">&gt;</option>
                                <option value=">">&gt;</option>
                                <option value="<=">&gt;=</option>
                                <option value=">=">&gt;=</option>
                            </select>
                        </label>
                    </div>
                ))}
            </div>

            <div>
                <h2>Group By</h2>
                {availableGroupBy.map((group) => (
                    <label key={group}>
                        <input
                            type="checkbox"
                            value={group}
                            onChange={(e) => {
                                if (e.target.checked) {
                                    setGroupBy([...groupBy, group])
                                } else {
                                    setGroupBy(
                                        groupBy.filter((g) => g !== group)
                                    )
                                }
                            }}
                        />
                        {group}
                    </label>
                ))}
            </div>

            <div>
                <h2>Order By</h2>
                {Object.keys(availableFields).map((field) => (
                    <label key={field}>
                        <input
                            type="checkbox"
                            value={field}
                            onChange={(e) => {
                                if (e.target.checked) {
                                    setOrderBy([...orderBy, field])
                                } else {
                                    setOrderBy(
                                        orderBy.filter((o) => o !== field)
                                    )
                                }
                            }}
                        />
                        {field}
                    </label>
                ))}
            </div>

            <div>
                <h2>Limit</h2>
                <input
                    type="number"
                    value={limit}
                    onChange={(e) => setLimit(e.target.value)}
                />
            </div>

            <button>Execute Query</button>

            <div>
                <h2>Query Result</h2>
                {queryResult && (
                    <pre>{JSON.stringify(queryResult, null, 2)}</pre>
                )}
            </div>
        </div>
    )
}

export default QueryBuilder
