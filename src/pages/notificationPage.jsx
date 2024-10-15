import PropTypes from "prop-types";
import React from "react";
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

const NotificationPage = props => {

  //meta title
  document.title = "NotificationPage";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            initialPageRoute={'/dashboard'}
            title={props.t("Dashboards")}
            breadcrumbItem={props.t("NotificationPage")}
          />
        </Container>
      </div>

    </React.Fragment>
  );
};

NotificationPage.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(NotificationPage);
