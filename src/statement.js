const searchParams = new URLSearchParams(location.search)    
const file = searchParams.get("file")

const questions = JSON.parse(localStorage.getItem("questions") ?? {})

const statementHeader = document.getElementById("statement-header")
const statementContent = document.getElementById("statement-content")

console.log(questions)
console.log(file)
if (questions.hasOwnProperty(file)) {
    const question = questions[file]
    console.log(question)
    
    if (question.Type == "html") {
        statementContent.innerHTML = question.Contents
    } else if (question.Type == "txt") {
        statementHeader.innerHTML = question.Metadata.Title

        statementContent.innerHTML = `
            <div id='statement-description'>${question.Metadata.Description.replaceAll("\n", "<br>")}</div>
        `

        Object.keys(question.Metadata).forEach(field => {
            if (field == "Title" || field == "Description") {
                return 
            } 

            statementContent.innerHTML += `
            <div>${field}: ${question.Metadata[field].replaceAll("\n", "<br>")}</div>`
        } )

        statementContent.innerHTML += `
            <br>
            <div>${question.ProblemStatement.replaceAll("\n", "<br>")}</div><br>
        `

        question.Examples.forEach((example, index) => {
            statementContent.innerHTML += `
                <div class="example-header">Example ${index + 1}:</div>
                <div class="example-content">${example.replaceAll("\n", "<br>")}</div>
            `
        })
        

    }
    
} 

function viewSubmissions() {
    window.location = `submissions.html?file=${file}`
}  