import type { SeatsType } from './seatingMockData';
import React, { useEffect, useRef, useState } from 'react';
import {
  DisabledSeat,
  flatListContainerStyle,
  ScreenImage,
  ScreenText,
  scrollViewContainerStyle,
  SeatIcon,
  SeatingAreaContainer,
} from './styles';
import Screen from '../../assets/images/ScreenImage.png';
import { seatMaker } from './seatingMockData';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native';
import SeatIconPNG from '../../assets/icons/SeatIcon.png';
import theme from '../../theme';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const SeatingArea = () => {
  const [seats, setSeats] = useState<SeatsType[]>(seatMaker());
  const scrollViewRef = useRef<ScrollView | null>(null);

  useEffect(() => {
    setTimeout(() => {
      scrollViewRef.current?.scrollTo({
        x: responsiveWidth(12),
        animated: true,
      });
    }, 1500);
  }, []);

  const selectSeat = (seat: SeatsType) => {
    const updatedSeat = seats.map((singleSeat) =>
      singleSeat.seatID === seat.seatID
        ? { ...singleSeat, selected: !singleSeat.selected }
        : singleSeat
    );
    setSeats(updatedSeat);
  };

  return (
    <SeatingAreaContainer>
      <ScreenImage source={Screen} resizeMode="contain" />
      <ScreenText>{'SCREEN'}</ScreenText>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        contentContainerStyle={scrollViewContainerStyle}
      >
        <FlatList
          scrollEnabled={false}
          contentContainerStyle={flatListContainerStyle}
          numColumns={24}
          keyExtractor={(item) => item.seatID}
          data={seats}
          renderItem={({ item }) => {
            const lastLetter = item.seatID[item.seatID.length - 1];
            const rightSpaceSeat = lastLetter === 'E' || lastLetter === 'S';
            if (item.disabled) return <DisabledSeat />;
            return (
              <TouchableOpacity
                onPress={() => selectSeat(item)}
                disabled={item.booked}
              >
                <SeatIcon
                  rightSpaceSeat={rightSpaceSeat}
                  source={SeatIconPNG}
                  resizeMode={'contain'}
                  tintColor={
                    item.booked
                      ? theme.colors.bookedSeat
                      : item.selected
                      ? theme.colors.yellow
                      : item.type === 'vip'
                      ? theme.colors.blue
                      : theme.colors.purple
                  }
                />
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </SeatingAreaContainer>
  );
};

export default SeatingArea;
