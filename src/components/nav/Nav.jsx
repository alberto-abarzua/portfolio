import NavButton from '@/components/nav/NavButton';
import PropTypes from 'prop-types';
const Nav = ({ className }) => {
    return (
        <nav className={`fixed top-0 flex w-full items-center bg-sky-50 bg-opacity-30 ${className}`}>
            <NavButton label="Home" path="/" />
            <NavButton label="About" path="/about/" />
            <NavButton label="Proj3cts" path="/projects/" />
            <NavButton label="Contact" path="/contact/" />
        </nav>
    );
};

Nav.propTypes = {
    className: PropTypes.string,
};

export default Nav;
