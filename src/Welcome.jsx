import { useContext } from "react";
import { TodoItmesContext } from "./store/items";
function Welcome() {
  const { todoData } = useContext(TodoItmesContext);
  
  return <>{todoData.length === 0 && <p>enjoy your day</p>}</>;
}
export default Welcome;
