import SectionLink from '@/components/SectionLink';
import { useOutlet } from 'react-router-dom';
import Nav from '@/components/nav/Nav';
import GithubSvg from '@/assets/svgs/github.svg';

export default function Root() {
    let Outlet = useOutlet();
    return (
        <div className="animate-noise flex w-full flex-col items-center  bg-gray-300  bg-opacity-90  bg-noise bg-repeat">
            <Nav
                className={`transform transition-all duration-300 ${
                    !Outlet ? '-translate-y-full' : ''
                }`}
            ></Nav>
            {Outlet ? (
                Outlet
            ) : (
                <div className="flex h-screen flex-col items-center justify-center text-black">
                    <h1 className="mb-5 font-mono text-5xl font-bold">W3lcome</h1>

                    <p className="mb-3 font-mono text-lg">
                        By: <span className="font-bold">Alberto Abarzúa</span>
                    </p>

                    <p className="text-center font-mono text-lg">
                        <span className="font-bold">Full Stack</span> Developer{' '}
                        <span className="font-bold">&&</span> Computer Science Engineer
                    </p>
                    <div className="mt-40 flex flex-col items-center justify-center gap-x-10 lg:flex-row">
                        <SectionLink label="About & Skills" path="about" />
                        <SectionLink label="Proj3cts" path="/projects/" />
                        <SectionLink label="Contact" path="/contact/" />
                    </div>
                </div>
            )}
            <footer className="flex flex-row gap-10 h-20 w-full items-center justify-center bg-gray-300 bg-opacity-90">
                <p className="font-mono text-sm">
                    Made with{' '}
                    <span role="img" aria-label="heart">
                        ❤️
                    </span>{' '}
                    by Alberto Abarzúa
                </p>
                <div className="flex flex-row gap-x-2 font-mono">
                    <img src={GithubSvg} alt="github" className="h-5 w-5" />
                    <a href="https://github.com/alberto-abarzua" target="_blank">
                        My Github
                    </a>

                </div>
                <div></div>
            </footer>
        </div>
    );
}
