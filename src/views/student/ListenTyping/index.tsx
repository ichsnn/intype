import CheckButton from './components/CheckButton';
import ExitButton from './components/ExitButton';
import RestartButton from './components/RestartButton';
import SkipButton from './components/SkipButton';
import { useEffect, useRef, useState } from 'react';
import { apiGet, apiPost } from '@/service/api';
import { Word } from '@/models/Word';
import PlaySoundButton from './components/PlaySoundButton';
import { formatDuration } from '@/utils/formatDuration';
import { Questions } from '@/models/Questions';
import ReactModal from 'react-modal';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const loadingDefault = false;
const timeToStartDefault = 3;
const totalDurationDefault = 5;
const durationDefault = totalDurationDefault;
const isPlayingDefault = false;
const scoreDefault = 0;
const wordsDefault: Word[] = [];
const questionsDefault: Questions[] = [];
const currentQuestionDefault = '';
const isTimeOverDefault = false;

const StudentListenTyping = () => {
  const answeredScore = 2;
  const answeredDuration = 0;

  const [loading, setLoading] = useState(loadingDefault);
  const [timeToStart, setTimeToStart] = useState(timeToStartDefault);
  const [totalDuration, setTotalDuration] = useState(totalDurationDefault);
  const [duration, setDuration] = useState(durationDefault);
  const [isPlaying, setPlaying] = useState(isPlayingDefault);
  const [score, setScore] = useState(scoreDefault);
  const [words, setWords] = useState<Word[]>(wordsDefault);
  const [questions, setQuestions] = useState<Questions[]>(questionsDefault);
  const [currentQuestion, setCurrentQuestion] = useState(
    currentQuestionDefault
  );
  const [isTimeOver, setIsTimeOver] = useState(isTimeOverDefault);
  const speech = new SpeechSynthesisUtterance();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSetDefault = () => {
    setLoading(loadingDefault);
    setTimeToStart(timeToStartDefault);
    setTotalDuration(totalDurationDefault);
    setDuration(durationDefault);
    setPlaying(isPlayingDefault);
    setScore(scoreDefault);
    setWords(wordsDefault);
    setQuestions(questionsDefault);
    setCurrentQuestion(currentQuestionDefault);
    setIsTimeOver(isTimeOverDefault);
    getAllWorlds();
  };

  const handlePlayAudio = (text?: string) => {
    speech.text = text || currentQuestion;
    speechSynthesis.speak(speech);
  };

  const handleSubmitAnswer = () => {
    if (inputRef.current && isTimeOver === false) {
      const answer = inputRef.current.value;
      if (!answer) return;
      if (!currentQuestion) return;
      if (answer === currentQuestion) {
        setScore((prev) => prev + answeredScore);
        setDuration((prev) => prev + answeredDuration);
        setTotalDuration((prev) => prev + answeredDuration);
        inputRef.current.value = '';
        handleNextQuestion(true);
      }
    }
  };

  const handleNextQuestion = (isAnswered?: boolean) => {
    speechSynthesis.cancel();
    setQuestions((prev) => {
      return [
        ...prev,
        {
          word: currentQuestion,
          isAnswered: isAnswered || false,
        },
      ];
    });
    handleRandomQuestion();
  };

  const handleRandomQuestion = () => {
    const randomWords = words[Math.floor(Math.random() * words.length)];
    setCurrentQuestion(randomWords.word);
    handlePlayAudio(randomWords.word);
  };

  const getAllWorlds = async () => {
    try {
      const { data } = await apiGet('/words', {});
      setWords(data);
      setTimeout(() => {
        setLoading(false);
      }, 0);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveResult = async () => {
    try {
      const token = localStorage.getItem('access_token') as string;
      const response = await apiPost('/student/tests/listentyping', {
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
    getAllWorlds();
  }, []);

  useEffect(() => {
    if (words.length > 0 && isPlaying) handleRandomQuestion();
  }, [words, isPlaying]);

  useEffect(() => {
    if (!loading) {
      if (timeToStart > -1) {
        setTimeout(() => {
          setTimeToStart(timeToStart - 1);
        }, 1000);
      } else {
        setPlaying(true);
      }
    }
  }, [loading, timeToStart]);

  useEffect(() => {
    if (questions.length > 0 && isTimeOver) {
      handleSaveResult();
    }
  }, [isTimeOver]);

  // crate countdown until 0 and fix effect when add time to countdown
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
              Tes Mendengar & Mengetik
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
          <ReactModal
            isOpen={isTimeOver}
            ariaHideApp={true}
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-sky-50 border-sky-200 border-2 p-10 rounded-2xl shadow-lg"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div>
                <h2 className="text-3xl font-bold text-center">
                  Tes Mendengar & Mengetik Berakhir!
                </h2>
              </div>
              <div className="mt-4 text-center space-y-2">
                <h4 className="font-semibold text-xl">
                  Kamu Berhasil{' '}
                  <span className="font-bold">
                    Menjawab{' '}
                    {questions.filter((question) => question.isAnswered).length}{' '}
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
          <div className="max-w-7xl mx-auto">
            <PlaySoundButton handlePlayAudio={handlePlayAudio} />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmitAnswer();
              }}
              className="flex items-center justify-center mt-10"
            >
              <input
                type="text"
                title="answer"
                className="text-4xl border-b border-slate-500 focus:outline-none"
                height={160}
                autoFocus
                ref={inputRef}
              />
            </form>
          </div>
        </div>
        <div className="pb-4 pt-5 border-t border-black px-4 sticky bottom-0 left-0 w-full bg-white">
          <div className="flex justify-between max-w-7xl mx-auto relative">
            <div>
              <SkipButton handleSkipAnswer={handleNextQuestion} />
            </div>
            <div>
              <CheckButton handleSubmitAnswer={handleSubmitAnswer} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StudentListenTyping;
