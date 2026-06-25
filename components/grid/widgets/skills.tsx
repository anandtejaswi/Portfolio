import Card from '../../ui/card';

export default function Skills() {
    const categories = [
        {
            title: 'Languages',
            skills: ['C', 'Python', 'HTML5', 'CSS3', 'SQL']
        },
        {
            title: 'Tools',
            skills: ['Git & GitHub', 'Docker', 'Redis', 'Netlify', 'Cloudflare', 'VS Code', 'NMap', 'Wireshark', 'Cisco Packet Tracer', 'Figma']
        },
        {
            title: 'Methodologies',
            skills: ['Network Security', 'Cryptography', 'Data Structures & Algorithms', 'DBMS', 'System Design']
        }
    ];

    return (
        <Card className='flex flex-col gap-6 p-8 bg-[#fdfbf7] dark:bg-[#151515] h-full overflow-y-auto border border-black/5 dark:border-white/5'>
            <div>
                <p className='text-sm text-gray-400 dark:text-gray-500 mb-1'>Always learning</p>
                <h2 className='font-bold text-2xl text-black dark:text-white'>Skills</h2>
            </div>
            <div className='flex flex-col gap-5 flex-1'>
                {categories.map((category) => (
                    <div key={category.title} className='flex flex-col gap-2'>
                        <h3 className='text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider'>{category.title}</h3>
                        <div className='flex flex-wrap gap-2'>
                            {category.skills.map((skill) => (
                                <span 
                                    key={skill} 
                                    className='px-3 py-1 bg-[#f5f5f5] dark:bg-[#2b2b2b] text-[#4a4a4a] dark:text-gray-300 text-sm font-medium rounded-md border border-gray-200 dark:border-gray-700'
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
