"use client";

interface UsesThisCategoryProps {
  category: string;
  items: Array<UsesThisItemProps>;
}

interface UsesThisItemProps {
  name: string;
  description: string;
  sub_items: Array<UsesThisSubItemProps>;
  link: string | null;
}

interface UsesThisSubItemProps {
  name: string;
  description: string;
  link: string | null;
}

function UsesThisCategory({ category, items }: UsesThisCategoryProps) {
  return (
    <div className="my-3">
      <div className="text-black dark:text-white text-xl font-semibold">
        {category}
      </div>
      <ul className="list-disc list-outside ml-1">
        {items.map((item) => (
          <UsesThisItem
            key={item.name}
            name={item.name}
            description={item.description}
            link={item.link}
            sub_items={item.sub_items}
          />
        ))}
      </ul>
    </div>
  );
}

function UsesThisItem({
  name,
  description,
  link,
  sub_items,
}: UsesThisItemProps) {
  return (
    <li className="dark:text-white">
      {link !== null ? <a href={link}>{name}</a> : `${name}`}
      {description !== null ? ` - ${description}` : ""}
      {sub_items?.length > 0 && (
        <ul className="list-outside list-decimal">
          {sub_items.map((subItem) => (
            <li key={subItem.name}>
              {subItem.link !== null ? (
                <a href={subItem.link}>{subItem.name}</a>
              ) : (
                `${name}`
              )}
              {subItem.description !== null ? ` - ${subItem.description}` : ""}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default UsesThisCategory;
