import { dummyData } from "./data/todos";

function App() {
  return (
    <main>
      <h1 className="font-bold text-center">Your todo</h1>
      <div className="max-w-lg mx-auto">
        <div className="space-y-2">
          {dummyData.map((todo) => (
            <p key={todo.id} className="text-lg">
              {todo.title}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
