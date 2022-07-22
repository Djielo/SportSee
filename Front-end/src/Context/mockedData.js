const USER_MAIN_DATA = [
  {
    id: 24,
    userInfos: {
      firstName: "Thomas",
      age: 26,
    },
    score: 0.70,
    keyData: {
      calorieCount: 1430,
      proteinCount: 135,
      carbohydrateCount: 250,
      lipidCount: 40,
    },
  }
];

const USER_ACTIVITY = [
  {
    userId: 24,
    sessions: [
      {
        day: "2020-07-01",
        kilogram: 80,
        calories: 350,
      },
      {
        day: "2020-07-02",
        kilogram: 79,
        calories: 220,
      },
      {
        day: "2020-07-03",
        kilogram: 78,
        calories: 280,
      },
      {
        day: "2020-07-04",
        kilogram: 77,
        calories: 290,
      },
      {
        day: "2020-07-05",
        kilogram: 76,
        calories: 160,
      },
      {
        day: "2020-07-06",
        kilogram: 76,
        calories: 162,
      },
      {
        day: "2020-07-07",
        kilogram: 78,
        calories: 390,
      },
    ],
  }
];

const USER_AVERAGE_SESSIONS = [
  {
    userId: 24,
    sessions: [
      {
        day: 1,
        sessionLength: 45,
      },
      {
        day: 2,
        sessionLength: 30,
      },
      {
        day: 3,
        sessionLength: 45,
      },
      {
        day: 4,
        sessionLength: 15,
      },
      {
        day: 5,
        sessionLength: 20,
      },
      {
        day: 6,
        sessionLength: 50,
      },
      {
        day: 7,
        sessionLength: 60,
      },
    ],
  }
];

const USER_PERFORMANCE = [
  {
    userId: 24,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 120,
        kind: 1,
      },
      {
        value: 140,
        kind: 2,
      },
      {
        value: 130,
        kind: 3,
      },
      {
        value: 130,
        kind: 4,
      },
      {
        value: 90,
        kind: 5,
      },
      {
        value: 100,
        kind: 6,
      },
    ],
  }
];

export default { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE };
