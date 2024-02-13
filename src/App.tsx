import { useAppDispatch, useAppSelector } from "./app/hooks";
import { amountAdded, incremented } from "./features/counter/counter-slice";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useFetchBreedsQuery } from "./features/dogs/dogs-api-slice";
import "./App.css";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { data = [], isFetching } = useFetchBreedsQuery(5);

  const handleClick = () => {
    dispatch(incremented());
  };

  const handleClick2 = () => {
    dispatch(amountAdded(3));
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        <p>
          <button onClick={handleClick2}>Add 3</button>
        </p>
        {isFetching ? (
          <p>Is Loading...</p>
        ) : (
          <div>
            <p>Number of dogs fetched: {data.length} </p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Picture</th>
                </tr>
              </thead>
              <tbody>
                {data.map((breed) => (
                  <tr key={breed.id}>
                    <td>{breed.name}</td>
                    <td>
                      <img
                        src={`${breed.image?.url}`}
                        alt={breed.name}
                        height={240}
                        width={320}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
