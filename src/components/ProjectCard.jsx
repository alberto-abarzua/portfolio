// ProjectCard.jsx
import React from 'react';
import SkillTag from './SkillTag';

const ProjectCard = ({ title, liveDocs, githubRepo, liveSite, description, tags, image }) => {
    return (
        <div className="h-full rounded-md border-gray-300 bg-slate-800/40 px-4 py-4 text-white bg-blend-overlay shadow-lg drop-shadow-lg duration-500 animate-in fade-in lg:px-12">
            <div className="my-2 flex flex-wrap items-center justify-start gap-4">
                <h3 className="text-2xl font-bold">{title}</h3>
                {liveDocs && (
                    <a
                        className="text-md w-fit rounded-md border border-gray-400/70 px-3 py-2 italic text-blue-400 shadow-gray-500 drop-shadow-lg  hover:text-blue-600"
                        href={liveDocs}
                        target="_blank"
                    >
                        Live Docs
                    </a>
                )}
                {githubRepo && (
                    <a
                        className="text-md w-fit rounded-md border border-gray-400/70 px-3 py-2 italic text-blue-400 shadow-gray-500 drop-shadow-lg  hover:text-blue-600"
                        href={githubRepo}
                        target="_blank"
                    >
                        Github Repo
                    </a>
                )}
                {liveSite && (
                    <a
                        className="text-md w-fit rounded-md border border-gray-400/70 px-3 py-2 italic text-blue-400 shadow-gray-500 drop-shadow-lg  hover:text-blue-600"
                        href={liveSite}
                        target="_blank"
                    >
                        Live Site
                    </a>
                )}
            </div>

            <div className="flex flex-col items-start justify-center gap-4 py-2 lg:flex-row">
                <div className="w-[80%]">
                    <p>{description}</p>
                    <div className="mt-4 flex flex-row flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <SkillTag key={index} label={tag.label} svg={tag.svg} />
                        ))}
                    </div>
                </div>
                <div className=" h-[230px] w-1/2 lg:w-full ">
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover opacity-90 duration-300 animate-in slide-in-from-right "
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
