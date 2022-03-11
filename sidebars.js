/**
 * Creating a sidebar enables you to:
  - create an ordered group of docs
  - render a sidebar for each doc of that group
  - provide next/previous navigation

  The sidebars can be generated from the filesystem, or explicitly defined here.

  Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'intro',
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: { type: 'doc', id: 'developer-guide/README' },
      items: [
        {
          type: 'link',
          label: 'API',
          href: 'https://documenter.getpostman.com/view/1372857/UVeKqQMn',
        },
        {
          type: 'doc',
          label: 'CLI',
          id: 'developer-guide/cli',
        },
        {
          type: 'doc',
          label: 'Run a validator node',
          id: 'developer-guide/running-validating-node',
        },
        {
          type: 'doc',
          label: 'Run a non-validator node',
          id: 'developer-guide/running-non-validating-node',
        },
        {
          type: 'doc',
          label: 'Minimum requirements',
          id: 'developer-guide/minimum-requirements',
        },
        {
          type: 'category',
          label: 'Smart contract deploying',
          items: [
            {
              type: 'doc',
              label: 'Using Truffle',
              id: 'developer-guide/smart-contract-deploying/using-truffle',
            },
            {
              type: 'doc',
              label: 'Using Hardhat',
              id: 'developer-guide/smart-contract-deploying/using-hardhat',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Platform',
      link: { type: 'doc', id: 'platform/README' },
      items: [
        {
          type: 'category',
          label: 'Ronin Network',
          items: [
            {
              type: 'doc',
              label: 'Mainnet',
              id: 'platform/ronin-network/mainnet',
            },
            {
              type: 'doc',
              label: 'Testnet',
              id: 'platform/ronin-network/testnet',
            },
          ],
        },
        {
          type: 'link',
          label: 'Lite Paper',
          href: 'https://litepaper.roninchain.com/',
        },
        {
          type: 'doc',
          label: 'Comparison',
          id: 'platform/comparison',
        },
        {
          type: 'doc',
          label: 'Road Map',
          id: 'platform/road-map',
        },
        {
          type: 'doc',
          label: 'Tokenomic',
          id: 'platform/tokenomic',
        },
        {
          type: 'doc',
          label: 'Transaction life cycle',
          id: 'platform/transaction-lifecycle',
        },
      ],
    },
    {
      type: 'category',
      label: 'Components',
      link: { type: 'doc', id: 'components/README' },
      items: [
        {
          type: 'doc',
          label: 'Free Gas Proxy',
          id: 'components/free-gas-proxy',
        },
        {
          type: 'doc',
          label: 'Ronin Explorer',
          id: 'components/ronin-explorer',
        },
        {
          type: 'doc',
          label: 'Transfer Gateway and Bridge',
          id: 'components/transfer-gateway-bridge',
        },
        {
          type: 'doc',
          label: 'Validators',
          id: 'components/validators',
        },
      ],
    },
    {
      type: 'category',
      label: 'Flows',
      items: [
        {
          type: 'doc',
          label: 'Token transferring',
          id: 'flows/token-transfer-flow',
        },
        {
          type: 'doc',
          label: 'Update validator configs',
          id: 'flows/update-validator-configs-flow',
        },
      ],
    },
  ],
}

module.exports = sidebars