import React from 'react'
import './Card.css'

const Card = ({
	homeTeam,
	awayTeam,
	homeScore,
	awayScore,
	gameDate,
	homeLogo,
	awayLogo,
}) => {
	return (
		<div className='nba-card-container'>
			{/* Основное содержимое карточки */}
			<div className='nba-card'>
				<div className='team'>
					<div className='team-name'>{homeTeam}</div>
					<div className='team-score'>{homeScore}</div>
				</div>
				<div className='vs'>VS</div>
				<div className='team'>
					<div className='team-name'>{awayTeam}</div>
					<div className='team-score'>{awayScore}</div>
				</div>
				<div className='game-info'>
					<div className='game-date'>
						{new Date(gameDate).toLocaleDateString()}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card
