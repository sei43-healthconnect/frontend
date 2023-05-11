import { Stack } from '@mui/system'
import { Grid } from '@mui/material';
import React, { useState } from 'react'
import styles from './ChatHeader.module.css'

const ChatHeader = () => {
  const [ward, setWard] = useState(46)
  const [bed, setBed] = useState(1)
  const [nurse, setNurse] = useState('Mabel See')
  const [doctor, setDoctor] = useState('Dr Tan')
  const [patient, setPatient] = useState('Kah Poh Tian')
  const [nok, setNok] = useState('David Kah')
  const [nokRship, setNokRship] = useState('Son')

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <div className={styles['ward-header']}>Ward {ward}</div>
        </Grid>
        <Grid item xs={6}>
          <div className={styles['bed-header']}>Bed {bed}</div>
        </Grid>
        <Grid item xs={6}>
          <div className={styles['ward-details']}>
            <Stack spacing={1.5}>
              <div>Staff Nurse <br /> <span className={styles['name']}>{nurse}</span></div>
              <div>Physiotherapist<br /> <span className={styles['name']}>{doctor}</span></div>
            </Stack>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={styles['bed-details']}>
            <Stack spacing={1.5}>
              <div>Patient's Name <br /> <span className={styles['name']}>{patient}</span></div>
              <div>Patient's NOK<br /> <span className={styles['name']}>{nok}</span> {`(${nokRship})`}</div>
            </Stack>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default ChatHeader