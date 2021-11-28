import React, {useState, useEffect} from 'react';
import { ReactComponent as LightThemeIcon } from '../../assets/icons/light_theme.svg';
import { ReactComponent as DarkThemeIcon } from '../../assets/icons/dark_theme.svg';
import './themeToggle.css';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    let savedTheme = localStorage.getItem('theme');
    if (!localStorage.getItem('theme')) {
      savedTheme = 'light';
      localStorage.setItem('theme', savedTheme);
    }

    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const handleThemeToggle = (e) => {
    if (e.type === 'click' || e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();

      const newTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    }
  };

  return (
    <div className='theme-toggle__container'>
      <div
        role='checkbox'
        className='theme-toggle__input'
        aria-checked={theme === 'light' ? 'false' : 'true'}
        aria-label='enable dark theme'
        tabIndex='0'
        onClick={handleThemeToggle}
        onKeyDown={handleThemeToggle}
      >
        {theme === 'dark' ? (
          <DarkThemeIcon className='theme-toggle__icon' />
        ) : (
          <LightThemeIcon className='theme-toggle__icon' />
        )}
      </div>
    </div>
  )
}
