import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { MERMAID_CONFIG } from '@/config/mermaid';

interface MermaidDiagramProps {
  chart: string;
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize mermaid with enhanced dark theme
    mermaid.initialize(MERMAID_CONFIG);

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
