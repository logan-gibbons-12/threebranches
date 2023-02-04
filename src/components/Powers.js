import React from 'react'
import { useState, useRef, useEffect } from 'react'

const Powers = () => {

    const [jisVisible, setjIsVisible] = useState(false);
		const jref = useRef(null);

		useEffect(() => {
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setjIsVisible(true);
					} else {
						setjIsVisible(false);
					}
				});
			});
			observer.observe(jref.current);
			return () => observer.disconnect();
        }, []);
    
    const [eisVisible, seteIsVisible] = useState(false);
		const eref = useRef(null);

		useEffect(() => {
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						seteIsVisible(true);
					} else {
						seteIsVisible(false);
					}
				});
			});
			observer.observe(eref.current);
			return () => observer.disconnect();
        }, []);
    
    const [lisVisible, setlIsVisible] = useState(false);
		const lref = useRef(null);

		useEffect(() => {
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setlIsVisible(true);
					} else {
						setlIsVisible(false);
					}
				});
			});
			observer.observe(lref.current);
			return () => observer.disconnect();
		}, []);

	return (
	  
		<div className="powers__comp">
			<div className="judicial__powers">
				Judicial Powers
				<div className="jpowertext">
					<div
						ref={jref}
						className={`jpowerani ${jisVisible ? 'visible' : ''}`}
					>
						Judicial powers refer to the authority of the courts to interpret
						laws and make decisions in legal disputes. These powers include the
						power to interpret the Constitution, to hear and decide on cases
						related to laws and the Constitution, to review and potentially
						strike down laws that are deemed unconstitutional, and to enforce
						their own decisions through the use of contempt of court orders. The
						judicial branch serves as a check on the powers of the legislative
						and executive branches, and its powers are crucial for protecting
						individual rights, maintaining the rule of law, and resolving
						disputes in an impartial manner.
					</div>
				</div>
			</div>

			<div className="executive__powers">
				Executive Powers
				<div className="epowertext">
					<div
						ref={eref}
						className={`epowerani ${eisVisible ? 'visible' : ''}`}
					>
						Executive powers refer to the authority of the President and the
						executive branch to enforce laws and administer the government.
						These powers include the power to veto laws passed by Congress,
						appoint judges and federal officials, make executive agreements with
						foreign countries, serve as commander-in-chief of the armed forces,
						and issue executive orders and proclamations. The executive branch
						is responsible for executing the laws and policies decided upon by
						the legislative branch, and its powers are crucial for ensuring the
						efficient and effective functioning of the government. The President
						is also responsible for representing the country on the
						international stage and promoting its interests abroad.
					</div>
				</div>
			</div>

			<div className="legislative__powers">
				Legislative Powers
				<div className="lpowertext">
					<div
						ref={lref}
						className={`lpowerani ${lisVisible ? 'visible' : ''}`}
					>
						Legislative powers refer to the authority of the legislative branch
						to make laws. In the United States, this branch is comprised of the
						Senate and the House of Representatives. The legislative powers
						include the power to draft, debate, and pass bills, which, if signed
						by the President, become law. The legislative branch also has the
						power to approve Presidential nominations, approve treaties, and
						regulate commerce. The legislative branch serves as a representative
						of the citizens, making laws that reflect their needs and wants, and
						ensuring the general welfare of the country. These powers are
						crucial for ensuring that the government operates in a democratic
						and transparent manner, and for maintaining accountability and
						balance of power among the branches of government.
					</div>
				</div>
			</div>
		</div>
	);
}

export default Powers