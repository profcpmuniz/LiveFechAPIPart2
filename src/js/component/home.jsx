import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [myText, setMyText] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	
	function CallReportGeneratePromise(){
		return new Promise((resolve, reject)=>{
			let result = []
			if (myText  === 'sat'){
				setTimeout( () => {
					result = ["Item 1", "Item 2", "Item 3"]
					resolve({status : true, data: result, message: "Success!!!"})
				}, 3000);
			}else{
				reject({status : false, data: result, message: "Failed!!!"})
			}
			
		})
	}


	const handleButton = () => {
		setIsLoading(true)
		console.log('starting...')
		setTimeout( () => setMyText('I clicked here!'), 3000);
		console.log('finishing')
		setIsLoading(false)
	}
	
	const handleButtonWithPromise = () => {
		setIsLoading(true)
		CallReportGeneratePromise().then(result => {
			setMyText(result.message)
		}).catch(error => {
			setMyText(error.message)
		}).finally(()=> setIsLoading(false))
	}


	return (
		<div className="text-center">
			<h1 className="text-center mt-5">{myText}</h1>
			<input type="text" onChange={e => setMyText(e.target.value)}></input>
			<button onClick={handleButtonWithPromise} class="btn btn-primary" type="button" disabled={isLoading}>
				{isLoading ? (
					<>
						<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
 						<span>Loading</span>
					</>
				) : (	<span>Generate Report</span>)}
  
</button>
			
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
