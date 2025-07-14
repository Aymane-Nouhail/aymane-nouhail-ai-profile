import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize mermaid with enhanced dark theme
    mermaid.initialize({
      startOnLoad: false,
      theme: 'dark',
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
      securityLevel: 'loose',
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    });

    const renderDiagram = async () => {
      if (elementRef.current && chart) {
        try {
          // Clear previous content
          elementRef.current.innerHTML = '';
          
          // Generate a unique ID for this diagram
          const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
          
          // Render the diagram
          const { svg } = await mermaid.render(id, chart);
          
          // Insert the SVG
          if (elementRef.current) {
            elementRef.current.innerHTML = svg;
          }
        } catch (error) {
          console.error('Error rendering Mermaid diagram:', error);
          if (elementRef.current) {
            elementRef.current.innerHTML = `
              <div class="bg-muted/10 border border-border rounded-lg p-4 text-center">
                <p class="text-muted-foreground mb-2">⚠️ Error rendering diagram</p>
                <details class="text-left">
                  <summary class="text-sm text-muted-foreground cursor-pointer hover:text-foreground">View diagram source</summary>
                  <pre class="text-xs text-muted-foreground mt-2 overflow-x-auto bg-background/50 p-2 rounded border border-border/50">${chart}</pre>
                </details>
              </div>
            `;
          }
        }
      }
    };

    renderDiagram();
  }, [chart]);

  return (
    <div className="my-8 overflow-x-auto">
      <div 
        ref={elementRef} 
        className="flex justify-center p-4 bg-background/30 rounded-lg border border-border/50"
        style={{
          filter: 'contrast(1.1) brightness(1.05)',
        }}
      />
    </div>
  );
};

export default MermaidDiagram;
