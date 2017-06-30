describe('index', () => {
  describe('getFirstSelector(selector)', () => {
    it('returns the first element that matches the selector', () => {
      expect(getFirstSelector('div').id).toEqual('nested')
      expect(getFirstSelector('.ranked-list')).toEqual(document.querySelector('.ranked-list'))
    })
  })

  describe('nestedTarget()', () => {
    it('pulls a .target out of #nested', () => {
      expect(nestedTarget()).toEqual(document.querySelector('#nested .target'))
    })
  })

  describe('deepestChild()', () => {
    it('returns the most deeply nested child in #grand-node', () => {
      console.log(deepestChild().innerHTML)
      expect(deepestChild()).toBe(document.querySelector('#grand-node div div div div'))
    })
  })

  describe('increaseRankBy(n)', () => {
    it('increases ranks in .ranked-list by n', () => {
      increaseRankBy(3)

      const rankedLists = document.querySelectorAll('.ranked-list')
      const firstList = rankedLists[0]
      const secondList = rankedLists[1]

      var children = firstList.children
      var start = 1
      for (var i = 0, l = children.length; i < l; i++) {
        expect(parseInt(children[i].innerHTML)).toEqual(start + i + 3)
      }

      children = secondList.children
      start = 12

      for (var i = 0, l = children.length; i < l; i++) {
        expect(parseInt(children[i].innerHTML)).toEqual(start - i + 3)
      }
    })
  })
})
