import LinkedinSVG from '@/assets/svgs/linkedin.svg';
import EmailSVG from '@/assets/svgs/email.svg';
import GithubSVG from '@/assets/svgs/github.svg';
const Contact = () => {
    return (
        <div className=" flex h-screen w-full flex-col items-center justify-center animate-in duration-300 fade-in slide-in-from-right">
            <h1 className="mb-5 font-mono text-5xl font-bold">Contact</h1>
            <p className="font-mono text-lg flex flex-row justifiy-center items-center">
                <img src={EmailSVG} alt='Email' className="h-7 w-7 mr-2" />
                <span className="font-bold mr-1"> Email: </span>contact [at] b3to [dot] dev
            </p>
            <p className="font-mono text-lg flex flex-row justifiy-center items-center">
                <img src={GithubSVG} alt='Github' className="h-6 w-6 mr-2" />
                <span className="font-bold mr-1"> Github: </span>{' '}
                <a className='text-blue-900'  href="https://github.com/alberto-abarzua">alberto-abarzua</a>
            </p>
            <p className="font-mono text-lg flex flex-row justifiy-center items-center">
                <img src={LinkedinSVG} alt='LinkedIn' className="h-7 w-7 mr-2" />
                <span className="font-bold mr-1"> LinkedIn: </span>
                <a className='text-blue-900'  href="https://www.linkedin.com/in/alberto-abarzua/"> My Profile</a>
            </p>
        </div>
    );
};

export default Contact;
