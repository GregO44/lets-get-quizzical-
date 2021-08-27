(function(){
  
    function buildQuiz(){

      const output = [];
  
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];
  
          for(letter in currentQuestion.answers){
  
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      let numCorrect = 0;
  
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if(userAnswer === currentQuestion.correctAnswer){

          numCorrect++;
  
          answerContainers[questionNumber].style.color = 'lightgreen';
        }

        else{

          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "What was the Turkish city of Istanbul called before 1930?",
        answers: {
          a: "Kabul",
          b: "Madrid",
          c: "Constantinople"
        },
        correctAnswer: "c"
      },
      {
        question: "What was the old name for a Snickers bar before it changed in 1990?",
        answers: {
          a: "Nuts n' stuff",
          b: "Galaxy",
          c: "Marathon"
        },
        correctAnswer: "c"
      },
      {
        question: "What element is denoted by the chemical symbol Sn in the periodic table?",
        answers: {
          a: "Sin",
          b: "Tin",
          c: "Gin",
        },
        correctAnswer: "b"
      },
      {
        question: "What is the capital of New Zealand?",
        answers: {
          a: "New Jersey",
          b: "Wellington",
          c: "Auckland",
        },
        correctAnswer: "b"
      },
      {
        question: "In which part of your body would you find the cruciate ligament?",
        answers: {
          a: "Neck",
          b: "Arm",
          c: "Knee",
        },
        correctAnswer: "c"
      },
      {
        question: "In what US State is the city Nashville?",
        answers: {
          a: "Tennessee",
          b: "Kentucky",
          c: "Louisiana",
        },
        correctAnswer: "a"
      }
    ];
  
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  