import html2pdf from 'html2pdf.js';
import BillboardTable from "../../components/contract/billboardTable"
import SideBar from "../../components/billboards/sidebar"
import Header from "../../components/billboards/header"
import CreateContractForm from '../../components/contract/createContract';

export default function CreateContract({ status, place, city, width, height, location, imageSrc, alt }) {
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
        <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 bg-gray-300">
<div class="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-gray-100 h-full text-white transition-all duration-300 border-none z-10 sidebar">
<SideBar />
</div>
      <div class="h-full ml-14 mr-14 mt-5 mb-10 md:ml-64">
<Header title="Contracts"/>
        <CreateContractForm />
      </div>
</div>
)};


