import React, { useEffect, useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/clike/clike";

import "../styles/creator.css";

const Creator = () => {
  // const [name, setName] = useState("");
  const [diff, setDiff] = useState(0);

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    console.log(JSON.stringify(questions, null, 2));
  }, [questions]);

  const handleSelect = (e) => {
    setDiff(e.target.value);
  };

  const addQuestion = (e) => {
    // let target = e.nativeEvent.target;
    let questionDiv = document.querySelector(".question");
    if (questionDiv) {
      let qHeight = questionDiv.offsetHeight;
      console.log(document.body.scrollHeight);
      console.log(qHeight);
      // document.activeElement.blur()
      if (document.body.scrollHeight > qHeight * 2)
        document.documentElement.scrollTop = window.scrollY - 200;
      else document.documentElement.scrollTop = window.scrollY - qHeight / 8;
    }
    setQuestions([
      ...questions,
      {
        code: "",
        question: "What is the output of the above code?",
        answers: ["", "", "", "", ""],
        correct: "",
        explanation: "",
      },
    ]);
  };

  const updateQuestion = (index, block, value, answerMode) => {
    const newQuestions = Array.from(questions);
    if (answerMode) newQuestions[index].answers[block] = value;
    else newQuestions[index][block] = value;
    setQuestions(newQuestions);
  };

  return (
    <div className="main-ctr">
      <div className="config">
        <h1>Quiz Creator</h1>
        <label htmlFor="qname">Quiz Name</label>
        <input
          type="text"
          id="qname"
          placeholder="Example Quiz"
          className="input-config"
        />
        <label htmlFor="qdiff">Quiz Difficulty</label>
        <select value={diff} onChange={handleSelect} className="select-config">
          <option value="0">Easy</option>
          <option value="1">Medium</option>
          <option value="2">Hard</option>
        </select>
      </div>
      <hr />
      <div className="contents">
        {questions.map((question, index) => (
          <div className="question" key={index}>
            <CodeMirror
              value={questions[index].code}
              className="codewindow"
              options={{
                mode: "text/x-java",
                theme: "material",
                lineNumbers: true,
              }}
              onBeforeChange={(editor, data, value) => {
                updateQuestion(index, "code", value);
              }}
            />
            <label>Question Text</label>
            <input
              type="text"
              name="question"
              id="question"
              className="input-config"
              placeholder="What is the output of the above code?"
              value={questions[index].question}
              onChange={(e) =>
                updateQuestion(index, "question", e.target.value)
              }
            />
            <div className="answers">
              <label>Answer A</label>
              <div className="answer">
                <input
                  type="text"
                  name="ans-a"
                  id="ans-a"
                  value={questions[index].answers[0]}
                  onChange={(e) =>
                    updateQuestion(index, 0, e.target.value, true)
                  }
                />
                <div className="correct-check">
                  <input
                    type="radio"
                    id={`rad-a-${index}`}
                    name={`correct-${index}`}
                    value="a"
                    onChange={e => 
                      updateQuestion(index, "correct", e.target.value)
                    }
                  />
                  <label htmlFor={`rad-a-${index}`}>Correct</label>
                </div>
              </div>
              <label>Answer B</label>
              <div className="answer">
                <input
                  type="text"
                  name="ans-b"
                  id="ans-b"
                  value={questions[index].answers[1]}
                  onChange={(e) =>
                    updateQuestion(index, 1, e.target.value, true)
                  }
                />
                <div className="correct-check">
                  <input
                    type="radio"
                    id={`rad-b-${index}`}
                    name={`correct-${index}`}
                    value="b"
                    onChange={e => 
                      updateQuestion(index, "correct", e.target.value)
                    }
                  />
                  <label htmlFor={`rad-b-${index}`}>Correct</label>
                </div>
              </div>
              <label>Answer C</label>
              <div className="answer">
                <input
                  type="text"
                  name="ans-c"
                  id="ans-c"
                  value={questions[index].answers[2]}
                  onChange={(e) =>
                    updateQuestion(index, 2, e.target.value, true)
                  }
                />
                <div className="correct-check">
                  <input
                    type="radio"
                    id={`rad-c-${index}`}
                    name={`correct-${index}`}
                    value="c"
                    onChange={e => 
                      updateQuestion(index, "correct", e.target.value)
                    }
                  />
                  <label htmlFor={`rad-c-${index}`}>Correct</label>
                </div>
              </div>
              <label>Answer D</label>
              <div className="answer">
                <input
                  type="text"
                  name="ans-d"
                  id="ans-d"
                  value={questions[index].answers[3]}
                  onChange={(e) =>
                    updateQuestion(index, 3, e.target.value, true)
                  }
                />
                <div className="correct-check">
                  <input
                    type="radio"
                    id={`rad-d-${index}`}
                    name={`correct-${index}`}
                    value="d"
                    onChange={e => 
                      updateQuestion(index, "correct", e.target.value)
                    }
                  />
                  <label htmlFor={`rad-d-${index}`}>Correct</label>
                </div>
              </div>
              <label>Answer E</label>
              <div className="answer">
                <input
                  type="text"
                  name="ans-e"
                  id="ans-e"
                  value={questions[index].answers[4]}
                  onChange={(e) =>
                    updateQuestion(index, 4, e.target.value, true)
                  }
                />
                <div className="correct-check">
                  <input
                    type="radio"
                    id={`rad-e-${index}`}
                    name={`correct-${index}`}
                    value="e"
                    onChange={e => 
                      updateQuestion(index, "correct", e.target.value)
                    }
                  />
                  <label htmlFor={`rad-e-${index}`}>Correct</label>
                </div>
              </div>
              <label>Explanation</label>
              <textarea
                name={`explain-${index}`}
                data-gramm_editor="false"
                cols="5"
                rows="5"
                value={questions[index].explanation}
                onChange={(e) =>
                  updateQuestion(index, "explanation", e.target.value)
                }
              />
            </div>
          </div>
        ))}
      </div>
      <button onClick={addQuestion}>Add Question +</button>
      <hr />
      <div className="submission">
        <button className="submit">Submit!</button>
      </div>
    </div>
  );
};

export default Creator;
