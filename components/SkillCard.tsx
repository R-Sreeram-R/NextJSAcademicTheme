interface Skill {
    name: string;
    logo: string;
    alt: string;
}

interface SkillCardProps {
    skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps): JSX.Element => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center gap-3">
            <img 
                src={skill.logo} 
                alt={skill.alt}
                className="w-5 h-5 object-contain flex-shrink-0"
            />
            <span className="font-medium text-gray-800">{skill.name}</span>
        </div>
    );
};

export default SkillCard;