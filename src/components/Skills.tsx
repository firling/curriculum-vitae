import { Chip } from "./Chip";
import { Title } from "./Title";

export const Skills = () => (
    <div className="border border-solid rounded-md px-4 py-2 mt-4">
        <Title>Compétences</Title>
        <div className="mt-2">
            <h4 className="text-md font-semibold">
                Langage de programmation
            </h4>
            <div className="mt-2 ml-4 flex flex-wrap gap-2">
                <Chip>Javascript / Typescript</Chip>
                <Chip>PHP</Chip>
                <Chip>Python</Chip>
                <Chip>C#</Chip>
                <Chip>SQL</Chip>
            </div>
        </div>
        <div className="mt-2">
            <h4 className="text-md font-semibold">
                Frameworks / Technologies
            </h4>
            <div className="mt-2 ml-4 flex flex-wrap gap-2">
                <Chip>React.js</Chip>
                <Chip>Node.js</Chip>
                <Chip>Nest.js</Chip>
                <Chip>Next.js</Chip>
                <Chip>Symfony</Chip>
                <Chip>Laravel</Chip>
            </div>
        </div>
        <div className="mt-2">
            <h4 className="text-md font-semibold">
                Ops
            </h4>
            <div className="mt-2 ml-4 flex flex-wrap gap-2">
                <Chip>Docker</Chip>
                <Chip>Kubernetes</Chip>
                <Chip>Gitlab CI</Chip>
                <Chip>Git</Chip>
            </div>
        </div>
    </div>
)