import NavButton from '@/components/nav/NavButton';
import PropTypes from 'prop-types';
const Nav = ({ className }) => {
    return (
        <nav
            className={`fixed top-0 flex w-full items-center bg-gray-300 bg-opacity-60 ${className}`}
        >
            <NavButton label="Index" path="/" />
            <div className = "hidden lg:block">|</div>
            <NavButton className="hidden lg:block" label="About" path="/about/" />
            <NavButton className="hidden lg:block" label="Proj3cts" path="/projects/" />
            <NavButton className="hidden lg:block" label="Contact" path="/contact/" />
        </nav>
    );
};

Nav.propTypes = {
    className: PropTypes.string,
};

export default Nav;
