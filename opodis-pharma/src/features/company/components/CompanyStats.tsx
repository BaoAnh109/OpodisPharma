interface CompanyStat {
  value: string;
  label: string;
}

interface CompanyStatsProps {
  stats: readonly CompanyStat[];
}

const CompanyStats = ({ stats }: CompanyStatsProps) => {
  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <div className="stat-card" key={stat.label}>
          <strong className="stat-card__value">{stat.value}</strong>
          <span className="stat-card__label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CompanyStats;
