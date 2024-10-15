import PropTypes from "prop-types";
import React from "react";
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

const Settings = props => {

  //meta title
  document.title = "Settings";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            initialPageRoute={'/dashboard'}
            title={props.t("Settings")}
            breadcrumbItem={props.t("Settings")}
          />
        </Container>
      </div>

    </React.Fragment>
  );
};

Settings.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(Settings);
