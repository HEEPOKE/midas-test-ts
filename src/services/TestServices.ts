const isDigisible = (value: any): boolean => {
  const digits = value.toString().split("").map(Number);

  if (new Set(digits).size !== digits.length) {
    return false;
  }

  if (digits.includes(0)) {
    return false;
  }

  for (const digit of digits) {
    if (value % digit !== 0) {
      return false;
    }
  }

  return true;
};

const getHandScore = (value: any): number => {
  const cards = value.split(" ");
  let score = 0;

  const rankCount = new Map<string, number>();
  for (const card of cards) {
    const rank = card.substring(1);
    rankCount.set(rank, (rankCount.get(rank) ?? 0) + 1);
  }

  for (const [rank, count] of rankCount.entries()) {
    if (count === 3) {
      score = rank === "A" ? 35.5 : 35;
      return score;
    }
  }

  const suitCount = new Map<string, number>();
  for (const card of cards) {
    const suit = card.substring(0, 1);
    const rank = card.substring(1);
    if (!suitCount.has(suit)) {
      suitCount.set(suit, 0);
    }
    const cardValue =
      rank === "A"
        ? 11
        : rank === "J" || rank === "Q" || rank === "K"
        ? 10
        : Number(rank);
    suitCount.set(suit, suitCount.get(suit)! + cardValue);
  }

  for (const [suit, suitScore] of suitCount.entries()) {
    score = Math.max(score, suitScore);
  }

  return score;
};

const clockAngle = (value: any): number => {
  const [hours, minutes] = value.split(":").map(Number);
  const hourAngle = (hours % 12) * 30 + minutes / 2;
  const minuteAngle = minutes * 6;
  let angleDiff = Math.abs(hourAngle - minuteAngle);
  angleDiff = Math.min(angleDiff, 360 - angleDiff);
  return Math.round(angleDiff);
};

export const testServices = {
  isDigisible,
  getHandScore,
  clockAngle,
};
