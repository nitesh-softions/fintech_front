import PropTypes from "prop-types";
import React, { useMemo } from "react";
import { Badge, Button, Col, Container, Input, Row } from "reactstrap";

//i18n
import { withTranslation } from "react-i18next";
import { IoWallet } from "react-icons/io5";
import TableContainer from "../components/Common/TableContainer";
import SVGIcons from "../components/Common/SVGIcons";

const Transaction = props => {
  const columns = useMemo(
    () => [
      {
        header: () => ( <span className="text-nowrap"> Service Name <SVGIcons.LiaSortSolid /> </span> ),
        accessorKey: "serviceName",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: () => ( <span className="text-nowrap"> Transaction Status </span> ),
        accessorKey: "transactionStatus",
        enableColumnFilter: false,
        enableSorting: true,
        cell: info => {
          const status = info.getValue();
          let color;
          if (status === "success") {
            color = "success";
          } else if (status === "failed") {
            color = "danger";
          } else {
            color = "secondary";
          }
          return <Badge color={color}>{status.charAt(0).toUpperCase() + status.slice(1)}</Badge>;
        },
      },
      {
        header: () => ( <span className="text-nowrap"> Transaction ID <SVGIcons.LiaSortSolid /> </span> ),
        accessorKey: "transactionId",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: () => ( <span className="text-nowrap"> Transfer Amount <SVGIcons.LiaSortSolid /> </span> ),
        accessorKey: "transferAmount",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: () => ( <span className="text-nowrap"> Pay-Out Currency <SVGIcons.LiaSortSolid /> </span> ),
        accessorKey: "currency",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: () => ( <span className="text-nowrap"> Exchange Rate <SVGIcons.LiaSortSolid /> </span> ),
        accessorKey: "exchangeRate",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: () => ( <span className="text-nowrap"> Commission Amount <SVGIcons.LiaSortSolid /> </span> ),
        accessorKey: "commissionAmount",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: () => ( <span className="text-nowrap"> Time Stamp <SVGIcons.LiaSortSolid /> </span> ),
        accessorKey: "timeStamp",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: () => ( <span className="text-nowrap"> Mobile no / Account no <SVGIcons.LiaSortSolid /> </span> ),
        accessorKey: "contactInfo",
        enableColumnFilter: false,
        enableSorting: true,
      },
    ],
    []
  );

  const data = [
    {
      serviceName: "PhoenPe",
      transactionStatus: "success",
      transactionId: "SDF9F8745632310",
      transferAmount: "₹ 50,000",
      currency: "INR",
      exchangeRate: "₹ 100",
      commissionAmount: "₹ 500",
      timeStamp: "Sat, 24 Aug 2024 10:06:31 GMT",
      contactInfo: "9855668844",
    },
    {
      serviceName: "Google play",
      transactionStatus: "failed",
      transactionId: "SDF9F8734563210",
      transferAmount: "₹ 50,000",
      currency: "INR",
      exchangeRate: "₹ 100",
      commissionAmount: "₹ 500",
      timeStamp: "Sat, 24 Aug 2024 10:06:31 GMT",
      contactInfo: "2254159855668844",
    },
    {
      serviceName: "Google play",
      transactionStatus: "pending",
      transactionId: "SDF39F8734563210",
      transferAmount: "₹ 50,000",
      currency: "INR",
      exchangeRate: "₹ 100",
      commissionAmount: "₹ 500",
      timeStamp: "Sat, 24 Aug 2024 10:06:31 GMT",
      contactInfo: "9855668844",
    },
  ];

  //meta title
  document.title = "Transaction";

  return (
    <React.Fragment>
      <Container fluid className="page-content">
        <h2 className="font-size-22 mb-4">User Statement </h2>
        <div className="mb-3">
          <Row className="align-items-center">
            <Col xs={12} md={4} className="mb-3">
              <Input id="exampleDate1" name="startDate" className="form-control bg-light" placeholder="Start Date" type="date" />
            </Col>
            <Col xs={12} md={4} className="mb-3">
              <Input id="exampleDate2" name="endDate" className="form-control bg-light" placeholder="End Date" type="date" />
            </Col>
            <Col xs={12} md={2} className="mb-3">
              <Button type="submit" color="primary" className="form-control text-nowrap">Download CSV</Button>
            </Col>
            <Col xs={12} md={2} className="mb-3">
              <Button type="submit" color="primary" className="form-control text-nowrap">Download PDF</Button>
            </Col>
          </Row>
        </div>

        <TableContainer
            columns={columns}
            data={data || []}
            isGlobalFilter={true}
            isPagination={true}
            SearchPlaceholder="Search Transaction Record..."
            pagination="pagination"
            paginationWrapper='dataTables_paginate paging_simple_numbers'
            tableClass="table table-borderless mb-0 table"
            theadClass="border-bottom"
        />
      </Container>
    </React.Fragment>
  );
};

Transaction.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(Transaction);
