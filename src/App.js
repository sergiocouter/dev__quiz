import React, { useState } from 'react';


export default function App() {
    const questions = [
        {
            questionText: 'Qual propriedade altera o tamanho da fonte no css?',
            answerOptions: [
                { answerText: 'font-family', isCorrect: false },
                { answerText: 'font-wight', isCorrect: false },
                { answerText: 'font-size', isCorrect: true },
                { answerText: 'font-color', isCorrect: false },
            ],
        },
        {
            questionText: 'Qual Tag indica um quebra de linha no Html?',
            answerOptions: [
                { answerText: '<h1>', isCorrect: false },
                { answerText: '<br>', isCorrect: true },
                { answerText: '<img>', isCorrect: false },
                { answerText: '<strong>', isCorrect: false },
            ],
        },
        {
            questionText: 'Como fazer uma condicional no Javascript?',
            answerOptions: [
                { answerText: 'Através do "if"', isCorrect: true },
                { answerText: 'Através do "for"', isCorrect: false },
                { answerText: 'Através do "while"', isCorrect: false },
                { answerText: 'Através do "document"', isCorrect: false },
            ],
        },
        {
            questionText: 'Como criar variáveis no css?',
            answerOptions: [
                { answerText: 'Através do ":loop{}"', isCorrect: false },
                { answerText: 'Através do "--root{}"', isCorrect: false },
                { answerText: 'Através do "--loop{}"', isCorrect: false },
                { answerText: 'Através do ":root{}"', isCorrect: true },
            ],
        },
        {
            questionText: 'Qual dessas tags não é semântica?',
            answerOptions: [
                { answerText: '<main>', isCorrect: false },
                { answerText: '<header>', isCorrect: false },
                { answerText: '<footer>', isCorrect: false },
                { answerText: '<div>', isCorrect: true },
            ],
        },
        {
            questionText: 'Em qual declaração as variávei não podem ser reatribuídas?',
            answerOptions: [
                { answerText: 'As variáveis de "const"', isCorrect: true },
                { answerText: 'As variáveis de "let"', isCorrect: false },
                { answerText: 'As variáveis de "var"', isCorrect: false },
                { answerText: 'As variáveis de "if"', isCorrect: false },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0);

    const handleAnswerButtonClick = (isCorrect) =>{
        if(isCorrect === true){
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        } else{
            setShowScore(true);
        }
    }


    return (
        <div className='app'>
            {/* HINT: substitua "falso" pela lógica para exibir o
       pontuação quando o usuário respondeu a todas as perguntas
 */}
            {showScore ? (
                <div className='score-section'>Você acertou {score} de um total {questions.length}</div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion+1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                        <button onClick={()=> handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>))}
                    </div>
                </>
            )}
        </div>
    );
}
