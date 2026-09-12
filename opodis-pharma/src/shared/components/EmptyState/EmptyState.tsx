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
    <div className="grid justify-items-center px-4 py-16 text-center">
      <div
        className="grid h-12 w-12 place-items-center rounded-full bg-primary-soft text-[25px] font-extrabold text-primary-dark"
        aria-hidden="true"
      >
        ?
      </div>
      <h2 className="mt-[17px] text-[20px]">{title}</h2>
      {description ? <p className="mt-2 max-w-[320px] text-text-secondary">{description}</p> : null}
      {actionLabel && onAction ? (
        <button
          className="mt-5 inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-md border-0 bg-primary px-[14px] py-[10px] font-extrabold text-white transition-colors hover:bg-primary-dark"
          type="button"
          onClick={onAction}
        >
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
};

export default EmptyState;
