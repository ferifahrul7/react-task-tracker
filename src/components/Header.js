import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
	
const klikMas = (e) => {
	alert('awokawok2');
}
	return (
		<header className="flex flex-row justify-between p-8">
			<h1>{title}</h1>
			<Button color="blue" text="Hello" onClick={klikMas}></Button>
		</header>
	)
}

Header.defaultProps ={
	title : 'Task Tracker',
}
Header.propTypes = {
	title : PropTypes.string.isRequired,
}
// css in js
// eslint-disable-next-line
const headingStyle = {color:'blue',backgroundColor:'black'}
export default Header