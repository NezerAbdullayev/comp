import  useNavigation  from "../hooks/use-navigation-nav";

function Route({ path, children }) {
  const { curPath } = useNavigation();

  if (path === curPath) {
    return  children 
  }
  return 
}

export default Route;
