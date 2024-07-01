import pareto from '../../assets/pareto.png'

const Pareto = ({ style, title, className }) => {
    return (
        <div className={style.className}>
            <p className={style.title}>
                <img alt="icon" src={pareto} /> {title}
            </p>
            <div className={style.content}></div>
        </div>
    )
}

export default Pareto
