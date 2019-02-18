import * as React from "react";

interface HeadingProps {
    title: string;
}

const Heading = (props: HeadingProps) => (
    <h2>{props.title}</h2>
);

export default Heading;