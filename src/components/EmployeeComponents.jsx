import React, { Component } from 'react';
export default class EmployeeComponent extends Component {

    render() {
        const { id, name, salary } = this.props.data;
        return <div>
            <ul>
                <li>Id:{id}</li>
                <li>Name:{name}</li>
                <li>Salary:{salary}</li>
            </ul>

        </div>

    }
}