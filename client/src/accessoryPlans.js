const accessories = {
  arms: {
    day1: [
      'Incline DB Press (Optional)',
      'Rowing Variant',
      'Pull-ups SS Tricep push down (Triceps 4 x 15)',
      'DB Bicep Curls 4 x 10-12',
    ],
    day2: ['Hamstring/Quad Accessory based on weakness', 'Abs'],
    day3: [
      'Cable Crossovers (optional)',
      'Facepulls SS Hammer Curls 3 x 12 - 15',
      'Lateral raises',
    ],
    day4: ['Rowing Variant', 'Pull-ups', 'Abs'],
    day5: [
      'Incline DB Curls (Or preacher curls) 4 x 6-8',
      'Facepulls SS OH Tricep Extension (Of your choice. DB/BB/Cable) 4 x 8-10',
      'DB Curls (Slow) 4 x 10 - 12',
    ],
  },
};

const dailySplits = {
  '5day': [
    {
      day: 'Monday',
      lifts: ['Bench', 'OHP'],
      baseLift: ['benchMax', 'ohpMax'],
      t1Weights: [0.65, 0.75, 0.85, 0.85, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [8, 6, 4, 4, 4, 5, 6, 7, '8+'],
      t2Weights: [0.5, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: 'Tuesday',
      lifts: ['Squat', 'Sumo Dead'],
      baseLift: ['squatMax', 'deadliftMax'],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, '1+', 3, 3, 3, 5, 5, '5+'],
      t2Weights: [0.5, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
      t2Reps: [5, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: 'Wednesday',
      lifts: ['OHP', 'Incline Bench'],
      baseLift: ['ohpMax', 'benchMax'],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, '1+', 3, 3, 3, 5, 5, '5+'],
      t2Weights: [0.4, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: 'Thursday',
      lifts: ['Deadlift', 'Front Squat'],
      baseLift: ['deadliftMax', 'squatMax'],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, '1+', 3, 3, 3, 3, 3, '3+'],
      t2Weights: [0.35, 0.45, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55],
      t2Reps: [5, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: 'Friday',
      lifts: ['Bench', 'Close-Grip Bench'],
      baseLift: ['benchMax', 'benchMax'],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, '1+', 3, 5, 3, 5, 3, '5+'],
      t2Weights: [0.4, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8],
    },
  ],
  '4day': [
    {
      day: 'Monday',
      lifts: ['Bench', 'OHP'],
      baseLift: ['benchMax', 'ohpMax'],
      t1Weights: [0.65, 0.75, 0.85, 0.85, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [8, 6, 4, 4, 4, 5, 6, 7, '8+'],
      t2Weights: [0.5, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: 'Tuesday',
      lifts: ['Squat', 'Sumo Dead'],
      baseLift: ['squatMax', 'deadliftMax'],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, '1+', 3, 3, 3, 5, 5, '5+'],
      t2Weights: [0.5, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
      t2Reps: [5, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: 'Thursday',
      lifts: ['Deadlift', 'Front Squat'],
      baseLift: ['deadliftMax', 'squatMax'],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, '1+', 3, 3, 3, 3, 3, '3+'],
      t2Weights: [0.35, 0.45, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55],
      t2Reps: [5, 5, 3, 5, 7, 4, 6, 8],
    },
    {
      day: 'Friday',
      lifts: ['Bench', 'Close-Grip Bench'],
      baseLift: ['benchMax', 'benchMax'],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, '1+', 3, 5, 3, 5, 3, '5+'],
      t2Weights: [0.4, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8],
    },
  ],
};

export { accessories, dailySplits };