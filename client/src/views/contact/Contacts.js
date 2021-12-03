import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import * as MdIcons from 'react-icons/md'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import * as SiIcons from 'react-icons/si'
import * as ImIcons from 'react-icons/im'
import './Contacts.css'

function Contacts() {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios.get('http://localhost:4001/api/get/allcontacts')
			.then(res => setData(res.data))
	}, []);

	{/* Creating contact list from API data*/}
	const contactList = data? data.map((elem, i)=> {
		return(
			<div key={i} className='contact'>	
				<div className='contact-action'>
					{/*Icon to create invoice for specific user*/}
					<Link to={{
						pathname: '/createInvoice',
						state: elem	
					}}>
						<FaIcons.FaFileInvoice/>
					</Link>
					
					{/*
					Icon to edit contact
					Modify EditContact to accept whole elem
					*/}
					<Link to={{
						pathname: '/editContact',
						state: elem
					}}>
						<MdIcons.MdEdit/> 
					</Link>
				</div>

				{/*User Information*/}
				<div>
					<h4 className='contact-name'>
						<IoIcons.IoIosContact/>{elem.name}</h4>
					<p className='contact-email'>
						<SiIcons.SiMailDotRu/>{elem.email}</p> 
					<p className='contact-phone'>
						<MdIcons.MdPhoneAndroid/>{elem.phone}</p>
					<p className='contact-street'>
						<ImIcons.ImHome3/>{elem.street}</p>
				</div>
			</div>
		)	
	}) : 'No Contacts'

	return (
		<div className='contacts'>
			{contactList} <br/>
			<Link to='/addContact'>
				<button>ADD</button>
			</Link>									
		</div>
	)
}

export default Contacts
