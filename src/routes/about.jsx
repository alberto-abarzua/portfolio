import SkillSet from '@/components/SkillSet';
import CppSvg from '@/assets/svgs/cplusplus.svg';
import PythonSvg from '@/assets/svgs/python.svg';
import EspIdfSvg from '@/assets/svgs/espidf.svg';
import ReactSvg from '@/assets/svgs/react.svg';
import JsSvg from '@/assets/svgs/js.svg';
import TailwindSvg from '@/assets/svgs/tailwind.svg';
import DjangoSvg from '@/assets/svgs/django.svg';
import FastapiSvg from '@/assets/svgs/fastapi.svg';
import ReduxSvg from '@/assets/svgs/redux.svg';
import LanguageSvg from '@/assets/svgs/language.svg';
import RustSvg from '@/assets/svgs/rust.svg';
import DockerSvg from '@/assets/svgs/docker.svg';
import KubernetesSvg from '@/assets/svgs/kubernetes.svg';
import VercelSvg from '@/assets/svgs/vercel.svg';
import GithubSvg from '@/assets/svgs/github.svg';
import GitSvg from '@/assets/svgs/git.svg';
import GitflowSvg from '@/assets/svgs/gitflow.svg';
import GithubActionsSvg from '@/assets/svgs/githubactions.svg';
import CloudSvg from '@/assets/svgs/cloud.svg';
import SqlSvg from '@/assets/svgs/sql.svg';
import PyTorchSvg from '@/assets/svgs/pytorch.svg';

const About = () => {
    return (
        <div className="flex h-full w-full flex-col justify-center p-2 lg:p-10  font-mono lg:w-3/4">
            <h2 className="my-4 mt-20 text-3xl font-bold">[About Me]</h2>
            <p>
                A full-stack developer passionate about end-to-end technology solutions. I love
                learning new things and applying them creatively in my projects, spanning from web
                development to deep learning and electronics.
            </p>

            <h2 className="my-4 text-3xl font-bold">[Skills]</h2>

            <div className="flex flex-col justify-center lg:px-10 lg:flex-row gap-x-7">
                <div className="flex w-fit flex-col gap-y-2">
                    <h3 className="my-5 text-xl font-bold">Programming Languages / Frameworks</h3>
                    <SkillSet label="Python" svg={PythonSvg} score={5}>
                        <SkillSet label="FastAPI" svg={FastapiSvg} score={4}></SkillSet>
                        <SkillSet label="Django" svg={DjangoSvg} score={4}></SkillSet>
                        <SkillSet label="PyTorch" svg={PyTorchSvg} score={3.7}></SkillSet>
                    </SkillSet>
                    <SkillSet label="Javascript" svg={JsSvg} score={4}>
                        <SkillSet label="React" svg={ReactSvg} score={4}></SkillSet>
                        <SkillSet label="Redux" svg={ReduxSvg} score={3.5}></SkillSet>
                        <SkillSet label="shadcn/ui" svg={ReduxSvg} score={4}></SkillSet>
                        <SkillSet label="Tailwind CSS" svg={TailwindSvg} score={4}></SkillSet>
                    </SkillSet>
                    <SkillSet label="C++" svg={CppSvg} score={3.5}></SkillSet>
                    <SkillSet label="Rust (Learning)" svg={RustSvg} score={3}></SkillSet>
                    <h3 className="my-5 text-xl font-bold">Other Frameworks / Libraries</h3>
                    <SkillSet label="ESP-IDF" svg={EspIdfSvg} score={4}></SkillSet>
                </div>
                <div className="flex w-fit flex-col gap-y-2">
                    <h3 className="my-5 text-xl font-bold">Tools / Others</h3>
                    <SkillSet label="Git" svg={GitSvg} score={4}></SkillSet>
                    <SkillSet label="GitHub" svg={GithubSvg} score={5}>
                        <SkillSet
                            label="Github Actions"
                            svg={GithubActionsSvg}
                            score={5}
                        ></SkillSet>
                        <SkillSet label="GitFlow" svg={GitflowSvg} score={4}></SkillSet>
                    </SkillSet>
                    <SkillSet label="SQL" svg={SqlSvg} score={3.7}></SkillSet>
                    <h3 className="my-5 text-xl font-bold">Deployment</h3>

                    <SkillSet label="Docker" svg={DockerSvg} score={5}></SkillSet>
                    <SkillSet label="Vercel" svg={VercelSvg} score={4}></SkillSet>
                    <SkillSet label="Kubernetes" svg={KubernetesSvg} score={3.5}></SkillSet>
                    <SkillSet label="Cloud Knowledge" svg={CloudSvg} score={3.5}></SkillSet>

                    <h3 className="my-5 text-xl font-bold">Languages</h3>
                    <SkillSet label="Spanish (Native)" svg={LanguageSvg} score={5}></SkillSet>
                    <SkillSet label="English" svg={LanguageSvg} score={5}></SkillSet>
                </div>
            </div>
        </div>
    );
};

export default About;
