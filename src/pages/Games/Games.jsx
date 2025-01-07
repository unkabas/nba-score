import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Card from '../../components/card/card'
import Navbar from '../../components/navbar/Navbar'
import api from '../../utils/api'
import './Games.css'

const teamLogos = {
	'Boston Celtics':
		'https://фк-лого.рф/wp-content/uploads/nba-boston-celtics.png',
	'Brooklyn Nets':
		'https://фк-лого.рф/wp-content/uploads/nba-brooklyn-nets.png',
	'New York Knicks':
		'https://фк-лого.рф/wp-content/uploads/nba-new-york-knicks.png',
	'Philadelphia 76ers':
		'https://фк-лого.рф/wp-content/uploads/nba-philadelphia-76-ers.png',
	'Toronto Raptors':
		'https://фк-лого.рф/wp-content/uploads/nba-toronto-raptors.png',
	'Chicago Bulls':
		'https://фк-лого.рф/wp-content/uploads/nba-chicago-bulls.png',
	'Detroit Pistons':
		'https://фк-лого.рф/wp-content/uploads/nba-detroit-pistons.png',
	'Indiana Pacers':
		'https://фк-лого.рф/wp-content/uploads/nba-indiana-pacers.png',
	'Milwaukee Bucks':
		'https://фк-лого.рф/wp-content/uploads/nba-milwaukee-bucks.png',
	'Atlanta Hawks':
		'https://фк-лого.рф/wp-content/uploads/nba-atlanta-hawks.png',
	'Charlotte Hornets':
		'https://фк-лого.рф/wp-content/uploads/nba-charlotte-hornets.png',
	'Dallas Mavericks':
		'https://фк-лого.рф/wp-content/uploads/nba-dallas-mavericks.png',
	'Memphis Grizzlies':
		'https://фк-лого.рф/wp-content/uploads/nba-memphis-grizzlies.png',
	'New Orleans Pelicans':
		'https://фк-лого.рф/wp-content/uploads/nba-new-orleans-pelicans.png',
	'San Antonio Spurs':
		'https://фк-лого.рф/wp-content/uploads/nba-san-antonio-spurs.png',
	'Golden State Warriors':
		'https://фк-лого.рф/wp-content/uploads/nba-golden-state-warriors.png',
	'Los Angeles Lakers':
		'https://фк-лого.рф/wp-content/uploads/nba-los-angeles-lakers.png',
	'Sacramento Kings':
		'https://фк-лого.рф/wp-content/uploads/nba-sacramento-kings.png',
	'Phoenix Suns': 'https://фк-лого.рф/wp-content/uploads/nba-phoenix-suns.png',
	'Denver Nuggets':
		'https://фк-лого.рф/wp-content/uploads/nba-denver-nuggets.png',
	'Utah Jazz': 'https://фк-лого.рф/wp-content/uploads/nba-utah-jazz.png',
	'Portland Trail Blazers':
		'https://фк-лого.рф/wp-content/uploads/nba-portland-trail-blazers.png',
	'Los Angeles Clippers':
		'https://фк-лого.рф/wp-content/uploads/nba-los-angeles-clippers.png',
	'Oklahoma City Thunder':
		'https://фк-лого.рф/wp-content/uploads/nba-oklahoma-city-thunder.png',
	'Minnesota Timberwolves':
		'https://фк-лого.рф/wp-content/uploads/nba-minnesota-timberwolves.png',
	'Houston Rockets':
		'https://фк-лого.рф/wp-content/uploads/nba-houston-rockets.png',
	'Miami Heat': 'https://фк-лого.рф/wp-content/uploads/nba-miami-heat.png',
	'Cleveland Cavaliers':
		'https://фк-лого.рф/wp-content/uploads/nba-cleveland-cavaliers.png',
	'Orlando Magic':
		'https://фк-лого.рф/wp-content/uploads/nba-orlando-magic.png',
	'Washington Wizards':
		'https://фк-лого.рф/wp-content/uploads/nba-washington-wizards.png',
}

const defaultLogo = 'https://via.placeholder.com/150'

const Games = () => {
	const [games, setGames] = useState([])
	const [loading, setLoading] = useState(true)
	const [backgroundLogos, setBackgroundLogos] = useState({
		homeLogo: '',
		awayLogo: '',
	})

	useEffect(() => {
		async function loadGames() {
			try {
				setLoading(true)
				const response = await api.nba.getGames({
					start_date: '2025-01-01',
					end_date: '2025-05-10',
				})
				console.log('Данные игр:', response.data)
				setGames(response.data.slice(0, 9))
			} catch (error) {
				console.error('Ошибка при загрузке игр:', error.message)
			} finally {
				setLoading(false)
			}
		}

		loadGames()
	}, [])

	const handleMouseEnter = (homeLogo, awayLogo) => {
		setBackgroundLogos({ homeLogo, awayLogo })
	}

	const handleMouseLeave = () => {
		setBackgroundLogos({ homeLogo: '', awayLogo: '' })
	}

	if (loading) {
		return <div>Loading...</div>
	}

	if (!games || games.length === 0) {
		return <div>Игр не найдено</div>
	}

	return (
		<div
			className='games-page'
			style={{
				backgroundImage: `url(${backgroundLogos.homeLogo}), url(${backgroundLogos.awayLogo})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: '30%, 30%',
				backgroundPosition: `calc(50% - 470px) center, calc(50% + 470px) center`,
				transition: 'background-image 0.3s ease',
			}}
		>
			<Navbar />
			<div className='games-grid'>
				{games.map(game => (
					<motion.div
						key={game.id}
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: 'easeOut' }}
						onMouseEnter={() =>
							handleMouseEnter(
								teamLogos[game.home_team.full_name] || defaultLogo,
								teamLogos[game.visitor_team.full_name] || defaultLogo
							)
						}
						onMouseLeave={handleMouseLeave}
					>
						<Card
							homeTeam={game.home_team.full_name}
							awayTeam={game.visitor_team.full_name}
							homeScore={game.home_team_score}
							awayScore={game.visitor_team_score}
							gameDate={game.date}
							homeLogo={teamLogos[game.home_team.full_name] || defaultLogo}
							awayLogo={teamLogos[game.visitor_team.full_name] || defaultLogo}
						/>
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default Games
