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
import { setScreen } from '../store/appSlice';
import { colors, spacing, fontSize, borderRadius } from '../theme';

const RoomDetailScreen = () => {
  const dispatch = useAppDispatch();
  const currentRoom = useAppSelector((state) => state.app.currentRoom);
  const currentUser = useAppSelector((state) => state.app.currentUser);

  if (!currentRoom) return null;

  const handleBack = () => {
    dispatch(setScreen('home'));
  };

  const avatarColors = [
    '#E4C1F9', // Pink
    '#FF6B6B', // Red
    '#6B9BD1', // Blue
    '#7AC29A', // Green
    '#FFBE76', // Orange
    '#FF7AB5', // Rose
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.userAvatar}>
          <Text style={styles.avatarEmoji}>{currentUser.avatar}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Room Info Card */}
      <View style={styles.roomCard}>
        <View style={styles.roomHeader}>
          <Text style={styles.category}>{currentRoom.category}</Text>
          <Text style={styles.menuDots}>•••</Text>
        </View>
        <Text style={styles.roomTitle}>{currentRoom.title}</Text>

        {/* Participants Grid */}
        <ScrollView 
          style={styles.participantsScroll}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.participantsGrid}>
            {currentRoom.participants.map((user, index) => (
              <View key={user.id} style={styles.participantItem}>
                <View style={[
                  styles.participantAvatar,
                  { backgroundColor: avatarColors[index % avatarColors.length] }
                ]}>
                  <Text style={styles.avatarEmoji}>{user.avatar}</Text>
                  {user.isSpeaking && (
                    <View style={styles.speakerBadge}>
                      <Text style={styles.micIcon}>🎤</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.participantName} numberOfLines={2}>
                  {user.name}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Bottom Actions */}
      <View style={styles.bottomActions}>
        <TouchableOpacity style={styles.leaveButton}>
          <Text style={styles.leaveEmoji}>😊</Text>
          <Text style={styles.leaveText}>Leave room</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>📤</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>✋</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreIcon}>•••</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4E4EC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    paddingTop: spacing.xl,
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.avatarBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarEmoji: {
    fontSize: 26,
  },
  menuButton: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 20,
    color: colors.textPrimary,
  },
  roomCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 24,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
    padding: spacing.lg,
    paddingTop: spacing.xl,
  },
  roomHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  category: {
    fontSize: 11,
    color: '#999',
    fontWeight: '600',
    letterSpacing: 1,
  },
  menuDots: {
    fontSize: 20,
    color: colors.textPrimary,
    fontWeight: 'bold',
  },
  roomTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: spacing.xl,
  },
  participantsScroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.lg,
  },
  participantsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  participantItem: {
    width: '31%',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  participantAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
    position: 'relative',
  },
  speakerBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.textPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.white,
  },
  micIcon: {
    fontSize: 16,
  },
  participantName: {
    fontSize: 14,
    color: colors.textPrimary,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 18,
  },
  bottomActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    backgroundColor: '#E4E4EC',
  },
  leaveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE8F0',
    borderRadius: 28,
    paddingHorizontal: 22,
    paddingVertical: 14,
  },
  leaveEmoji: {
    fontSize: 20,
    marginRight: spacing.sm,
  },
  leaveText: {
    fontSize: 16,
    color: '#E91E63',
    fontWeight: '600',
  },
  actionButton: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 26,
  },
  moreButton: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreIcon: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    letterSpacing: 2,
  },
});

export default RoomDetailScreen;
