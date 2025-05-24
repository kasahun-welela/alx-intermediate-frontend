interface MajorCredits {
  credits: number;
  __brand: "MajorCredits";
}

interface MinorCredits {
  credits: number;
  __brand: "MinorCredits";
}

export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MajorCredits",
  };
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MinorCredits",
  };
}

const major1: MajorCredits = { credits: 30, __brand: "MajorCredits" };
const major2: MajorCredits = { credits: 20, __brand: "MajorCredits" };

const minor1: MinorCredits = { credits: 5, __brand: "MinorCredits" };
const minor2: MinorCredits = { credits: 15, __brand: "MinorCredits" };

console.log(sumMajorCredits(major1, major2));
console.log(sumMinorCredits(minor1, minor2));
