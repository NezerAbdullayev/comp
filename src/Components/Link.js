import classNames from "classnames";
import useNavigate from "../hooks/use-navigation-nav";

function Link({ to, children, clasName, activeClassName }) {
  const { navigate, curPath } = useNavigate();
  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) return;

    e.preventDefault();
    navigate(to);
  };
  const clases = classNames(
    "text-blue-500 mb-3 transition-all",
    clasName,
    curPath === to && activeClassName
  );

  return (
    <a className={clases} href="to" onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
