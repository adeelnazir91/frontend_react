import {render,screen,cleanup} from '@testing-library/react'
import MedicSpotSearchBar from '../MedicSpotSearchBar'


test( 'should render MedicSpotSearchBar component', () => {
    render(<MedicSpotSearchBar/>)
    const medicspotElement = screen.getByTestId('medicspot-test')
    expect(medicspotElement).toBeInTheDocument()
})