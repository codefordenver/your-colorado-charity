import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class AppTopbar extends Component {
    static defaultProps = {
        onToggleMenu: null
    }

    static propTypes = {
        onToggleMenu: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="layout-topbar clearfix">
                <button className="p-link layout-menu-button" onClick={this.props.onToggleMenu}>
                    <span className="pi pi-bars"/>
                </button>
                <div className="layout-topbar-icons">
                    <button className="p-link" onClick={() => {window.location = '#/'}}>
                        <span className="layout-topbar-item-text">Home</span>
                        <span className="layout-topbar-icon pi pi-home"/>
                    </button>
                </div>
            </div>
        );
    }
}