import * as singleSpa from "single-spa";

const loadReactAppInsuranceCenter = async () => {
    await runScript('http://localhost:3000/main.js', "script-insurance-center");
    return window.insuranceCenter;
};

const loadReactAppLending = async () => {
     await runScript('http://localhost:3001/main.js', "script-lending");
    return window.lending;
};


export const registerReactApp = () => {
    singleSpa.registerApplication('insurance-center', loadReactAppInsuranceCenter, matchingPathname(['/insuranceCenter', '/dashboard']));
    singleSpa.registerApplication('lending', loadReactAppLending, matchingPathname(['/lending', '/dashboard']));

    // singleSpa.registerApplication('insurance-center', loadReactAppInsuranceCenter, (location) => true);
    // singleSpa.registerApplication('lending', loadReactAppLending, (location) => true);
};


const runScript = async (url, id) => {
    return new Promise((resolve, reject) => {
         
	     const script = document.createElement('script');
	     script.src = url;
	     script.id = id;
		 script.onload = resolve;
		 script.onerror = reject;

		  const firstScript = document.getElementsByTagName('script')[0];
		  firstScript.parentNode.insertBefore(script, firstScript);
		  


    });
};

const matchingPathname = (pathnames) => {
	return (location) => {
			console.log(location, location.pathname);
			return pathnames.some(pathname => location.pathname.indexOf(pathname) > -1);
		};
};
    
