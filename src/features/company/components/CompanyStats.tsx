interface CompanyStat {
  value: string;
  label: string;
}

interface CompanyStatsProps {
  stats: readonly CompanyStat[];
}

const CompanyStats = ({ stats }: CompanyStatsProps) => {
  return (
    <div className="grid grid-cols-3 gap-2 max-[370px]:grid-cols-1">
      {stats.map((stat) => (
        <div
          className="rounded-md border border-border bg-white px-2 py-[14px] text-center"
          key={stat.label}
        >
          <strong className="block text-[21px] leading-[1.2] text-primary-dark">{stat.value}</strong>
          <span className="mt-[5px] block text-[10px] leading-[1.35] text-text-secondary">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CompanyStats;
