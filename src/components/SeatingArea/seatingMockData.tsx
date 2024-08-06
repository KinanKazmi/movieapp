export type SeatsType = {
  seatID: string;
  type: string;
  price: number;
  booked: boolean;
  disabled: boolean;
  selected: boolean;
};

const disabled = [
  '1A',
  '1B',
  '1C',
  '1V',
  '1W',
  '1X',
  '2A',
  '3A',
  '4A',
  '2X',
  '3X',
  '4X',
];

const disabledSeats = (id: string) => {
  return disabled.find((dis) => dis.includes(id));
};

export const seatMaker = () => {
  const numArray = [];
  for (let x = 1; x < 11; x++) {
    numArray.push(x);
  }
  const charArray: string[] = [];
  for (let x = 'A'.charCodeAt(0); x < 'Y'.charCodeAt(0); x++) {
    charArray.push(String.fromCharCode(x));
  }
  const seats: SeatsType[] = [];
  for (const num of numArray) {
    for (const char of charArray) {
      const seatID = '' + num + char;
      seats.push({
        seatID,
        type: num === 10 ? 'regular' : 'vip',
        price: num === 10 ? 150 : 50,
        booked: Math.random() < 0.2, // 20% chance of true
        disabled: !!disabledSeats(seatID),
        selected: false,
      });
    }
  }
  return seats;
};
