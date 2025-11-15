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
import { setScreen, updateUserName } from '../store/appSlice';
import { colors, spacing, fontSize, borderRadius } from '../theme';

const NameScreen = () => {
  const dispatch = useAppDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleContinue = () => {
    if (firstName && lastName) {
      dispatch(updateUserName({ firstName, lastName }));
      dispatch(setScreen('username'));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <View style={styles.backIcon} />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>What's your full name?</Text>
        <Text style={styles.subtitle}>People use real names on Club</Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="First"
            placeholderTextColor={colors.textTertiary}
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Last"
            placeholderTextColor={colors.textTertiary}
            value={lastName}
            onChangeText={setLastName}
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

export default NameScreen;
