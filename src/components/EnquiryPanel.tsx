import {useEffect, useState} from 'react'
import type {FormEvent} from 'react'

export default function EnquiryPanel(){
  const [open,setOpen]=useState(false)
  const [sent,setSent]=useState(false)
  useEffect(()=>{const show=()=>{setSent(false);setOpen(true)};window.addEventListener('smoothair:enquiry',show);return()=>window.removeEventListener('smoothair:enquiry',show)},[])
  const submit=(e:FormEvent)=>{e.preventDefault();setSent(true)}
  return <><div className={'enquiry-overlay '+(open?'open':'')} onClick={()=>setOpen(false)}/><aside className={'enquiry-panel '+(open?'open':'')} aria-hidden={!open}><button className="enquiry-close" onClick={()=>setOpen(false)} aria-label="Close enquiry form">×</button>{sent?<div className="enquiry-success"><h2>Thank you</h2><p>Your enquiry has been received. Our team will contact you shortly.</p><button className="button" onClick={()=>setOpen(false)}>Close</button></div>:<form onSubmit={submit}><h2>Enquiry</h2><p className="enquiry-intro">Please complete the form below and our team will get back to you.</p><label>First Name<input required placeholder="First Name"/></label><label>Last Name<input required placeholder="Last Name"/></label><label>Telephone Number<input required type="tel" placeholder="Telephone Number"/></label><label>Email<input required type="email" placeholder="Email"/></label><label>Company Name<input placeholder="Company Name"/></label><label>Enquiry Type<select required defaultValue=""><option value="" disabled>- Select Enquiry Type -</option><option>Products & Services enquiry</option><option>Dealership / Business related enquiry</option><option>General enquiry</option></select></label><label>Message<textarea required rows={5} placeholder="Enter Your Message"/></label><button className="enquiry-submit" type="submit">Submit</button></form>}</aside></>
}
