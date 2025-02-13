import type { Meta, StoryFn } from '@storybook/react';

import {
  ChatIcon,
  EnvelopeClosedFillIcon,
  HeartFillIcon,
  InboxIcon,
  PencilIcon,
  VideoFillIcon,
  VideoIcon,
} from '@navikt/aksel-icons';
import { Button } from '../Button';
import { Tabs } from '../Tabs';
import { Badge } from './';

type Story = StoryFn<typeof Badge>;

const meta: Meta<typeof Badge> = {
  title: 'Komponenter/Badge',
  component: Badge,
};

export default meta;

export const Preview: Story = (args) => <Badge {...args} />;

Preview.args = {
  count: 15,
  maxCount: 9,
};

export const Floating: Story = (args) => (
  <div
    style={{
      display: 'flex',
      gap: 'var(--ds-size-6)',
    }}
  >
    <Badge.Position placement='top-right'>
      <Badge data-color='accent'></Badge>
      <EnvelopeClosedFillIcon title='Meldinger' />
    </Badge.Position>
    <Badge.Position placement='top-left'>
      <Badge data-color='accent'></Badge>
      <EnvelopeClosedFillIcon title='Meldinger' />
    </Badge.Position>
    <Badge.Position placement='bottom-right'>
      <Badge data-color='accent'></Badge>
      <EnvelopeClosedFillIcon title='Meldinger' />
    </Badge.Position>
    <Badge.Position placement='bottom-left'>
      <Badge data-color='accent'></Badge>
      <EnvelopeClosedFillIcon title='Meldinger' />
    </Badge.Position>
    <Badge.Position placement='top-right' overlap='circle'>
      <Badge data-color='accent'></Badge>
      <div
        style={{
          width: '2rem',
          height: '2rem',
          borderRadius: '50%',
          backgroundColor: 'var(--ds-color-brand2-base-default)',
        }}
      />
    </Badge.Position>
    <Badge.Position placement='top-left' overlap='circle'>
      <Badge data-color='accent'></Badge>
      <div
        style={{
          width: '2rem',
          height: '2rem',
          borderRadius: '50%',
          backgroundColor: 'var(--ds-color-brand2-base-default)',
        }}
      />
    </Badge.Position>
    <Badge.Position placement='bottom-right' overlap='circle'>
      <Badge data-color='accent'></Badge>
      <div
        style={{
          width: '2rem',
          height: '2rem',
          borderRadius: '50%',
          backgroundColor: 'var(--ds-color-brand2-base-default)',
        }}
      />
    </Badge.Position>
    <Badge.Position placement='bottom-left' overlap='circle'>
      <Badge data-color='accent'></Badge>
      <div
        style={{
          width: '2rem',
          height: '2rem',
          borderRadius: '50%',
          backgroundColor: 'var(--ds-color-brand2-base-default)',
        }}
      />
    </Badge.Position>
  </div>
);

export const CustomPlacement: Story = (args) => (
  <div
    style={{
      display: 'flex',
      gap: 'var(--ds-size-6)',
    }}
  >
    <Badge.Position
      placement='top-right'
      style={{
        top: '16%',
        right: '10%',
      }}
    >
      <Badge data-color='accent'></Badge>
      <EnvelopeClosedFillIcon title='Meldinger' />
    </Badge.Position>
  </div>
);

export const Status: Story = (args) => (
  <div
    style={{
      display: 'flex',
      gap: 'var(--ds-size-4)',
    }}
  >
    <Badge.Position data-size='sm'>
      <Badge data-color='danger' />
      <VideoFillIcon title='Videokamera' />
    </Badge.Position>
    <Badge.Position data-size='md'>
      <Badge data-color='danger' />
      <VideoFillIcon title='Videokamera' />
    </Badge.Position>
    <Badge.Position data-size='lg'>
      <Badge data-color='danger' />
      <VideoFillIcon title='Videokamera' />
    </Badge.Position>
  </div>
);

export const InTabs: Story = (args) => (
  <Tabs defaultValue='value1'>
    <Tabs.List>
      <Tabs.Tab value='value1'>
        <HeartFillIcon aria-hidden />
        Favoritter
        <Badge count={64} maxCount={10} data-color='neutral' />
      </Tabs.Tab>
      <Tabs.Tab value='value2'>Tab 2</Tabs.Tab>
      <Tabs.Tab value='value3'>
        <PencilIcon aria-hidden />
        Nylige
        <Badge count={2} data-color='neutral' />
      </Tabs.Tab>
    </Tabs.List>
    <Tabs.Panel value='value1'>content 1</Tabs.Panel>
    <Tabs.Panel value='value2'>content 2</Tabs.Panel>
    <Tabs.Panel value='value3'>content 3</Tabs.Panel>
  </Tabs>
);

export const InButton: Story = (args) => (
  <div
    style={{
      display: 'flex',
      gap: 'var(--ds-size-4)',
    }}
  >
    <Button icon variant='tertiary'>
      <Badge.Position>
        <Badge data-color='danger' count={1000} maxCount={99} />
        <InboxIcon title='Innboks' />
      </Badge.Position>
    </Button>
    <Button icon variant='tertiary'>
      <Badge.Position>
        <Badge data-color='danger' count={10} />
        <ChatIcon title='Meldinger' />
      </Badge.Position>
    </Button>
    <Button icon variant='tertiary'>
      <Badge.Position>
        <Badge data-color='danger'></Badge>
        <VideoIcon title='Skru på video' />
      </Badge.Position>
    </Button>
  </div>
);

const VariantsMap: {
  [key: string]: { [key: string]: string };
} = {
  neutralBase: {
    'data-color': 'neutral',
  },
  neutralTinted: {
    'data-color': 'neutral',
    'data-variant': 'tinted',
  },
  dangerBase: {
    'data-color': 'danger',
  },
  dangerTinted: {
    'data-color': 'danger',
    'data-variant': 'tinted',
  },
  infoBase: {
    'data-color': 'info',
  },
  infoTinted: {
    'data-color': 'info',
    'data-variant': 'tinted',
  },
  warningBase: {
    'data-color': 'warning',
  },
  warningTinted: {
    'data-color': 'warning',
    'data-variant': 'tinted',
  },
};

export const Variants: Story = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--ds-size-2)',
      height: '100%',
      width: '100%',
    }}
  >
    {Object.entries(VariantsMap).map(([key, value]) => (
      <Badge key={key} {...value} count={15} maxCount={9} />
    ))}
  </div>
);
