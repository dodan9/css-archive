import { CSSProperties, ReactNode } from "react";

const Box = ({
  style,
  children,
}: {
  style: CSSProperties;
  children?: ReactNode | ReactNode[];
}) => {
  return <div style={style}>{children}</div>;
};

export default Box;
