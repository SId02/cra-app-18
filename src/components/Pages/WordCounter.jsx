import React, { useState, useEffect, useMemo } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');
  const [stats, setStats] = useState({
    characters: 0,
    words: 0,
    readingTime: 0
  });

  const isWord = (word) => {
    return word.split('').some(char => {
      const charCode = char.charCodeAt(0);
      return (
        (charCode > 47 && charCode < 58) ||  // Numbers
        (charCode > 64 && charCode < 91) ||  // Uppercase letters
        (charCode > 96 && charCode < 123)    // Lowercase letters
      );
    });
  };

  const countWords = useMemo(() => {
    const trimmedText = text.trim();
    const characters = trimmedText.length;
    
    const words = trimmedText
      .split(/\s+/)
      .filter(word => word !== '' && isWord(word))
      .length;
    
    const readingTime = (words / 100).toFixed(2);

    return { characters, words, readingTime };
  }, [text]);

  useEffect(() => {
    setStats(countWords);
  }, [countWords]);


  const handleReset = () => {
    setText('');
  };

  return (
    <section className="section py-6 has-background-grey-lighter">
      <div className="container has-text-centered pb-5">
        <h1 className="title">Word Counter</h1>
      </div>

      <div className="container">
        <nav className="level">
          {[
            { 
              label: 'Characters', 
              value: stats.characters, 
              bgClass: 'has-background-link-light' 
            },
            { 
              label: 'Words', 
              value: stats.words, 
              bgClass: 'has-background-warning-light' 
            },
            { 
              label: 'Reading Time', 
              value: `${stats.readingTime} min`, 
              bgClass: 'has-background-info-light' 
            }
          ].map((stat, index) => (
            <div key={index} className="level-item has-text-centered p-2">
              <div className={`tile is-child box ${stat.bgClass}`}>
                <p className="heading is-underlined">{stat.label}</p>
                <p className="title">{stat.value}</p>
              </div>
            </div>
          ))}
        </nav>
      </div>

      <div className="container pt-5">
        <form className="box">
          <div className="field">
            <div className="control">
              <textarea
                className="textarea has-fixed-size"
                placeholder="Type your text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
          </div>
        </form>

        <div className="field is-grouped is-justify-content-space-evenly">
          <p className="control">
            <button 
              className="button is-rounded is-info is-outlined"
              onClick={handleReset}
            >
              Reset
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WordCounter;