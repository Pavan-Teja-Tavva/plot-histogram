import React from 'react'
import Button from './components/atoms/button'
import ButtonGroup from './components/molecules/button-group'
import Histogram from './components/molecules/histogram'

function App() {
  const [wordFreq, setWordFreq] = React.useState(null)

  const onSubmitHandler = () => {
    console.log('Hello')
    fetch("https://www.terriblytinytales.com/test.txt")
      .then((response) => response.text())
      .then((text) => {
        const wordCount = {}
        const words = text
          .toLowerCase()
          .replace(/[^\w\s]/gi, "")
          .split(/\s+/)

        for (let i = 0; i < words.length; i++) {
          const word = words[i]
          if (wordCount[word]) {
            wordCount[word]++
          } else {
            wordCount[word] = 1
          }
        }

        const wordFreqArr = Object.keys(wordCount).map((word) => ({
          word: word,
          frequency: wordCount[word],
        }))

        wordFreqArr.sort((a, b) => b.frequency - a.frequency)

        setWordFreq(wordFreqArr.slice(0, 20))
      })
  }

  const onExportHandler = () => {
    const rows = [['Word', 'Frequency']];
    for (const {word, frequency} of wordFreq) {
      rows.push([word, frequency]);
    }

    const csvContent = 'data:text/csv;charset=utf-8,' + rows.map(e => e.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'histogram_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const onClearHandler = () => {
    setWordFreq(null)
  }


  return (
    <div className="app-body">
      <Button variant="primary" name="Submit" handler={onSubmitHandler} />
      {wordFreq && <>
        <Histogram data={wordFreq} />
        <ButtonGroup onExport={onExportHandler} onClear={onClearHandler} />
      </>}
    </div>
  )
}

export default App
