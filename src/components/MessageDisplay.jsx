import React, { useContext, useEffect, useState } from 'react';
import SubmissionContext from '@/context/SubmissionContext';
import { useInterval } from '@/hooks/useInterval';

function MessageDisplay() {
  const { submissionId, setSubmissionId, submissionStatus, setSubmissionStatus } = useContext(SubmissionContext)
  const [status, setStatus] = useState("pending");
  const [data, setData] = useState(null)
  // useEffect(() => {
  //   const getStatus = async () => {
  //     const resp = await fetch(`http://localhost:3000/backtest/status/1/${submissionId}`);
  //     const data = await resp.json()
  //     setStatus(data['status'])
  //   }
  //   const getData = async () => {
  //     const resp = await fetch(`http://localhost:3000/backtest/result/1/${submissionId}`)
  //     const data = await resp.json()
  //     setData(data)
  //   }
  //   if (submissionId == 0) return;
  //   if (submissionId !== 0) {
  //     getStatus()
  //   }
  //   if (status != 'pending') {
  //     getData()
  //   }
  // }, [submissionId, status])
  const queryStatus = async () => {

    const resp = await fetch(`http://localhost:3000/backtest/status/1/${submissionId}`);
    const data = await resp.json()
    if (data['status'] === 'pending') { setStatus(data['status']) }
    else {
      setStatus(data['status']);
      setSubmissionStatus("COMPLETED")
      const getData = async () => {
        const resp = await fetch(`http://localhost:3000/backtest/result/1/${submissionId}`)
        const data = await resp.json()
        setData(data)
      }
      getData()
    }
  }

  useEffect(() => {
    if (submissionStatus === 'STARTED') {
      const timer = setInterval(queryStatus, 0.1 * 1000)
      return () => {
        clearInterval(timer)
      }
    }
  })

  if (submissionStatus === 'NOT STARTED') return (<h2>Not Started</h2>)
  if (submissionStatus === 'STARTED') return (<h2>Submitted</h2>)
  if (status === 'pending') return (<h2>Pending</h2>)
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
}

export default MessageDisplay;