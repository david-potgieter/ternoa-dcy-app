import { obfuscate } from '@/helpers/obfuscate'
import { Box, HStack, Text, VStack } from 'native-base'
import { useState } from 'react'
import { ControllerRenderProps, FieldError } from 'react-hook-form'
import { Pressable, StyleSheet, TextInput } from 'react-native'

export function AppTextInput({
  error,
  multiline = false,
  type,
  placeholder,
  field: { onChange, onBlur, value },
}: {
  error?: FieldError
  multiline: boolean
  type: 'text' | 'password'
  placeholder: string
  field: ControllerRenderProps
}) {
  const hasValue = value.length > 0
  const [hidden, setHidden] = useState(type === 'password')

  const styles = StyleSheet.create({
    input: { color: 'white' },
    placeHolder: { color: 'red', fontSize: 16, fontWeight: 'bold', fontFamily: 'Archivo-Bold' },
  })

  return (
    <Box
      justifyContent="center"
      p="4"
      borderWidth="1"
      borderColor={error ? 'red.300' : 'tGray.700'}
      borderRadius="2xl"
      minH="20">
      <HStack w="full">
        <VStack w="5/6">
          {hasValue ? (
            <Text fontSize="16" color="tGray.400" mb="2">
              {placeholder}
            </Text>
          ) : null}
          <Box mt="0">
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              multiline={multiline}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder={placeholder}
              placeholderTextColor="#6A84A0"
              secureTextEntry={hidden}
              style={hasValue ? styles.input : styles.placeHolder}
              value={hidden && type === 'text' ? obfuscate(value) : value}
            />
          </Box>
        </VStack>
        <Box justifyContent="flex-start" alignItems="flex-end" w="1/6">
          <Pressable onPress={() => setHidden(!hidden)}>
            <Text>EYE</Text>
          </Pressable>
        </Box>
      </HStack>
    </Box>
  )
}
