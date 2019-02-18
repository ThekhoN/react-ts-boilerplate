import * as React from "react";
import "./style.scss";

interface HeadingProps {
    title: string;
}

const Heading = (props: HeadingProps) => (
    <h2 className="heading">{props.title}</h2>
);

export default Heading;