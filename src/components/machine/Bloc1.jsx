import iconparam from '../../assets/iconparam.webp'

const Bloc1 = ({ style }) => {
    return (
        <div className={style.bloc1}>
            <p className={style.title}>
                <img alt="icon" src={iconparam} /> Performance instantanée
            </p>
            <div className={style.content}></div>
        </div>
    )
}

export default Bloc1
