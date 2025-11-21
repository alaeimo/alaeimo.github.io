// src/components/ResearchLabsExplorer.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  Box, Typography, CircularProgress, Alert,
  Grid, Card, CardContent, CardActions, Link,
  Button, Chip, IconButton, useTheme, Collapse,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ResearchSearchFilter from './ResearchSearchFilter';

// ... (Leaflet icon code remains the same) ...
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const universityIcon = L.divIcon({
  html: '<div style="background-color:#3498db;color:white;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:bold;">U</div>',
  iconSize: [24, 24], className: 'custom-div-icon'
});

const labIcon = L.divIcon({
  html: '<div style="background-color:#e53935;color:white;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:bold;">L</div>',
  iconSize: [24, 24], className: 'custom-div-icon'
});

const ResearchLabsExplorer = () => {
  const theme = useTheme();
  const [researchData, setResearchData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [filters, setFilters] = useState({ country: '', university: '', lab: '', displayMode: 'all' });
  const [filteredItems, setFilteredItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [highlightedItem, setHighlightedItem] = useState(null);
  const [openGroups, setOpenGroups] = useState({});

  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersLayerRef = useRef(null);

  // Load data
  useEffect(() => {
    setLoading(true);
    fetch('/apply.json')
      .then(res => { if (!res.ok) throw new Error(res.statusText); return res.json(); })
      .then(data => { setResearchData(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, []);

  // Create markers
  const createUniversityMarker = useCallback((uniName, location, country) => {
    const marker = L.marker([location.latitude, location.longitude], { icon: universityIcon });
    marker.bindPopup(`<b>${uniName}</b><br>${location.city}, ${country}`);
    marker.on('click', () => {
      mapInstanceRef.current.setView([location.latitude, location.longitude]);
      const id = `university-${uniName.replace(/\s+/g, '-')}`;
      setHighlightedItem(id);
      setTimeout(() => setHighlightedItem(null), 2000);
    });
    return marker;
  }, []);

  const createLabMarker = useCallback((lab) => {
    const marker = L.marker([lab.latitude, lab.longitude], { icon: labIcon });
    marker.bindPopup(`<b>${lab.lab}</b><br>${lab.location}`);
    marker.on('click', () => {
      mapInstanceRef.current.setView([lab.latitude, lab.longitude]);
      const id = `lab-${lab.lab.replace(/\s+/g, '-')}`;
      setHighlightedItem(id);
      setTimeout(() => setHighlightedItem(null), 2000);
    });
    return marker;
  }, []);

  // STEP 1: Apply search filters to the entire dataset
  const applySearchFilters = useCallback(() => {
    if (!researchData) return;
    const { country, university, lab, displayMode } = filters;

    const allItems = [];
    for (const countryName in researchData.countries) {
      const countryData = researchData.countries[countryName];

      if (displayMode === 'all' || displayMode === 'universities') {
        if (countryData.universities) {
          for (const uniName in countryData.universities) {
            // This check is already in place for universities
            if (country && country !== countryName) continue;
            if (university && university !== uniName) continue;
            const location = countryData.universities[uniName].location;
            allItems.push({ type: 'university', name: uniName, country: countryName, location, research_groups: countryData.universities[uniName].research_groups });
          }
        }
      }

      if (displayMode === 'all' || displayMode === 'labs') {
        if (countryData.labs && Array.isArray(countryData.labs)) {
          countryData.labs.forEach(labItem => {
            // FIX: Added the missing country check for labs
            if (country && country !== countryName) return;
            if (lab && lab !== labItem.lab) return;
            allItems.push({ type: 'lab', ...labItem, country: countryName });
          });
        }
      }
    }
    setFilteredItems(allItems);
  }, [researchData, filters]);

  // STEP 2: Filter the already-filtered items by map bounds
  const updateVisibleItems = useCallback(() => {
    if (!mapInstanceRef.current || filteredItems.length === 0) {
      setVisibleItems([]);
      return;
    }
    const bounds = mapInstanceRef.current.getBounds();
    const itemsToShow = filteredItems.filter(item => {
      const lat = item.type === 'university' ? item.location.latitude : item.latitude;
      const lng = item.type === 'university' ? item.location.longitude : item.longitude;
      return bounds.contains([lat, lng]);
    });
    setVisibleItems(itemsToShow);
  }, [filteredItems]);

  // Effect 1: Initialize the map ONCE
  useEffect(() => {
    if (!researchData || !mapRef.current || mapInstanceRef.current) return;
    
    mapInstanceRef.current = L.map(mapRef.current).setView([51.5, 10], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors' }).addTo(mapInstanceRef.current);
    markersLayerRef.current = L.layerGroup().addTo(mapInstanceRef.current);
    
    // Initial call to populate visible items
    updateVisibleItems();
    
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [researchData, updateVisibleItems]); // Add updateVisibleItems to deps

  // Effect 2: Apply search filters whenever they change
  useEffect(() => {
    applySearchFilters();
  }, [filters, researchData, applySearchFilters]);

  // Effect 3: Update markers when filteredItems change
  useEffect(() => {
    if (!markersLayerRef.current) return;
    
    markersLayerRef.current.clearLayers();
    filteredItems.forEach(item => {
      const marker = item.type === 'university'
        ? createUniversityMarker(item.name, item.location, item.country)
        : createLabMarker(item);
      marker.addTo(markersLayerRef.current);
    });
  }, [filteredItems, createUniversityMarker, createLabMarker]);

  // Effect 4: Manage the map event listener and update visible items when filteredItems change
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    const handleMapMove = () => updateVisibleItems();
    
    mapInstanceRef.current.on('moveend zoomend', handleMapMove);

    return () => {
      mapInstanceRef.current?.off('moveend zoomend', handleMapMove);
    };
  }, [updateVisibleItems]);

  // Memoize the handleSearch function
  const handleSearch = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  const handleZoomIn = () => mapInstanceRef.current?.zoomIn();
  const handleZoomOut = () => mapInstanceRef.current?.zoomOut();
  const handleFullscreen = () => mapRef.current?.requestFullscreen?.();
  const toggleGroups = (id) => setOpenGroups(prev => ({ ...prev, [id]: !prev[id] }));

  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><CircularProgress size={60} /></Box>;
  if (error) return <Box sx={{ p: 3, height: '100vh', overflow: 'auto' }}><Alert severity="error">{error}</Alert></Box>;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        {/* Left panel: filters + results */}
        <Box
          sx={{
            width: '50%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.default
          }}
        >
          <Box sx={{ p: 2, flexShrink: 0, overflowY: 'auto' }}>
            <ResearchSearchFilter data={researchData} onSearch={handleSearch} />
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
              <Typography variant="h6">
                Showing {visibleItems.length} of {filteredItems.length} items
              </Typography>
            </Box>
          </Box>

        <Box
          sx={{
            flexGrow: 1,
            overflowY: 'auto',
            px: 2,
            py: 2,
            '&::-webkit-scrollbar': { width: '0.4em' },
            '&::-webkit-scrollbar-track': { background: theme.palette.background.default },
            '&::-webkit-scrollbar-thumb': { backgroundColor: theme.palette.divider, borderRadius: 4 },
          }}
        >
          {visibleItems.length === 0 ? (
            <Typography color="text.secondary" sx={{ textAlign: 'center', mt: 2 }}>
              {filteredItems.length > 0
                ? 'Move or zoom the map to see research labs'
                : 'No items match your filters'}
            </Typography>
          ) : (
            <Grid container spacing={2}>
              {visibleItems.map(item => {
                const id = item.type === 'university'
                  ? `uni-${item.name.replace(/\s+/g, '-')}`
                  : `lab-${item.lab.replace(/\s+/g, '-')}`;

                return (
                  <Grid item xs={12} key={id}>
                    <Card
                      id={id}
                      sx={{
                        backgroundColor: highlightedItem === id ? theme.palette.action.selected : theme.palette.background.paper,
                        cursor: 'pointer',
                        borderRadius: 3,
                        border: '1px solid #e0e0e0',
                        boxShadow: 1,
                        transition: 'box-shadow 0.3s, transform 0.2s',
                        '&:hover': { boxShadow: 4, transform: 'translateY(-2px)' },
                      }}
                      onClick={() => {
                        const lat = item.type === 'university' ? item.location.latitude : item.latitude;
                        const lng = item.type === 'university' ? item.location.longitude : item.longitude;
                        mapInstanceRef.current.setView([lat, lng]);
                        setHighlightedItem(id);
                        setTimeout(() => setHighlightedItem(null), 2000);
                      }}
                    >
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          {item.type === 'university' ? (
                            <SchoolIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                          ) : (
                            <ScienceIcon sx={{ mr: 1, color: theme.palette.secondary.main }} />
                          )}
                          <Link
                            href={item.type === 'university' ? item.research_groups?.[0]?.url : item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
                            variant="h6"
                            sx={{ color: theme.palette.text.primary, fontWeight: 600 }}
                            onClick={e => e.stopPropagation()}
                          >
                            {item.type === 'university' ? item.name : item.lab}
                          </Link>
                        </Box>

                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                          {item.type === 'university' ? `${item.location.city}, ${item.country}` : item.location}
                        </Typography>

                        {item.type === 'university' && item.research_groups?.length > 0 && (
                          <>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <Chip
                                label={`${item.research_groups.length} Research Groups`}
                                size="small"
                                color="primary"
                                onClick={e => { e.stopPropagation(); toggleGroups(id); }}
                                sx={{ cursor: 'pointer' }}
                              />
                              <IconButton
                                size="small"
                                onClick={e => { e.stopPropagation(); toggleGroups(id); }}
                                sx={{
                                  ml: 1,
                                  transform: openGroups[id] ? 'rotate(180deg)' : 'rotate(0deg)',
                                  transition: 'transform 0.3s ease',
                                }}
                              >
                                <ExpandMoreIcon />
                              </IconButton>
                            </Box>

                            <Collapse in={openGroups[id]} timeout="auto" unmountOnExit>
                              <Box sx={{ pl: 2, pt: 1, borderLeft: `2px solid ${theme.palette.divider}` }}>
                                {item.research_groups.map((g, idx) => (
                                  <Button
                                    key={idx}
                                    component="a"
                                    href={g.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={e => e.stopPropagation()}
                                    sx={{
                                      display: 'block',
                                      textAlign: 'left',
                                      mb: 0.5,
                                      textTransform: 'none',
                                      color: theme.palette.primary.main,
                                      fontWeight: 500,
                                      textDecoration: 'underline',
                                      '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' },
                                    }}
                                  >
                                    {g.title || g.name}
                                  </Button>
                                ))}
                              </Box>
                            </Collapse>
                          </>
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Box>

        </Box>

        {/* Right panel: Map */}
        <Box sx={{ width: '50%', height: '100%', position: 'relative', overflow: 'hidden' }}>
          <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
          <Box sx={{ position: 'absolute', bottom: 20, right: 20, display: 'flex', flexDirection: 'column', gap: 1 }}>
            <IconButton color="primary" sx={{ backgroundColor: 'rgba(255,255,255,0.7)' }} onClick={handleZoomIn}><ZoomInIcon /></IconButton>
            <IconButton color="primary" sx={{ backgroundColor: 'rgba(255,255,255,0.7)' }} onClick={handleZoomOut}><ZoomOutIcon /></IconButton>
            <IconButton color="primary" sx={{ backgroundColor: 'rgba(255,255,255,0.7)' }} onClick={handleFullscreen}><FullscreenIcon /></IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ResearchLabsExplorer;