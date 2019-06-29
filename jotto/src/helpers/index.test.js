import {getLetterMatchCount}  from '.';

describe('getletterMatchCount', () => {
  const secretWord = 'party';

  test('should return correct count when there are no matching', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord);
    expect(letterMatchCount).toBe(0);
  })
  

  test('should the correct count where there are 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);
    expect(letterMatchCount).toBe(3);
  })

  test('should correct count when there are duplicate letters ins the guess', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord);
    expect(letterMatchCount).toBe(3);
  })
  
  
})
