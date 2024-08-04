import React, { useState } from 'react';
import { SafeView, styles } from './styles';
import { Icon, SearchBar } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { useFetchUpcomingQuery } from '../../redux/apis';
import { Loader } from '../../components/Loader';
import { FlatList } from 'react-native';
import CategoryListItem from './CategoryListItem';

const SearchPage = () => {
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = useState<string>('');
  const { data, isLoading } = useFetchUpcomingQuery();

  const handleSearchChange = (text: string): void => {
    setSearchValue(text);
  };

  return (
    <SafeView>
      <SearchBar
        placeholder="TV shows, movies and more"
        onChangeText={handleSearchChange}
        value={searchValue}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.input}
        searchIcon={<Icon name="search" />}
        clearIcon={<Icon name="close" onPress={() => setSearchValue('')} />}
        onBlur={() => !searchValue && navigation.goBack()}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          numColumns={2}
          contentContainerStyle={styles.flatListContantContainer}
          data={data?.results}
          renderItem={({ item }) => (
            <CategoryListItem
              item={item}
              onPress={() => {
                console.log('pressed');
              }}
            />
          )}
        />
      )}
    </SafeView>
  );
};

export default SearchPage;
