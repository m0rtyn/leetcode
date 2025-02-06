const INIT_NON_WINNER_PLACE = 4;

/**
 *
 * @param {User[]} users - это список пользователей и заработанные каждым из них очки,
 * это неотсортированный массив вида [{userId: "id1", score: score1}, ... , {userId: "idn", score: scoreN}], где score1 ... scoreN положительные целые числа, id1 ... idN произвольные неповторяющиеся идентификаторы
 * @param {MinScores} minScores это значения минимального количества очков для первых 3 мест
 * это объект вида { firstPlaceMinScore: score1, secondPlaceMinScore: score2, thirdPlaceMinScore : score3 }, где score1 > score2 > score3 > 0 целые положительные числа
 * @returns {User[]} Массив вида (сортировка массива не важна): [{userId: "id1", place: user1Place}, ..., {userId: "idN", place: userNPlace}], где user1Place ... userNPlace это целые положительные числа равные занятым пользователями местами, id1 ... idN идентификаторы пользователей из массива users
 */
function calculateLeaderboardPlaces(users, minScores) {
  let minScoresMap = new Map(mapMinScoresToArray(minScores));
  let lastNonWinnerPlace = INIT_NON_WINNER_PLACE;

  const rankedUsers = users
    .toSorted((a, b) => b.score - a.score)
    .map((user) => setWinnerPlace(user, minScoresMap))
    .map((user) => {
      if (user.place) return user;
      user.place = lastNonWinnerPlace;
      lastNonWinnerPlace++; // WARN: mutating
      return user;
    });

  return rankedUsers;
}

/**
 * @param {User} user
 * @param {Map<number, number | null>} minScoresMap
 * @returns {User}
 */
function setWinnerPlace(user, minScoresMap) {
  minScoresMap.forEach((score, key) => {
    if (score === null || user.place || user.score < score) return;
    user.place = key;
    minScoresMap.set(key, null);
  });
  return user;
}

// NOTE: TYPES SECTION

/**
 * @typedef User
 * @type {object}
 * @property {string} userId - идентификатор пользователя
 * @property {number} score - количество очков пользователя
 * @property {number} [place] - место пользователя
 */

/**
 * @typedef MinScores
 * @type {object}
 * @property {number} firstPlaceMinScore - минимальное количество очков для первого места
 * @property {number} secondPlaceMinScore - минимальное количество очков для второго места
 * @property {number} thirdPlaceMinScore - минимальное количество очков для третьего места
 */

/**
 * @typedef MinScore
 * @type {[string, number]}
 */

/**
 * @typedef MinScoreArr
 * @type {(MinScore | null)[]}
 */

// NOTE: TESTS SECTION

let testCount = 1;
function checkResultAndPrintIncorrectAnswer(answer, correctAnswer) {
  answer.sort((a, b) => a.userId.localeCompare(b.userId));
  correctAnswer.sort((a, b) => a.userId.localeCompare(b.userId));

  const result = checkResult(answer, correctAnswer);
  if (testCount === 1)
    console.info(
      "\n\n\n\n\n\n-----------------------------------------------------TESTS:"
    );

  if (result) {
    console.info(`\nTest #${testCount} ✅`);
  } else {
    console.info(
      `\nTest #${testCount}`,
      "\nAnswer: ",
      answer,
      "\nCorrectAnswer: ",
      correctAnswer
    );
  }

  testCount += 1;
}

checkResultAndPrintIncorrectAnswer(
  calculateLeaderboardPlaces(
    [
      { userId: "id1", score: 3 },
      { userId: "id2", score: 2 },
      { userId: "id3", score: 1 },
    ],
    { firstPlaceMinScore: 100, secondPlaceMinScore: 50, thirdPlaceMinScore: 10 }
  ),
  [
    { userId: "id1", place: 4 },
    { userId: "id2", place: 5 },
    { userId: "id3", place: 6 },
  ]
);

checkResultAndPrintIncorrectAnswer(
  calculateLeaderboardPlaces(
    [
      { userId: "id3", score: 1 },
      { userId: "id2", score: 2 },
      { userId: "id1", score: 3 },
    ],
    { firstPlaceMinScore: 100, secondPlaceMinScore: 50, thirdPlaceMinScore: 10 }
  ),
  [
    { userId: "id3", place: 6 },
    { userId: "id2", place: 5 },
    { userId: "id1", place: 4 },
  ]
);

