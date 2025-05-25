import styles from '../../styles/Dashboard.module.css';
import NewsCard from '../../_components/NewsCard/NewsCard';
import SummaryPanel from '../../_components/SummaryPanel/SummaryPanel';
import RecommendationEngine from '../../_components/RecommendationEngine/RecommendationEngine';

export default function DashboardPage() {
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <SummaryPanel />
      <NewsCard />
      <RecommendationEngine />
    </div>
  );
}
