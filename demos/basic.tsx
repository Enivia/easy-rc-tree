import React from 'react';
import Tree from '../src';

const treeData = [
  {
    key: '0-0',
    title: 'parent 1',
    children: [
      {
        key: '0-0-0',
        title: 'parent 1-1',
        children: [{ key: '0-0-0-0', title: 'parent 1-1-0' }],
      },
    ],
  },
];

const Basic = () => {
  return <Tree treeData={treeData} />;
};

export default Basic;