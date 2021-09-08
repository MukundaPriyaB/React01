import ToDo from "./components/ToDo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <ToDo text="Learn React" />
      <ToDo text="Master React" />
      <ToDo text="Complete React project"></ToDo>
    </div>
  );
}

export default App;
