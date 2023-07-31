export {}

// import { obfuscate } from '@/helpers/obfuscate'
// import { WalletImportFormValues } from '@/types/form-types'
// import { Box, HStack, Text, VStack, useTheme } from 'native-base'
// import { useState } from 'react'
// import {
//   Control,
//   FieldError,
//   FieldValues,
//   Path,
//   UseControllerProps,
//   useController,
//   useFormState,
// } from 'react-hook-form'
// import { Pressable, StyleSheet, TextInput } from 'react-native'

// export function InputContainer<T extends FieldValues>({
//   children,
//   control,
//   name,
// }: {
//   children: React.ReactNode
//   control: Control<T>
//   name: string
// }) {
//   const { colors } = useTheme()
//   const { errors } = useFormState({
//     control,
//   })
//   return (
//     <Box h="50" borderWidth="1" px="4" rounded="lg">
//       {children}
//     </Box>
//   )
// }

// // borderColor={!isNil(errors[name]) ? colors.red[500] : colors.orange[200]}>

// export function AppTextInput<T extends FieldValues>({
//   control,
//   name,
//   placeholder,
//   config,
// }: {
//   error?: FieldError
//   multiline: boolean
//   type: 'text' | 'password'
//   placeholder: string
//   control: UseControllerProps<WalletImportFormValues>
// }) {
//   const {
//     field: { onChange, onBlur, value },
//   } = useController({
//     name: name as Path<WalletImportFormValues>,
//     control,
//   })
//   const [hidden, setHidden] = useState(type === 'password')
//   const hasValue = value.length > 0

//   const styles = StyleSheet.create({
//     input: { color: 'white' },
//     placeHolder: { color: 'red', fontSize: 16, fontWeight: 'bold', fontFamily: 'Archivo-Bold' },
//   })

//   return (
//     <Box
//       justifyContent="center"
//       p="4"
//       borderWidth="1"
//       borderColor={error ? 'red.300' : 'tGray.700'}
//       borderRadius="2xl"
//       minH="20">
//       <HStack w="full">
//         <VStack w="5/6">
//           {hasValue ? (
//             <Text fontSize="16" color="tGray.400" mb="2">
//               {placeholder}
//             </Text>
//           ) : null}
//           <Box mt="0">
//             <InputContainer<T> control={control} name={name}>
//               <TextInput
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 multiline={multiline}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 placeholder={placeholder}
//                 placeholderTextColor="#6A84A0"
//                 secureTextEntry={hidden}
//                 style={hasValue ? styles.input : styles.placeHolder}
//                 value={hidden && type === 'text' ? obfuscate(value) : value}
//               />
//             </InputContainer>
//           </Box>
//         </VStack>
//         <Box justifyContent="flex-start" alignItems="flex-end" w="1/6">
//           <Pressable onPress={() => setHidden(!hidden)}>
//             <Text>EYE</Text>
//           </Pressable>
//         </Box>
//       </HStack>
//     </Box>
//   )
// }
