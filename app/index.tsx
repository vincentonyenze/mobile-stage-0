import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function PortfolioApp() {
  const [isDark, setIsDark] = useState(false);
  const [activeTab, setActiveTab] = useState<"about" | "skills" | "contact">(
    "about"
  );

  const colors = {
    background: isDark ? "#111827" : "#F9FAFB",
    card: isDark ? "#1F2937" : "#FFFFFF",
    textPrimary: isDark ? "#FFFFFF" : "#111827",
    textSecondary: isDark ? "#D1D5DB" : "#4B5563",
    border: isDark ? "#374151" : "#E5E7EB",
    accent: isDark ? "#2563EB" : "#3B82F6",
    muted: isDark ? "#374151" : "#E5E7EB",
  };

  const skills = [
    { name: "React Native", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Expo", level: 82 },
    { name: "Node.js", level: 80 },
    { name: "Git & GitHub", level: 90 },
    { name: "REST APIs", level: 85 },
  ];

  const openUrl = (url: string) => {
    Linking.openURL(url).catch(() => {});
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {/* Header */}
      <View
        style={[
          styles.header,
          { backgroundColor: colors.card, borderBottomColor: colors.border },
        ]}
      >
        <Text
          style={[styles.title, { color: colors.textPrimary }]}
          numberOfLines={1}
        >
          Portfolio
        </Text>
        <TouchableOpacity
          onPress={() => setIsDark(!isDark)}
          style={[
            styles.iconButton,
            { backgroundColor: isDark ? "#374151" : "#F3F4F6" },
          ]}
        >
          {isDark ? (
            <Feather name="sun" size={20} color="#F59E0B" />
          ) : (
            <Feather name="moon" size={20} color="#374151" />
          )}
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabsWrapper}>
        <View
          style={[
            styles.tabs,
            { backgroundColor: colors.card, shadowColor: "#000" },
          ]}
        >
          {(["about", "skills", "contact"] as const).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                style={[
                  styles.tabButton,
                  {
                    backgroundColor: isActive ? colors.accent : "transparent",
                    borderColor: colors.muted,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.tabText,
                    { color: isActive ? "#FFFFFF" : colors.textSecondary },
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* About */}
        {activeTab === "about" && (
          <View
            style={[
              styles.card,
              { backgroundColor: colors.card, shadowColor: "#000" },
            ]}
          >
            <View style={styles.avatarWrapper}>
              <Image
                source={require("../assets/vincentonyenze.png")}
                style={styles.avatar}
                resizeMode="cover"
              />
              <Text style={[styles.name, { color: colors.textPrimary }]}>
                Vincent Onyenze
              </Text>
              <Text style={{ color: colors.textSecondary }}>
                Mobile Developer
              </Text>
            </View>

            <View style={[styles.section, { borderTopColor: colors.border }]}>
              <View style={styles.sectionHeaderRow}>
                <Feather name="user" size={18} color={colors.textPrimary} />
                <Text
                  style={[styles.sectionTitle, { color: colors.textPrimary }]}
                >
                  About Me
                </Text>
              </View>
              <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
                I’m a passionate mobile developer specializing in React Native
                and cross-platform development. With a keen eye for design and a
                love for creating seamless user experiences, I build
                applications that users love.
              </Text>
              <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
                Currently interning and expanding my skills in modern mobile
                development technologies. I’m always eager to learn new
                technologies and take on challenging projects that push my
                boundaries as a developer.
              </Text>
            </View>

            <View style={[styles.section, { borderTopColor: colors.border }]}>
              <Text
                style={[
                  styles.sectionTitle,
                  { color: colors.textPrimary, marginBottom: 12 },
                ]}
              >
                Experience
              </Text>
              <View
                style={[
                  styles.experienceItem,
                  { backgroundColor: isDark ? "#374151" : "#F3F4F6" },
                ]}
              >
                <Text
                  style={[
                    styles.experienceTitle,
                    { color: colors.textPrimary },
                  ]}
                >
                  Mobile Development Intern
                </Text>
                <Text style={{ color: colors.textSecondary }}>
                  HNG Internship • 2025 - Present
                </Text>
                <Text
                  style={[
                    styles.paragraph,
                    { color: colors.textSecondary, marginTop: 6 },
                  ]}
                >
                  Building mobile applications using React Native and TypeScript
                </Text>
              </View>
            </View>
          </View>
        )}

        {/* Skills */}
        {activeTab === "skills" && (
          <View
            style={[
              styles.card,
              { backgroundColor: colors.card, shadowColor: "#000" },
            ]}
          >
            <View style={[styles.sectionHeaderRow, { marginBottom: 12 }]}>
              <Feather name="code" size={22} color={colors.textPrimary} />
              <Text
                style={[styles.sectionTitle, { color: colors.textPrimary }]}
              >
                Technical Skills
              </Text>
            </View>

            <View>
              {skills.map((skill) => (
                <View key={skill.name} style={{ marginBottom: 16 }}>
                  <View style={styles.skillHeaderRow}>
                    <Text
                      style={[styles.skillName, { color: colors.textPrimary }]}
                    >
                      {skill.name}
                    </Text>
                    <Text style={{ color: colors.textSecondary }}>
                      {skill.level}%
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.progressTrack,
                      { backgroundColor: isDark ? "#374151" : "#E5E7EB" },
                    ]}
                  >
                    <View
                      style={[
                        styles.progressBar,
                        {
                          width: `${skill.level}%`,
                          backgroundColor: colors.accent,
                        },
                      ]}
                    />
                  </View>
                </View>
              ))}
            </View>

            <View style={[styles.section, { borderTopColor: colors.border }]}>
              <Text
                style={[
                  styles.sectionTitle,
                  { color: colors.textPrimary, marginBottom: 12 },
                ]}
              >
                Other Skills
              </Text>
              <View style={styles.chipsRow}>
                {[
                  "Problem Solving",
                  "Team Collaboration",
                  "Agile/Scrum",
                  "UI/UX Design",
                  "Code Review",
                  "Testing",
                ].map((chip) => (
                  <View
                    key={chip}
                    style={[
                      styles.chip,
                      { backgroundColor: isDark ? "#374151" : "#F3F4F6" },
                    ]}
                  >
                    <Text style={{ color: isDark ? "#E5E7EB" : "#374151" }}>
                      {chip}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}

        {/* Contact */}
        {activeTab === "contact" && (
          <View
            style={[
              styles.card,
              { backgroundColor: colors.card, shadowColor: "#000" },
            ]}
          >
            <View style={[styles.sectionHeaderRow, { marginBottom: 12 }]}>
              <Feather name="mail" size={22} color={colors.textPrimary} />
              <Text
                style={[styles.sectionTitle, { color: colors.textPrimary }]}
              >
                Get In Touch
              </Text>
            </View>
            <Text style={{ color: colors.textSecondary, marginBottom: 16 }}>
              I’m always open to discussing new opportunities, collaborations,
              or just connecting with fellow developers. Feel free to reach out!
            </Text>

            <View>
              <TouchableOpacity
                onPress={() => openUrl("mailto:john.doe@example.com")}
                style={[
                  styles.contactItem,
                  { backgroundColor: isDark ? "#374151" : "#F3F4F6" },
                ]}
              >
                <View
                  style={[
                    styles.contactIcon,
                    { backgroundColor: colors.accent },
                  ]}
                >
                  <Feather name="mail" size={18} color="#FFFFFF" />
                </View>
                <View style={styles.contactTextBlock}>
                  <Text
                    style={[styles.contactTitle, { color: colors.textPrimary }]}
                  >
                    Email
                  </Text>
                  <Text style={{ color: colors.textSecondary }}>
                    onyenzekelechivincent@gmail.com
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => openUrl("tel:+2348142055404")}
                style={[
                  styles.contactItem,
                  { backgroundColor: isDark ? "#374151" : "#F3F4F6" },
                ]}
              >
                <View
                  style={[
                    styles.contactIcon,
                    { backgroundColor: colors.accent },
                  ]}
                >
                  <Feather name="phone" size={18} color="#FFFFFF" />
                </View>
                <View style={styles.contactTextBlock}>
                  <Text
                    style={[styles.contactTitle, { color: colors.textPrimary }]}
                  >
                    Phone
                  </Text>
                  <Text style={{ color: colors.textSecondary }}>
                    +234 814 205 5404
                  </Text>
                </View>
              </TouchableOpacity>

              <View
                style={[
                  styles.contactItem,
                  { backgroundColor: isDark ? "#374151" : "#F3F4F6" },
                ]}
              >
                <View
                  style={[
                    styles.contactIcon,
                    { backgroundColor: colors.accent },
                  ]}
                >
                  <Feather name="map-pin" size={18} color="#FFFFFF" />
                </View>
                <View style={styles.contactTextBlock}>
                  <Text
                    style={[styles.contactTitle, { color: colors.textPrimary }]}
                  >
                    Location
                  </Text>
                  <Text style={{ color: colors.textSecondary }}>
                    Abuja, Nigeria
                  </Text>
                </View>
              </View>
            </View>

            <View style={[styles.section, { borderTopColor: colors.border }]}>
              <Text
                style={[
                  styles.sectionTitle,
                  { color: colors.textPrimary, marginBottom: 12 },
                ]}
              >
                Social Links
              </Text>
              <View style={styles.socialRow}>
                <TouchableOpacity
                  onPress={() => openUrl("https://github.com/vincentonyenze/")}
                  style={[
                    styles.socialButton,
                    { backgroundColor: isDark ? "#374151" : "#F3F4F6" },
                  ]}
                >
                  <AntDesign
                    name="github"
                    size={22}
                    color={colors.textPrimary}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => openUrl("https://linkedin.com/in/vincentonyenze")}
                  style={[
                    styles.socialButton,
                    { backgroundColor: isDark ? "#374151" : "#F3F4F6" },
                  ]}
                >
                  <Ionicons
                    name="logo-linkedin"
                    size={22}
                    color={colors.textPrimary}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => openUrl("https://vincentonyenze.vercel.app")}
                  style={[
                    styles.socialButton,
                    { backgroundColor: isDark ? "#374151" : "#F3F4F6" },
                  ]}
                >
                  <Ionicons
                    name="globe-outline"
                    size={22}
                    color={colors.textPrimary}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Footer */}
      <View
        style={{
          backgroundColor: colors.card,
          borderTopWidth: StyleSheet.hairlineWidth,
          borderTopColor: colors.border,
          marginTop: 24,
        }}
      >
        <View style={{ paddingVertical: 16, alignItems: "center" }}>
          <Text style={{ color: colors.textSecondary }}>
            © 2025 VincentO. Built with React Native & Expo
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 4,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  iconButton: {
    padding: 8,
    borderRadius: 8,
    alignSelf: "center",
  },
  tabsWrapper: {
    paddingHorizontal: 16,
    marginTop: 12,
  },
  tabs: {
    flexDirection: "row",
    padding: 4,
    borderRadius: 12,
    elevation: 2,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
  },
  tabText: {
    textTransform: "capitalize",
    fontWeight: "600",
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  card: {
    borderRadius: 16,
    padding: 16,
    elevation: 3,
  },
  avatarWrapper: {
    alignItems: "center",
    marginBottom: 16,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 4,
  },
  section: {
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: 12,
    marginTop: 12,
  },
  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 8,
  },
  paragraph: {
    lineHeight: 20,
    marginBottom: 8,
  },
  experienceItem: {
    padding: 12,
    borderRadius: 10,
  },
  experienceTitle: {
    fontWeight: "600",
    marginBottom: 4,
  },
  skillHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  skillName: {
    fontWeight: "600",
  },
  progressTrack: {
    width: "100%",
    height: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: 8,
  },
  chipsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  contactIcon: {
    width: 36,
    height: 36,
    borderRadius: 36,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  contactTextBlock: {
    flexDirection: "column",
  },
  contactTitle: {
    fontWeight: "600",
  },
  socialRow: {
    flexDirection: "row",
    gap: 12,
  },
  socialButton: {
    padding: 10,
    borderRadius: 999,
  },
});
