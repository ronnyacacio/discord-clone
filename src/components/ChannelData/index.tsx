import React, { useRef, useEffect } from 'react';

import { ChannelMessage } from '..';
import { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>
        {Array.from(Array(10).keys()).map(n => (
          <ChannelMessage
            author="Ronny Acácio"
            date="17/06/2020"
            content="Isso é uma mensagem."
          />
        ))}

        <ChannelMessage
          author="Thiago Marinho"
          date="17/06/2020"
          content={
            <>
              <Mention>@Ronny Acácio</Mention>, isso é uma mensagem do bot
            </>
          }
          isBot
          hasMention
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;