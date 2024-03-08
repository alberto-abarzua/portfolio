import SectionLink from '@/components/SectionLink';
import { useOutlet } from 'react-router-dom';
import Nav from '@/components/nav/Nav';
import GithubSvg from '@/assets/svgs/github.svg';
import CdSvg from '@/assets/svgs/cd.svg';

export default function Root() {
    let Outlet = useOutlet();
    return (
        <div className="animate-noise flex min-h-screen w-full flex-col items-center  bg-neutral-900  bg-opacity-90  bg-noise bg-repeat">
            <Nav
                className={`transform transition-all duration-300 ${
                    !Outlet ? '-translate-y-full' : ''
                }`}
            ></Nav>
            {Outlet ? (
                Outlet
            ) : (
                <>
                    <div className="z-30 flex h-full flex-col items-center justify-center text-white lg:h-screen">
                        <h1 className="mb-5 font-mono text-4xl font-bold">My Portfolio</h1>
                        <p className="mb-3 font-mono text-lg">
                            By: <span className="font-bold">Alberto Abarzúa</span>
                        </p>

                        <p className="text-center font-mono text-lg">
                            <span className="text-green-500 font-bold">Full Stack</span> Developer{' '}
                            <span className="font-bold">&&</span> Computer Science 
                            <span className="text-green-500 font-bold"> Engineer</span> 
                        </p>
                        <div className="mb flex flex-col items-center justify-center gap-x-10 lg:mt-32 lg:flex-row">
                            <SectionLink className="delay-75" label="About & Skills" path="about" />
                            <SectionLink className="delay-150" label="Projects" path="/projects/" />
                            <SectionLink className="delay-300" label="Contact" path="/contact/" />
                        </div>
                    </div>
                    <div
                        className="absolute left-[calc(50%-4rem)] top-10  z-20 transform-gpu blur-3xl sm:left-[calc(50%-20rem)] lg:left-48 lg:top-[calc(50%-20rem)] xl:left-[calc(50%-24rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-indigo-500 to-green-500 opacity-30"
                            style={{
                                clipPath:
                                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                            }}
                        />
                    </div>
                </>
            )}
            <footer className="flex h-20 w-full flex-row items-center justify-center gap-10 bg-gray-800/30  px-4 text-white">
                <p className="font-mono text-sm">
                    Made with{' '}
                    <span role="img" aria-label="heart">
                        ❤️
                    </span>{' '}
                    by Alberto Abarzúa
                </p>
                <div className="flex flex-row gap-x-2 font-mono">
                    <img src={GithubSvg} alt="github" className="h-5 w-5 invert" />
                    <a href="https://github.com/alberto-abarzua" target="_blank">
                        My Github
                    </a>
                </div>
                <div></div>
            </footer>
        </div>
    );
}
