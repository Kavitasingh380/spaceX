import React from 'react';
const Filters = (props) => {
    const { launchyears, successLanding, successFullLaunch } = props
    return (
        <div className="filters_main">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 ">
                    <h2 className="hd6">Filters</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12">
                    <h4 className="sub_hd_fil">Launch Year</h4>
                    <hr />
                    {launchyears.map((yr,key)=>(
                        <div className="col-md-12 col-sm-12 col-lg-6" key ={key} onClick={()=>props.updateSelectedYear(yr)}>
                        <div className={props.selectedYear===yr?"selected_year year":"year"}>{yr}</div><br/></div>
                     ))}
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 ">
                <h4 className="sub_hd_fil">Successful Launch </h4>
                    <hr />
                    {successFullLaunch.map((launch,key)=>(
                        <div className="col-md-12 col-sm-12 col-lg-6" key ={key} onClick={()=>props.updateSelectedLaunch(launch)}>
                        <div className={props.selectedLaunch===launch?"selected_year year":"year"}>{launch===true?"True":"False"}</div><br/></div>
                     ))}
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 ">
                <h4 className="sub_hd_fil">Successful Landing</h4>
                    <hr />
                    {successLanding.map((landing,key)=>(
                        <div className="col-md-12 col-sm-12 col-lg-6" key ={key} onClick={()=>props.updateSelectedLanding(landing)}>
                        <div className={props.selectedLanding===landing?"selected_year year":"year"}>{landing===true?"True":"False"}</div><br/></div>
                     ))}
                </div>
            </div>
        </div>
    );
}
export default Filters;