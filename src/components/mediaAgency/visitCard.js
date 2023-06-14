import amico from "../../images/amico.svg";
export default function VisitCard() {
  return (
    <div class="bg-gray-100  rounded-lg shadow-md overflow-hidden">
      <div class="px-4 py-5 sm:p-6">
        <div class="flex justify-between px-4">
          <div class="gap-2">
            <h4 class="text-xl font-bold tracking-wide">Visits</h4>
            <div class="text-3xl font-bold pl-2">77</div>
          </div>
          <div class="">
            <img src={amico} class="object-cover h-[100%]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
