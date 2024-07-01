import iconparam from '../../assets/iconparam.webp'

const Bloc2 = ({ style }) => {
    return (
        <div className={style.bloc2}>
            <p className={style.title}>
                <img alt="icon" src={iconparam} /> Résultats de production
                instantanés
            </p>
            <div className={style.content}></div>
        </div>
    )
}

export default Bloc2
