import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Container } from 'components/Container';

interface Social {
  icon: ReactNode;
  to: string;
}

interface FooterProps {
  social: Social[];
}

const FooterRoot = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 40px 0;
  border-bottom: 10px solid #4d4d4d;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  margin-left: 30px;
  transition: 200ms opacity ease-in-out;
  &:hover {
    opacity: 0.5;
  }
`;

export const Footer = ({ social }: FooterProps) => (
  <FooterRoot>
    <Container>
      <Content>
        <List>
          {social.map((item) => (
            <ListItem key={item.to}>
              <a href={item.to} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  </FooterRoot>
);
