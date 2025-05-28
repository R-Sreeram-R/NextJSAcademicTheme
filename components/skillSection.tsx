import SkillCard from './SkillCard'
import skillsData from './data/skills.json'

const SkillsList = (): JSX.Element => {
    return (
        <section className="grid" id="skills">
            <h2 className="text-xl font-bold mt-12 mb-4">Skills</h2>
            <div className="grid gap-8">
                {skillsData.map((category, index) => (
                    <div key={index} className="skill-category">
                        <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {category.skills.map((skill, skillIndex) => (
                                <SkillCard skill={skill} key={skillIndex} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsList;