interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

const SectionTitle = ({
  eyebrow,
  title,
  description,
  className,
}: SectionTitleProps) => {
  return (
    <div className={`mb-[18px] ${className ?? ""}`}>
      {eyebrow ? (
        <p className="mb-1.5 text-[clamp(18px,5.2vw,22px)] font-black uppercase leading-[1.25] tracking-[0.2px] text-primary-dark">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="m-0 text-[clamp(24px,6.5vw,27px)] font-black leading-[1.25] tracking-[-0.025em]">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 text-text-secondary leading-[1.6]">{description}</p>
      ) : null}
    </div>
  );
};

export default SectionTitle;
