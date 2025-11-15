import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, Room } from './types';
import { colors } from '../theme';

const dummyRooms: Room[] = [
  {
    id: '1',
    category: 'NEWS NEWS 🎉',
    title: '3 Minute News',
    participants: [
      { id: 'u1', name: 'Lena Marsh', avatar: '👤', isSpeaking: true },
      { id: 'u2', name: 'Minerva Spencer', avatar: '👤', isSpeaking: true },
      { id: 'u1a', name: 'Alex Johnson', avatar: '👤', isSpeaking: true },
      { id: 'u1b', name: 'Sarah Chen', avatar: '👤' },
      { id: 'u1c', name: 'Michael Brown', avatar: '👤', isSpeaking: true },
      { id: 'u1d', name: 'Emily Davis', avatar: '👤' },
      { id: 'u1e', name: 'Robert Taylor', avatar: '👤', isSpeaking: true },
      { id: 'u1f', name: 'Lisa Anderson', avatar: '👤' },
      { id: 'u1g', name: 'Daniel Martinez', avatar: '👤' },
      { id: 'u1h', name: 'Jessica White', avatar: '👤', isSpeaking: true },
      { id: 'u1i', name: 'Kevin Park', avatar: '👤' },
      { id: 'u1j', name: 'Amanda Scott', avatar: '👤', isSpeaking: true },
    ],
    totalParticipants: 155,
    totalSpeakers: 3,
    backgroundColor: colors.cardBlue,
  },
  {
    id: '2',
    category: 'BUSINESS ENTREPRENEURSHIP',
    title: 'Live Mastermind',
    participants: [
      { id: 'u3', name: 'Jon Daniels', avatar: '👤', isSpeaking: true },
      { id: 'u4', name: 'Della Guerrero', avatar: '👤', isSpeaking: true },
      { id: 'u5', name: 'Blake Vega', avatar: '👤', isSpeaking: true },
      { id: 'u2a', name: 'Jennifer Lopez', avatar: '👤' },
      { id: 'u2b', name: 'Marcus Williams', avatar: '👤', isSpeaking: true },
      { id: 'u2c', name: 'Nina Patel', avatar: '👤' },
      { id: 'u2d', name: 'Chris Evans', avatar: '👤', isSpeaking: true },
      { id: 'u2e', name: 'Rachel Green', avatar: '👤' },
      { id: 'u2f', name: 'Tom Hardy', avatar: '👤', isSpeaking: true },
      { id: 'u2g', name: 'Sophia Turner', avatar: '👤' },
      { id: 'u2h', name: 'Oliver Smith', avatar: '👤', isSpeaking: true },
      { id: 'u2i', name: 'Emma Watson', avatar: '👤' },
    ],
    totalParticipants: 49,
    totalSpeakers: 12,
    backgroundColor: colors.cardBeige,
  },
  {
    id: '3',
    category: 'TED OFFICIAL',
    title: 'Bagjaveri Hedhunu',
    participants: [
      { id: 'u6', name: 'Christina Norton', avatar: '👤', isSpeaking: true },
      { id: 'u7', name: 'Justin Hart', avatar: '👤', isSpeaking: true },
      { id: 'u3a', name: 'William Clark', avatar: '👤' },
      { id: 'u3b', name: 'Olivia King', avatar: '👤', isSpeaking: true },
      { id: 'u3c', name: 'Ethan Moore', avatar: '👤' },
      { id: 'u3d', name: 'Ava Thompson', avatar: '👤' },
      { id: 'u3e', name: 'Noah Garcia', avatar: '👤', isSpeaking: true },
      { id: 'u3f', name: 'Isabella Martinez', avatar: '👤' },
      { id: 'u3g', name: 'Mason Rodriguez', avatar: '👤' },
      { id: 'u3h', name: 'Sophia Lee', avatar: '👤', isSpeaking: true },
    ],
    totalParticipants: 15,
    totalSpeakers: 2,
    backgroundColor: colors.cardLightBlue,
  },
  {
    id: '4',
    category: 'BE A BOSS',
    title: 'Minute News',
    participants: [
      { id: 'u8', name: 'Patrícia Ribeiro', avatar: '👤', isSpeaking: true },
      { id: 'u9', name: 'Farhad Tarokh', avatar: '👤' },
      { id: 'u10', name: 'Xing Zheng', avatar: '👤', isSpeaking: true },
      { id: 'u11', name: 'Asharaful', avatar: '👤' },
      { id: 'u12', name: 'Jacqueline', avatar: '👤', isSpeaking: true },
      { id: 'u13', name: 'Fátima', avatar: '👤', isSpeaking: true },
      { id: 'u14', name: 'Roman Kutepov', avatar: '👤', isSpeaking: true },
      { id: 'u15', name: 'Nick Bove', avatar: '👤' },
      { id: 'u16', name: 'Sofia Manzano', avatar: '👤', isSpeaking: true },
      { id: 'u17', name: 'David Lee', avatar: '👤' },
      { id: 'u18', name: 'Maria Garcia', avatar: '👤', isSpeaking: true },
      { id: 'u19', name: 'James Wilson', avatar: '👤' },
      { id: 'u20', name: 'Lucas Brown', avatar: '👤', isSpeaking: true },
      { id: 'u21', name: 'Mia Johnson', avatar: '👤' },
      { id: 'u22', name: 'Benjamin Davis', avatar: '👤', isSpeaking: true },
      { id: 'u23', name: 'Charlotte Miller', avatar: '👤' },
      { id: 'u24', name: 'Henry Wilson', avatar: '👤' },
      { id: 'u25', name: 'Amelia Moore', avatar: '👤', isSpeaking: true },
      { id: 'u26', name: 'Alexander Taylor', avatar: '👤' },
      { id: 'u27', name: 'Harper Anderson', avatar: '👤', isSpeaking: true },
      { id: 'u28', name: 'Sebastian Thomas', avatar: '👤' },
      { id: 'u29', name: 'Evelyn Jackson', avatar: '👤' },
      { id: 'u30', name: 'Jack White', avatar: '👤', isSpeaking: true },
    ],
    totalParticipants: 89,
    totalSpeakers: 15,
    backgroundColor: colors.white,
  },
];

const initialState: AppState = {
  currentUser: {
    id: 'me',
    name: 'Marian Marsh',
    avatar: '👤',
  },
  rooms: dummyRooms,
  currentScreen: 'name',
  currentRoom: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setScreen: (state, action: PayloadAction<AppState['currentScreen']>) => {
      state.currentScreen = action.payload;
    },
    setCurrentRoom: (state, action: PayloadAction<Room | null>) => {
      state.currentRoom = action.payload;
    },
    updateUserName: (state, action: PayloadAction<{ firstName: string; lastName: string }>) => {
      state.currentUser.name = `${action.payload.firstName} ${action.payload.lastName}`;
    },
  },
});

export const { setScreen, setCurrentRoom, updateUserName } = appSlice.actions;
export default appSlice.reducer;
