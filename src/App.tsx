import React, { useState } from 'react';
import './App.css';

import Button from './components/Button/Button';
import Label from './components/Label/Label';
import Text from './components/Text/Text';
import Table from './components/Table/Table';
import Dropdown from './components/Dropdown/Dropdown';
import RadioButton from './components/RadioButton/RadioButton';
import Img from './components/Img/Img';
import HeroImage from './components/HeroImage/HeroImage';
import Card from './components/Card/Card';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState('None');
  const [selectedRadio, setSelectedRadio] = useState('option1');

  const demoImage = 'https://picsum.photos/seed/uigarden/800/400';

  return (
    <main className="app-container">
      <header className="app-header">
        <span className="eyebrow">REACT • TYPESCRIPT • STORYBOOK</span>
        <h1>🌸 UI Garden</h1>
        <p>A reusable, responsive and interactive web component library.</p>
        <span className="component-count">9 Reusable Components</span>
      </header>

      <section className="intro-section">
        <h2>Explore Our Components</h2>
        <p>
          Interact with each component below to explore its functionality, appearance and disabled
          state.
        </p>
      </section>

      <div className="component-grid">
        <section className="demo-card">
          <h2>01. Button</h2>
          <p>Click the button to update the counter.</p>

          <Button
            label="Click Me"
            backgroundColor="#4f46e5"
            onClick={() => setClickCount((count) => count + 1)}
          />

          <p className="result">Button clicked: {clickCount} times</p>

          <h3>Disabled State</h3>
          <Button label="Disabled Button" disabled />
        </section>

        <section className="demo-card">
          <h2>02. Label</h2>
          <p>Customizable labels with different states.</p>

          <Label text="Active Label" backgroundColor="#059669" />

          <h3>Disabled State</h3>
          <Label text="Disabled Label" disabled />
        </section>

        <section className="demo-card">
          <h2>03. Text</h2>
          <p>Reusable text with customizable colors and sizes.</p>

          <Text text="This is a styled text component." color="#4338ca" fontSize="20px" />

          <h3>Disabled State</h3>
          <Text text="This text is disabled." disabled />
        </section>

        <section className="demo-card">
          <h2>04. Dropdown</h2>
          <p>Select an option to see the result.</p>

          <Dropdown
            label="Choose a technology"
            options={['React', 'TypeScript', 'Storybook', 'Docker']}
            onChange={(value) => setSelectedOption(value)}
          />

          <p className="result">Selected: {selectedOption}</p>

          <h3>Disabled State</h3>
          <Dropdown label="Disabled Dropdown" options={['Option 1', 'Option 2']} disabled />
        </section>

        <section className="demo-card">
          <h2>05. Radio Button</h2>
          <p>Choose one of the available options.</p>

          <RadioButton
            label="Option One"
            name="demo-options"
            value="option1"
            checked={selectedRadio === 'option1'}
            onChange={setSelectedRadio}
          />

          <RadioButton
            label="Option Two"
            name="demo-options"
            value="option2"
            checked={selectedRadio === 'option2'}
            onChange={setSelectedRadio}
          />

          <p className="result">Selected: {selectedRadio}</p>

          <h3>Disabled State</h3>
          <RadioButton label="Disabled Option" name="disabled-options" value="disabled" disabled />
        </section>

        <section className="demo-card">
          <h2>06. Table</h2>
          <p>A reusable table with headers, rows and a footer.</p>

          <Table
            headers={['Component', 'Category', 'Status']}
            rows={[
              ['Button', 'Interactive', 'Ready'],
              ['Dropdown', 'Form', 'Ready'],
              ['Card', 'Display', 'Ready'],
            ]}
            footer="Total: 3 components"
          />

          <h3>Disabled State</h3>
          <Table headers={['Name', 'Status']} rows={[['Sample', 'Disabled']]} disabled />
        </section>

        <section className="demo-card">
          <h2>07. Image</h2>
          <p>A customizable image component.</p>

          <Img src={demoImage} alt="Nature landscape example" width="100%" height="180px" />

          <h3>Disabled State</h3>
          <Img src={demoImage} alt="Disabled nature image" width="100%" height="100px" disabled />
        </section>

        <section className="demo-card">
          <h2>08. Hero Image</h2>
          <p>A hero image with title and subtitle.</p>

          <HeroImage
            src={demoImage}
            alt="Landscape hero"
            title="Welcome to UI Garden"
            subtitle="Build beautiful interfaces with reusable components."
          />

          <h3>Disabled State</h3>
          <HeroImage src={demoImage} alt="Disabled landscape hero" title="Disabled Hero" disabled />
        </section>

        <section className="demo-card">
          <h2>09. Card</h2>
          <p>A reusable content card.</p>

          <Card
            title="React Components"
            description="Build consistent interfaces using reusable UI elements."
            imageUrl={demoImage}
            backgroundColor="#eef2ff"
            textColor="#1e1b4b"
          />

          <h3>Disabled State</h3>
          <Card
            title="Disabled Card"
            description="This card demonstrates its disabled state."
            disabled
          />
        </section>
      </div>

      <footer className="app-footer">
        <p>UI Garden — Assignment 13</p>
        <p>React • TypeScript • Styled Components • Storybook</p>
      </footer>
    </main>
  );
}

export default App;
