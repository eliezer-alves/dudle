
import { TopBar } from '../TopBar';
import { Body } from '../Body';
import { ReactNode } from 'react';

type BodyProps = {
  children?: ReactNode;
}

export function Page({ children }: BodyProps) {
  return (
    <>
      <TopBar/>
      <Body>
        {children}
      </Body>
    </>
  )
}