import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const SectionLink = ({ label, path }) => {
    return (
        <Link to={path}>
            <button className="p-4">
                <h2 className="cursor-pointer font-mono text-xl hover:text-gray-700">{label}</h2>
            </button>
        </Link>
    );
};

SectionLink.propTypes = {
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default SectionLink;
