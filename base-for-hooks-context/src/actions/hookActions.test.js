import moxios from "moxios";

import { getSecretWord } from "./hookActions";

describe('moxios tests', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })

  test('should call the getSecretWord callback on axios response', async () => {
    const secretWord = 'party';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: secretWord
      })
    })
    //create mock for callback
    const mockSetSecretWord = jest.fn()
  
    await getSecretWord(mockSetSecretWord);

    // see wether mock was run with the correct argument
    expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord)
  })

  
})
