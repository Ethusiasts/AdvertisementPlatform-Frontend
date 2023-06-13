import ProfileStepper from "./profileStepper";

export default function MediaAgencyStepper() {
  return (
    <div className="flex justify-center items-center p-10 shadow-sm">
      <div className="rounded-sm border border-stroke bg-white shadow-default">
        <div className="flex flex-wrap items-center p-10 m-10 rounded-md ">
          <ProfileStepper />
        </div>
      </div>
    </div>
  );
}
