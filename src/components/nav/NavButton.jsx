import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const NavButton = ({ label, path, className }) => {
    return (
        <Link to={path} className={`${className}`}>
            <button className="group p-4">
                <h2 className="cursor-pointer font-mono text-xl text-white hover:text-gray-200  ">
                    <span className="font-sm mr-1 font-bold group-hover:text-green-500">{'#'}</span>
                    <span>{label}</span>
                    <span className="font-bold group-hover:text-green-900">{''}</span>
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
