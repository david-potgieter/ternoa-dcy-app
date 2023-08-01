import { ToggleVisibleWrapper } from '@/components/form/input/toggle-vIsible-wrapper'
import PlusSVG from '@/components/ui/image/icons/plus_circle.svg'
import { obfuscate } from '@/helpers/obfuscate'
import { Box, Center, HStack, Pressable } from 'native-base'
import { useState } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'
import { StyleSheet, TextInput } from 'react-native'

export function InputWithVisibleToggle<T extends FieldValues>(
  props: UseControllerProps<T> & {
    multiline: boolean
    placeholder: string
    type: 'text' | 'password'
  },
) {
  const {
    field,
    fieldState: { error },
  } = useController(props)
  const value = field.value
  const hasValue = value.length > 0
  const [hidden, setHidden] = useState(props.type === 'password')
  const styles = StyleSheet.create({
    input: { color: 'white' },
    placeHolder: { fontSize: 16, fontWeight: '600', fontFamily: 'Archivo-Bold' },
  })
  return (
    <ToggleVisibleWrapper
      error={error}
      action={setHidden}
      hidden={hidden}
      value={field.value}
      placeholder={props.placeholder}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        onBlur={field.onBlur}
        onChangeText={field.onChange}
        value={hidden && props.type === 'text' ? obfuscate(value) : value}
        placeholderTextColor="#6A84A0"
        placeholder={props.placeholder}
        style={hasValue ? styles.input : styles.placeHolder}
        secureTextEntry={hidden}
        multiline={props.multiline}
      />
    </ToggleVisibleWrapper>
  )
}

export function InputContactToggle<T extends FieldValues>(
  props: UseControllerProps<T> & {
    multiline: boolean
    placeholder: string
    type: 'text' | 'password'
    action: () => void
  },
) {
  const {
    field,
    fieldState: { error },
  } = useController(props)
  const value = field.value
  const hasValue = value.length > 0
  const styles = StyleSheet.create({
    input: { color: 'white' },
    placeHolder: { fontSize: 16, fontWeight: '600', fontFamily: 'Archivo-Bold' },
  })
  return (
    <Box
      justifyContent="center"
      p="4"
      borderWidth="1"
      borderColor={error ? 'red.300' : 'tGray.700'}
      borderRadius="2xl"
      minH="16">
      <HStack w="full" justifyContent="space-between" px="2">
        <HStack mr="4" w="full" maxW="85%">
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            value={value}
            placeholderTextColor="#6A84A0"
            placeholder={props.placeholder}
            style={hasValue ? styles.input : styles.placeHolder}
            multiline={props.multiline}
          />
        </HStack>
        <Center mr="4">
          <Pressable onPress={props.action}>
            <Box>
              <PlusSVG width="25" height="25" color="white" />
            </Box>
          </Pressable>
        </Center>
      </HStack>
    </Box>
  )
}

export function BaseInput<T extends FieldValues>(
  props: UseControllerProps<T> & {
    multiline: boolean
    placeholder: string
    type: 'text' | 'password'
  },
) {
  const { field } = useController(props)
  const value = field.value
  const hasValue = value.length > 0
  const styles = StyleSheet.create({
    input: { color: 'white' },
    placeHolder: { fontSize: 16, fontWeight: '600', fontFamily: 'Archivo-Bold' },
  })
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      onBlur={field.onBlur}
      onChangeText={field.onChange}
      value={value}
      placeholderTextColor="#6A84A0"
      placeholder={props.placeholder}
      style={hasValue ? styles.input : styles.placeHolder}
      multiline={props.multiline}
    />
  )
}
