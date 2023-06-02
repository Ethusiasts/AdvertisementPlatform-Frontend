import DownloadButton from "./downloadButton"
import html2pdf from 'html2pdf.js';

export default function CreateContractForm({ photo, title, description}) {
    function downloadPdf() {
        const element = document.getElementById('contract');
        const opt = {
          margin: 1,
          filename: 'billboard_contract.pdf',
          img: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
    
        html2pdf().set(opt).from(element).save();
      }
    
      function printPdf() {
        const element = document.getElementById('contract');
        const opt = {
          margin: 1,
          img: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
    
        html2pdf().set(opt).from(element).toPdf().get('pdf').then(function (pdf) {
          pdf.autoPrint();
          window.open(pdf.output('bloburl'), '_blank');
        });
      }


    return (
        <div className="container mx-auto py-10 px-8">
                      <div className="mt-8 mb-5 flex justify-end gap-4">
            <DownloadButton onClick={downloadPdf} label="Download PDF" />
            <DownloadButton onClick={printPdf} label="Print" />
          </div>
          <div className="bg-white shadow-md rounded p-8" id="contract">
            <h1 className="text-3xl font-semibold mb-4">Billboard Advertising Contract</h1>
            <p>This contract is between <span className="font-semibold">Customer</span> (hereinafter referred to as the "Client") and <span className="font-semibold">Billboard Owner</span> (hereinafter referred to as the "Owner").</p>
    
            <p className="mt-4">The Client agrees to advertise their product or service on the Owner's billboard for the agreed-upon period. The Owner shall provide the location, maintenance, and advertisement display for the agreed-upon period.</p>
    
            <p className="mt-4">The agreed-upon terms are as follows:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Advertisement Period: <span className="font-semibold">30 days</span></li>
              <li>Net Fee: <span className="font-semibold">$1,000.00</span></li>
              <li>Tax: <span className="font-semibold">$100.00</span></li>
            </ul>
    
            <p className="mt-4">By signing this contract, both parties agree to the terms and conditions set forth above.</p>
    
            <div className="mt-8 flex justify-between">
              <div className="w-1/2">
                <p className="font-semibold">Client:</p>
                <p>________________________________</p>
              </div>
              <div className="w-1/2">
                <p className="font-semibold">Owner:</p>
                <p>______________________________</p>
              </div>
            </div>
          </div>

        </div>
      )
    }