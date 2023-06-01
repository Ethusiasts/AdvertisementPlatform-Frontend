export default function DisplayAlert({ message }) {
  <div
    class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
    role="alert"
  >
    <span class="block sm:inline">{message}</span>
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
      <svg
        class="fill-current h-6 w-6 text-red-500"
        role="button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      ></svg>
    </span>
  </div>;
}
