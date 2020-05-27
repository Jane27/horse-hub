import { shallow } from 'enzyme';
import { simple } from '../../src/stories/Pagination.stories'

describe('pagination', () => {
  it('Should have previous , next button, the first number button is active', () => {
    let output = shallow(simple());
    expect(output).toMatchSnapshot();
    expect(output.find('button').first().text()).toEqual('Previous');
    expect(output.find('NumberButton')).toHaveLength(5);
    expect(output.find('NumberButton').first().props().active).toEqual(true);
    expect(output.find('NumberButton').last().props().active).toEqual(false);
    expect(output.find('button').last().text()).toEqual('Next');
  });
});

