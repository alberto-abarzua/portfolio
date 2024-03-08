import NavButton from '@/components/nav/NavButton';
import PropTypes from 'prop-types';
const Nav = ({ className }) => {
    return (
        <>
            <nav
                className={`fixed top-0 z-50 h-16 flex w-full items-center bg-gray-800/30 ${className}`}
            >
                <NavButton label="Index" path="/" />
                <div className="hidden text-white lg:block">|</div>
                <NavButton className="hidden lg:block" label="About" path="/about/" />
                <NavButton className="hidden lg:block" label="Projects" path="/projects/" />
                <NavButton className="hidden lg:block" label="Contact" path="/contact/" />
            </nav>
            <div className="h-20"></div>
        </>
    );
};

Nav.propTypes = {
    className: PropTypes.string,
};

export default Nav;
