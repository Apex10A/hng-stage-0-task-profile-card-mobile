import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Platform,
  Switch,
} from 'react-native';
import useTheme from '@/components/useTheme';
import { useThemeContext } from '@/providers/theme-context';
import { PraiseHeading } from '@/components/PraiseHeading';
import { PraiseText } from '@/components/PraiseText';

export default function SettingsScreen() {
  const { colors, isDark } = useTheme();
  const { toggleTheme, theme } = useThemeContext();

  const handleAboutMe = () => {
    Linking.openURL('https://pafolabi.dev');
  };

  const handlePrivacy = () => {
    Linking.openURL('https://pafolabi.dev/privacy');
  };

  const handleTerms = () => {
    Linking.openURL('https://pafolabi.dev/terms');
  };

  const handleSendFeedback = () => {
    Linking.openURL('mailto:pafolabi740@gmail.com?subject=Portfolio App Feedback');
  };

  const SettingRow = ({ label, onPress, showArrow = true, children }) => (
    <TouchableOpacity
      style={[
        styles.settingRow,
        {
          borderBottomColor: isDark
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.05)',
        },
      ]}
      onPress={onPress}
      activeOpacity={children ? 1 : 0.6}
    >
      <View style={styles.settingContent}>
        <View style={styles.settingTextWrapper}>
          <PraiseText style={[styles.settingLabel, { color: colors.text }]}>
            {label}
          </PraiseText>
        </View>
      </View>
      {children ? children : showArrow && (
        <PraiseText style={[styles.arrow, { color: colors.textMuted }]}>
          →
        </PraiseText>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        contentContainerStyle={[styles.scrollContent, { paddingBottom: 100 }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <PraiseHeading style={[styles.title, { color: colors.text }]}>
            Settings
          </PraiseHeading>
          <PraiseText style={[styles.subtitle, { color: colors.textMuted }]}>
            Customize your experience
          </PraiseText>
        </View>
        <View style={styles.section}>
          <PraiseText
            style={[styles.sectionHeader, { color: colors.primary }]}
          >
            APPEARANCE
          </PraiseText>

          <View
            style={[
              styles.sectionContent,
              { backgroundColor: colors.surface },
            ]}
          >
            <SettingRow
              label={`Theme: ${theme === 'dark' ? 'Dark' : 'Light'}`}
              showArrow={false}
              onPress={() => {}}
            >
              <Switch
                value={theme === 'dark'}
                onValueChange={toggleTheme}
                trackColor={{ false: '#ccc', true: colors.primary }}
                thumbColor={colors.primary}
                style={{
                  marginLeft: 'auto',
                  transform: Platform.OS === 'android' ? [{ scaleX: 0.8 }, { scaleY: 0.8 }] : [],
                }}
              />
            </SettingRow>
          </View>
        </View>

       
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    marginBottom: 28,
  },
  title: {
    fontSize: 32,
    marginBottom: 4,
    fontFamily: 'ClashGrotesk-Bold',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'ClashGrotesk-Regular',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
    letterSpacing: 0.5,
    fontFamily: 'ClashGrotesk-Semibold',
  },
  sectionContent: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
  },
  settingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    fontSize: 20,
    marginRight: 12,
    width: 24,
    textAlign: 'center',
  },
  settingTextWrapper: {
    flex: 1,
  },
  settingLabel: {
    fontSize: 15,
    fontFamily: 'ClashGrotesk-Medium',
  },
  arrow: {
    fontSize: 18,
    marginLeft: 12,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 24,
    marginTop: 16,
    gap: 4,
  },
  footerText: {
    fontSize: 12,
    fontFamily: 'ClashGrotesk-Regular',
  },
});