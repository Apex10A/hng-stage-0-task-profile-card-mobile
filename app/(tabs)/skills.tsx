import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import useTheme from '@/components/useTheme';
import { PraiseHeading } from '@/components/PraiseHeading';
import { PraiseText } from '@/components/PraiseText';
import { PraiseButton } from '@/components/PraiseButton';

const SKILL_CLUSTERS = [
  {
    title: 'Front-End Web',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Mobile Development',
    items: ['React Native', 'Expo', 'Expo Router', 'Nativewind'],
  },
  {
    title: 'Backend & Infrastructure',
    items: ['Firebase', 'REST APIs', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Tools & DevOps',
    items: ['Git', 'Figma', 'GitHub', 'Visual Studio Code'],
  },
];

const TECH_STACK = [
  { label: 'React', emoji: '⚛️' },
  { label: 'TypeScript', emoji: '📘' },
  { label: 'React Native', emoji: '📱' },
  { label: 'Expo', emoji: '🚀' },
  { label: 'Firebase', emoji: '🔥' },
  { label: 'Tailwind', emoji: '🎨' },
  { label: 'Figma', emoji: '✏️' },
  { label: 'Node.js', emoji: '⚙️' },
];

export default function SkillsScreen() {
  const { colors, isDark } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        contentContainerStyle={[styles.scrollContent, { paddingBottom: 100 }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.heroCard, { backgroundColor: colors.surface }]}>
          <PraiseHeading style={[styles.heroTitle, { color: colors.text }]}>Skills & Expertise</PraiseHeading>
          <PraiseText style={[styles.heroParagraph, { color: colors.textMuted }]}>
            A comprehensive overview of my technical skills, experience, and the tools I use to build modern, scalable applications.
          </PraiseText>
        </View>
        <View style={styles.section}>
          <PraiseHeading style={[styles.sectionTitle, { color: colors.text }]}>
            Core Skills
          </PraiseHeading>
          <PraiseText
            style={[styles.sectionDescription, { color: colors.textMuted }]}
          >
            A balance of product thinking, engineering rigor, and delivery excellence.
          </PraiseText>

          <View style={styles.skillGrid}>
            {SKILL_CLUSTERS.map((cluster) => (
              <View
                key={cluster.title}
                style={[
                  styles.skillCard,
                  {
                    backgroundColor: isDark
                      ? 'rgba(251, 191, 36, 0.05)'
                      : 'rgba(30, 58, 138, 0.05)',
                    borderColor: isDark
                      ? 'rgba(251, 191, 36, 0.1)'
                      : 'rgba(30, 58, 138, 0.1)',
                  },
                ]}
              >
                <PraiseHeading
                  style={[styles.skillCardTitle, { color: colors.text }]}
                >
                  {cluster.title}
                </PraiseHeading>
                <View style={styles.badgeGroup}>
                  {cluster.items.map((item) => (
                    <View
                      key={item}
                      style={[
                        styles.badge,
                        { backgroundColor: colors.primary + '20' },
                      ]}
                    >
                      <PraiseText
                        style={[styles.badgeText, { color: colors.primary }]}
                      >
                        {item}
                      </PraiseText>
                    </View>
                  ))}
                </View>
              </View>
            ))}
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
    fontSize: 15,
    lineHeight: 22,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    marginBottom: 8,
    fontFamily: 'ClashGrotesk-Bold',
  },
  sectionDescription: {
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 16,
  },
  skillGrid: {
    gap: 16,
  },
  skillCard: {
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
  },
  skillCardTitle: {
    fontSize: 16,
    marginBottom: 12,
    fontFamily: 'ClashGrotesk-Semibold',
  },
  badgeGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 13,
    fontFamily: 'ClashGrotesk-Medium',
  },
  techStackContainer: {
    marginTop: 12,
  },
  techGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  techChip: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
  },
  techEmoji: {
    fontSize: 18,
    marginRight: 6,
  },
  techLabel: {
    fontSize: 13,
    fontFamily: 'ClashGrotesk-Medium',
  },
  softSkillsList: {
    gap: 12,
  },
  softSkillItem: {
    padding: 12,
    borderRadius: 12,
    borderLeftWidth: 3,
    borderColor: 'transparent',
  },
  softSkillTitle: {
    fontSize: 14,
    fontFamily: 'ClashGrotesk-Semibold',
    marginBottom: 4,
  },
  softSkillDescription: {
    fontSize: 13,
    lineHeight: 19,
  },
  achievementCard: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 40,
  },
  achievementTitle: {
    fontSize: 22,
    marginBottom: 10,
    fontFamily: 'ClashGrotesk-Bold',
  },
  achievementText: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 16,
  },
  learnButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  learnButtonText: {
    fontSize: 14,
    fontFamily: 'ClashGrotesk-Semibold',
  },
});