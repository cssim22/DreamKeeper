import React, { Component } from "react";
// import { render } from "react-dom";

class DreamCreate extends Component {
	render() {
		console.log("dreamSubmit in dreamCreate", this.props.onSubmit);
		const {onSubmit} = this.props;
    
    return (
			<div>
				<form onSubmit={onSubmit}>
					<label>Dream Title:</label>
					<input name="title"/>
					<br />
					<label>Dream Description:</label>
					<br />
					<textarea name="details" rows="15" cols="50"/>
					<br />
          <label>Dream Type:</label>
					<br />
					<input name ="label"/>
          <br/><br/>
					<input type="submit" value="Submit"></input>
				</form>
			</div>
		);
	}
}

export default DreamCreate;
