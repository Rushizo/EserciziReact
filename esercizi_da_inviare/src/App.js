import CarForm from "./CarForm"

const App = () => {

  let initialData = {
  name: "Fiat",
  model: "Punto",
  year: "2003",
  color: "Bianca"
  }

return (
      <>
        <CarForm initialData={initialData}/>
      </>
    );
}

export default App