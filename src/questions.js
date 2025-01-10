// Code to retrieve static files

// fetch("/README.txt").then(async (response) => {
//     let text = await response.text();
//     text = text.split("\n")

//     let code = []
//     let question = []

//     text.forEach(t => {
//         if (t.startsWith("code")) {
//             code.push(t.split("/")[1])
//         } else {
//             question.push(t.split("/")[1])
//         }
//     })

//     console.log(question)
// })

const questionFiles = [
    "max-flow.txt",
    "two-sum.txt",
    "add-two-numbers.txt",
    "greedy.txt",
    "dijkstra.txt",
    "convex-hull.html",
    "state-space.txt",
    "pre-calculation.html",
    "bfs.txt",
    "edmons-karp.txt",
    "koko-eat-bananas.txt",
    "dfs.txt",
    "count-change.txt",
    "longest-subsequence.txt",
    "tarjans-algorithm.html",
    "N-queens.txt",
    "two-pointer.txt",
    "kahns-algorithm.html",
    "computational-geometry.html",
    "sliding-window.txt",
    "binary-search.txt",
    "bellman-ford.txt",
    "dinics.txt",
    "subtract-two-numbers.txt",
    "sweep-line.txt",
    "postfix-expression-evaluation.html",
    "sudoku-solver.txt",
    "floyd-warshall.txt",
    "khans-algorithm.html",
    "modified-dijkstra.html",
    "recursion.txt",
    "movie-ratings.txt",

]

const questions = {}

function parseTxtFile(text) {
    text = text.split("\n")

    let question = {"Type": "txt"}
    let examples = []
    let metadata = {}

    let isInMetadata = false
    let isInExample = false

    let currentField = null
    let currentValue = null
    let currentExample = 0

    let problemStatement = ''

    text.forEach(line => {
        if (line.includes("---")) {
            isInMetadata = !isInMetadata
        } else if (isInMetadata) {
            if (line.includes(":")) {
                if (currentField) {
                    metadata[currentField] = currentValue
                }
                currentField = line.split(":")[0].trim()
                currentValue = line.split(":")[1].trim()
            } else if (currentField) {
                currentValue += `\n${line}`
            }
        } else if (!isInExample) {
            if (line.includes("Example")) {
                isInExample = true
                question["ProblemStatement"] = problemStatement
            } else {
                problemStatement += `${problemStatement.length > 0 ? '\n' : ''} ${line}`
            }
        } else {
            if (!examples[currentExample]) {
                examples[currentExample] = ''
            }

            if (line.includes("Example")) {
                currentExample++
            } else if (line.length > 0) {
                examples[currentExample] += `${examples[currentExample].length > 0 ? '\n' : ''} ${line}`
            }
        }
    })

    question["Examples"] = examples
    question["Metadata"] = metadata

    return question
}

async function loadQuestions() {

    for (let i = 0; i < questionFiles.length; i++) {
        const file = questionFiles[i]

        const response = await fetch(`question/${file}`)

        if (!response.ok) {
            continue
        }

        const text = await response.text()

        const title = file.split(".")[0]

        if (file.endsWith(".txt")) {
            let question = parseTxtFile(text)
            questions[file] = question
        } else if (file.endsWith('.html')) {
            questions[file] = {
                "Metadata": { "Title": title},
                "Type": "html",
                "Contents": text
            }

        }
    }

    console.log(questions)
    localStorage.setItem("questions", JSON.stringify(questions))
}

const questionsTable = document.querySelector(".questions-table")

function renderQuestions() {
    Object.keys(questions).forEach(q => {
        let listDiv = document.createElement("div")
        listDiv.classList.add("question-element")
        listDiv.innerHTML = questions[q].Metadata.Title
        
        listDiv.setAttribute("onclick", `viewStatement('${q}')`)   

        questionsTable.appendChild(listDiv)
    })
}

function viewStatement(q) {
    window.location = `statement.html?file=${q}`
}

window.addEventListener("load", async () => {
    await loadQuestions()
    renderQuestions()
})