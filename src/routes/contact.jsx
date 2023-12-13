const Contact = () => {
    return (
        <div className=" flex h-screen w-full flex-col items-center justify-center">
            <h1 className="mb-5 font-mono text-5xl font-bold">Contact</h1>
            <p className="font-mono text-lg">
                <span className="font-bold "> Email: </span>contact [at] b3to [dot] dev
            </p>
            <p className="font-mono text-lg">
                <span className="font-bold "> Github: </span>{' '}
                <a className='text-blue-900'  href="https://github.com/alberto-abarzua">alberto-abarzua</a>
            </p>
        </div>
    );
};

export default Contact;
