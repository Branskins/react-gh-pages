import React, { Component } from 'react'
import PropTypes from 'prop-types';

// It requires and returns all modules that match
function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

// It contains references to all modules in that ./content directory
const mdxContextModule = requireAll(
  require.context(
    '!babel-loader!@mdx-js/loader!./content',
    false,
    /^\.\/.*\.mdx$/
  )
);

// It extracts the MDX component and creates an object to create children in JSX
const mdxComponents = mdxContextModule.map((mdx, index) => {
  return { key: index, component: mdx.default }
})

console.log(mdxComponents);

// It renders every module in the ./content directory
class Item extends React.Component {
  render() {
    const MdxComponent = this.props.component;
    return <div><MdxComponent /></div>;
  }
}

Item.propTypes = {
  component: PropTypes.func,
}

export default class Works extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Works</h1>
        { mdxComponents.map((mdx) => <Item key={mdx.key} component={mdx.component} />)}
      </div>
    )
  }
}
