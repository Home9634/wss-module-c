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

const codeFiles = [
    "kahns-algorithm_jimmy-tan_2024-10-18-23-53-29.txt",
    "bellman-ford_koh-keira_2022-12-07-15-35-17.txt",
    "two-sum_eric-leow_2020-12-11-19-27-53.txt",
    "dfs_cheng-xi_2022-03-16-20-60-55.txt",
    "floyd-warshall_eric-leow_2022-03-22-07-09-38.txt",
    "pre-calculation_guan-yu_2023-08-16-05-19-21.txt",
    "floyd-warshall_koh-keira_2023-01-18-09-05-42.txt",
    "edmons-karp_jimmy-tan_2020-04-10-13-16-12.txt",
    "add-two-numbers_koh-keira_2020-11-01-09-43-11.txt",
    "pre-calculation_guan-yu_2022-10-26-05-39-38.txt",
    "floyd-warshall_Sam_2021-08-22-21-21-28.txt",
    "greedy_cheng-xi_2024-12-07-08-36-42.txt",
    "convex-hull_koh-keira_2023-02-12-16-42-39.txt",
    "tarjans-algorithm_en-le_2023-01-13-12-16-35.txt",
    "dinics_jimmy-tan_2022-09-12-14-57-48.txt",
    "max-flow_en-le_2022-12-05-22-53-29.txt",
    "edmons-karp_cheng-xi_2024-09-02-16-59-06.txt",
    "subtract-two-numbers_en-le_2023-12-15-22-46-20.txt",
    "max-flow_koh-keira_2024-01-08-20-60-27.txt",
    "dfs_koh-keira_2024-04-23-00-21-00.txt",
    "computational-geometry_en-le_2021-04-03-13-06-24.txt",
    "longest-subsequence_syed_2021-03-07-17-60-09.txt",
    "bellman-ford_en-le_2023-02-12-06-32-29.txt",
    "pre-calculation_koh-keira_2021-11-10-06-32-37.txt",
    "pre-calculation_en-le_2021-07-14-04-20-12.txt",
    "dfs_jimmy-tan_2021-08-19-02-54-31.txt",
    "floyd-warshall_eric-leow_2020-09-13-08-51-56.txt",
    "bellman-ford_cheng-xi_2020-04-08-11-25-60.txt",
    "subtract-two-numbers_jimmy-tan_2022-11-25-16-09-06.txt",
    "convex-hull_cheng-xi_2020-08-06-15-28-17.txt",
    "binary-search_koh-keira_2023-02-18-10-15-59.txt",
    "max-flow_Sam_2020-04-20-07-15-06.txt",
    "max-flow_syed_2024-11-17-05-14-41.txt",
    "pre-calculation_guan-yu_2024-07-15-21-00-25.txt",
    "sudoku-solver_Sam_2020-12-19-18-13-02.txt",
    "max-flow_cheng-xi_2021-12-04-14-56-48.txt",
    "bellman-ford_Sam_2022-07-14-21-11-07.txt",
    "two-pointer_eric-leow_2020-02-19-13-15-38.txt",
    "pre-calculation_en-le_2020-09-02-15-10-33.txt",
    "tarjans-algorithm_guan-yu_2022-11-25-19-11-38.txt",
    "two-sum_koh-keira_2021-06-17-19-46-00.txt",
    "bfs_guan-yu_2020-01-19-12-29-33.txt",
    "dfs_koh-keira_2023-04-16-06-00-51.txt",
    "computational-geometry_jimmy-tan_2022-04-21-01-13-44.txt",
    "subtract-two-numbers_eric-leow_2021-08-01-01-54-39.txt",
    "postfix-expression-evaluation_en-le_2021-12-24-13-17-59.txt",
    "bfs_en-le_2022-01-21-10-16-09.txt",
    "modified-dijkstra_koh-keira_2021-12-05-10-29-35.txt",
    "sudoku-solver_jimmy-tan_2024-09-28-03-28-36.txt",
    "pre-calculation_koh-keira_2022-05-06-15-53-37.txt",
    "count-change_guan-yu_2022-07-07-10-05-56.txt",
    "pre-calculation_cheng-xi_2023-02-12-08-37-12.txt",
    "binary-search_guan-yu_2020-08-24-14-50-38.txt",
    "add-two-numbers_guan-yu_2020-06-02-08-44-21.txt",
    "two-pointer_en-le_2021-07-19-01-54-15.txt",
    "edmons-karp_Sam_2024-10-19-13-26-29.txt",
    "kahns-algorithm_koh-keira_2021-09-19-11-24-26.txt",
    "sweep-line_en-le_2022-08-20-01-25-59.txt",
    "tarjans-algorithm_syed_2024-12-09-08-49-34.txt",
    "bfs_koh-keira_2023-03-10-21-00-43.txt",
    "computational-geometry_koh-keira_2022-05-03-12-19-42.txt",
    "bfs_cheng-xi_2024-04-12-14-13-02.txt",
    "count-change_syed_2020-03-09-00-34-53.txt",
    "tarjans-algorithm_cheng-xi_2022-05-11-04-45-25.txt",
    "floyd-warshall_guan-yu_2021-01-12-16-04-30.txt",
    "dijkstra_eric-leow_2022-02-15-18-54-36.txt",
    "two-sum_syed_2020-05-06-00-57-22.txt",
    "sudoku-solver_jimmy-tan_2020-10-13-13-02-28.txt",
    "computational-geometry_jimmy-tan_2022-08-25-16-15-35.txt",
    "count-change_cheng-xi_2021-02-01-11-21-40.txt",
    "computational-geometry_en-le_2023-10-17-20-31-24.txt",
    "longest-subsequence_guan-yu_2022-04-26-05-16-50.txt",
    "postfix-expression-evaluation_jimmy-tan_2022-12-28-15-50-13.txt",
    "sliding-window_en-le_2024-12-10-08-15-16.txt",
    "count-change_en-le_2021-03-01-22-32-40.txt",
    "longest-subsequence_jimmy-tan_2020-03-13-12-35-46.txt",
    "add-two-numbers_en-le_2020-09-14-11-22-29.txt",
    "two-pointer_Sam_2023-06-09-03-40-28.txt",
    "count-change_cheng-xi_2020-05-01-14-42-20.txt",
    "subtract-two-numbers_syed_2023-11-28-00-53-33.txt",
    "computational-geometry_koh-keira_2024-06-07-01-16-03.txt",
    "longest-subsequence_eric-leow_2023-04-24-14-49-52.txt",
    "postfix-expression-evaluation_cheng-xi_2023-12-07-00-05-58.txt",
    "dijkstra_Sam_2023-12-28-21-54-21.txt",
    "count-change_en-le_2021-11-12-00-31-28.txt",
    "bellman-ford_Sam_2021-08-25-07-04-32.txt",
    "dfs_jimmy-tan_2023-01-06-19-54-45.txt",
    "sudoku-solver_Sam_2022-03-04-09-21-35.txt",
    "postfix-expression-evaluation_guan-yu_2022-05-11-06-49-40.txt",
    "convex-hull_cheng-xi_2021-04-10-08-55-30.txt",
    "dfs_cheng-xi_2022-01-19-02-14-28.txt",
    "bfs_jimmy-tan_2020-06-12-12-54-41.txt",
    "max-flow_eric-leow_2021-02-26-08-50-03.txt",
    "dfs_jimmy-tan_2021-06-10-10-43-56.txt",
    "edmons-karp_syed_2022-08-27-21-02-13.txt",
    "computational-geometry_en-le_2023-05-15-06-21-40.txt",
    "longest-subsequence_en-le_2022-12-17-03-16-53.txt",
    "convex-hull_jimmy-tan_2022-02-21-02-36-05.txt",
    "floyd-warshall_guan-yu_2020-07-01-12-23-28.txt",
    "recursion_eric-leow_2021-05-01-00-23-13.txt",
    "kahns-algorithm_eric-leow_2020-08-05-14-23-28.txt",
    "two-sum_koh-keira_2022-12-13-08-25-53.txt",
    "subtract-two-numbers_cheng-xi_2024-03-20-11-40-31.txt",
    "two-pointer_en-le_2020-07-03-12-51-35.txt",
    "bfs_eric-leow_2023-09-18-12-17-08.txt",
    "bfs_koh-keira_2023-11-10-19-08-30.txt",
    "dfs_guan-yu_2023-04-26-11-60-14.txt",
    "edmons-karp_syed_2021-06-07-21-31-51.txt",
    "bellman-ford_syed_2024-04-06-04-44-15.txt",
    "two-sum_en-le_2022-10-17-16-08-43.txt",
    "two-sum_en-le_2021-12-10-05-43-11.txt",
    "dijkstra_Sam_2023-07-11-20-15-20.txt",
    "longest-subsequence_cheng-xi_2021-04-08-19-15-56.txt",
    "two-sum_guan-yu_2023-07-25-13-60-02.txt",
    "max-flow_en-le_2022-09-28-03-11-14.txt",
    "bfs_koh-keira_2020-01-26-14-01-00.txt",
    "longest-subsequence_guan-yu_2024-01-09-08-02-40.txt",
    "greedy_jimmy-tan_2021-07-09-16-11-18.txt",
    "bfs_koh-keira_2020-10-19-05-51-05.txt",
    "dfs_en-le_2021-08-22-19-36-45.txt",
    "N-queens_guan-yu_2022-06-07-09-19-20.txt",
    "dfs_guan-yu_2023-07-12-07-23-33.txt",
    "pre-calculation_guan-yu_2023-02-10-08-30-43.txt",
    "binary-search_jimmy-tan_2024-03-06-21-46-21.txt",
    "sudoku-solver_Sam_2021-09-08-07-30-02.txt",
    "longest-subsequence_Sam_2021-09-08-04-10-40.txt",
    "sudoku-solver_cheng-xi_2022-04-17-00-41-56.txt",
    "count-change_Sam_2021-04-17-06-23-56.txt",
    "longest-subsequence_Sam_2024-08-27-22-46-27.txt",
    "kahns-algorithm_eric-leow_2021-09-19-10-37-02.txt",
    "dijkstra_Sam_2023-08-05-08-31-06.txt",
    "bellman-ford_Sam_2023-06-18-15-27-56.txt",
    "longest-subsequence_cheng-xi_2024-11-11-15-28-11.txt",
    "dijkstra_cheng-xi_2023-04-07-14-39-45.txt",
    "convex-hull_guan-yu_2020-04-09-20-17-58.txt",
    "subtract-two-numbers_syed_2020-03-06-23-16-49.txt",
    "bfs_cheng-xi_2021-07-10-19-33-44.txt"
]

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

    let question = {}
    let examples = []

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
                    question[currentField] = currentValue
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
                problemStatement += `${problemStatement.length > 0 ? '\n' : ''}${line}`
            }
        } else {
            if (!examples[currentExample]) {
                examples[currentExample] = ''
            }

            if (line.includes("Example")) {
                currentExample++
            } else {
                examples[currentExample] += `${examples[currentExample].length > 0 ? '\n' : ''}${line}`
            }
        }
    })

    question["Examples"] = examples

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
                "title": title,
                "type": "html",
                "contents": text
            }

        }
    }

    console.log(questions)
    localStorage.setItem("questions", questions)
}

function renderQuestions() {

}

window.addEventListener("load", async () => {
    await loadQuestions()
    renderQuestions()
})