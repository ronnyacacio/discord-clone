import styled from 'styled-components';

import { Props } from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 24px;

  margin-bottom: 8px;

  background-color: ${({ isHome }) =>
    isHome ? 'var(--rocketseat)' : 'var(--primary)'};

  position: relative;

  cursor: pointer;

  > img {
    width: 24px;
    height: 24px;
  }

  transition: border-radius 0.2s, background-color 0.2s;

  &::before {
    width: 9px;
    height: 9px;
    border-radius: 50%;

    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);

    background-color: var(--white);

    display: ${({ hasNotifications }) =>
      hasNotifications ? 'inline' : 'none'};

    content: '';
  }

  &::after {
    width: auto;
    height: 16px;
    border-radius: 12px;
    border: 4px solid var(--quaternary);

    padding: 0 4px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    background-color: var(--notification);

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    display: ${({ mentions }) =>
      mentions && mentions > 0 ? 'inline' : 'none'};
    content: '${({ mentions }) => mentions && mentions}';
  }

  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${({ isHome }) =>
      isHome ? 'var(--rocketseat)' : 'var(--discord)'};
  }
`;
