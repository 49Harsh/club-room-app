import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useAppDispatch } from '../store/hooks';
import { setScreen } from '../store/appSlice';
import { colors, spacing, fontSize, borderRadius } from '../theme';

const UsernameScreen = () => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');

  const handleContinue = () => {
    dispatch(setScreen('home'));
  };

  const handleBack = () => {
    dispatch(setScreen('name'));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <View style={styles.backIcon} />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Pick a username</Text>
        <Text style={styles.subtitle}>Choose a distinct username</Text>

        {/* Input Field */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="@Superboy"
            placeholderTextColor={colors.textTertiary}
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleContinue}>
          <Text style={styles.submitButtonText}>Let's Go</Text>
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
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  backButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.iconBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 10,
    borderTopWidth: 7,
    borderBottomWidth: 7,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: colors.textPrimary,
    marginLeft: -3,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    paddingTop: 60,
  },
  title: {
    fontSize: fontSize.xxl,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    marginBottom: 60,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 40,
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: 22,
    fontSize: fontSize.lg,
    marginBottom: spacing.lg,
    color: colors.textPrimary,
  },
  submitButton: {
    backgroundColor: colors.buttonPrimary,
    borderRadius: borderRadius.xl,
    paddingVertical: spacing.lg,
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 80,
  },
  submitButtonText: {
    color: colors.buttonText,
    fontSize: fontSize.xl,
    fontWeight: '600',
  },
});

export default UsernameScreen;
