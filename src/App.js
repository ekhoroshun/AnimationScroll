import React, { Component } from "react";
import WOW from "wowjs";

class App extends Component {
	componentDidMount() {
		new WOW.WOW({
			live: false
		}).init();
	}

	render() {
		return (
			<div className="container-fluid mx-0 px-0">
				<div className="d-flex justify-content-center align-content-center wow bounceInDown container pt-5 pb-5 px-5">
					<h1>Hello, my name is Elena 👩🏻‍💻</h1>
				</div>
				<div className="d-flex justify-content-center align-content-center lines">
					<div className="line1 wow slideInLeft" />
					<div className="line2 wow slideInRight" />
				</div>
				<div
					className="d-flex justify-content-center align-content-center  wow slideInLeft container pt-5 px-5"
					data-wow-duration="1s"
					data-wow-delay="1s"
				>
					<h2>And I am a web developer</h2>
				</div>
				<div
					className="d-flex justify-content-center align-content-center  wow slideInRight py-2 px-5"
					data-wow-delay="1s"
				>
					<h3>Here is my scroll animation. Hope you will like it!</h3>
				</div>
				<div
					className="container arrow wow rotateInDownRight"
					data-wow-duration="1s"
					data-wow-delay="2s"
				>
					<i class="fas fa-arrow-down" />
				</div>

				<div
					className="wow fadeIn background"
					data-wow-offset="50"
					data-wow-duration="4s"
				>
					<div className="d-flex justify-content-center align-content-center box-holder">
						<ul className="list-unstyled list-inline">
							<li className="list-inline-item box4">
								<i
									class="fas fa-heart-broken wow slideInLeft"
									data-wow-offset="300"
									data-wow-duration="1s"
								/>
							</li>
							<li className="list-inline-item box1 wow zoomIn" />
							<li className="list-inline-item box2 wow zoomIn ">
								<div className="heart">
									<i
										class="fas fa-heart wow fadeInDown"
										data-wow-offset="300"
										data-wow-duration="1s"
									/>
								</div>
							</li>

							<li className="list-inline-item box3 wow zoomIn" />
							<li className="list-inline-item box5">
								<i
									class="fas fa-heart-broken  wow slideInRight"
									data-wow-offset="300"
									data-wow-duration="1s"
								/>
							</li>
						</ul>
					</div>
					<div className="d-flex justify-content-center star-holder">
						<div className="left-star">
							<i class="fas fa-star wow zoomInLeft" data-wow-offset="200" />
						</div>
						<div className="">
							<i class="fas fa-star wow slideInLeft" data-wow-offset="200" />
						</div>
						<div className="middle-star">
							<i class="fas fa-star wow tada" data-wow-iteration="infinite" />
						</div>
						<div className="right-star">
							<i class="fas fa-star wow slideInRight" data-wow-offset="200" />
						</div>
						<div className="">
							<i
								class="fas fa-star wow hinge zoomInRight"
								data-wow-offset="200"
							/>
						</div>
					</div>
					<div className="d-flex justify-content-center align-content-center cards-holder">
						<ul className="list-unstyled list-inline">
							<li
								className="list-inline-item card1 wow fadeInLeft"
								data-wow-offset="200"
								data-wow-iteration="infinite"
							/>
							<li
								className="list-inline-item card1 wow fadeInUp"
								data-wow-offset="200"
								data-wow-iteration="infinite"
							/>
							<li
								className="list-inline-item card1 wow fadeInRight"
								data-wow-offset="200"
								data-wow-iteration="infinite"
							/>
							<li
								className="list-inline-item card1 wow fadeInDown"
								data-wow-offset="200"
								data-wow-iteration="infinite"
							/>
							<li
								className="list-inline-item card1 wow bounceOut"
								data-wow-offset="200"
								data-wow-iteration="infinite"
							/>
						</ul>
					</div>

					<div className="d-flex justify-content-center align-content-center another-heart">
						<i
							class="fas fa-heart wow pulse"
							data-wow-offset="200"
							data-wow-iteration="infinite"
						/>
					</div>
					<div className="d-flex justify-content-center align-content-center bottom">
						<h1> Have a wonderful day! :) 🕺🏼 </h1>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
