import { database } from './services/firebase';



function App() {

  async function teste()
  {
		database.ref(`teste`).push({
			teste: "teste"
		}).then(resp => {
      console.log(resp);      
    });
  }

  return (
    <h1 className="text-blue-700 text-3xl font-bold">
      Hello world!
    </h1>
  )
}

export default App;
