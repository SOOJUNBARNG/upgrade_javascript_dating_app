// src/components/Home/Home.js
import React, { useState } from 'react';
import './Personal_fortune_telling.css';  // Home component-specific styles

const Home = () => {
  const [birthPlace, setBirthPlace] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  // Basic validation
    if (birthMonth < 1 || birthMonth > 12) {
      alert('生まれた月は1から12の間でなければなりません。');
      return;
    }

    if (birthDate < 1 || birthDate > 31) {
      alert('生まれた日は1から31の間でなければなりません。');
      return;
    }
    console.log({
      birthPlace,
      birthYear,
      birthMonth,
      birthDate,
      birthTime,
    });
  };

  return (
    <div className="home-container">
      <h1>マッチング４８のホームページ</h1>
      <p>四柱推命サービスへようこそ</p>

      <form className="birth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="birthPlace">生まれた場所</label>
          <input
            type="text"
            id="birthPlace"
            value={birthPlace}
            onChange={(e) => setBirthPlace(e.target.value)}
            placeholder="例: 東京"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="birthYear">生まれた年</label>
          <input
            type="number"
            id="birthYear"
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
            placeholder="例: 1990"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="birthMonth">生まれた月</label>
          <input
            type="number"
            id="birthMonth"
            value={birthMonth}
            onChange={(e) => setBirthMonth(e.target.value)}
            placeholder="例: 7"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="birthDate">生まれた日</label>
          <input
            type="number"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            placeholder="例: 15"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="birthTime">生まれた時間</label>
          <input
            type="time"
            id="birthTime"
            value={birthTime}
            onChange={(e) => setBirthTime(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">占う</button>
      </form>
    </div>
  );
};

export default Home;
