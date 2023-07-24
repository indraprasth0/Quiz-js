const correctAnswers = ["B", "C", "D", "A", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const question = document.querySelectorAll(".question");

form.addEventListener("submit", event => {
    event.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 1;
            question[index].classList.add("correct");
            const qp = question[index].querySelector("p");
            qp.style.color = "green";
            const labs = question[index].querySelectorAll("label");            
            labs.forEach((lab, i) => {
                if(lab.htmlFor === answer){
                    lab.style.color = "green";
                    lab.style.fontWeight = 700;                    
                }
            });            
        } else {
            question[index].classList.add("wrong");
            const qp = question[index].querySelector("p");
            qp.style.color = "red";
            const labs = question[index].querySelectorAll("label");       
            // console.log(labs[0].htmlFor);     
            labs.forEach((lab, i) => {
                if(lab.htmlFor === answer){
                    lab.style.color = "red";
                    lab.style.fontWeight = 500;
                }else if(lab.htmlFor === correctAnswers[index]){
                    lab.style.color = "green";
                    lab.style.fontWeight = 700;
                }
            });
        }
    });
    scrollTo(0, 0);
    result.classList.remove("hide");
    result.querySelector("p").textContent = `Your score ${score}/5!`;
});