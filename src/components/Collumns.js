import React, { useState, useEffect, useRef } from 'react';

const Collumns = () => {
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
		<div className="collumns__comp">
			<div className="judicial">
				<div
					ref={ref}
					className={`slide-in-collumns ${isVisible ? 'visible' : ''}`}
				>
					Judicial Branch
				</div>
				<div className="collumn-j">
					The judicial branch of government is responsible for interpreting the
					laws and the Constitution and serving as a neutral party in legal
					disputes. It comprises of a system of federal and state courts, with
					the Supreme Court being the highest judicial authority. Judges and
					justices in the judicial branch are appointed or elected and hold
					office for an indefinite term, during which they make impartial
					decisions that can shape and affect society and individual rights. The
					Chief Justice of the Supreme Court is the head of the judicial branch
					and presides over the Court's sessions. The Chief Justice, along with
					the Associate Justices, serve as the ultimate arbiters of the law and
					their decisions have far-reaching impacts on American society and the
					global community. The judicial branch plays a crucial role in
					maintaining the balance of powers and ensuring that the laws are
					applied fairly and equally.
				</div>
			</div>

			<div className="executive">
				<div
					// className="executive__details"
					ref={ref}
					className={`slide-in-collumns ${isVisible ? 'visible' : ''}`}
				>
					Executive Branch
				</div>
				<div className="collumn-e">
					The executive branch of government is responsible for enforcing laws
					and policies and carrying out the day-to-day administration of the
					government. It is headed by the President, who serves as the Chief
					Executive and commander-in-chief of the armed forces. The President is
					elected to a four-year term and may serve a maximum of two terms. The
					Vice President, who is elected on the same ticket as the President,
					serves as the President's deputy and is next in line to assume the
					presidency in the event of a vacancy. The President is supported by a
					cabinet of advisors, who head various executive departments such as
					the Department of Defense, Department of State, and Department of
					Treasury. The cabinet members are appointed by the President and
					confirmed by the Senate. The executive branch also has the power to
					veto laws, grant pardons, and make executive orders. The primary role
					of the executive branch is to implement the laws and policies decided
					upon by the legislative branch and ensure the smooth functioning of
					the government.
				</div>
			</div>

			<div className="legislative">
				<div
					ref={ref}
					className={`slide-in-collumns ${isVisible ? 'visible' : ''}`}
				>
					Legislative Branch
				</div>
				<div className="collumn-l">
					The legislative branch of government is responsible for making laws.
					In the United States, it is comprised of two houses: the Senate and
					the House of Representatives. Members of the legislative branch are
					elected by the citizens and serve for a specified term. The Senate is
					comprised of two Senators from each state, while the number of
					Representatives is determined by the population of each state. The
					President of the Senate, also known as the Vice President of the
					United States, presides over the Senate, but does not have a vote
					except in the case of a tie. The Speaker of the House of
					Representatives presides over the House and is elected by its members.
					The legislative branch also has the power to approve Presidential
					nominations, approve treaties, and regulate commerce. The primary role
					of the legislative branch is to represent the citizens and make laws
					that reflect their needs and wants, while also ensuring the general
					welfare of the country.
				</div>
			</div>
		</div>
	);
};

export default Collumns;
