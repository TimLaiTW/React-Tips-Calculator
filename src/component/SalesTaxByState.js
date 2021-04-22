import React, { Component } from 'react';
import { Alert } from '@material-ui/lab';
const salesTaxLookUp = {
    "AL": 0.04,       
    "AK": 0.00,
    "AZ": 5.60,
    "AR": 6.50, 
    "CA": 7.25,
    "CO": 2.90,
    "CT": 6.35,
    "DE": 0.00,
    "FL": 6.00,
    "GA": 4.00,
    "HI": 4.00,
    "ID": 6.00,
    "IL": 6.25,
    "IN": 7.00,
    "IA": 6.00,
    "KS": 6.50,
    "KY": 6.00,
    "LA": 4.45,
    "ME": 5.50,
    "MD": 6.00,
    "MA": 6.25,
    "MI": 6.00,
    "MN": 6.875,
    "MS": 7.00,
    "MO": 4.225,
    "MT": 0.00,
    "NE": 5.50,
    "NV": 6.85,
    "NH": 0.00,
    "NJ": 6.625,
    "NM": 5.125,
    "NY": 4.00,
    "NC": 4.75,
    "ND": 5.00,
    "OH": 5.75,
    "OK": 4.50,
    "OR": 0.00,
    "PA": 6.00,
    "RI": 7.00,
    "SC": 6.00,
    "SD": 4.50,
    "TN": 7.00,
    "TX": 6.25,
    "UT": 6.10,
    "VT": 6.00,
    "VA": 5.30,
    "WA": 6.50,
    "WV": 6.00,
    "WI": 5.00,
    "WY": 4.00
}

class SalesTaxByState extends Component {
    constructor(){
        super();
        this.state = {
            status: null,
            usstate: null,
            taxs: null
        };
    }

    componentDidMount() {
        let geoOptions = {
            enableHighAccuracy: true, 
            timeOut: 20000,
            maxiumAge: 60
        };
        this.setState({status: null});
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError, geoOptions)
        };
    }

    geoSuccess = (position) => {
        fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude+ '&result_type=postal_code&key=' + process.env.REACT_APP_GMAP_API_KEY)
        .then(res => res.json())
        .then( 
            result => {
                if  (result.status === 'OK'){
                    this.setState({ usstate: result.results[0].address_components[3].short_name })
                    this.salesTaxbyState(this.state.usstate);
                }
                else{
                    this.setState({status: "not available"})
                }
            }
        )
    };

    geoError = (error) => {
        this.setState({status: "not available"});
    }
    
    salesTaxbyState = (stateCode) => {
        const res = salesTaxLookUp[stateCode];
        {res ? this.setState({taxs: res}): this.setState({status: "not available"})}
        
    }

    componentDidUpdate(){
        if (this.props.getTaxs){
            {this.state.taxs ? this.props.getTaxs(this.state.taxs) : this.props.getTaxErr(this.state.status)}
        }
    }

  render() {
    return (
        null
        );
    }
}
export default SalesTaxByState


