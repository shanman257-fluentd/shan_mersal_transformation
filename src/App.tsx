import { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Hydration } from './components/Hydration';
import { Nutrition } from './components/Nutrition';
import { Profile } from './components/Profile';
import { Progress } from './components/Progress';
import { Goals } from './components/Goals';
import { Exercise } from './components/Exercise';
import { TabType } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'hydration':
        return <Hydration />;
      case 'nutrition':
        return <Nutrition />;
      case 'profile':
        return <Profile />;
      case 'progress':
        return <Progress />;
      case 'goals':
        return <Goals />;
      case 'exercise':
        return <Exercise />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}
