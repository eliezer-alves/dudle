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
    <div>
      <button onClick={teste}>oi</button>
    </div>
  );
}

export default App;
