// import { StyleSheet, Text, type TextProps } from 'react-native';

// import { useThemeColor } from '@/hooks/use-theme-color';

// export type ThemedTextProps = TextProps & {
//   lightColor?: string;
//   darkColor?: string;
//   type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
// };

// export function ThemedText({
//   style,
//   lightColor,
//   darkColor,
//   type = 'default',
//   ...rest
// }: ThemedTextProps) {
//   const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

//   return (
//     <Text
//       style={[
//         { color },
//         type === 'default' ? styles.default : undefined,
//         type === 'title' ? styles.title : undefined,
//         type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
//         type === 'subtitle' ? styles.subtitle : undefined,
//         type === 'link' ? styles.link : undefined,
//         style,
//       ]}
//       {...rest}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   default: {
//     fontSize: 15,
//     lineHeight: 24,
//     fontFamily: 'ClashGrotesk',
//       fontWeight: '100',
    
//   },
//   defaultSemiBold: {
//     fontSize: 16,
//     lineHeight: 24,
//     fontFamily: 'ClashGrotesk',
//     fontWeight: '400',
//   },
//   title: {
//     fontSize: 45,
//     lineHeight: 54,
//     fontFamily: 'ClashGrotesk',
//     fontWeight: '500',
//   },
//   subtitle: {
//     fontSize: 20,
//     fontFamily: 'ClashGrotesk',
//     fontWeight: '400',
//   },
//   link: {
//     lineHeight: 30,
//     fontSize: 16,
//     color: '#0a7ea4',
//     fontFamily: 'ClashGrotesk',
//     fontWeight: '600',
//   },
// });
