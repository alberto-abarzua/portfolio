import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const NavButton = ({ label, path, className }) => {
    return (
        <Link to={path} className={`${className}`}>
            <button className="group p-4">
                <h2 className="cursor-pointer font-mono text-xl hover:text-gray-700 underline underline-offset-2 ">
                    <span className="font-bold group-hover:text-green-900">#</span>
                    <span>{label}</span>
                </h2>
            </button>
        </Link>
    );
};

NavButton.propTypes = {
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default NavButton;
