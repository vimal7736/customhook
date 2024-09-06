import useFormInput from "../hooks/useFormInput";

export default function HookedForm() {
  const id = useFormInput("");
  const title = useFormInput("");
  const price = useFormInput("");
  const description = useFormInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 >useFormHook Form</h1>
      <form onSubmit={handleSubmit} className="hooked-form">
        <div className="form-group">
          <label htmlFor="id">Id</label>
          <input type="text" {...id} id="id" />
        </div>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" {...title} id="title" />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="text" {...price} id="price" />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" {...description} id="description" />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </>
  );
}
