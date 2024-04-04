import ProjectCard from '@/components/ProjectCard';
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
import CloudSvg from '@/assets/svgs/cloud.svg';
import HugoSvg from '@/assets/svgs/hugo.svg';
import ArmGif from '@/assets/gifs/arm.gif';
import PeridashImg from '@/assets/images/peridash.png';
import ApunteIotImg from '@/assets/images/apunte_iot.png';
import InertialImg from '@/assets/images/inertial.png';

const Projects = () => {
    return (
        <div className="flex h-full w-full flex-col justify-start gap-y-10 lg:p-10 font-mono lg:w-3/4">
            <h2 className=" text-white text-4xl font-bold duration-150 animate-in fade-in">
                [My Projects]
            </h2>

            <ProjectCard
                title="RiBot: Advanced Robot Arm Control Platform"
                liveDocs="https://ribot.dev/"
                githubRepo="https://github.com/alberto-abarzua/ribot"
                description="RiBot represents a comprehensive solution for controlling robotic arms, featuring a user-friendly web interface (built with React, TailwindCSS, Redux, and React Drag and Drop) for seamless operation. It includes a Python library accessible via pip and a custom firmware for the ESP32, enabling control over a 6-degree of freedom robotic arm. The project is complemented with extensive documentation, created using Docusaurus."
                tags={[
                    { label: 'Python', svg: PythonSvg },
                    { label: 'ESP-IDF', svg: EspIdfSvg },
                    { label: 'C++', svg: CppSvg },
                    { label: 'React', svg: ReactSvg },
                    { label: 'FastAPI', svg: FastapiSvg },
                    { label: 'Redux', svg: ReduxSvg },
                    { label: 'Tailwind CSS', svg: TailwindSvg },
                    { label: 'Vercel', svg: VercelSvg },
                    { label: 'More', svg: MoreSvg },
                ]}
                image={{ src: ArmGif, alt: 'arm gif' }}
            />

            <ProjectCard
                title="Peridash: Real-Time Stock Price Dashboard"
                githubRepo="https://github.com/alberto-abarzua/peridash"
                liveSite="https://peridash.com/"
                description="Peridash is a stock monitoring dashboard utilizing the Twelve Data API for live market data. Initially built with React, TailwindCSS, and Django REST, featuring PostgreSQL and Memcached, deployed via Docker and Kubernetes on Linode. The architecture has since evolved to Supabase for backend operations, simplifying deployment and reducing costs, while retaining its core functionalities."
                tags={[
                    { label: 'Python', svg: PythonSvg },
                    { label: 'React', svg: ReactSvg },
                    { label: 'Django', svg: DjangoSvg },
                    { label: 'Tailwind CSS', svg: TailwindSvg },
                    { label: 'Kubernetes', svg: KubernetesSvg },
                    { label: 'Supabase', svg: CloudSvg },
                    { label: 'Vercel', svg: VercelSvg },
                    { label: 'Redux', svg: ReduxSvg },
                    { label: 'More', svg: MoreSvg },
                ]}
                image={{ src: PeridashImg, alt: 'Peridash img' }}
            />

            <ProjectCard
                title="IoT Course Handbook"
                liveSite="https://iiot-embedded.com/"
                githubRepo="https://github.com/inertial-metrics/apunte-iot-embebidos"
                description="This project involves the creation of a comprehensive guide for the Internet of Things course at DCC, Universidad de Chile, where I contributed as an assistant teacher. The guide is designed to provide students with an in-depth understanding of IoT concepts and applications."
                tags={[{ label: 'Hugo + Docs', svg: HugoSvg }]}
                image={{ src: ApunteIotImg, alt: 'Peridash img' }}
            />

            <ProjectCard
                title="Custom Freelance Project"
                liveSite="https://inertialmetrics.com"
                description="This project was developed for a freelance client to highlight their services and portfolio through a comprehensive website. It's crafted to engage potential customers by showcasing the client's capabilities and includes a contact form for easy communication. Additional features include a user-friendly dashboard, a dynamic blog, and custom Markdown rendering for straightforward content updates. Developed with React for the frontend and Supabase for the backend, the project delivers a seamless user experience alongside efficient data management."
                tags={[
                    { label: 'React', svg: ReactSvg },
                    { label: 'Supabase', svg: CloudSvg },
                    { label: 'Vercel', svg: VercelSvg },
                    { label: 'More', svg: MoreSvg },
                ]}
                image={{ src: InertialImg, alt: 'Peridash img' }}
            />
        </div>
    );
};

export default Projects;
