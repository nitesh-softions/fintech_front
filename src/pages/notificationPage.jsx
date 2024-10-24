import PropTypes from "prop-types";
import React from "react";
import { Container } from "reactstrap";
import user1 from "../assets/images/users/avatar-1.jpg";

//i18n
import { withTranslation } from "react-i18next";
import SimpleBar from "simplebar-react";

const notificationsData = [
  {
      id: 1,
      avatar: user1,
      title: "Donec vitae sapien ut",
      description: "If several languages coalesce, the grammar of the resulting language",
      author: "Joseph",
      date: "12 Mar, 2020"
  },
  {
      id: 2,
      avatar: user1,
      title: "Cras ultricies mi eu turpis",
      description: "To an English person, it will seem like simplified English, as a skeptical cambridge",
      author: "Jerry",
      date: "13 Mar, 2020"
  },
  {
      id: 3,
      avatar: user1,
      title: "Duis arcu tortor suscipit",
      description: "It va esser tam simplic quam occidental in fact, it va esser occidental.",
      author: "Calvin",
      date: "14 Mar, 2020"
  },
  {
      id: 3,
      avatar: user1,
      title: "Duis arcu tortor suscipit",
      description: "It va esser tam simplic quam occidental in fact, it va esser occidental.",
      author: "Calvin",
      date: "14 Mar, 2020"
  },
  {
      id: 3,
      avatar: user1,
      title: "Duis arcu tortor suscipit",
      description: "It va esser tam simplic quam occidental in fact, it va esser occidental.",
      author: "Calvin",
      date: "14 Mar, 2020"
  },
  {
      id: 3,
      avatar: user1,
      title: "Duis arcu tortor suscipit",
      description: "It va esser tam simplic quam occidental in fact, it va esser occidental.",
      author: "Calvin",
      date: "14 Mar, 2020"
  },
  {
      id: 3,
      avatar: user1,
      title: "Duis arcu tortor suscipit",
      description: "It va esser tam simplic quam occidental in fact, it va esser occidental.",
      author: "Calvin",
      date: "14 Mar, 2020"
  },
  {
      id: 3,
      avatar: user1,
      title: "Duis arcu tortor suscipit",
      description: "It va esser tam simplic quam occidental in fact, it va esser occidental.",
      author: "Calvin",
      date: "14 Mar, 2020"
  },
  {
      id: 3,
      avatar: user1,
      title: "Duis arcu tortor suscipit",
      description: "It va esser tam simplic quam occidental in fact, it va esser occidental.",
      author: "Calvin",
      date: "14 Mar, 2020"
  },
  {
      id: 3,
      avatar: user1,
      title: "Duis arcu tortor suscipit",
      description: "It va esser tam simplic quam occidental in fact, it va esser occidental.",
      author: "Calvin",
      date: "14 Mar, 2020"
  },
  {
      id: 3,
      avatar: user1,
      title: "Duis arcu tortor suscipit",
      description: "It va esser tam simplic quam occidental in fact, it va esser occidental.",
      author: "Calvin",
      date: "14 Mar, 2020"
  },
  {
      id: 3,
      avatar: user1,
      title: "Duis arcu tortor suscipit",
      description: "It va esser tam simplic quam occidental in fact, it va esser occidental.",
      author: "Calvin",
      date: "14 Mar, 2020"
  },
  {
      id: 3,
      avatar: user1,
      title: "Duis arcu tortor suscipit",
      description: "It va esser tam simplic quam occidental in fact, it va esser occidental.",
      author: "Calvin",
      date: "14 Mar, 2020"
  },
  {
      id: 4,
      avatar: user1,
      title: "Donec vitae sapien ut",
      description: "If several languages coalesce, the grammar of the resulting language",
      author: "Joseph",
      date: "12 Mar, 2020"
  }
]

const NotificationPage = props => {

  //meta title
  document.title = "NotificationPage";

  return (
    <React.Fragment>
        <Container fluid className="page-content">
          <h4 className="font-size-22 mb-4">NOTIFICATIONS</h4>
          <SimpleBar>
            <ul className="list-group gap-2">
              {(notificationsData || []).map((item, index) => (
                <li className="list-group-item border rounded-2" key={index}>
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <img className="rounded-circle avatar-xs" src={item.avatar} alt="" height="18" />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="font-size-14">{item.title}</h5>
                      <p className="text-muted">{item.description}</p>

                      <div className="float-end">
                        <p className="text-muted mb-0">
                          <i className="mdi mdi-account me-1" /> {item.author}
                        </p>
                      </div>
                      <p className="text-muted mb-0">{item.date}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </SimpleBar>
        </Container>
    </React.Fragment>
  );
};

NotificationPage.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(NotificationPage);
