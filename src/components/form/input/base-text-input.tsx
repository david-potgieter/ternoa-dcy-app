import { ToggleVisibleWrapper } from '@/components/form/input/toggle-vIsible-wrapper'
import { obfuscate } from '@/helpers/obfuscate'
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
