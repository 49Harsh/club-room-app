import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { setScreen, setCurrentRoom } from '../store/appSlice';
import { Room } from '../store/types';
import { colors, spacing, fontSize, borderRadius } from '../theme';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const rooms = useAppSelector((state) => state.app.rooms);
  const currentUser = useAppSelector((state) => state.app.currentUser);

  const handleRoomPress = (room: Room) => {
    dispatch(setCurrentRoom(room));
    dispatch(setScreen('roomDetail'));
  };

  const RoomCard = ({ room }: { room: Room }) => (
    <TouchableOpacity
      style={[styles.roomCard, { backgroundColor: room.backgroundColor }]}
      onPress={() => handleRoomPress(room)}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.category}>{room.category}</Text>
        <Text style={styles.menuDots}>•••</Text>
      </View>

      <Text style={styles.roomTitle}>{room.title}</Text>

      <View style={styles.cardBody}>
        <View style={styles.leftSection}>
          <View style={styles.avatarsContainer}>
            {room.participants.slice(0, 3).map((user, index) => (
              <View
                key={user.id}
                style={[
                  styles.avatar,
                  { marginLeft: index > 0 ? -12 : 0, zIndex: 3 - index },
                ]}
              >
                <Text style={styles.avatarText}>{user.avatar}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.middleSection}>
          {room.participants.slice(0, 2).map((user) => (
            <View key={user.id} style={styles.participantRow}>
              <Text style={styles.participantName}>{user.name}</Text>
              {user.isSpeaking && <Text style={styles.speakerIcon}>💬</Text>}
            </View>
          ))}
        </View>
      </View>

      <View style={styles.cardFooter}>
        <View style={styles.stats}>
          <View style={styles.statBadge}>
            <Text style={styles.statIcon}>👤</Text>
            <Text style={styles.statText}>{room.totalParticipants}</Text>
          </View>
          <View style={styles.statBadge}>
            <Text style={styles.statIcon}>💬</Text>
            <Text style={styles.statText}>{room.totalSpeakers}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.userAvatar}>
            <Text style={styles.avatarText}>{currentUser.avatar}</Text>
          </View>
          <View>
            <Text style={styles.greeting}>Good morning</Text>
            <Text style={styles.userName}>{currentUser.name}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Rooms Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.emoji}>🏠</Text>
        <Text style={styles.title}>Room</Text>
      </View>
      <View style={styles.underline} />

      {/* Rooms List */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <View style={styles.navIconActive}>
          <TouchableOpacity style={styles.navButtonActive}>
            <Text style={styles.navIcon}>🏠</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navIcon}>📱</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navIcon}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addIcon}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    paddingTop: spacing.xl,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.avatarBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  avatarText: {
    fontSize: 28,
  },
  greeting: {
    fontSize: 15,
    color: '#999',
    marginBottom: 2,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  searchButton: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    fontSize: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    paddingTop: spacing.lg,
  },
  emoji: {
    fontSize: 40,
    marginRight: spacing.sm,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  underline: {
    height: 4,
    width: 240,
    backgroundColor: colors.buttonPrimary,
    alignSelf: 'center',
    marginBottom: spacing.md,
    borderRadius: 2,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
  roomCard: {
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  category: {
    fontSize: 11,
    color: '#999',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  menuDots: {
    fontSize: fontSize.lg,
    color: colors.textPrimary,
    fontWeight: 'bold',
  },
  roomTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  cardBody: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  leftSection: {
    marginRight: spacing.md,
  },
  avatarsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: colors.avatarBackground,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.white,
  },
  middleSection: {
    flex: 1,
    justifyContent: 'center',
  },
  participantRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  participantName: {
    fontSize: 15,
    color: colors.textPrimary,
    fontWeight: '500',
    marginRight: 6,
  },
  speakerIcon: {
    fontSize: 14,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  stats: {
    flexDirection: 'row',
  },
  statBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: spacing.sm,
  },
  statIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  statText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.background,
  },
  navButton: {
    padding: spacing.sm,
  },
  navButtonActive: {
    padding: spacing.sm,
  },
  navIconActive: {
    backgroundColor: colors.buttonPrimary,
    borderRadius: 35,
    paddingHorizontal: 24,
    paddingVertical: 12,
    opacity: 0.25,
  },
  navIcon: {
    fontSize: 28,
  },
  addButton: {
    width: 65,
    height: 65,
    borderRadius: 18,
    backgroundColor: colors.buttonPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    fontSize: 36,
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
