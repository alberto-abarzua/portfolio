import SectionLink from "@/components/SectionLink";

export default function Root() {
    return (
        <div className="flex flex-col h-full w-full items-center justify-center bg-gray-400 bg-opacity-90 bg-noise bg-repeat">
            <h1 className="font-mono text-3xl font-bold ">W3lcome...</h1>
            <div className="flex">
                <SectionLink label="About" />
                <SectionLink label="Projects" path='/projects/' />
                <SectionLink label="Contact" />
            </div>
        </div>
    );
}
