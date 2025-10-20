import React, { useState, useEffect, useRef } from 'react';
import { Box, CssBaseline, Tabs, Tab } from '@mui/material';
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


import Header from './components/Header';
import EducationSection from './components/EducationSection';
import ResearchInterestsSection from './components/ResearchInterestsSection';
import WorkExperienceSection from './components/WorkExperienceSection';
import AcademicExperienceSection from './components/AcademicExperienceSection';
import SkillSection from './components/SkillsSection';
import PublicationsSection from './components/PublicationsSection';
import AwardsSection from './components/AwardsSection';
import CertificatesSection from './components/CertificatesSection';
import ProjectsSection from './components/ProjectsSection';
import ReferencesSection from './components/ReferencesSection';
import Taskbar from './components/Taskbar';

function App() {
  const [activeTab, setActiveTab] = useState('education');
  const [resumeData, setResumeData] = useState(null);
  const [error, setError] = useState(null);

  const tabContainerRef = useRef(null);
  const headerRef = useRef(null);

  const sectionIcons = {
    home: { icon: HomeIcon, color: '#1E88E5' },              // blue, welcoming & standard for home
    educations: { icon: SchoolIcon, color: '#43A047' },      // green, learning & growth
    research_interests: { icon: ArticleIcon, color: '#6D4C41' }, // brownish, academic/research
    work_experiences: { icon: WorkIcon, color: '#F4511E' },  // orange, professional/work
    academic_experiences: { icon: HistoryEduIcon, color: '#8E24AA' }, // purple, education/research
    skills: { icon: CodeIcon, color: '#3949AB' },            // deep blue, tech/programming
    publications: { icon: ArticleIcon, color: '#00897B' },   // teal, formal/academic
    awards: { icon: EmojiEventsIcon, color: '#FDD835' },     // yellow/gold, achievement
    certificates: { icon: VerifiedIcon, color: '#FF6F00' },  // orange, recognition
    projects: { icon: FolderIcon, color: '#0a3549ff' },        // slate gray, organization/projects
    references: { icon: SupervisorAccountIcon, color: '#6A1B9A' },      // purple, professional network
  };


  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'educations', label: 'Educations' },
    { id: 'research_interests', label: 'Research Interests' },
    { id: 'work_experiences', label: 'Work Experiences' },
    { id: 'academic_experiences', label: 'Academic Experiences' },
    { id: 'skills', label: 'Skills' },
    { id: 'publications', label: 'Publications' },
    { id: 'awards', label: 'Awards & Honors' },
    { id: 'certificates', label: 'Certificates' },        
    { id: 'projects', label: 'Projects' },
    { id: 'references', label: 'References' },
  ];

  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);
        return response.json();
      })
      .then((data) => setResumeData(data))
      .catch((err) => {
        console.error('Error:', err);
        setError(err.message);
      });
  }, []);

const handleTabChange = (tabId) => {
  if (tabId === 'home') {
    setActiveTab('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  setActiveTab(tabId);

  setTimeout(() => {
    if (tabContainerRef.current) {
      tabContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 150);
};


  if (error)
    return <Box sx={{ p: 2, color: 'red', textAlign: 'center' }}>Error: {error}</Box>;
  if (!resumeData)
    return <Box sx={{ p: 2, textAlign: 'center' }}>Loading...</Box>;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', p: 2 }}>
      <CssBaseline />

      <Box ref={headerRef}>
        <Header data={resumeData.header} />
      </Box>

      <Box
        ref={tabContainerRef}
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          mb: 2,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Tabs
          value={activeTab}
          onChange={(e, newValue) => handleTabChange(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          TabIndicatorProps={{ style: { display: 'none' } }}
        >
          {sections.filter(section => section.id !== 'home').map((section) => {
            const Icon = sectionIcons[section.id]?.icon || ArticleIcon;
            const isActive = activeTab === section.id;
            return (
              <Tab
                key={section.id}
                value={section.id}
                icon={
                  <Icon
                    sx={{
                      fontSize: isActive ? 34 : 26,
                      color: isActive ? sectionIcons[section.id].color : '#999',
                    }}
                  />
                }
                iconPosition="top"
                label={
                  <Box
                    sx={{
                      fontSize: 11,
                      color: isActive ? sectionIcons[section.id].color : '#999',
                      mt: 0.5,
                      textTransform: 'none',
                    }}
                  >
                    {section.label}
                  </Box>
                }
              />
            );
          })}
        </Tabs>
      </Box>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        {activeTab === 'educations' && (
          <EducationSection data={resumeData} />
        )}
        {activeTab === 'research_interests' && (
          <ResearchInterestsSection data={resumeData} />
        )}
        {activeTab === 'work_experiences' && (
          <WorkExperienceSection data={resumeData} />
        )}
        
        {activeTab === 'academic_experiences' && (
          <AcademicExperienceSection data={resumeData} />
        )}
        {activeTab === 'skills' && (
          <SkillSection data={resumeData} />
        )}
        {activeTab === 'publications' && (
          <PublicationsSection data={resumeData} />
        )}
        {activeTab === 'awards' && (
          <AwardsSection data={resumeData} />
        )}
        {activeTab === 'certificates' && (
          <CertificatesSection data={resumeData} />
        )}
        {activeTab === 'projects' && (
          <ProjectsSection data={resumeData} />
        )}
        {activeTab === 'references' && (
          <ReferencesSection data={resumeData} />
        )}
      </Box>

      <Taskbar
        activeSection={activeTab}
        onSectionChange={handleTabChange}
        sections={sections}
        sectionIcons={sectionIcons}
      />
    </Box>
  );
}

export default App;
