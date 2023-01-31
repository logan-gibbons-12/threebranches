import React, { useState, useEffect, useRef } from 'react';

const Theses = () => {
     const [isVisible, setIsVisible] = useState(false);
			const ref = useRef(null);

			useEffect(() => {
				const observer = new IntersectionObserver((entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							setIsVisible(true);
						} else {
							setIsVisible(false);
						}
					});
				});
				observer.observe(ref.current);
				return () => observer.disconnect();
			}, []);

	return (
		<div className="theses__comp">
			<div ref={ref} className={`slide-in ${isVisible ? 'visible' : ''}`}>
				"The three branches of the us government each hold thier own great
				power, but when used together the power is much stronger." -Logan
				Gibbons
			</div>
		</div>
	);
};

export default Theses;
