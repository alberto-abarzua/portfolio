import LinkedinSVG from '@/assets/svgs/linkedin.svg';
import EmailSVG from '@/assets/svgs/email.svg';
import GithubSVG from '@/assets/svgs/github.svg';
const Contact = () => {
    return (
        <>
            <div className="relative isolate z-30 flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden text-white duration-300 animate-in fade-in slide-in-from-right">
                <h1 className="mb-5 font-mono text-5xl font-bold">Contact</h1>
                <p className="justifiy-center flex flex-row items-center font-mono text-lg">
                    <img src={EmailSVG} alt="Email" className="mr-2 h-7 w-7 invert" />
                    <span className="bg-blend-hue-180 mr-1 font-bold"> Email: </span>
                    <span className="lg:text-md text-sm  ">contact [at] b3to [dot] dev</span>
                </p>
                <p className="justifiy-center flex flex-row items-center font-mono text-lg">
                    <img src={GithubSVG} alt="Github" className="mr-2 h-6 w-6 invert" />
                    <span className="mr-1 font-bold"> Github: </span>{' '}
                    <a className="text-blue-500" href="https://github.com/alberto-abarzua">
                        alberto-abarzua
                    </a>
                </p>
                <p className="justifiy-center flex flex-row items-center font-mono text-lg">
                    <img src={LinkedinSVG} alt="LinkedIn" className="mr-2 h-7 w-7 invert" />
                    <span className="mr-1 font-bold"> LinkedIn: </span>
                    <a
                        className="text-blue-500"
                        href="https://www.linkedin.com/in/alberto-abarzua/"
                    >
                        {' '}
                        My Profile
                    </a>
                </p>
                <div
                    className="absolute left-[calc(50%-4rem)] top-10  -z-20 transform-gpu blur-3xl sm:left-[calc(50%-20rem)] lg:left-48 lg:top-[calc(50%-20rem)] xl:left-[calc(50%-24rem)]"
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
            </div>
        </>
    );
};

export default Contact;
