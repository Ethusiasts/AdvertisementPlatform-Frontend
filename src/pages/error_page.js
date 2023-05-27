import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="h-screen flex flex-col gap-y-2 items-center justify-center"
    >
      <h1 className="text-4xl font-black ">Oops!</h1>
      <p className="">Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-600">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={"/"}>
        {" "}
        <p>Got to Home</p>
      </Link>
    </div>
  );
}
