import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SectionLink = ({ label, path, className }) => {
    return (
        <Link to={path}>
            <button
                className={`${className} group transform p-4 duration-100 animate-in fade-in-0 slide-in-from-top `}
            >
                <h2 className="cursor-pointer font-mono text-2xl">
                    <span className="font-bold group-hover:text-green-700">&lt;</span>
                    <span className="group-hover:text-gray-600">{label}</span>
                    <span className="font-bold group-hover:text-green-700 ">/&gt;</span>
                </h2>
            </button>
        </Link>
    );
};

SectionLink.propTypes = {
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default SectionLink;
