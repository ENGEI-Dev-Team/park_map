import { useState } from 'react';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '1rem' }}>
      <button onClick={toggleAccordion} style={{ fontSize: '1.2rem' }}>
        ① 東京国立博物館 {isOpen ? 'ー' : '+'}
      </button>

      {isOpen && (
        <div style={{ marginTop: '1rem' }}>
          <img src="/museum.jpg" alt="東京国立博物館" width="100%" />
          
          <a href="https://www.tnm.jp/" target="_blank" rel="noopener noreferrer">
            東京国立博物館のホームページ
          </a>
        </div>
      )}
    </div>
  );
};

export default Accordion;
