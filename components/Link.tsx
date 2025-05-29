interface Props {
  href: string;
  children: React.ReactNode;
}

const Link = ({ href, children }: Props) => (
  <a
    href={href}
    className="border-b-[1px] border-gray-600 transition hover:bg-gray-200 dark:hover:bg-gray-600 rounded-t-sm"
  >
    {children}
  </a>
);

export default Link;
