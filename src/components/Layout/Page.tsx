import React from "react";
import LeftSider from "./LeftSider";
import RightSider from "./RightSider";
import classes from "./Page.module.scss";

interface Props {}

interface State {}

export default class Page extends React.PureComponent<Props, State> {
    render() {
        return (
            <div>
                <div>
                    <h1>Whether App</h1>
                </div>
                <div className={classes["siders-wrapper"]}>
                    <LeftSider />
                    <RightSider />
                </div>
            </div>
        );
    }
}
