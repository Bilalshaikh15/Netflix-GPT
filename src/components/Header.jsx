import Logo from '../assets/Netflix_Logo_PMS.png'


const Header = () => {
    return (
        <>
            <img className='w-40 absolute z-30' src={Logo} alt="Logo" />
        </>
    )
}

export default Header