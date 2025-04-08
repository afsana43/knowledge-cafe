import profile from '././.././../../img/profile.jpg'

const Header = () => {
    return (
        <header className='flex justify-around items-center mt-8'>
            <h1 className='text-3xl font-semibold'> Knowledge cafe</h1>
            <img src={profile} alt="" className='w-16 h-16 rounded-full' />
        </header>
    );
};

export default Header;