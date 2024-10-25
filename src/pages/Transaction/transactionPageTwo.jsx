// TransactionPageTwo.js
import React, { useEffect, useState } from 'react';
import 'jspdf-autotable'; 
import { Badge, Container } from 'reactstrap';
import MUIDataTable from 'mui-datatables';
import ExportButtons from './ExportButtons';
import transactionData from './data.json';

function TransactionPageTwo() {
  const [dataToExport, setDataToExport] = useState([]);

  const columns = [
    {
      name: "serviceName",
      label: "Service Name",
      options: {
        filter: true,
        filterType: 'multiselect',
        customBodyRender: (value) => value,
        filterOptions: {
          names: ["PhonePe", "Google Play"],
          logic: (value, filterVal) => !filterVal.length || !filterVal.includes(value),
          display: (filterList) => filterList.length ? filterList.join(', ') : "All"
        }
      }
    },
    {
      name: "transactionStatus",
      label: "Transaction Status",
      options: {
        filter: true,
        filterType: 'multiselect',
        customBodyRender: (value) => {
          let color;
          if (value.toLowerCase() === "success") {
            color = "success"; // Green badge for success
          } else if (value.toLowerCase() === "failed") {
            color = "danger"; // Red badge for failed
          } else {
            color = "secondary"; // Grey badge for other statuses
          }
          return <Badge color={color}>{value.charAt(0).toUpperCase() + value.slice(1)}</Badge>;
        },
        filterOptions: {
          names: ["Failed", "Pending", "Success"],
          logic: (value, filterVal) => !filterVal.length || !filterVal.some(val => value.includes(val)),
          display: (filterList) => filterList.length ? filterList.join(', ') : "All"
        }
      }
    },
    {
      name: "transactionId",
      label: "Transaction ID",
      options: {
        filter: true,
        filterType: 'multiselect',
        customBodyRender: (value) => value,
        filterOptions: {
          names: ["SDF9F874563210", "SDF9F874563212"],
          logic: (value, filterVal) => !filterVal.length || !filterVal.includes(value),
          display: (filterList) => filterList.length ? filterList.join(', ') : "All"
        }
      }
    },
    {
      name: "transferAmount",
      label: "Transfer Amount",
      options: {
        filter: true,
        filterType: 'multiselect',
        customBodyRender: (value) => value,
        filterOptions: {
          names: ["₹ 50,000"],
          logic: (value, filterVal) => !filterVal.length || !filterVal.includes(value),
          display: (filterList) => filterList.length ? filterList.join(', ') : "All"
        }
      }
    },
    {
      name: "currency",
      label: "Pay-Out Currency",
      options: {
        filter: true,
        filterType: 'multiselect',
        customBodyRender: (value) => value,
        filterOptions: {
          names: ["INR"],
          logic: (value, filterVal) => !filterVal.length || !filterVal.includes(value),
          display: (filterList) => filterList.length ? filterList.join(', ') : "All"
        }
      }
    },
    {
      name: "exchangeRate",
      label: "Exchange Rate",
      options: {
        filter: true,
        filterType: 'multiselect',
        customBodyRender: (value) => value,
        filterOptions: {
          names: ["₹ 100"],
          logic: (value, filterVal) => !filterVal.length || !filterVal.includes(value),
          display: (filterList) => filterList.length ? filterList.join(', ') : "All"
        }
      }
    },
    {
      name: "commissionAmount",
      label: "Commission Amount",
      options: {
        filter: true,
        filterType: 'multiselect',
        customBodyRender: (value) => value,
        filterOptions: {
          names: ["₹ 500"],
          logic: (value, filterVal) => !filterVal.length || !filterVal.includes(value),
          display: (filterList) => filterList.length ? filterList.join(', ') : "All"
        }
      }
    },
    {
      name: "timeStamp",
      label: "Time Stamp",
      options: {
        filter: true,
        filterType: 'multiselect',
        customBodyRender: (value) => value,
        filterOptions: {
          names: ["Sat, 24 Aug 2024 10:06:31 GMT"],
          logic: (value, filterVal) => !filterVal.length || !filterVal.includes(value),
          display: (filterList) => filterList.length ? filterList.join(', ') : "All"
        }
      }
    },
    {
      name: "contactInfo",
      label: "Mobile no / Account no",
      options: {
        filter: true,
        filterType: 'multiselect',
        customBodyRender: (value) => value,
        filterOptions: {
          names: ["9855668844", "2254159856"],
          logic: (value, filterVal) => !filterVal.length || !filterVal.includes(value),
          display: (filterList) => filterList.length ? filterList.join(', ') : "All"
        }
      }
    },
  ];

  useEffect(() => {
    // Transform the data
    const transformedData = transactionData?.map((item, index) => ({
      data: [
          item.serviceName,
          item.transactionStatus,
          item.transactionId,
          item.transferAmount,
          item.currency,
          item.exchangeRate,
          item.commissionAmount,
          item.timeStamp,
          item.contactInfo,
      ],
      dataIndex: index + 1,
    }));
  
    setDataToExport(transformedData);
  }, [transactionData.length]);


  const options = {
    filterType: 'dropdown',
    responsive: "standard",
    customToolbar: () => (
      <ExportButtons dataToExport={dataToExport} columns={columns} />
    ),
    onTableChange: (action, tableState) => {
      if (action === 'filterChange' || action === 'resetFilters' || action === 'search') {
        const displayedData = tableState.displayData;
        setDataToExport(displayedData);
      }
    },
  };

  return (
    <React.Fragment>
      <MUIDataTable title={"Transaction List"} data={transactionData} columns={columns} options={options} />
    </React.Fragment>
  );
}

export default TransactionPageTwo;
