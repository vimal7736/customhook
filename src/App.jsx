import FetchComponennt from "./components/FetchComponennt";
import HookedForm from "./components/HookedForm";
import ThemedComponent from "./components/ThemedComponent";
import TogglingComponnent from "./components/TogglingComponnent";

export default function App(){

  return(
    <div>
      <h2>Custom helpfull hook</h2>

      <ThemedComponent/>
      <HookedForm/>
      <FetchComponennt/>
      <TogglingComponnent/>
    </div>
  )
}