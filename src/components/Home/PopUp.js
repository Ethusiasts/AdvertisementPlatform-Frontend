import BillboardFilterBar from "./BillboardFilterBar";
export default function PopUp({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="fixed bottom-0 left-0 w-full h-1/2 bg-white rounded-t-lg shadow-lg overflow-y-auto">
        <BillboardFilterBar onClose={onClose} />
      </div>
    </div>
  );
}
