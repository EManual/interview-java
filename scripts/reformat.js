'use strict'

var fs = require('fs')
var path = require('path')

var QuestionPath = '../source'
var QuestionDestPath = '../questions'
var questionFiles = fs.readdirSync(QuestionPath)


questionFiles.forEach(function(file){
    var content = fs.readFileSync(path.join(QuestionPath, file), {encoding: 'utf-8'})
    var lines = content.split('\n')
    var question = {}

    question.type = 'reply'
    question.tag = 'java'
    question.difficulty = 1
    question.from = '网络整理'
    question.description = lines[0]
    lines.shift() //shift description
    lines.shift() //shift empty line
    question.answer = lines.join('\n')
    fs.writeFileSync(path.join(QuestionDestPath, file), render(question), 'utf8')
})

function render(question){
    let tpl =
`- type: ${question.type}
- tag: ${question.tag}
- difficulty:  ${question.difficulty}
- from: ${question.from}

--------

${question.description}

---------

${question.answer}
`
    return tpl
}
