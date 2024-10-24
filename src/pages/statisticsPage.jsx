import PropTypes from "prop-types";
import React from "react";
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

const Statistics = props => {

  //meta title
  document.title = "Statistics";

  return (
    <React.Fragment>
      <Container fluid className="page-content">
        {/* Render Breadcrumb */}
        <Breadcrumbs
          initialPageRoute={'/dashboard'}
          title={props.t("Statistics")}
          breadcrumbItem={props.t("Statistics")}
        />
      </Container>

    </React.Fragment>
  );
};

Statistics.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(Statistics);
