import { useNavigate } from 'react-router-dom'
import Button from '../button/Button'
import './Navbar.css'

const Navbar = () => {
	const navigate = useNavigate()

	const handleClickStats = () => {
		navigate('/games')
	}
	const handleClickHome = () => {
		navigate('/')
	}

	return (
		<div className='navbar'>
			<ul className='navbar-list'>
				<Button text='Home' onClick={handleClickHome} />
				<Button text='Stats' onClick={handleClickStats} />
				<Button text='About' />
			</ul>
		</div>
	)
}

export default Navbar
