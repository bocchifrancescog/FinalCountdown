import React from "react";

function Footer(props){

    return (
      <div className="ui bottom fixed menu large one item">
        <div className="item">
          {props.children}
        </div>
      </div>
    );
};
export default Footer;
