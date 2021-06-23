import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import {Home} from "./Pages/Home/Home";
import {Quiz} from "./Pages/Quiz/Quiz";
import {Result} from "./Pages/Result/Result";

function App() {
  const [name, setName] = useState("")
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
          <Route path="/Quiz-App-ReactJs" exact>
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path="/Quiz-App-ReactJs/quiz">
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>
          <Route path="/Quiz-App-ReactJs/result">
            <Result 
            // name={name} score={score} 
            />
          </Route>
        </Switch>
     
     </div>



    </BrowserRouter>
    
  );
}


export default App;