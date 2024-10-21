// src/components/Home/Home.js
import React, { useState } from 'react';
import './Couple_fortune_telling.css';  // Home component-specific styles

const Home = () => {
  // First person's birth data
  const [birthPlace1, setBirthPlace1] = useState('');
  const [birthYear1, setBirthYear1] = useState('');
  const [birthMonth1, setBirthMonth1] = useState('');
  const [birthDate1, setBirthDate1] = useState('');
  const [birthTime1, setBirthTime1] = useState('');

  // Second person's birth data
  const [birthPlace2, setBirthPlace2] = useState('');
  const [birthYear2, setBirthYear2] = useState('');
  const [birthMonth2, setBirthMonth2] = useState('');
  const [birthDate2, setBirthDate2] = useState('');
  const [birthTime2, setBirthTime2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling form submission here
    console.log('First Person:', {
      birthPlace: birthPlace1,
      birthYear: birthYear1,
      birthMonth: birthMonth1,
      birthDate: birthDate1,
      birthTime: birthTime1,
    });
    console.log('Second Person:', {
      birthPlace: birthPlace2,
      birthYear: birthYear2,
      birthMonth: birthMonth2,
      birthDate: birthDate2,
      birthTime: birthTime2,
    });
  };

  return (
    <div className="home-container">
      <h1>マッチング４８のホームページ</h1>
      <p>四柱推命サービスへようこそ</p>

      <form className="birth-form" onSubmit={handleSubmit}>
        <div className="form-row">
          {/* First Person's Inputs */}
          <div className="person-info">
            <h2>第一の人の生年月日</h2>
            <div className="form-group">
              <label htmlFor="birthPlace1">生まれた場所</label>
              <input
                type="text"
                id="birthPlace1"
                value={birthPlace1}
                onChange={(e) => setBirthPlace1(e.target.value)}
                placeholder="例: 東京"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="birthYear1">生まれた年</label>
              <input
                type="number"
                id="birthYear1"
                value={birthYear1}
                onChange={(e) => setBirthYear1(e.target.value)}
                placeholder="例: 1990"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="birthMonth1">生まれた月</label>
              <input
                type="number"
                id="birthMonth1"
                value={birthMonth1}
                onChange={(e) => setBirthMonth1(e.target.value)}
                placeholder="例: 7"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="birthDate1">生まれた日</label>
              <input
                type="number"
                id="birthDate1"
                value={birthDate1}
                onChange={(e) => setBirthDate1(e.target.value)}
                placeholder="例: 15"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="birthTime1">生まれた時間</label>
              <input
                type="time"
                id="birthTime1"
                value={birthTime1}
                onChange={(e) => setBirthTime1(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Second Person's Inputs */}
          <div className="person-info">
            <h2>第二の人の生年月日</h2>
            <div className="form-group">
              <label htmlFor="birthPlace2">生まれた場所</label>
              <input
                type="text"
                id="birthPlace2"
                value={birthPlace2}
                onChange={(e) => setBirthPlace2(e.target.value)}
                placeholder="例: 大阪"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="birthYear2">生まれた年</label>
              <input
                type="number"
                id="birthYear2"
                value={birthYear2}
                onChange={(e) => setBirthYear2(e.target.value)}
                placeholder="例: 1995"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="birthMonth2">生まれた月</label>
              <input
                type="number"
                id="birthMonth2"
                value={birthMonth2}
                onChange={(e) => setBirthMonth2(e.target.value)}
                placeholder="例: 8"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="birthDate2">生まれた日</label>
              <input
                type="number"
                id="birthDate2"
                value={birthDate2}
                onChange={(e) => setBirthDate2(e.target.value)}
                placeholder="例: 20"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="birthTime2">生まれた時間</label>
              <input
                type="time"
                id="birthTime2"
                value={birthTime2}
                onChange={(e) => setBirthTime2(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn">占う</button>
      </form>
    </div>
  );
};

export default Home;
