import { motion } from 'framer-motion'
import React from 'react'
import NBAlogo from '../../assets/NBAlogo.png'
import Navbar from '../../components/navbar/Navbar'
import './Home.css'

const Home = () => {
	return (
		<div>
			<motion.div
				initial={{ y: -300 }} // Начальное положение
				animate={{ y: -170 }} // Конечное положение
				transition={{ duration: 1, delay: 0, ease: 'easeOut' }}
			>
				<Navbar />
			</motion.div>
			<div className='content'>
				<motion.div
					initial={{ opacity: 0 }} // Начальное положение
					animate={{ opacity: 1 }} // Конечное положение
					transition={{ duration: 1.3, delay: 0, ease: 'easeOut' }}
				>
					<h1 className='title'>NBA Game Stats</h1>
				</motion.div>
				<div className='home'>
					<motion.div
						initial={{ x: -300 }} // Начальное положение
						animate={{ x: 0 }} // Конечное положение
						transition={{ duration: 1, delay: 0, ease: 'easeOut' }}
					>
						<p className='text1'>
							Welcome to the NBA Game Stats website! Here you will find the most
							up-to-date information on game results, player and team
							statistics. Click the button below to learn more about our
							website.
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }} // Начальное положение
						animate={{ opacity: 1 }} // Конечное положение
						transition={{ duration: 1.3, delay: 0, ease: 'easeOut' }}
					>
						<img className='logo' src={NBAlogo} alt='NBA Logo' />
					</motion.div>
					<motion.div
						initial={{ x: 300 }} // Начальное положение
						animate={{ x: 0 }} // Конечное положение
						transition={{ duration: 1, delay: 0, ease: 'easeOut' }}
					>
						<p className='text2'>
							This website was created by an enthusiast and is not intended for
							commercial use. It is a personal project driven by a passion for
							the NBA and statistics.
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }} // Начальное положение
						animate={{ opacity: 1 }} // Конечное положение
						transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
					></motion.div>
				</div>
			</div>
		</div>
	)
}

export default Home
