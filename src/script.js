const { useState, useEffect, useRef } = React;

const Navbar = ({ activeSection, onSectionChange }) => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const sections = [
        { id: 'education', label: 'Education' },
        { id: 'experience', label: 'Experience' },
        { id: 'academic', label: 'Academic Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'publications', label: 'Publications' },
        { id: 'awards', label: 'Awards & Honors' },
        { id: 'projects', label: 'Projects' },
        { id: 'references', label: 'References' }
    ];

    return (
        <nav className="navbar">
            <div className="nav-content">
                <div className="nav-title">John Doe</div>
                <ul className={`nav-menu ${mobileMenu ? 'active' : ''}`}>
                    {sections.map(section => (
                        <li key={section.id} 
                            className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                            onClick={() => {
                                onSectionChange(section.id);
                                setMobileMenu(false);
                            }}>
                            {section.label}
                        </li>
                    ))}
                </ul>
                <button className="mobile-menu-btn" onClick={() => setMobileMenu(!mobileMenu)}>
                    <span className="material-icons">menu</span>
                </button>
            </div>
        </nav>
    );
};

const CollapsibleSection = ({ title, icon, children, id }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    
    return (
        <div className={`section ${isExpanded ? 'expanded' : ''}`} id={id}>
            <div className="section-header" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="section-title">
                    <span className="material-icons">{icon}</span>
                    {title}
                </div>
                <span className={`material-icons expand-icon`}>expand_more</span>
            </div>
            <div className="section-content">
                <div className="section-inner">{children}</div>
            </div>
        </div>
    );
};

const Header = ({ data }) => (
    <div className="header">
        <img src="static/face.jpg" alt="Profile" className="face-image" />
        <h1>{data.name}</h1>
        <div className="subtitle">{data.title}</div>
        <div className="contact-info">
            {data.contact.map((item, index) => (
                <div key={index} className="contact-item">
                    <span className="material-icons">{item.icon}</span>
                    <a href={item.link ? item.link : undefined} style={{color: 'white', textDecoration: 'none'}}>{item.value}</a>
                </div>
            ))}
        </div>
        <div className="header-footer">
            {data.social.map((social, index) => (
                <a key={index} href={social.link} className="social-button" target="_blank" rel="noopener noreferrer" title={social.platform}>
                    <span className="material-icons">{social.icon}</span>
                </a>
            ))}
        </div>
    </div>
);

const EducationSection = ({ data }) => (
    <CollapsibleSection title="Education" icon="school" id="education">
        {data.map((item, index) => (
            <div key={index} className="item">
                <div className="item-title">{item.title}</div>
                <div className="item-subtitle">{item.subtitle}</div>
                <div className="item-description">{item.description}</div>
            </div>
        ))}
    </CollapsibleSection>
);

const ExperienceSection = ({ data }) => (
    <CollapsibleSection title="Professional Experience" icon="work" id="experience">
        {data.map((item, index) => (
            <div key={index} className="item">
                <div className="item-title">{item.title}</div>
                <div className="item-subtitle">{item.subtitle}</div>
                <div className="item-description">{item.description.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                ))}</div>
            </div>
        ))}
    </CollapsibleSection>
);

const AcademicExperienceSection = ({ data }) => (
    <CollapsibleSection title="Academic Experience" icon="library_books" id="academic">
        {data.map((item, index) => (
            <div key={index} className="item">
                <div className="item-title">{item.title}</div>
                <div className="item-subtitle">{item.subtitle}</div>
                <div className="item-description">{item.description.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                ))}</div>
            </div>
        ))}
    </CollapsibleSection>
);

