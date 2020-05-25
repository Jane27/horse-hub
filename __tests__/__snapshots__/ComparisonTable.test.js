import { shallow } from 'enzyme';
import { CompareTItems } from '../../src/stories/ComparisonTable.stories'

describe('WithMenu', () => {
  it('Should 16 value in the table', () => {
    let output = shallow(CompareTItems());
    expect(output).toMatchSnapshot();
    console.log(output.debug())
    expect(output.find('value').first().text()).toEqual('Name');
    expect(output.find('value')).toHaveLength(16);
    expect(output.find('value').last().text()).toEqual('250');
  });
});

