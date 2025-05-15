import { fetchMockQuestions, type ContentItem } from '@/mock/mockData';
import { computed, ref } from 'vue';

export interface UserResult {
	contentId: string;
	userGuess: boolean;
	isCorrect: boolean;
	timestamp: string;
}

interface Game {
	isPlaying: boolean;
	results: UserResult[];
	questions: ContentItem[];
	userAnswers: UserResult[];
	currentQuestionIndex: number;
}

const defaultGame: Game = {
	results: [],
	questions: [],
	userAnswers: [],
	isPlaying: false,
	currentQuestionIndex: 0,
};

export const useGame = () => {
	const error = ref<string | null>(null);

	const score = ref(0);

	const game = ref<Game>({
		results: [],
		questions: [],
		userAnswers: [],
		isPlaying: false,
		currentQuestionIndex: 0,
	});

	const currentGameAccuracy = computed(() => {
		if (game.value.userAnswers.length === 0) return 0;
		return (score.value / game.value.userAnswers.length) * 100;
	});

	function resetGame() {
		game.value = defaultGame;
	}

	function startGame() {
		resetGame();
		error.value = null;

		game.value.isPlaying = true;
		game.value.currentQuestionIndex = 0;
		game.value.questions = fetchMockQuestions(5);
	}

	function getNextQuestion() {
		const newIndex = game.value.currentQuestionIndex + 1;
		if (newIndex >= game.value.questions.length) {
			game.value.isPlaying = false;
		}

		game.value.currentQuestionIndex = newIndex;
		return game.value.questions[newIndex];
	}

	function answerQuestion(isAIGuess: boolean) {
		if (
			game.value.currentQuestionIndex >= game.value.questions.length ||
			!game.value.questions.length
		) {
			console.log('No more questions to answer');
			game.value.isPlaying = false;
			return;
		}

		const result: UserResult = {
			contentId: game.value.questions[game.value.currentQuestionIndex].id,
			userGuess: isAIGuess,
			isCorrect: isAIGuess === game.value.questions[game.value.currentQuestionIndex].isAI,
			timestamp: new Date().toISOString(),
		};

		game.value.userAnswers.push(result);
		game.value.currentQuestionIndex++;
	}

	function getResultMessage(): string {
		const percentage = currentGameAccuracy.value;

		if (percentage >= 80) {
			return "Impressive! You have a keen eye for detecting AI-generated content. You'd make an excellent digital media analyst.";
		} else if (percentage >= 60) {
			return "Good job! You can spot many AI tells, but some still slip past your radar. With practice, you'll get even better.";
		} else if (percentage >= 40) {
			return "Not bad, but there's room for improvement. Pay closer attention to unnatural patterns and inconsistencies in AI-generated content.";
		} else {
			return "Distinguishing AI from human content is challenging! Don't worry - this skill takes practice. Try again and look for subtle inconsistencies.";
		}
	}

	return {
		game,
		error,
		score,
		startGame,
		getNextQuestion,
		answerQuestion,
		resetGame,
		getResultMessage,
	};
};
