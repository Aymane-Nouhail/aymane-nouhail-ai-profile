export const MERMAID_CONFIG = {
  startOnLoad: false,
  theme: 'dark' as const,
  themeVariables: {
    // Primary colors - using your site's blue theme
    primaryColor: '#3b82f6',
    primaryTextColor: '#f1f5f9',
    primaryBorderColor: '#1e40af',
    
    // Secondary colors
    secondaryColor: '#1e293b',
    secondaryTextColor: '#cbd5e1',
    secondaryBorderColor: '#475569',
    
    // Tertiary colors
    tertiaryColor: '#0f172a',
    tertiaryTextColor: '#94a3b8',
    tertiaryBorderColor: '#334155',
    
    // Background colors
    background: '#0f172a',
    mainBkg: '#1e293b',
    secondBkg: '#334155',
    tertiaryBkg: '#475569',
    
    // Line and connector colors
    lineColor: '#64748b',
    edgeLabelBackground: '#1e293b',
    
    // Node specific colors
    nodeBkg: '#1e293b',
    nodeBorder: '#475569',
    clusterBkg: '#0f172a',
    clusterBorder: '#334155',
    
    // Text colors
    textColor: '#f1f5f9',
    taskTextColor: '#f1f5f9',
    taskTextOutsideColor: '#f1f5f9',
    taskTextLightColor: '#cbd5e1',
    
    // Special elements
    activeTaskBkgColor: '#3b82f6',
    activeTaskBorderColor: '#1e40af',
    gridColor: '#374151',
    section0: '#1e293b',
    section1: '#334155',
    section2: '#475569',
    section3: '#64748b',
    
    // Git graph colors
    git0: '#ef4444',
    git1: '#f97316',
    git2: '#eab308',
    git3: '#22c55e',
    git4: '#06b6d4',
    git5: '#8b5cf6',
    git6: '#ec4899',
    git7: '#84cc16',
    
    // Flowchart specific
    fillType0: '#1e293b',
    fillType1: '#334155',
    fillType2: '#475569',
    fillType3: '#64748b',
    fillType4: '#78716c',
    fillType5: '#6b7280',
    fillType6: '#71717a',
    fillType7: '#737373',
  },
  securityLevel: 'loose' as const,
  fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};
