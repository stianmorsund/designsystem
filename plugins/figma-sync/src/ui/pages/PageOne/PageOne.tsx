/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Heading,
  Paragraph,
  ToggleGroup,
  Textarea,
  Button,
  Link,
  Spinner,
} from '@digdir/designsystemet-react';
import React, { useEffect, useState } from 'react';

function PageOne() {
  const [jsonText, setJsonText] = useState('');
  const [mode, setMode] = useState('light');
  const [errorText, setErrorText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState('Oppdater variabler');
  useEffect(() => {
    window.onmessage = (event: {
      data: { pluginMessage: { type: string; message: string } };
    }) => {
      const { type, message } = event.data.pluginMessage;
      if (type === 'create-rectangles') {
        console.log(`Figma Says: ${message}`);
      }
    };
  }, []);

  const isValidJson = (str: string) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    if (isLoading) {
      return;
    }
    if (jsonText === '') {
      setErrorText('Dette feltet er påkrevd.');
      return;
    }

    if (!isValidJson(jsonText)) {
      setErrorText('Ugyldig JSON, prøv å kopier og lim inn på nytt.');
      setJsonText('');
      return;
    }

    parent.postMessage(
      { pluginMessage: { type: 'update-variables', text: jsonText, mode } },
      '*',
    );

    setButtonText('Oppdaterer...');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setButtonText('Oppdater variabler');
    }, 6000);
  };
  return (
    <div className='content'>
      <div className='content'>
        <Heading
          className='heading'
          size='2xs'
        >
          Oppdater fargetema
        </Heading>

        <Paragraph
          size='sm'
          className='paragraph'
        >
          Oppdater fargene i Core UI Kit via designsystemet sin temagenerator.
          Gå inn på{' '}
          <Link
            target='_blank'
            href='https://theme.designsystemet.no/'
          >
            theme.designsystemet.no
          </Link>{' '}
          og lag temaet ditt, velg mode og lim inn JSON i feltet under.
        </Paragraph>

        <ToggleGroup
          className='modes'
          defaultValue='light'
          name='toggle-group-nuts'
          size='sm'
          onChange={(e) => setMode(e)}
        >
          <ToggleGroup.Item value='light'>Light Mode</ToggleGroup.Item>
          <ToggleGroup.Item value='dark'>Dark Mode</ToggleGroup.Item>
          {/* <ToggleGroup.Item value='contrast'>Contrast</ToggleGroup.Item> */}
        </ToggleGroup>
        <Textarea
          className='textarea'
          cols={40}
          rows={7}
          placeholder='Lim inn JSON her'
          description=''
          error={errorText}
          label='JSON'
          size='sm'
          value={jsonText}
          onChange={(e) => setJsonText(e.target.value)}
        />
        <Button
          onClick={() => onSubmit()}
          size='sm'
        >
          {isLoading && (
            <Spinner
              color='accent'
              title='loading'
              size='xs'
            />
          )}
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

export default PageOne;
