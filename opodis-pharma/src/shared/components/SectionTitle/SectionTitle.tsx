interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

const SectionTitle = ({
  eyebrow,
  title,
  description,
}: SectionTitleProps) => {
  return (
    <div className="section-title">
      {eyebrow ? <p className="section-title__eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title__heading">{title}</h2>
      {description ? (
        <p className="section-title__description">{description}</p>
      ) : null}
    </div>
  );
};

export default SectionTitle;