checkResultAndPrintIncorrectAnswer(
  calculateLeaderboardPlaces(
    [
      { userId: "id1", score: 100 },
      { userId: "id2", score: 3 },
      { userId: "id3", score: 2 },
      { userId: "id4", score: 1 },
    ],
    { firstPlaceMinScore: 100, secondPlaceMinScore: 50, thirdPlaceMinScore: 10 }
  ),
  [
    { userId: "id1", place: 1 },
    { userId: "id2", place: 4 },
    { userId: "id3", place: 5 },
    { userId: "id4", place: 6 },
  ]
);

checkResultAndPrintIncorrectAnswer(
  calculateLeaderboardPlaces([{ userId: "id1", score: 55 }], {
    firstPlaceMinScore: 100,
    secondPlaceMinScore: 50,
    thirdPlaceMinScore: 10,
  }),
  [{ userId: "id1", place: 2 }]
);

checkResultAndPrintIncorrectAnswer(
  calculateLeaderboardPlaces(
    [
      { userId: "id1", score: 55 },
      { userId: "id2", score: 100 },
    ],
    {
      firstPlaceMinScore: 100,
      secondPlaceMinScore: 50,
      thirdPlaceMinScore: 10,
    }
  ),
  [
    { userId: "id1", place: 2 },
    { userId: "id2", place: 1 },
  ]
);

checkResultAndPrintIncorrectAnswer(
  calculateLeaderboardPlaces(
    [
      { userId: "id1", score: 51 },
      { userId: "id2", score: 1000 },
      { userId: "id3", score: 9 },
      { userId: "id4", score: 1001 },
      { userId: "id5", score: 52 },
    ],
    {
      firstPlaceMinScore: 100,
      secondPlaceMinScore: 50,
      thirdPlaceMinScore: 10,
    }
  ),
  [
    { userId: "id1", place: 4 },
    { userId: "id2", place: 2 },
    { userId: "id3", place: 5 },
    { userId: "id4", place: 1 },
    { userId: "id5", place: 3 },
  ]
);

checkResultAndPrintIncorrectAnswer(
  calculateLeaderboardPlaces(
    [
      { userId: "id1", score: 1 },
      { userId: "id2", score: 2 },
      { userId: "id3", score: 3 },
      { userId: "id4", score: 1001 },
      { userId: "id5", score: 52 },
    ],
    {
      firstPlaceMinScore: 10,
      secondPlaceMinScore: 9,
      thirdPlaceMinScore: 8,
    }
  ),
  [
    { userId: "id1", place: 6 },
    { userId: "id2", place: 5 },
    { userId: "id3", place: 4 },
    { userId: "id4", place: 1 },
    { userId: "id5", place: 2 },
  ]
);

checkResultAndPrintIncorrectAnswer(
  calculateLeaderboardPlaces(
    [
      { userId: "id1", score: 1 },
      { userId: "id2", score: 2 },
      { userId: "id3", score: 3 },
      { userId: "id4", score: 4 },
      { userId: "id5", score: 5 },
    ],
    {
      firstPlaceMinScore: 10,
      secondPlaceMinScore: 9,
      thirdPlaceMinScore: 8,
    }
  ),
  [
    { userId: "id1", place: 8 },
    { userId: "id2", place: 7 },
    { userId: "id3", place: 6 },
    { userId: "id4", place: 5 },
    { userId: "id5", place: 4 },
  ]
);

// функция-helper, ее модифицировать не нужно
function checkResult(answer, correctAnswer) {
  if (!answer) return false;
  if (!Array.isArray(answer)) return false;
  if (answer.length !== correctAnswer.length) return false;

  for (let i = 0; i < correctAnswer.length; i++) {
    const correctAnswerElement = correctAnswer[i];

    const answerElement = answer.find(
      (x) => x.userId === correctAnswerElement.userId
    );

    if (!answerElement) return false;

    if (String(answerElement.place) !== String(correctAnswerElement.place))
      return false;
  }

  return true;
}

/**
 * @param {string} placeName 
 * @returns {string}
 */
function getPlaceByPlaceName(placeName) {
  if (placeName === "firstPlaceMinScore") return '1';
  if (placeName === "secondPlaceMinScore") return '2';
  if (placeName === "thirdPlaceMinScore") return '3';
  return placeName;
}

/**
 *
 * @param {MinScores} minScores
 * @returns {MinScoreArr}
 */
function mapMinScoresToArray(minScores) {
  return Object.entries(minScores).map(([key, value]) => [
    getPlaceByPlaceName(key),
    value,
  ]);
}
