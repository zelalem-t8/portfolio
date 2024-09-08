import React from "react";

function article_1() {
	return {
		date: "Jun 2022",
		title: "Amharic Language Visual Speech Recognition using Hybrid Features",
		description:
			"This study develops an Amharic visual speech recognition system for lip motion reading, using CNN and HOG for feature extraction. Videos of 14 words were recorded, and the combined features achieved 76.51% accuracy with random forest, surpassing previous methods.",
		keywords: [
			"CNN",
			"HOG",
			"Visual Speech Recognition",
			"Image Processing",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Read Full research</div>
					<a
						href="https://www.ajol.info/index.php/abjst/article/view/226940"
						target="_blank"
						rel="noreferrer"
					>
						{" "}
						here
					</a>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "Jan 2023",
		title: "Classification and Grading of Cataracts Using a Deep Convolutional Neural Network",
		description:
			"This study aims to classify and grade cataracts, considering the impact of eye color in the Ethiopian population. Using an experimental approach, the model achieved 74% accuracy with raw data, improving to 97% after preprocessing, and 99% accuracy in grading cataract severity.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Catatarct Classification",
			"CNN",
			"Cataract Grading",
		],
		body: (
			<React.Fragment>
				<h1>Read Full research</h1>
				<a
					href="https://abjol.org.et/index.php/ajec/article/view/810"
					target="_blank"
					rel="noreferrer"
				>
					here
				</a>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
