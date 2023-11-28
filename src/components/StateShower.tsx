const StateShower = ({
  name,
}: {
  name:
    | "Deleting..."
    | "Updating..."
    | "Loading..."
    | "No data"
    | "Something went wrong! Plz, try again later!"
    | "No info is found";
}) => {
  return (
    <div className="flex justify-center items-center h-[20vh] select-none">
      <h1 className={`${name !== "No data" && "animate-bounce"} text-[19px]`}>
        {name}
      </h1>
    </div>
  );
};

export default StateShower;
