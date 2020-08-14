var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './HelloWorld.module.scss';
import UserProfileTimes from './UserProfileTimes';
import jQuery from 'jquery';
// DO
import Button from '@material-ui/core/Button';
//import { Button } from '@material-ui/core';
// DONT
// const Material: any = require('@material-ui/core');
// import * as Material from '@material-ui/core'
// import '@material-ui/core'
var HelloWorld = /** @class */ (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorld.prototype.componentWillMount = function () {
        // let count = 10000;
        // while(count--) 
        // { 
        //   console.log("blocked");
        // }
    };
    HelloWorld.prototype.componentDidMount = function () {
        console.log(jQuery('#WebPart1').html());
        console.log(document.querySelector('#WebPart1'));
    };
    HelloWorld.prototype.render = function () {
        return (React.createElement("div", { className: styles.helloWorld, id: "WebPart1" },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement("span", { className: styles.title }, "Welcome to SharePoint!"),
                        React.createElement(Button, { variant: "contained", color: "secondary" }, "Secondary"),
                        React.createElement(UserProfileTimes, null))))));
    };
    return HelloWorld;
}(React.Component));
export default HelloWorld;
//# sourceMappingURL=HelloWorld.js.map