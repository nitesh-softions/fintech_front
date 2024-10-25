// ExportButtons.js
import React from 'react';
import { Button } from 'reactstrap';
import { jsPDF } from 'jspdf'; 
import 'jspdf-autotable';

const ExportButtons = ({ dataToExport, columns }) => {
  const exportPDF = () => {
    const doc = new jsPDF();
    const tableColumn = columns.map(col => col.label);

    const tableRows = dataToExport.map((row) => {
        return row.data .map((item, index) => {
            if (typeof item !== "object") {
              return item;
            } else if (item.props && item.props.children) {
              return item.props.children;
            }
            return item;
          })
          .map((item, index) => {
            if (index === 1) {
              return Array.isArray(item) ? item.join(", ") : item;
            }
            return item;
        });
    });
    
    if (tableRows.length === 0) {
      alert('No data to export');
      return;
    }

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
    });

    doc.save('FilteredTransactionList.pdf');
  };

  
  const exportCSV = () => {
    const csvRows = [];
    const tableColumn = columns.map(col => col.label);

    csvRows.push(tableColumn.join(','));

    dataToExport.forEach(row => {
      csvRows.push(row.data.join(','));
    });

    const csvString = csvRows.join('\n');

    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'TransactionList.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Button onClick={exportPDF} color='primary' className='mx-2 my-1'>
        Download Filtered PDF
      </Button>
      <Button onClick={exportCSV} color='primary' className='my-1'>
        Download Filtered CSV
      </Button>
    </>
  );
};

export default ExportButtons;
