# Clubhouse Clone - React Native Expo App

A full-featured Clubhouse-style social audio app built with React Native, Expo, TypeScript, and Redux.

## 🎯 Features

### Screens
1. **Name Input Screen** - Collect user's first and last name
2. **Username Screen** - Choose a unique username
3. **Home Screen** - Browse available rooms with:
   - User profile header with greeting
   - Scrollable room cards
   - Room categories, titles, and participant counts
   - Avatar previews
   - Bottom navigation
4. **Room Detail Screen** - View all participants in a room:
   - Grid layout of participants
   - Speaker indicators
   - Room controls (leave, raise hand, etc.)

### Technical Features
- ✅ **TypeScript** - Full type safety
- ✅ **Redux Toolkit** - State management with dummy data
- ✅ **Theme System** - Centralized colors, spacing, and typography
- ✅ **Component Architecture** - Modular and reusable components
- ✅ **Smooth Navigation** - Screen-based navigation without external libraries

## 📁 Project Structure

```
club-name-ui/
├── src/
│   ├── screens/
│   │   ├── NameScreen.tsx         # Name input onboarding
│   │   ├── UsernameScreen.tsx     # Username selection
│   │   ├── HomeScreen.tsx         # Main rooms feed
│   │   └── RoomDetailScreen.tsx   # Room participant view
│   ├── store/
│   │   ├── types.ts               # TypeScript interfaces
│   │   ├── appSlice.ts            # Redux slice with dummy data
│   │   ├── store.ts               # Redux store configuration
│   │   └── hooks.ts               # Typed Redux hooks
│   └── theme.ts                   # Theme constants (colors, spacing, fonts)
├── App.tsx                        # Main app with Redux Provider
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo Go app (for mobile testing)
- Android Studio / Xcode (for emulators)

### Installation

The project is already set up with all dependencies installed.

### Running the App

#### Start Expo Development Server:
```bash
cd club-name-ui
npx expo start
```

#### Run on Different Platforms:

**Mobile Device (Recommended):**
- Scan the QR code with Expo Go app

**Android Emulator:**
```bash
Press 'a' in the terminal
```

**iOS Simulator (macOS only):**
```bash
Press 'i' in the terminal
```

**Web Browser:**
```bash
# First install web dependencies:
npx expo install react-dom react-native-web

# Then press 'w' in the terminal
```

## 🎨 Theme System

The app uses a centralized theme system located in `src/theme.ts`:

```typescript
// Easy to customize!
export const colors = {
  background: '#F5F5F5',
  buttonPrimary: '#8BC49C',
  textPrimary: '#000000',
  // ... and more
};
```

To change the app's appearance, simply modify the values in `theme.ts`.

## 🗂️ State Management

The app uses Redux Toolkit for state management:

- **Current Screen**: Tracks which screen is displayed
- **Rooms**: Dummy data for room listings
- **Current User**: User profile information
- **Current Room**: Selected room details

## 🔄 Navigation Flow

```
Name Screen → Username Screen → Home Screen → Room Detail Screen
    ↑              ↑                              ↓
    └──────────────┴──────────────────────────────┘
              (Back navigation supported)
```

## 📦 Dependencies

- **expo** - React Native framework
- **react-native** - Mobile app framework
- **typescript** - Type safety
- **@reduxjs/toolkit** - State management
- **react-redux** - Redux React bindings

## 🛠️ Development

### Adding New Screens
1. Create screen component in `src/screens/`
2. Add screen type to `AppState['currentScreen']` in `src/store/types.ts`
3. Update `AppNavigator` in `App.tsx`

### Modifying Dummy Data
Edit the `dummyRooms` array in `src/store/appSlice.ts`

### Changing Theme
Update values in `src/theme.ts`

## 📱 Screenshots

The app implements the following screens:
- Name input with validation
- Username selection
- Home feed with scrollable room cards
- Room detail with participant grid

## 🤝 Contributing

Feel free to customize and extend this project!

## 📄 License

MIT License - feel free to use this project however you'd like!
