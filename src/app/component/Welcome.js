/* eslint-disable react/jsx-handler-names */
import HotelName from "./HotelName";
import PropTypes from "prop-types";
import { RaisedButton } from "material-ui";
import React from "react";

class Welcome extends React.Component {

    static propTypes = {
        hotels: PropTypes.object,
        loadHotels: PropTypes.func
    };

    constructor( props ) {
        super(props);
        this.handleLoadHotels = ::this.handleLoadHotels;
    }

    handleLoadHotels() {
        this.props.loadHotels();
    }

    render() {
        return (
            <div>
                <RaisedButton
                    primary
                    label={"Load Hotels"}
                    onTouchTap={this.handleLoadHotels}
                />
                <HotelName
                    name={this.props.hotels}
                />

            </div>
        );
    }
}

export default Welcome;
