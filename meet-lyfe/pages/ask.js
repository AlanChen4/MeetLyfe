import { useEffect, useState } from "react";
import axios from "axios";
import Loading from '../components/Loading';
import Questions from "../components/Questions";
import Navbar from "../components/Navbar";


export default function Ask() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function getQuestions() {
      await axios.get('/api/questions/')
        .then((res) => {
          setQuestions(res.data);
        });
    }
    getQuestions();
  }, [])

  return (
    <div>
      <Navbar />
      {questions.length <= 0
        ? <Loading />
        : <Questions questions={questions} />
      }
    </div>
  )
}