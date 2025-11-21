import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Box, CssBaseline, GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; 

// Import icons
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import ArticleIcon from '@mui/icons-material/Article';
import WorkIcon from '@mui/icons-material/Work';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import CodeIcon from '@mui/icons-material/Code';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FolderIcon from '@mui/icons-material/Folder';
import VerifiedIcon from '@mui/icons-material/Verified';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';           

// Import your sections
import Header from './Header';
import EducationSection from './EducationSection';
import ResearchInterestsSection from './ResearchInterestsSection';
import WorkExperienceSection from './WorkExperienceSection';
import AcademicExperienceSection from './AcademicExperienceSection';
import SkillSection from './SkillsSection';
import PublicationsSection from './PublicationsSection';
import AwardsSection from './AwardsSection';
import CertificatesSection from './CertificatesSection';
import ProjectsSection from './ProjectsSection';
import ReferencesSection from './ReferencesSection';
import Navbar from './Navbar';
import Loader from './Loader';

function HomePage() {
  const [activeTab, setActiveTab] = useState('home');
  const [resumeData, setResumeData] = useState(null);
  const [error, setError] = useState(null);

  const headerRef = useRef(null);
  const sectionRefs = useRef({});

  const sectionIcons = {
    home: { icon: HomeIcon, color: '#B1C7DE' },              
    educations: { icon: SchoolIcon, color: '#B1C7DE' },      
    research_interests: { icon: ArticleIcon, color: '#B1C7DE' }, 
    work_experiences: { icon: WorkIcon, color: '#B1C7DE' },  
    academic_experiences: { icon: HistoryEduIcon, color: '#B1C7DE' }, 
    skills: { icon: CodeIcon, color: '#B1C7DE' },           
    publications: { icon: ArticleIcon, color: '#B1C7DE' },  
    awards: { icon: EmojiEventsIcon, color: '#B1C7DE' },     
    certificates: { icon: VerifiedIcon, color: '#B1C7DE' }, 
    projects: { icon: FolderIcon, color: '#B1C7DE' },        
    references: { icon: SupervisorAccountIcon, color: '#B1C7DE' },      
  };

  const sections = useMemo(() => [
    { id: 'educations', label: 'Educations' },
    { id: 'research_interests', label: 'Research Interests' },
    { id: 'work_experiences', label: 'Work Experiences' },
    { id: 'academic_experiences', label: 'Academic Experiences' },
    { id: 'skills', label: 'Skills' },
    { id: 'publications', label: 'Manuscripts & Preprints' },
    { id: 'awards', label: 'Awards & Honors' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'projects', label: 'Projects' },
    { id: 'references', label: 'References' },
  ], []);

  // Fetch JSON data
  useEffect(() => {
    fetch('/data.json')
      .then((r) => r.ok ? r.json() : Promise.reject(new Error('Fetch error')))
      .then(setResumeData)
      .catch((err) => setError(err.message));
  }, []);


  // Click a tab
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);

    if (tabId === 'home' && headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    const section = sectionRefs.current[tabId];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  // Scroll-based tab update
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 80; // navbar height
      const allSections = [
        { id: 'home', el: headerRef.current },
        ...Object.entries(sectionRefs.current).map(([id, el]) => ({ id, el })),
      ];

      let closest = { id: 'home', distance: Infinity };
      allSections.forEach(({ id, el }) => {
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        const distance = Math.abs(scrollY - top);
        if (distance < closest.distance) closest = { id, distance };
      });

      setActiveTab(closest.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);



  if (error)
    return <Box sx={{ p: 2, color: 'red', textAlign: 'center' }}>Error: {error}</Box>;
  
  if (!resumeData) return <Loader />;

  return (
    <ThemeProvider theme={theme}>
      <Navbar
          sections={sections.filter(s => s.id !== 'home')}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          sectionIcons={sectionIcons}
        />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', p: 2 }}>
      {/* Node layer */}

        <CssBaseline />
        <GlobalStyles
          styles={{
            ':root': {
              '--color-bg': theme.palette.background.default,
              '--color-surface': theme.palette.background.paper,
              '--color-primary': theme.palette.primary.main,
            },
            body: { backgroundColor: 'var(--color-bg)' },
          }}
        />

        {/* Header */}
        <Box id="home" ref={headerRef} style={{ scrollMarginTop: '80px' }}>
          <Header data={resumeData.header} />
        </Box>


        {/* Sections */}
        <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
          {sections.map(({ id }) => (
            <div
              id={id}
              key={id}
              ref={(el) => (sectionRefs.current[id] = el)}
              style={{ marginBottom: '80px', scrollMarginTop: '80px' }}
            >
              {id === 'educations' && <EducationSection data={resumeData} />}
              {id === 'research_interests' && <ResearchInterestsSection data={resumeData} />}
              {id === 'work_experiences' && <WorkExperienceSection data={resumeData} />}
              {id === 'academic_experiences' && <AcademicExperienceSection data={resumeData} />}
              {id === 'skills' && <SkillSection data={resumeData} />}
              {id === 'publications' && <PublicationsSection data={resumeData} />}
              {id === 'awards' && <AwardsSection data={resumeData} />}
              {id === 'certificates' && <CertificatesSection data={resumeData} />}
              {id === 'projects' && <ProjectsSection data={resumeData} />}
              {id === 'references' && <ReferencesSection data={resumeData} />}
            </div>
          ))}
        </Box>

        {/* <Taskbar
          activeSection={activeTab}
          onSectionChange={handleTabChange}
          sections={sections}
          sectionIcons={sectionIcons}
        /> */}
      </Box>
    </ThemeProvider>
  );
}

export default HomePage;
