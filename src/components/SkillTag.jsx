import PropTypes from 'prop-types';
const SkillTag = ({ label, svg }) => {
    return (
        <div className="flex w-fit flex-col rounded-full border border-gray-300/50  bg-opacity-70 p-2 px-3">
            <div className="flex items-center justify-start gap-x-2">
                <img src={svg} alt={label} className="h-6 w-6 invert" />
                <p className="text">{label}</p>
            </div>
        </div>
    );
};

SkillTag.propTypes = {
    label: PropTypes.string,
    svg: PropTypes.string,
    score: PropTypes.number,
};

export default SkillTag;
