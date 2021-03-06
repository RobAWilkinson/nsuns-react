const dailySplits = {
  "5day": [
    {
      day: "Monday",
      lifts: ["Bench", "OHP"],
      baseLift: ["bench", "ohp"],
      t1Weights: [0.65, 0.75, 0.85, 0.85, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [8, 6, 4, 4, 4, 5, 6, 7, "8+"],
      t2Weights: [0.5, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8]
    },
    {
      day: "Tuesday",
      lifts: ["Squat", "Sumo Dead"],
      baseLift: ["squat", "deadlift"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 3, 3, 5, 5, "5+"],
      t2Weights: [0.5, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
      t2Reps: [5, 5, 3, 5, 7, 4, 6, 8]
    },
    {
      day: "Wednesday",
      lifts: ["OHP", "Incline Bench"],
      baseLift: ["ohp", "bench"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 3, 3, 5, 5, "5+"],
      t2Weights: [0.4, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8]
    },
    {
      day: "Thursday",
      lifts: ["Deadlift", "Front Squat"],
      baseLift: ["deadlift", "squat"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 3, 3, 3, 3, "3+"],
      t2Weights: [0.35, 0.45, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55],
      t2Reps: [5, 5, 3, 5, 7, 4, 6, 8]
    },
    {
      day: "Friday",
      lifts: ["Bench", "Close-Grip Bench"],
      baseLift: ["bench", "bench"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 5, 3, 5, 3, "5+"],
      t2Weights: [0.4, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8]
    }
  ],
  "4day": [
    {
      day: "Monday",
      lifts: ["Bench", "OHP"],
      baseLift: ["bench", "ohp"],
      t1Weights: [0.65, 0.75, 0.85, 0.85, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [8, 6, 4, 4, 4, 5, 6, 7, "8+"],
      t2Weights: [0.5, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8]
    },
    {
      day: "Tuesday",
      lifts: ["Squat", "Sumo Dead"],
      baseLift: ["squat", "deadlift"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 3, 3, 5, 5, "5+"],
      t2Weights: [0.5, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
      t2Reps: [5, 5, 3, 5, 7, 4, 6, 8]
    },
    {
      day: "Thursday",
      lifts: ["Deadlift", "Front Squat"],
      baseLift: ["deadlift", "squat"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 3, 3, 3, 3, "3+"],
      t2Weights: [0.35, 0.45, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55],
      t2Reps: [5, 5, 3, 5, 7, 4, 6, 8]
    },
    {
      day: "Friday",
      lifts: ["Bench", "Close-Grip Bench"],
      baseLift: ["bench", "bench"],
      t1Weights: [0.75, 0.85, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65],
      t1Reps: [5, 3, "1+", 3, 5, 3, 5, 3, "5+"],
      t2Weights: [0.4, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6],
      t2Reps: [6, 5, 3, 5, 7, 4, 6, 8]
    }
  ]
};

export default dailySplits;
