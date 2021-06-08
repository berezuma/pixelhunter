import React from 'react'
import { FiArrowDown } from 'react-icons/fi'
import css from './size.module.css'
import { SizeWithSrc } from '../../types'
import { getUrl, getSizeKey } from '../../helpers'

interface Props extends SizeWithSrc {
	compress: boolean
}

const Size: React.FC<Props> = props => {
	const url = getUrl(props.src, props.width, props.height, props.compress)
	const alt = getSizeKey(props)

	return (
		<div>
			<h2>
				{props.app} — {props.name}
			</h2>

			<div className={css.imageWrapper}>
				<img
					className={css.image}
					src={url}
					width={props.width}
					height={props.height}
					alt={alt}
				/>
				<div className={css.infoOverlay}>
					<div className={css.infoOverlayContent}>
						<p className={css.infoOverlayText}>
							PNG, {props.width}x{props.height}
						</p>
						<a
							className={css.download}
							href={url}
							target='_blank'
							rel='noreferrer'
							download={`${alt}.png`}
							aria-label={`Download ${alt}.png`}
							title={`Download ${alt}.png`}
						>
							<FiArrowDown aria-hidden={true} />
						</a>
					</div>
				</div>
				<div className={css.gradient} aria-hidden={true} />
			</div>
		</div>
	)
}

export default Size
