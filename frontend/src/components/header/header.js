import './header.css';

export default function Header({heading}) {
	return(
      <div className="headingContainer mb-5" >
       <img src="../headerImg.jpg" alt="" />
        <h1>{heading}</h1>
      </div>
	)
}