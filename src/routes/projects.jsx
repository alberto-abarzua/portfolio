import CppSvg from '@/assets/svgs/cplusplus.svg';
import PythonSvg from '@/assets/svgs/python.svg';
import EspIdfSvg from '@/assets/svgs/espidf.svg';
import ReactSvg from '@/assets/svgs/react.svg';
import TailwindSvg from '@/assets/svgs/tailwind.svg';
import DjangoSvg from '@/assets/svgs/django.svg';
import FastapiSvg from '@/assets/svgs/fastapi.svg';
import ReduxSvg from '@/assets/svgs/redux.svg';
import KubernetesSvg from '@/assets/svgs/kubernetes.svg';
import VercelSvg from '@/assets/svgs/vercel.svg';
import MoreSvg from '@/assets/svgs/more.svg';
import SkillTag from '../components/SkillTag';
import HugoSvg from '@/assets/svgs/hugo.svg';
import ArmGif from '@/assets/gifs/arm.gif';
import PeridashImg from '@/assets/images/peridash.png';
import ApunteIotImg from '@/assets/images/apunte_iot.png';
const Projects = () => {
    return (
        <div className="flex h-full w-full flex-col  justify-start gap-y-5 p-10 font-mono lg:w-3/4">
            <h2 className="mt-10 text-3xl font-bold">[Proj3cts]</h2>
            <div className="my-2 flex flex-wrap items-center justify-start gap-2 ">
                <h3 className="text-2xl font-bold"> RiBot: Advanced Robot Arm Control Platform</h3>
                <a
                    className=" w-fit rounded-md bg-gray-100 bg-opacity-60 px-3 py-2 text-xl italic text-blue-900 underline underline-offset-2 hover:bg-opacity-90 hover:text-blue-900"
                    href="https://ribot.dev/"
                    target="_blank"
                >
                    Live Docs
                </a>

                <a
                    className=" w-fit rounded-md bg-gray-100 bg-opacity-60 px-3 py-2 text-xl italic text-blue-900 underline underline-offset-2 hover:bg-opacity-90 hover:text-blue-900"
                    href="https://github.com/alberto-abarzua/ribot"
                    target="_blank"
                >
                    Github Repo
                </a>
            </div>

            <div className="flex flex-col items-start justify-center gap-4 py-2 lg:flex-row">
                <div>
                    <p>
                        RiBot represents a comprehensive solution for controlling robotic arms,
                        featuring a user-friendly web interface (built with React, TailwindCSS,
                        Redux, and React Drag and Drop) for seamless operation. It includes a Python
                        library accessible via pip and a custom firmware for the ESP32, enabling
                        control over a 6-degree of freedom robotic arm. The project is complemented
                        with extensive documentation, created using Docusaurus.
                    </p>
                    <div className="mt-4 flex flex-row flex-wrap gap-2">
                        <SkillTag label="Python" svg={PythonSvg} />
                        <SkillTag label="ESP-IDF" svg={EspIdfSvg} />
                        <SkillTag label="C++" svg={CppSvg} />
                        <SkillTag label="React" svg={ReactSvg} />
                        <SkillTag label="FastAPI" svg={FastapiSvg} />
                        <SkillTag label="Redux" svg={ReduxSvg} />
                        <SkillTag label="Tailwind CSS" svg={TailwindSvg} />
                        <SkillTag label="Vercel" svg={VercelSvg} />
                        <SkillTag label="More" svg={MoreSvg} />
                    </div>
                </div>
                <img
                    src={ArmGif}
                    alt="arm gif"
                    className="w-full rounded-lg  object-cover opacity-90 shadow-sm shadow-gray-400 lg:w-3/5"
                />
            </div>

            <div className="my-4 flex flex-wrap items-center justify-start gap-2 ">
                <h3 className="text-2xl font-bold">Peridash: Real-Time Stock Price Dashboard</h3>

                <a
                    className=" w-fit rounded-md bg-gray-100 bg-opacity-60 px-3 py-2 text-xl italic text-blue-900 underline underline-offset-2 hover:bg-opacity-90 hover:text-blue-900"
                    href="https://github.com/alberto-abarzua/peridash"
                    target="_blank"
                >
                    Github Repo
                </a>
            </div>

            <div className="flex flex-col items-start justify-center gap-4 py-2 lg:flex-row">
                <div>
                    <p>
                        Peridash is dashboard for monitoring stock prices, leveraging the Twelve
                        Data API for real-time market data. This project utilizes React and
                        TailwindCSS for front-end development, and a Django REST framework for
                        back-end services. It processes API data to generate customized timeseries
                        for user-selected stocks. The system architecture includes a PostgreSQL
                        database, Memcached for efficient data caching, and deployment through
                        Docker and Kubernetes on a Linode Kubernetes Engine cluster.
                    </p>
                    <div className="mt-4 flex flex-row flex-wrap gap-2">
                        <SkillTag label="Python" svg={PythonSvg} />
                        <SkillTag label="React" svg={ReactSvg} />
                        <SkillTag label="Django" svg={DjangoSvg} />
                        <SkillTag label="Tailwind CSS" svg={TailwindSvg} />
                        <SkillTag label="Kubernetes" svg={KubernetesSvg} />
                        <SkillTag label="More" svg={MoreSvg} />
                    </div>
                </div>
                <img
                    src={PeridashImg}
                    alt="Peridash img"
                    className="w-full content-center rounded-lg object-cover opacity-90 shadow-sm shadow-gray-500 lg:w-3/5"
                />
            </div>
            <div className="my-4 flex flex-wrap items-center justify-start gap-2 ">
                <h3 className="text-2xl font-bold">IoT Course Handbook</h3>

                <a
                    className=" w-fit rounded-md bg-gray-100 bg-opacity-60 px-3 py-2 text-xl italic text-blue-900 underline underline-offset-2 hover:bg-opacity-90 hover:text-blue-900"
                    href="https://iot-embebidos.cl/"
                    target="_blank"
                >
                    Live Website
                </a>
                <a
                    className=" w-fit rounded-md bg-gray-100 bg-opacity-60 px-3 py-2 text-xl italic text-blue-900 underline underline-offset-2 hover:bg-opacity-90 hover:text-blue-900"
                    href="https://github.com/alberto-abarzua/apunte-iot-embebidos"
                    target="_blank"
                >
                    Github Repo
                </a>
            </div>
            <div className="flex flex-col items-start justify-center gap-4 py-2 lg:flex-row">
                <div>
                    <p>
                        This project involves the creation of a comprehensive guide for the Internet
                        of Things course at DCC, Universidad de Chile, where I contributed as an
                        assistant teacher. The guide is designed to provide students with an
                        in-depth understanding of IoT concepts and applications.
                    </p>
                    <div className="mt-3 flex flex-row flex-wrap gap-2">
                        <SkillTag label="Hugo + Docs" svg={HugoSvg} />
                    </div>
                </div>
                <img
                    src={ApunteIotImg}
                    alt="Peridash img"
                    className="w-full content-center rounded-lg object-cover opacity-90 shadow-sm shadow-gray-500 lg:w-3/5"
                />
            </div>
        </div>
    );
};

export default Projects;
