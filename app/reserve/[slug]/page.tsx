import Form from "./Components/Form";
import Header from "./Components/Header";

export default function Search() {
  return (
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <Header />
            <Form />
          </div>
        </div>
  );
}
