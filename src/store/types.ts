export interface User {
  id: string;
  name: string;
  avatar: string;
  isSpeaking?: boolean;
}

export interface Room {
  id: string;
  category: string;
  title: string;
  participants: User[];
  totalParticipants: number;
  totalSpeakers: number;
  backgroundColor: string;
}

export interface AppState {
  currentUser: User;
  rooms: Room[];
  currentScreen: 'name' | 'username' | 'home' | 'roomDetail';
  currentRoom: Room | null;
}
