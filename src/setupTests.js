import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// Enzyme has multiple adapters depending on which React version you are using (e.g. if you were using React 15, then you would add the enzyme-adapter-react-15)

// Jest used to not provide requestAnimationFrame, but now it does
configure({ adapter: new Adapter() })
