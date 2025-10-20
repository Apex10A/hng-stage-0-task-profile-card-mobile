import React from 'react';
import { View, ScrollView, StyleSheet, Linking, TouchableOpacity, Platform } from 'react-native';
import useTheme from '@/components/useTheme';
import { PraiseHeading } from '@/components/PraiseHeading';
import { PraiseText } from '@/components/PraiseText';
import { useTokens } from '@/constants/theme';

export default function AboutScreen() {
  const { colors, isDark } = useTheme();
  const tokens = useTokens();

  const handleEmailPress = () => {
    Linking.openURL('mailto:pafolabi740@gmail.com');
  };

  const handleGitHub = () => {
    Linking.openURL('https://github.com/Apex10A');
  };

  const handleTwitter = () => {
    Linking.openURL('https://x.com/dev_apexxr');
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        contentContainerStyle={[styles.scrollContent, { paddingBottom: 100 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={[styles.heroCard, { backgroundColor: colors.surface }]}>
          <PraiseHeading style={[styles.heroTitle, { color: colors.text }]}>About Me</PraiseHeading>
          <PraiseText style={[styles.heroParagraph, { color: colors.text }]}>
            Im Praise Afolabi, a product developer who helps clients transform ideas into reality.
          </PraiseText>
        </View>
        <View style={styles.section}>
          <PraiseHeading style={[styles.sectionTitle, { color: colors.text }]}>My Story</PraiseHeading>
          <PraiseText style={[styles.sectionText, { color: colors.textMuted }]}>
            My journey in tech Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis veritatis architecto, ex et in inventore illum possimus consectetur laboriosam repudiandae commodi accusamus, molestiae vitae illo esse sequi provident. Itaque, ratione.
          </PraiseText>
        </View>
        <View style={styles.section}>
          <PraiseHeading style={[styles.sectionTitle, { color: colors.text }]}>Outside of Work</PraiseHeading>
          <PraiseText style={[styles.sectionText, { color: colors.textMuted }]}>
            I am interested in cooking beans and Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem debitis neque deserunt, hic totam commodi?
          </PraiseText>
        </View>

        <View style={[styles.connectCard, { backgroundColor: isDark ? 'rgba(251, 191, 36, 0.1)' : 'rgba(30, 58, 138, 0.08)' }]}>
          <PraiseHeading style={[styles.connectTitle, { color: colors.text }]}>
            Lets Connect
          </PraiseHeading>
          <PraiseText style={[styles.connectText, { color: colors.textMuted }]}>
            Interested in collaborating or just want to chat? Id love to hear from you!
          </PraiseText>

          <View style={styles.socialButtons}>
            <TouchableOpacity
              style={[styles.socialButton, { backgroundColor: colors.primary }]}
              onPress={handleEmailPress}
            >
              <PraiseText style={[styles.socialButtonText, { color: isDark ? '#020617' : '#FFFFFF' }]}>
                Email Me
              </PraiseText>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.socialButton, { borderWidth: 1, borderColor: colors.primary }]}
              onPress={handleGitHub}
            >
              <PraiseText style={[styles.socialButtonText, { color: colors.primary }]}>
                GitHub
              </PraiseText>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.socialButton, { borderWidth: 1, borderColor: colors.primary }]}
              onPress={handleTwitter}
            >
              <PraiseText style={[styles.socialButtonText, { color: colors.primary }]}>
                Twitter
              </PraiseText>
            </TouchableOpacity>
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
  heroCard: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  heroTitle: {
    fontSize: 32,
    marginBottom: 12,
    fontFamily: 'ClashGrotesk-Bold',
  },
  heroParagraph: {
    fontSize: 16,
    lineHeight: 24,
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 22,
    marginBottom: 12,
    fontFamily: 'ClashGrotesk-Bold',
  },
  sectionText: {
    fontSize: 15,
    lineHeight: 24,
  },
  highlightList: {
    gap: 12,
  },
  highlightItem: {
    paddingLeft: 12,
    borderLeftWidth: 3,
  },
  highlightText: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'ClashGrotesk-Regular',
  },
  connectCard: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 40,
  },
  connectTitle: {
    fontSize: 24,
    marginBottom: 10,
    fontFamily: 'ClashGrotesk-Bold',
  },
  connectText: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
  },
  socialButtons: {
    gap: 12,
  },
  socialButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialButtonText: {
    fontSize: 15,
    fontFamily: 'ClashGrotesk-Semibold',
  },
});