import * as React from 'react';
import { useParams } from 'react-router-dom';
import { ComponentRegistry } from '@/lib/component-registry';
import { componentData, type PropDefinition } from '@/lib/component-data';

interface ComponentPageContextState {
  componentName: string;
  previewContent: React.ReactNode;
  metadata:
    | {
        description: string;
        props: PropDefinition[];
      }
    | undefined;
}

const ComponentPageContext = React.createContext<
  ComponentPageContextState | undefined
>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useComponentPage = () => {
  const context = React.useContext(ComponentPageContext);
  if (!context) {
    throw new Error(
      'useComponentPage must be used within a ComponentPageProvider'
    );
  }
  return context;
};

interface ComponentPageLayoutProps {
  children: React.ReactNode;
}

export const ComponentPageProvider: React.FC<ComponentPageLayoutProps> = ({
  children,
}) => {
  const { name } = useParams();
  const componentName = name
    ? name.charAt(0).toUpperCase() + name.slice(1)
    : 'Component';

  const previewContent = ComponentRegistry[componentName] || (
    <div className="text-muted-foreground italic">
      Preview not available for {componentName}
    </div>
  );

  const metadata = componentData[componentName];

  return (
    <ComponentPageContext.Provider
      value={{ componentName, previewContent, metadata }}
    >
      {children}
    </ComponentPageContext.Provider>
  );
};
