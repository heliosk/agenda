import React from 'react';

const Avatar = ({ name }) => {
  const getFirstLetter = () => {
    return name.charAt(0).toUpperCase();
  };

  const randomColor = () => {
    const intial = getFirstLetter();

    const avatarColor = [
      {
        color: 'orange',
        letters: ['A', 'I', 'Q', 'W'],
      },
      {
        color: 'green',
        letters: ['B', 'J', 'R', 'Z'],
      },
      {
        color: 'blue',
        letters: ['C', 'K', 'S'],
      },
      {
        color: 'egg',
        letters: ['D', 'L', 'T'],
      },
      {
        color: 'purple',
        letters: ['E', 'M', 'U'],
      },
      {
        color: 'pink',
        letters: ['F', 'N', 'V'],
      },
      {
        color: 'cyan',
        letters: ['G', 'O', 'X'],
      },
      {
        color: 'shrimp',
        letters: ['H', 'P', 'Y'],
      },
    ];

    const chosenColor = avatarColor.filter((item) => {
      return item.letters.includes(intial);
    });

    return chosenColor.length > 0 ? chosenColor[0].color : 'grey';
  };

  return (
    <div className={`round-avatar ${randomColor()}`}>{getFirstLetter()}</div>
  );
};

export default Avatar;
