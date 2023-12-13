import SectionLink from '@/components/SectionLink';
import { useOutlet } from 'react-router-dom';
import Nav from '@/components/nav/Nav';

export default function Root() {
    let Outlet = useOutlet();
    return (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gray-300 bg-noise bg-repeat bg-opacity-90">
            <Nav
                className={`transform transition-all duration-300 ${
                    !Outlet ? '-translate-y-full' : ''
                }`}
            ></Nav>
            {Outlet ? (
                Outlet
            ) : (
                <div className="flex flex-col items-center justify-center text-black">
                    <h1 className="font-mono text-5xl font-bold ">W3lcome</h1>
                    <p className='text-md font-mono'>By: Alberto Abarzua</p>
                    <div className="flex mt-20">
                        <SectionLink label="About" path="about" />
                        <SectionLink label="Proj3cts" path="/projects/" />
                        <SectionLink label="Contact" path="/contact/" />
                    </div>
                </div>
            )}
        </div>
    );
}
