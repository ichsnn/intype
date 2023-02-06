import CheckButton from './components/CheckButton';
import SkipButton from './components/SkipButton';
import WordBox from './components/WordBox';
import RestartButton from './components/RestartButton';
import ExitButton from './components/ExitButton';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { generateSentence } from '@/utils/generateSentence';
import { grammarQuestions } from '@/models/Questions';
import { formatDuration } from '@/utils/formatDuration';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import { apiPost } from '@/service/api';
import { toast } from 'react-toastify';
import { withAuth } from '@/hoc/auth';

interface WordBoxProps {
  word: string;
  isWrited: boolean;
}

const loadingDefault = true;
const timeToStartDefault = 3;
const totalDurationDefault = 60;
const durationDefault = totalDurationDefault;
const isPlayingDefault = false;
const scoreDefault = 0;
const randomWordsDefault: WordBoxProps[] = [];
const questionsDefault: grammarQuestions[] = [];
const currentQuestionDefault = '';
const isTimeOverDefault = false;

const StudentComposeGrammar = withAuth(() => {
  const answeredScore = 2;
  const answeredDuration = 0;

  const [loading, setLoading] = useState<boolean>(loadingDefault);
  const [timeToStart, setTimeToStart] = useState<number>(timeToStartDefault);
  const [totalDuration, setTotalDuration] =
    useState<number>(totalDurationDefault);
  const [duration, setDuration] = useState<number>(durationDefault);
  const [isPlaying, setIsPlaying] = useState<boolean>(isPlayingDefault);
  const [score, setScore] = useState<number>(scoreDefault);
  const [currentQuestion, setCurrentQuestion] = useState<string>(
    currentQuestionDefault
  );
  const [questions, setQuestions] =
    useState<grammarQuestions[]>(questionsDefault);
  const [randomWords, setRandomWords] =
    useState<WordBoxProps[]>(randomWordsDefault);
  const [isTimeOver, setIsTimeOver] = useState<boolean>(isTimeOverDefault);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSetDefault = async () => {
    setLoading(loadingDefault);
    setTimeToStart(timeToStartDefault);
    setTotalDuration(totalDurationDefault);
    setDuration(durationDefault);
    setIsPlaying(isPlayingDefault);
    setScore(scoreDefault);
    setCurrentQuestion(currentQuestionDefault);
    setQuestions(questionsDefault);
    setRandomWords(randomWordsDefault);
    setIsTimeOver(isTimeOverDefault);
    await handleGetSentence();
  };

  const handleGetSentence = async () => {
    try {
      const result = await generateSentence();
      const { choices } = result.data;
      if (choices.length > 0)
        if (choices[0].text) {
          const newSentence = choices[0].text.replace(/[^a-zA-Z ]/g, '');
          setCurrentQuestion(newSentence);
          setLoading(false);
        }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckAnswer = () => {
    if (checkIsAllWrited()) {
      if (inputRef.current && !isTimeOver) {
        const value = inputRef.current.value;
        console.log(currentQuestion);
        console.log(value);
        if (!value) return;
        if (value === currentQuestion) {
          setScore((prev) => prev + answeredScore);
          setDuration((prev) => prev + answeredDuration);
          setTotalDuration((prev) => prev + answeredDuration);
          inputRef.current.value = '';
          handleNextQuestion(true);
        }
      }
    }
  };

  const handleNextQuestion = async (isAnswered?: boolean) => {
    setQuestions((prev) => {
      return [
        ...prev,
        {
          sentence: currentQuestion,
          isAnswered: isAnswered || false,
        },
      ];
    });
    await handleGetSentence();
  };

  const separateWord = (sentence: string) => {
    // split the sentence into words
    const words = sentence.split(' ');
    // remove empty string
    const filteredWords = words.filter((word) => word !== '');
    // shuffle the words
    const shuffledWords = filteredWords.sort(() => Math.random() - 0.5);
    return shuffledWords;
  };

  const handleOnChangeAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const wordsValue = value.split(' ');
    // set isWrited to true if the word is writed
    const newWords = randomWords.map((data) => {
      const isWrited = wordsValue.includes(data.word);
      return { ...data, isWrited };
    });
    setRandomWords(newWords);
  };

  const checkIsAllWrited = () => {
    const isAllWrited = randomWords.every((data) => data.isWrited);
    return isAllWrited;
  };

  const handleSaveResult = async () => {
    try {
      const token = localStorage.getItem('access_token') as string;
      const response = await apiPost('/student/tests/composegrammar', {
        token,
        data: {
          duration: totalDuration,
          score: score,
          question: questions,
        },
      });
    } catch (error) {
      const { response } = error as any;
      toast(response.data.message, { type: 'error' });
    }
  };

  useEffect(() => {
    handleGetSentence();
  }, []);

  useEffect(() => {
    if (!loading) {
      if (timeToStart > -1) {
        setTimeout(() => {
          setTimeToStart(timeToStart - 1);
        }, 1000);
      } else {
        setIsPlaying(true);
      }
    }
  }, [loading, timeToStart]);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        if (duration > 0) {
          setDuration((prev) => prev - 1);
        } else {
          setIsTimeOver(true);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, duration]);

  useEffect(() => {
    const words = separateWord(currentQuestion);
    const newWords = words.map((word) => ({
      word,
      isWrited: false,
    }));
    setRandomWords(newWords);
  }, [currentQuestion]);

  useEffect(() => {
    if (questions.length > 0 && isTimeOver) {
      handleSaveResult();
    }
  }, [isTimeOver]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-4xl font-bold text-slate-700">
          Tunggu Sebentar...
        </div>
      </div>
    );
  }

  if (timeToStart > -1) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-7xl font-bold text-slate-700">
          {timeToStart > 0 ? timeToStart : 'Mulai'}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
        <div className="py-5 border-b text-slate-700 px-4 shadow-md sticky top-0 bg-white">
          <div className="max-w-7xl mx-auto flex justify-between relative">
            <ExitButton />
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-2xl font-extrabold">
              Tes Menyusun Grammar
            </div>
            <div className="flex divide-x divide-slate-700 items-center">
              <div className="pr-4 text-2xl font-semibold">{score}</div>
              <div className="flex pl-4 gap-4">
                <div className="text-2xl font-semibold">
                  {formatDuration(duration)}
                </div>
                <RestartButton handleReset={handleSetDefault} />
              </div>
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="max-w-7xl mx-auto">
            <ReactModal
              isOpen={isTimeOver}
              ariaHideApp={true}
              className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-sky-50 border-sky-200 border-2 p-10 rounded-2xl shadow-lg"
            >
              <div className="flex flex-col items-center justify-center h-full">
                <div>
                  <h2 className="text-3xl font-bold text-center">
                    Tes Menyusun Grammar Selesai
                  </h2>
                </div>
                <div className="mt-4 text-center space-y-2">
                  <h4 className="font-semibold text-xl">
                    Kamu Berhasil{' '}
                    <span className="font-bold">
                      Menjawab{' '}
                      {
                        questions.filter((question) => question.isAnswered)
                          .length
                      }{' '}
                      dari {questions.length} Soal
                    </span>
                  </h4>
                  <h4 className="text-xl font-semibold">
                    Akurasi Kamu{' '}
                    <span className="font-bold">
                      {(
                        (questions.filter((question) => question.isAnswered)
                          .length /
                          questions.length) *
                        100
                      ).toFixed(2)}
                      %
                    </span>
                  </h4>
                  <h3 className="text-2xl font-semibold">
                    Kamu Mendapatkan{' '}
                    <span className="font-bold">Skor {score}</span>
                  </h3>
                </div>
                <div className="mt-10 flex justify-between items-center gap-10 w-full">
                  <div>
                    <Link
                      to={'/student/test'}
                      className="font-semibold underline whitespace-nowrap"
                    >
                      Kembali ke Halaman Utama
                    </Link>
                  </div>
                  <div>
                    <Button
                      type="button"
                      label="Coba Lagi"
                      secondary
                      onClick={() => handleSetDefault()}
                    />
                  </div>
                </div>
              </div>
            </ReactModal>
            <div className="max-h-[200px] min-h-[200px] flex flex-wrap items-center justify-center overflow-hidden">
              <div className="flex flex-wrap gap-6 justify-center">
                {randomWords.map((data, index) => (
                  <WordBox
                    key={index}
                    word={data.word}
                    isWrited={data.isWrited}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center mt-5">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCheckAnswer();
                }}
              >
                <input
                  type="text"
                  title="answer"
                  className="text-4xl border-b border-slate-500 focus:outline-none"
                  height={160}
                  onChange={handleOnChangeAnswer}
                  autoFocus
                  ref={inputRef}
                />
              </form>
            </div>
          </div>
        </div>
        <div className="pb-4 pt-5 border-t border-black px-4 sticky bottom-0 left-0 w-full bg-white">
          <div className="flex justify-between max-w-7xl mx-auto relative">
            <div>
              <SkipButton handleSkipAnswer={handleNextQuestion} />
            </div>
            <div>
              <CheckButton
                handleCheckAnswer={handleCheckAnswer}
                disabled={!checkIsAllWrited()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default StudentComposeGrammar;
