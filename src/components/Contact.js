const Contact = () => {
  return (
    <div>
      <h1 className="font-bold test-3xl p-4 m-4">Contact Us</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Name"
        ></input>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Message"
        ></input>
        <button className="border border-black bg-gray-100 rounded-lg p-2 m-2">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
