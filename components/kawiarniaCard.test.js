import React from 'reacr'; 
import {shallow} from 'enzyme';
import KawiarniaCard from './kawiarniaCard';
describe ('KawiarniaCard', () => {
    const mockItem ={ address: 'Gdynia'};

    it('renders correctly', () => {
        const {getByText} = render(<KawiarniaCard item={mockItem} />);
        expect(getByText('Okolica ${mockItem.address}')).toBeTruthy();
    });

    it ('displays correct text', () => {
        const wrapper = shallow(<KawiarniaCard />);
        expext(wrapper.find('Text').prop('children')).toEqual('Kawiarenka Test')
    });
});