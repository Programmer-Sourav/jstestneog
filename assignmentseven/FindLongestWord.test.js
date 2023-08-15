const  findLongestWord  = require("./FindLongestWord")



describe("find utility exercises", ()=>{
     describe("findLongestWord", ()=>{
        test("Find longest word in a sentence", ()=>{
              const input = "The quick brown fox jumps over the lazy dog."
              const output = "quick"
              expect(findLongestWord(input)).toBe(output)
        })
        test("Find longest word in a sentence with a single word", ()=>{
            const input = "Hello"
            const output = "Hello"
            expect(findLongestWord(input)).toBe(output)
      })

      test("Find longest word in an empty string", ()=>{
        const input = ""
        const output = undefined
        expect(findLongestWord(input)).toBe(output)
  })

  test("Check if the output is a string", ()=>{
    const input = "The quick brown fox jumps over the lazy dog."
    const output = "quick"
    const filtered = findLongestWord(input)
    expect(filtered).toBe(output)
    expect(typeof filtered).toBe('string');
})

     })
})