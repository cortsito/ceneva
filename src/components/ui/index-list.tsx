type index_list_props = {
  aria_label: string;
  children: React.ReactNode;
};

export function IndexList({ aria_label, children }: index_list_props) {
  return (
    <ol aria-label={aria_label} className="index-list">
      {children}
    </ol>
  );
}

type index_item_props = {
  index: number;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  status?: React.ReactNode;
  children?: React.ReactNode;
};

export function IndexItem({
  index,
  eyebrow,
  title,
  status,
  children,
}: index_item_props) {
  return (
    <li>
      <article className="index-item">
        <span aria-hidden="true" className="index-item__number">
          {String(index).padStart(2, "0")}
        </span>
        <div className="index-item__heading">
          <p className="index-item__eyebrow">{eyebrow}</p>
          <h2 className="index-item__title">{title}</h2>
        </div>
        {status ? <div className="index-item__status">{status}</div> : null}
        {children ? <div className="index-item__content">{children}</div> : null}
      </article>
    </li>
  );
}
