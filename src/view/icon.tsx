import * as React from "react";
import feather from "feather-icons";
import styled from "styled-components";

const Container = styled.svg`
  margin-right: var(--tiny);
  opacity: 0.6;

  & line {
    stroke: var(--white);
  }
`;

interface Props {
  className?: string;
  name: string;
}

export function Icon({ className, name }: Props): React.FC {
  const source = feather.icons[name].toString();
  return (
    <Container
      className={className}
      dangerouslySetInnerHTML={{ __html: source }}
      height="24"
      width="24"
    />
  );
}
