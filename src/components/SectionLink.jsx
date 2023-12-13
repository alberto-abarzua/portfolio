import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SectionLink = ({ label, path }) => {
    return (
        <Link to={path}>
            <button className="p-4 group">
                <h2 className="cursor-pointer font-mono text-2xl">
                    <span className="group-hover:text-green-700 font-bold">&lt;</span>
                    <span className="group-hover:text-gray-600">{label}</span>
                    <span className="group-hover:text-green-700 font-bold ">/&gt;</span>
                </h2>
            </button>
        </Link>
    );
};

SectionLink.propTypes = {
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
};

export default SectionLink;

