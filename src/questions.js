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

    let question = { "Type": "txt" }
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
            if (currentField) {
                metadata[currentField] = currentValue

            }
            isInMetadata = !isInMetadata
        } else if (isInMetadata) {
            if (line.includes(":")) {
                if (currentField) {
                    metadata[currentField] = currentValue
                    currentField = null
                }
                currentField = line.split(":")[0].trim()
                currentValue = line.split(":")[1].trim()
            } else if (currentField) {
                currentValue += `\n ${line}`
            }
        } else if (!isInExample) {
            if (line.includes("Example")) {
                isInExample = true
                question["ProblemStatement"] = problemStatement
            } else {
                problemStatement += ` ${problemStatement.length > 0 ? '\n' : ''} ${line}`
            }
        } else {
            if (!examples[currentExample]) {
                examples[currentExample] = ''
            }

            if (line.includes("Example")) {
                currentExample++
            } else if (line.length > 0) {
                examples[currentExample] += ` ${examples[currentExample].length > 0 ? '\n' : ''} ${line}`
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
            questions[file] = { ...question, "File": file }
        } else if (file.endsWith('.html')) {
            questions[file] = {
                "Metadata": { "Title": title },
                "Type": "html",
                "Contents": text,
                "File": file
            }

        }
    }

    console.log(questions)
    localStorage.setItem("questions", JSON.stringify(questions))
    setFilteredQuestions(Object.values(questions).sort(sortAlphabetical))
    setMaxPages(Math.ceil(Object.keys(questions).length / perPage))
}

function sortAlphabetical(a, b) {
    const titleA = a.Metadata.Title.toLowerCase()
    const titleB = b.Metadata.Title.toLowerCase()
    if (titleA < titleB) {
        return -1
    }
    if (titleA > titleB) {
        return 1
    }

    return 0
}

const questionsTable = document.querySelector(".questions-table")

function useState(initialState) {
    let state = initialState
    const setState = ((newState) => {
        state = newState
        rerender()
    })
    return [() => state, setState]
}

const [getPage, setPage] = useState(0)
const [getMaxPages, setMaxPages] = useState(0)
const [getFilteredQuestions, setFilteredQuestions] = useState([])
let perPage = 8

function renderQuestions() {

    questionsTable.innerHTML = ''

    let paginatedQuestions = []
    console.log(getPage(), getMaxPages())

    for (let i = getPage() * perPage; i < Math.min(getPage() + 1, getMaxPages()) * perPage; i++) {
        console.log(i)
        if (getFilteredQuestions()[i]) {
            paginatedQuestions.push(getFilteredQuestions()[i])
        }
    }

    console.log(getFilteredQuestions())

    paginatedQuestions.forEach(q => {
        let listDiv = document.createElement("div")
        listDiv.classList.add("question-element")
        listDiv.innerHTML = q.Metadata.Title

        listDiv.setAttribute("onclick", `viewStatement('${q.File}')`)

        questionsTable.appendChild(listDiv)
    })
}

const pagFirst = document.getElementById("pag-first")
const pagBack = document.getElementById("pag-back")
const pagNext = document.getElementById("pag-next")
const pagLast = document.getElementById("pag-last")
const pagInfo = document.getElementById("pag-info")

function renderPagination() {
    pagInfo.innerHTML = `Page ${getPage() + 1} of ${getMaxPages()}`
}

function viewStatement(q) {
    window.location = `statement.html?file=${q}`
}

pagFirst.addEventListener("click", () => {
    setPage(0)
})

pagBack.addEventListener("click", () => {
    setPage(Math.max(getPage() - 1, 0))
})

pagNext.addEventListener("click", () => {
    setPage(Math.min(getPage() + 1, getMaxPages() - 1))
})

pagLast.addEventListener("click", () => {
    console.log(getMaxPages())
    setPage(getMaxPages() - 1)
})

function filterQuestions() {
    let filteredQuestions = []

    const search = document.getElementById("search-bar").value
    console.log(search)
    const searchArr = search.toLowerCase().split('')

    Object.keys(questions).forEach(q => {
        console.log(questions[q])
        let qArr = questions[q].Metadata.Title.toLowerCase().split("")
        let searchIndex = 0
        for (let i = 0; i < qArr.length; i++) {

            if (qArr[i] == searchArr[searchIndex]) {
                searchIndex++
            }

            if (searchIndex == searchArr.length) {
                filteredQuestions.push(questions[q])
                break
            }
        }
    })

    setFilteredQuestions(filteredQuestions)
}

let searchDebounce = null

document.getElementById("search-bar").addEventListener("input", (e) => {
    clearTimeout(searchDebounce)

    searchDebounce = setTimeout(() => {
        filterQuestions()
    }, 400)
})

function rerender() {
    renderQuestions()
    renderPagination()
}

window.addEventListener("load", async () => {
    await loadQuestions()
})