const SkillsSection = ({ data }) => (
    <CollapsibleSection title="Skills" icon="build" id="skills">
        <div className="skills-grid">
            {data.map((category, index) => (
                <div key={index} className="skill-category">
                    <h4>{category.title}</h4>
                    <div className="skill-tags">
                        {category.skills.map((skill, i) => (
                            <span key={i} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </CollapsibleSection>
);

const PublicationsSection = ({ data }) => (
    <CollapsibleSection title="Publications" icon="article" id="publications">
        {data.map((item, index) => (
            <div key={index} className="item">
                <div className="publication-item">
                    <div className="item-title">{item.title}</div>
                    <div className="item-subtitle">{item.subtitle}</div>
                    <div className="item-description">{item.description}</div>
                </div>
            </div>
        ))}
    </CollapsibleSection>
);

const AwardsSection = ({ data }) => (
    <CollapsibleSection title="Awards & Honors" icon="emoji_events" id="awards">
        {data.map((item, index) => (
            <div key={index} className="item">
                <div className="award-item">
                    <div className="item-title">{item.title}</div>
                    <div className="item-subtitle">{item.subtitle}</div>
                    <div className="item-description">{item.description}</div>
                </div>
            </div>
        ))}
    </CollapsibleSection>
);

const ProjectsSection = ({ data }) => (
    <CollapsibleSection title="Projects" icon="code" id="projects">
        <div className="projects-grid">
            {data.map((project, index) => (
                <div key={index} className="project-card">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="item-title">{project.title}</div>
                    <div className="item-subtitle">{project.subtitle}</div>
                    <div className="item-description">{project.description}</div>
                </div>
            ))}
        </div>
    </CollapsibleSection>
);

const ReferencesSection = ({ data }) => (
    <CollapsibleSection title="References" icon="people" id="references">
        {data.map((item, index) => (
            <div key={index} className="item">
                <div className="reference-item" style={item.isAvailableUponRequest ? {background: '#e8f5e8', borderLeftColor: '#4caf50'} : {}}>
                    {item.isAvailableUponRequest ? (
                        <div style={{fontStyle: 'italic', color: '#2e7d32'}}>{item.text}</div>
                    ) : (
                        <>
                            <div className="item-title">{item.title}</div>
                            <div className="item-subtitle">{item.subtitle}</div>
                            <div className="item-description">{item.description.split('\n').map((line, i) => (
                                <div key={i}>{line}</div>
                            ))}</div>
                        </>
                    )}
                </div>
            </div>
        ))}
    </CollapsibleSection>
);

const PrintButton = ({ onPrint }) => (
    <button className="print-btn" onClick={onPrint} title="Print Resume">
        <span className="material-icons">print</span>
    </button>
);

const App = () => {
    const [activeSection, setActiveSection] = useState('education');
    const [resumeData, setResumeData] = useState(null);
    const [error, setError] = useState(null);
    const sectionRefs = useRef({});

    // Fetch resume data
    useEffect(() => {
        fetch('data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch data.json: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => setResumeData(data))
            .catch(error => {
                console.error('Error loading resume data:', error);
                setError(error.message);
            });
    }, []);

    const handlePrint = () => {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('expanded');
        });
        window.print();
    };

    const scrollToSection = (sectionId) => {
        const element = sectionRefs.current[sectionId];
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setActiveSection(sectionId);
    };

    useEffect(() => {
        const handleBeforePrint = () => {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.add('expanded');
            });
        };
        window.addEventListener('beforeprint', handleBeforePrint);
        return () => window.removeEventListener('beforeprint', handleBeforePrint);
    }, []);

    if (error) {
        return <div style={{ padding: '20px', color: 'red', textAlign: 'center' }}>
            Error: {error}<br />
            Please ensure data.json is accessible and correctly formatted.
        </div>;
    }

    if (!resumeData) {
        return <div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>;
    }

    return (
        <div>
            <Navbar activeSection={activeSection} onSectionChange={scrollToSection} />
            <div className="main-content">
                <Header data={resumeData.header} />
                <div ref={el => sectionRefs.current['education']}>
                    <EducationSection data={resumeData.education} />
                </div>
                <div ref={el => sectionRefs.current['experience']}>
                    <ExperienceSection data={resumeData.experience} />
                </div>
                <div ref={el => sectionRefs.current['academic']}>
                    <AcademicExperienceSection data={resumeData.academic} />
                </div>
                <div ref={el => sectionRefs.current['skills']}>
                    <SkillsSection data={resumeData.skills} />
                </div>
                <div ref={el => sectionRefs.current['publications']}>
                    <PublicationsSection data={resumeData.publications} />
                </div>
                <div ref={el => sectionRefs.current['awards']}>
                    <AwardsSection data={resumeData.awards} />
                </div>
                <div ref={el => sectionRefs.current['projects']}>
                    <ProjectsSection data={resumeData.projects} />
                </div>
                <div ref={el => sectionRefs.current['references']}>
                    <ReferencesSection data={resumeData.references} />
                </div>
                <PrintButton onPrint={handlePrint} />
            </div>
        </div>
    );
};

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));