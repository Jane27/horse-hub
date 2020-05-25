import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import { ComparisonTable } from '../components';

export default {
  title: 'ComparisonTable',
  decorators: [withKnobs],
  component: ComparisonTable,
};

const fields = [
  {
    label: "Name",
    path: "name",
  },
  {
    label: "Favourite Food",
    path: "profile.favouriteFood",
  },
  {
    label: "Height",
    path: "profile.physical.height",
  },
  {
    label: "Weight",
    path: "profile.physical.weight",
  },
];

const options = [
  {
    name: "Red boy",
    profile: {
      favouriteFood: "apple",
      physical: {
        height: 300,
        weight: 60
      }
    }
  },
  {
    name: "Purple girl",
    profile: {
      favouriteFood: "orange",
      physical: {
        height: 70,
        weight: 250
      }
    }
  },
  {
    name: "Green girl",
    profile: {
      favouriteFood: "orange",
      physical: {
        height: 70,
        weight: 250
      }
    }
  }
]




export const CompareTItems = () => {
  const horse = object ("horse", options)
  const compareFields = object ("compareFields", fields)

return <ComparisonTable fields={compareFields} items={horse} />};


