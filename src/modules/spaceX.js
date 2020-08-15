import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import Header from "../components/header";
import Footer from "../components/footer";
import Filters from "../components/filters";
import Loader from "../components/loader";

class spaceX extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      launchyears: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
      successFullLaunch: [true, false],
      successLanding: [true, false],
      selectedLaunch: "",
      selectedYear: "",
      selectedLanding: "",
      spaceXData: [],
      loader:false
    };
  }
  componentDidMount() {
    if (!this.props.spaceX.spaceX.isSuccess) {
      this.props.spaceXRequest()
    }
  }
  filters() {
    let payload = {
      year: this.state.selectedYear,
      launch: this.state.selectedLaunch,
      landing: this.state.selectedLanding
    }

    this.props.filterRequest(payload)
  }
  updateSelectedYear(year) {
    this.setState({
      selectedYear: year
    }, () => {
      this.filters()
    })
  }
  updateSelectedLaunch(launch) {
    this.setState({
      selectedLaunch: launch
    }, () => {
      this.filters()
    })
  }
  updateSelectedLanding(landing) {
    this.setState({
      selectedLanding: landing
    }, () => {
      this.filters()
    })
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.spaceX.spaceX.isSuccess) {
      if (nextProps.spaceX.spaceX.data) {
        return {
          loader: false,
          spaceXData: nextProps.spaceX.spaceX.data,
        }
      } else {
        return {
          loader: false,
          spaceXData: nextProps.spaceX.spaceX.data,
        }
      }
    }
    if (nextProps.spaceX.filter.isSuccess) {
      if (nextProps.spaceX.filter.data) {
        return {
          loader: false,
          spaceXData: nextProps.spaceX.filter.data,
        }
      } else {
        return {
          loader: false,
          spaceXData: nextProps.spaceX.filter.data,

        }
      }
    }
    if (nextProps.spaceX.filter.isLoading || nextProps.spaceX.spaceX.isLoading) {
      return {
        loader: true,
        spaceXData:[]
      }
    }
    return {}
  }
  componentDidUpdate(previousProps, previousState) {
    if (this.props.spaceX.spaceX.isError || this.props.spaceX.spaceX.isSuccess) {
      this.props.spaceXClear()
    }
  }
  render() {

    return (
      <div className="container-fluid">
        <Header />
        <div className="row">
          <div className="col-md-2 col-sm-2 col-lg-3">
            <Filters launchyears={this.state.launchyears} successLanding={this.state.successLanding} successFullLaunch={this.state.successFullLaunch}
              updateSelectedLanding={(e) => this.updateSelectedLanding(e)}
              updateSelectedLaunch={(e) => this.updateSelectedLaunch(e)}
              updateSelectedYear={(e) => this.updateSelectedYear(e)}
              selectedLanding={this.state.selectedLanding}
              selectedLaunch={this.state.selectedLaunch}
              selectedYear={this.state.selectedYear}
            />
          </div>
          <div className="col-md-10 col-sm-10 col-lg-9">
        {this.state.loader ? <Loader /> : null}

            {this.state.spaceXData != undefined ? this.state.spaceXData.map((item, key) =>
              <div className="col-md-4 col-sm-4 col-lg-3" key={key}>
                <div className="spaceX">
                  {item.links.mission_patch ? <div className="innerSpaceX">
                    <img src={item.links.mission_patch} width="100%" />
                  </div> : null}
                  <p className="p_name space_nowrap">{item.mission_name} #{item.flight_number}</p>
                  <p className=""><span>Mission IDs: </span><span>{item.mission_id.length > 0 ? <ul>
                    {item.mission_id.map((id, key) => <li key={key}>{id}</li>)}</ul> : "No Data "}</span></p>
                  <p className="flex space_nowrap"><span>Launch year: </span><span className="span_clr"> {item.launch_year}</span></p>
                  <p className="flex "><span>Successful Launch : </span><span className="span_clr"> {item.launch_success === true ? "True" : "False"}</span></p>
                  <p className="flex "><span>Successful Landing: </span><span className="span_clr"> {item.launch_landing === true ? "True" : "False"}</span></p>
                </div>
                <br />
              </div>
            ) : null}


          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    spaceX: state.spaceX
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(spaceX);
