import React, {Component} from "react" ; 

class Customer extends Component {
    render() {
        const {id,first_name,last_name,email} = this.props.customer;
        return (
            <tr>
                            <td style={{ textAlign: "center"}}>{id}</td>
                            <td>Balkis Younes</td>
                            <td>balkis@gmail.com</td>
                            <td>
                                <button className="mini ui blue button"> Edit</button>
                                <button className="mini ui red button"> Delete</button>
                            </td>
                        </tr>
        );
    }
}
export default Customer;