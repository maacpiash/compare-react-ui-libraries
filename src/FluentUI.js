import { useState } from 'react'
import { TextField } from '@fluentui/react/lib/TextField'
import { Dropdown } from '@fluentui/react/lib/Dropdown'
import { ChoiceGroup } from '@fluentui/react/lib/ChoiceGroup'
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button'

const genders = [
  { key: 'female', text: 'Female' },
  { key: 'male', text: 'Male' },
  { key: 'other', text: 'Other' },
]

const ages = [
  {key: 18, text: '18' },
  {key: 19, text: '19' },
  {key: 20, text: '20' },
]

export default function FluentUI() {
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [age, setAge] = useState(18)
  const [gender, setGender] = useState('female')

  const clearForm = () => {
    setFName('')
    setLName('')
    setAge(18)
    setGender('female')
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert(`Name: ${fName} ${lName}\nAge: ${age}\nGender: ${gender}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <header style={{ marginBottom: 10 }}>Fluent UI</header>
      <TextField
        required
        label="First Name"
        value={fName}
        onChange={e => setFName(e.target.value)}
      />
      <TextField
        required
        label="Last Name"
        value={lName}
        onChange={e => setLName(e.target.value)}
      />
      <Dropdown
        label="Age"
        options={ages}
        defaultValue={18}
        placeholder="18"
        styles={{
          dropdown: { width: '100%' },
        }}
      />
      <ChoiceGroup
        defaultSelectedKey="female"
        options={genders}
        onChange={(_, option) => setGender(option.key)}
        label="Gender"
        required={true}
      />
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
        <DefaultButton text="Clear" onClick={clearForm} style={{ marginRight: 5 }} />
        <PrimaryButton text="Submit" type="submit" />
      </div>
    </form>
  )
}