  
  //配列データの宣言(シャッフル関数始動)
  export const karuta = shuffle([
    {
      clue: "Amazing giant green trees in a park with an ocean view.",
      efuda: "images/a.png",
      onsei: "sounds/A.mp3",
      hand: "images/hand-1.png",
      hand2: "images/aite-1.png",
    },
    {
      clue: "Bing Bong, everyone looks at the clock.",
      efuda: "images/b.png",
      onsei: "sounds/B.mp3",
      hand: "images/hand-2.png",
      hand2: "images/aite-2.png",
    },
    {
      clue: "Continue the walk all the way looking the paintings on the wall.",
      efuda: "images/c.png",
      onsei: "sounds/C.mp3",
      hand: "images/hand-3.png",
      hand2: "images/aite-3.png",
    },
    {
      clue: "Down at the seaside the spnning white blade",
      efuda: "images/d.png",
      onsei: "sounds/D.mp3",
      hand: "images/hand-4.png",
      hand2: "images/aite-4.png",
    },
    {
      clue: "Enjoy antiques in the 16th century.",
      efuda: "images/e.png",
      onsei: "sounds/E.mp3",
      hand: "images/hand-5.png",
      hand2: "images/aite-5.png",
    },
    {
      clue: "Feel at peace Mother nature",
      efuda: "images/f.png",
      onsei: "sounds/F.mp3",
      hand: "images/hand-6.png",
      hand2: "images/aite-6.png",
    },

    {
      clue: "Great guiding ship safely around the rocks.",
      efuda: "images/g.png",
      onsei: "sounds/G.mp3",
      hand: "images/hand-7.png",
      hand2: "images/aite-7.png",
    },

  ]).splice(0, 5);
  //↑のsplice絵札の表示枚数を設定（開始場所, 採用枚数）


