interface EmptyStateProps {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

const EmptyState = ({
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) => {
  return (
    <div className="empty-state">
      <div className="empty-state__icon" aria-hidden="true">
        ?
      </div>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
      {actionLabel && onAction ? (
        <button className="button button--primary" type="button" onClick={onAction}>
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
};

export default EmptyState;
