import AppBarComp from "./AppBar";
import TaskContainer from "./TaskContainer";
import CreateContext from "./CreateContext";
import LogoContainer from "./LogoContainer";
import CreateModal from "./CreateModal";
import EditModal from "./EditModal";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <div className="App">
      <CreateContext>
        <AppBarComp />
        <LogoContainer />
        <TaskContainer />
        <CreateModal />
        <EditModal />
      </CreateContext>
    </div>
  );
}
