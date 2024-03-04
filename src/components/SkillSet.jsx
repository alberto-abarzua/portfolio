import PropTypes from 'prop-types';
const SkillSet = ({ label, svg, score, children }) => {
    return (
        <div className="flex w-full flex-col rounded-md bg-gray-400/30 p-4">
            <div className="flex items-center justify-start gap-x-2">
                <img src={svg} alt={label} className="h-7 w-7" />
                <p className="text">{label}</p>
                <p className="text italic text-gray-900">{score}/5</p>
                <div className="ml-auto flex flex-row gap-x-1">
                    {[...Array(Math.floor(score))].map((e, i) => (
                        <div className="h-3 w-7 rounded-sm bg-green-600 bg-opacity-90"></div>
                    ))}

                    {Math.round(score) - score != 0 && (
                        <div className="flex">
                            <div className="h-3 w-4 rounded-l-sm bg-green-600 bg-opacity-90"></div>
                            <div className="h-3 w-3 rounded-r-sm bg-gray-400 bg-opacity-90"></div>
                        </div>
                    )}

                    {[...Array(5 - Math.ceil(score))].map((e, i) => (
                        <div className="h-3 w-7 rounded-sm bg-gray-400"></div>
                    ))}
                </div>
            </div>
            {children && <br />}
            <div className="flex scale-[0.85] transform flex-col gap-y-2">{children}</div>
        </div>
    );
};

SkillSet.propTypes = {
    label: PropTypes.string,
    svg: PropTypes.string,
    score: PropTypes.number,
};

export default SkillSet;
