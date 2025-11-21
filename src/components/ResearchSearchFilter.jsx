// src/components/ResearchSearchFilter.jsx
import { useMemo, useState, useEffect } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Grid,
  Button
} from "@mui/material";

export default function ResearchSearchFilter({ data, onSearch }) {
  const [country, setCountry] = useState("");
  const [university, setUniversity] = useState("");
  const [lab, setLab] = useState("");
  const [displayMode, setDisplayMode] = useState("all");

  // --------------------------------------
  // Collect all countries, all universities, all labs
  // --------------------------------------
  const allCountries = Object.keys(data.countries || {});

  const allUniversities = useMemo(() => {
    let list = [];
    for (const cName in data.countries) {
      const universities = data.countries[cName].universities || {};
      for (const uniName in universities) {
        list.push({
          name: uniName,
          country: cName,
          url: universities[uniName].url || "",
        });
      }
    }
    return list;
  }, [data]);

  const allLabs = useMemo(() => {
    let list = [];
    for (const cName in data.countries) {
      const labs = data.countries[cName].labs || [];
      labs.forEach((lab) => list.push({ ...lab, country: cName }));
    }
    return list;
  }, [data]);

  // --------------------------------------
  // Filter universities + labs by country
  // --------------------------------------
  const filteredUniversities = useMemo(() => {
    if (!country) return allUniversities;
    return allUniversities.filter(u => u.country === country);
  }, [country, allUniversities]);

  const filteredLabs = useMemo(() => {
    if (!country) return allLabs;
    return allLabs.filter(l => l.country === country);
  }, [country, allLabs]);

  // Use useEffect to call onSearch whenever any filter value changes
  useEffect(() => {
    onSearch?.({
      country,
      university,
      lab,
      displayMode,
    });
  }, [country, university, lab, displayMode, onSearch]);

  const resetFilters = () => {
    setCountry("");
    setUniversity("");
    setLab("");
    setDisplayMode("all");
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
        Research Labs Explorer
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Search & Filter
      </Typography>
      <Grid container spacing={2}>

        {/* ---------------- ROW 1 ---------------- */}
        <Grid item xs={12} md={3}>
          <FormControl fullWidth>
            <InputLabel size="small">Display</InputLabel>
            <Select
              value={displayMode}
              label="Display"
              size="small"
              onChange={(e) => setDisplayMode(e.target.value)}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="universities">Universities</MenuItem>
              <MenuItem value="labs">Labs</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={3}>
          <FormControl fullWidth>
            <InputLabel size="small">Country</InputLabel>
            <Select
              value={country}
              label="Country"
              size="small"
              onChange={(e) => {
                setCountry(e.target.value);
                setUniversity("");
                setLab("");
              }}
            >
              <MenuItem value="" size="small">All Countries</MenuItem>
              {allCountries.map((c) => (
                <MenuItem key={c} value={c} size="small">
                  {c}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={3}>
          <FormControl fullWidth>
            <InputLabel size="small">University</InputLabel>
            <Select
              value={university}
              size="small"
              label="University"
              onChange={(e) => setUniversity(e.target.value)}
              disabled={displayMode === 'labs'}
            >
              <MenuItem value="" size="small">All Universities</MenuItem>
              {filteredUniversities.map((u, i) => (
                <MenuItem key={i} value={u.name} size="small">
                  {u.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={3}>
          <FormControl fullWidth>
            <InputLabel size="small">Lab</InputLabel>
            <Select
              value={lab}
              size="small"
              label="Lab"
              onChange={(e) => setLab(e.target.value)}
              disabled={displayMode === 'universities'}
            >
              <MenuItem value="" size="small">All Labs</MenuItem>
              {filteredLabs.map((l, i) => (
                <MenuItem key={i} value={l.lab} size="small">
                  {l.lab}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {/* ---------------- ROW 3 ---------------- */}
        <Grid item xs={12}>
          <Button
            fullWidth
            size="small"
            variant="outlined"
            color="secondary"
            onClick={resetFilters}
          >
            Reset Filters
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}