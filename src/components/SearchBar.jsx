import React, { useState } from 'react';
import '../css/SearchBar.css';

function SearchBar() {
  const [condition, setCondition] = useState('');
  const [procedure, setProcedure] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [location, setLocation] = useState('');
  const [insuranceCarrier, setInsuranceCarrier] = useState('');
  const [cityStateZip, setCityStateZip] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic with the form fields
    console.log('Searching for:');
    console.log('Condition:', condition);
    console.log('Procedure:', procedure);
    console.log('Specialty:', specialty);
    console.log('Location:', location);
    console.log('Insurance Carrier:', insuranceCarrier);
    console.log('City, State, Zip:', cityStateZip);
  };

  return (
    <div >
      <form onSubmit={handleSearch} className="search-bar">
        <div className="search-field">
          <div className="input-container">
            <input
              type="text"
              id="condition"
              placeholder="Condition, Procedure, Speciality..."
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z" fill="#8B8E9C"/>
            </svg>
          </div>
        </div>

        <div className="search-field">
          <div className="input-container">
            <input
              type="text"
              id="insurance-carrier"
              placeholder="Insurance Carrier"
              value={insuranceCarrier}
              onChange={(e) => setInsuranceCarrier(e.target.value)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M22.5 4.5V19.5H1.5V4.5H22.5ZM24 3H0V21H24V3Z" fill="#8B8E9C"/>
              <path d="M13.5 7.5H21V9H13.5V7.5ZM13.5 10.5H21V12H13.5V10.5ZM13.5 13.5H16.5V15H13.5V13.5ZM9.74995 7.5C8.84995 7.5 8.09995 8.4 7.49995 9C6.89995 8.4 6.14995 7.5 5.24995 7.5C2.99995 7.5 2.09995 10.35 3.74995 11.85L7.49995 15L11.25 11.85C12.9 10.35 12 7.5 9.74995 7.5Z" fill="#8B8E9C"/>
            </svg>
          </div>
        </div>

        <div className="search-field">
          <div className="input-container">
            <input
              type="text"
              id="city-state-zip"
              placeholder="City, State, Zip"
              value={cityStateZip}
              onChange={(e) => setCityStateZip(e.target.value)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z" fill="#8B8E9C"/>
            </svg>
          </div>
        </div>

        <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.89605 2.00628e-08C7.47736 0.000120879 6.07928 0.339494 4.81844 0.989804C3.5576 1.64011 2.47056 2.5825 1.64802 3.73835C0.825473 4.8942 0.291278 6.22998 0.0899992 7.63426C-0.111279 9.03854 0.0261946 10.4706 0.490952 11.8109C0.955709 13.1513 1.73427 14.361 2.76169 15.3393C3.7891 16.3176 5.03557 17.036 6.3971 17.4346C7.75864 17.8331 9.19575 17.9004 10.5886 17.6306C11.9813 17.3609 13.2894 16.7619 14.4037 15.8839L18.2262 19.7062C18.4236 19.8968 18.688 20.0023 18.9624 20C19.2368 19.9976 19.4994 19.8875 19.6934 19.6934C19.8875 19.4994 19.9976 19.2369 20 18.9625C20.0023 18.688 19.8968 18.4236 19.7062 18.2262L15.8837 14.4039C16.9178 13.0921 17.5617 11.5156 17.7417 9.8549C17.9216 8.19422 17.6304 6.51642 16.9013 5.01352C16.1722 3.51061 15.0347 2.24333 13.619 1.35669C12.2033 0.470054 10.5665 -0.000112141 8.89605 2.00628e-08ZM2.09261 8.89647C2.09261 7.09215 2.8094 5.36173 4.08529 4.08589C5.36118 2.81005 7.09166 2.09329 8.89605 2.09329C10.7004 2.09329 12.4309 2.81005 13.7068 4.08589C14.9827 5.36173 15.6995 7.09215 15.6995 8.89647C15.6995 10.7008 14.9827 12.4312 13.7068 13.707C12.4309 14.9829 10.7004 15.6996 8.89605 15.6996C7.09166 15.6996 5.36118 14.9829 4.08529 13.707C2.8094 12.4312 2.09261 10.7008 2.09261 8.89647Z" fill="white"/>
</svg> &nbsp; Find now</button>
      </form>
    </div>
  );
}

export default SearchBar;