import { useState } from 'react'
import {
  Button,
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core'

export default function MaterialUi() {
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
      <Typography style={{ marginBottom: 10 }}>Material UI</Typography>
      <div>
        <TextField
          required
          label="First Name"
          variant="outlined"
          value={fName}
          onChange={e => setFName(e.target.value)}
          style={{ marginBottom: 10, width: '100%' }}
        />
      </div>
      <div>
        <TextField
          required
          label="Last Name"
          variant="outlined"
          value={lName}
          onChange={e => setLName(e.target.value)}
          style={{ marginBottom: 10, width: '100%' }}
        />
      </div>
      <FormControl fullWidth style={{ marginBottom: 10 }}>
        <InputLabel id="age-select">Age</InputLabel>
        <Select
          required
          labelId="age-select"
          label="Age"
          value={age}
          onChange={e => setAge(e.target.value)}
        >
          <MenuItem value={18}>18</MenuItem>
          <MenuItem value={19}>19</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>
      <FormControl component="fieldset" style={{ marginBottom: 10 }}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          value={gender}
          onChange={e => setGender(e.target.value)}
          style={{ marginBottom: 0 }}
        >
          <FormControlLabel
            value="female"
            control={<Radio color="primary" />}
            label="Female"
            labelPlacement="end"
          />
          <FormControlLabel
            value="male"
            control={<Radio color="primary" />}
            label="Male"
            labelPlacement="end"
          />
          <FormControlLabel
            value="other"
            control={<Radio color="primary" />}
            label="Other"
            labelPlacement="end"
          />
        </RadioGroup>
      </FormControl>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={clearForm}
          style={{ marginRight: 5 }}
        >
          Clear
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  )
}
