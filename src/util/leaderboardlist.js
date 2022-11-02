export const leaderboardlist = [
  {
    userName: "John",
    score: 50,
  },
  {
    userName: "Jane",
    score: 30,
  },
  {
    userName: "Anna",
    score: 25,
  },
  {
    userName: "Joana",
    score: 70,
  },
  {
    userName: "Justin",
    score: 10,
  },
  {
    userName: "Peter",
    score: 20,
  },
  {
    userName: "Constance",
    score: 60,
  },
  {
    userName: "Trump",
    score: 85,
  },
  {
    userName: "Herrietta",
    score: 5,
  },
  {
    userName: "Mpabbe",
    score: 90,
  },
  {
    userName: "Televiv",
    score: 13,
  },
  {
    userName: "henry",
    score: 30,
  },
  {
    userName: "David",
    score: 22,
  },
  {
    userName: "Jonas",
    score: 61,
  },
  {
    userName: "Chris",
    score: 62,
  },
  {
    userName: "Jude",
    score: 18,
  },
  {
    userName: "Mark",
    score: 46,
  },
  {
    userName: "Tony",
    score: 66,
  },
  {
    userName: "Koffi",
    score: 55,
  },
  {
    userName: "Toffee",
    score: 100,
  },
  {
    userName: "Gina",
    score: 45,
  },
];

export const sortTypes = {
	up: {
		class: 'sort-up',
		fn: (a, b) => a.score - b.score
	},
	down: {
		class: 'sort-down',
		fn: (a, b) => b.score - a.score
	},
	default: {
		class: 'sort',
		fn: (a, b) => a
	}
};