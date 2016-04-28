var { element } = require('deku');
var branch = require('../../core/branch');
var Header = require('../../components/header/component.jsx');
var Footer = require('../../components/footer/component.jsx');

const MAPPING = {
  header: Header,
  footer: Footer
};

module.exports = branch({
  components: ['page', 'components']
}, {
  render: ({ props }) => {
    var components = props.components || [];

    return (
      <div>
        {components.map(name => {
          var Component = MAPPING[name];
          return (
            <Component />
          )
        })}
      </div>
    )
  }
});
