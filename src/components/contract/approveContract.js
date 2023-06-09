import SignatureCanvas from "react-signature-canvas";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { approveContract, getContract } from "../../services/contract";
import { useState } from "react";

export default function ApproveContractForm({ photo, title, description }) {
  let { contractId } = useParams();
  const { data: contract } = useQuery(
    ["contract"],
    () => {
      return getContract(contractId)
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          throw new Error(error);
        });
    },
    { contractId }
  );

  console.log(contract);

  const mutation = useMutation({
    mutationFn: ([contract_id, contract]) => {
      console.log(contract_id, contract);
      return approveContract(contract_id, contract);
    },
    onSuccess: () => {
      alert("successfully posted");
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    mutation.mutate([
      contract?.id,
      {
        total_tax: contract?.total_tax,
        gross_total_fee: contract?.gross_total_fee,
        net_free: contract?.net_free,
        proposal_id: contract?.proposal_id.id,
        agency_signature: contract?.agency_signature,
        customer_signature: customerSignature,
        media_agency_id: contract?.media_agency_id.id,
        user_id: contract?.user_id.id,
      },
    ]);
  };

  const [signatureRef, setSignatureRef] = useState("");
  const [customerSignature, setcustomerSignature] = useState(null);

  function handleSave(event) {
    event.preventDefault();
    const sign = signatureRef.getTrimmedCanvas().toDataURL();
    setcustomerSignature(sign);
  }

  function handleClear(event) {
    event.preventDefault();
    signatureRef.clear();
    setcustomerSignature(null);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container mx-auto py-10 px-8">
        <div className="bg-white shadow-md rounded p-8" id="contract">
          <h1 className="text-3xl font-semibold mb-4">
            Billboard Advertising Contract
          </h1>
          <p>
            This contract is between{" "}
            <span className="font-semibold">Customer</span> (hereinafter
            referred to as the "Client") and{" "}
            <span className="font-semibold">Billboard Owner</span> (hereinafter
            referred to as the "Owner").
          </p>

          <p className="mt-4">
            The Client agrees to advertise their product or service on the
            Owner's billboard for the agreed-upon period. The Owner shall
            provide the location, maintenance, and advertisement display for the
            agreed-upon period.
          </p>

          <p className="mt-4">The agreed-upon terms are as follows:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>
              Advertisement Period:{" "}
              <span className="font-semibold">30 days</span>
            </li>
            <li>
              Net Fee:{" "}
              <span className="font-semibold">${contract?.net_free}</span>
            </li>
            <li>
              Tax: <span className="font-semibold">${contract?.total_tax}</span>
            </li>
            <li>
              Gross Fee:{" "}
              <span className="font-semibold">
                ${contract?.gross_total_fee}
              </span>
            </li>
          </ul>

          <p className="mt-4">
            By signing this contract, both parties agree to the terms and
            conditions set forth above.
          </p>

          <div className="mt-8 flex justify-between">
            <div className="flex justify-start items-center w-1/2 gap-5">
              <p className="font-semibold">Client:</p>

              {customerSignature ? (
                <img
                  class="w-auto h-16"
                  src={customerSignature}
                  alt=""
                  loading="lazy"
                />
              ) : (
                <p>______________________________</p>
              )}
            </div>
            <div className="flex justify-start items-center w-1/2 gap-5">
              <p className="font-semibold">Owner:</p>

              {contract?.agency_signature ? (
                <img
                  class="w-auto h-16"
                  src={contract?.agency_signature}
                  alt=""
                  loading="lazy"
                />
              ) : (
                <p>______________________________</p>
              )}
            </div>
          </div>
        </div>

        <div class="flex justify-between items-start gap-4 mt-5">
          <div class="flex justify-center items-center gap-4">
            <div class="font-bold text-xl text-black p-5 mb-10">
              <p> Sign here =&gt; </p>
            </div>
            <div class="flex flex-col justify-center gap-4">
              <div class="bg-gray-200 w-72 h-32 rounded-md -px-2 -py-2">
                <SignatureCanvas
                  penColor="green"
                  canvasProps={{
                    height: "auto",
                    width: "auto",
                    className: "sigCanvas",
                  }}
                  ref={(data) => setSignatureRef(data)}
                />
              </div>
              <div class="flex justify-between gap-4">
                <button
                  onClick={handleClear}
                  class="flex cursor-pointer items-center justify-center gap-2 rounded bg-gray-100 py-1 px-10 text-sm font-medium text-gray-900 hover:bg-opacity-80 xsm:px-4"
                >
                  Clear
                </button>

                <button
                  onClick={handleSave}
                  class="flex cursor-pointer items-center justify-center gap-2 rounded bg-blue-700 py-1 px-10 text-sm font-medium text-white hover:bg-opacity-80 xsm:px-4"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="flex cursor-pointer items-center justify-center gap-2 rounded bg-blue-700 py-2 px-20 text-sm font-medium text-white hover:bg-opacity-80 xsm:px-4"
            >
              Approve Contract
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
