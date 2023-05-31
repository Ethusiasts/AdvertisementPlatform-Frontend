export default function Nearby() {
  return (
    <div class="">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl py-4 sm:py-4 lg:max-w-none lg:py-5">
          <h2 class="text-2xl font-bold text-gray-900">NearBy Places</h2>

          <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            <div class="group relative">
              <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
                  alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="/">
                  <span class="absolute inset-0"></span>
                  BOPAL, AHMEDABAD
                </a>
              </h3>
              <p class="text-base font-semibold text-gray-900">
                Bopal, Ahmedabad, Gujarat, India
              </p>
            </div>
            <div class="group relative">
              <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg"
                  alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="/">
                  <span class="absolute inset-0"></span>
                  Borough High Street, London
                </a>
              </h3>
              <p class="text-base font-semibold text-gray-900">
                Borough High St, London SE1, UK
              </p>
            </div>
            <div class="group relative">
              <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
                  alt="Collection of four insulated travel bottles on wooden shelf."
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="/hello">
                  <span class="absolute inset-0"></span>
                  GANDHI BRIDGE, AHMEDABAD
                </a>
              </h3>
              <p class="text-base font-semibold text-gray-900">
                Gandhi Bridge, Ahmedabad, Gujarat, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
