// ProjectCard.jsx
import React from 'react';
import SkillTag from './SkillTag';

const ProjectCard = ({ title, liveDocs, githubRepo, liveSite, description, tags, image }) => {
    return (
        <div className="rounded-md border-gray-300 bg-slate-800/50 px-4 py-4 text-white bg-blend-overlay shadow-lg drop-shadow-lg duration-500 animate-in fade-in lg:px-12">
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
                <div>
                    <p>{description}</p>
                    <div className="mt-4 flex flex-row flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <SkillTag key={index} label={tag.label} svg={tag.svg} />
                        ))}
                    </div>
                </div>
                <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full rounded-lg object-cover opacity-90 shadow-sm shadow-gray-400 duration-300 animate-in slide-in-from-right lg:w-5/12"
                />
            </div>
        </div>
    );
};

export default ProjectCard;