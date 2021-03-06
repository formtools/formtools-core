import React from 'react';
import styles from './Header.scss';

const Header = ({ constants }) => (
	<section className={styles.header}>
		<div className={styles.logo}>
			<a href="https://formtools.org">
				<img src={`${constants.rootUrl}/themes/default/images/logo_green2x.png`} border="0" width="220" height="67" />
			</a>
		</div>
		<div className={styles.version}>
			<img src={`${constants.rootUrl}/themes/default/images/account_section_left_green2x.png`} border="0" width="8" height="25" />
			<div className={styles.accountSection}>{constants.coreVersion}</div>
			<img src={`${constants.rootUrl}/themes/default/images/account_section_right_green2x.png`} border="0" width="8" height="25" />
		</div>
	</section>
);

export default Header;