import {observer} from 'mobx-react';
import React from 'react';
import 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {Button} from '../components/Button';
import {TouchableOpacity} from 'react-native';

const Wrapper = styled.SafeAreaView`
  justify-content: center;
  flex: 1;
  margin: 40px;
`;

const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 36px;
  margin: 20px;
  text-align: center;
`;

const CreditText = styled.Text`
  font-size: 18px;
  text-align: center;
  color: rgb(80, 77, 210);
`;

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Content>
        <Title>Guess the Repo</Title>
        <Button label="Play!" onPress={() => navigation.navigate('Quiz')} />
      </Content>
      <TouchableOpacity onPress={() => navigation.navigate('Credits')}>
        <CreditText>Credits</CreditText>
      </TouchableOpacity>
    </Wrapper>
  );
};

export default observer(HomeScreen);
