import moneyLogo from '../assets/investment-calculator-logo.png';


export default function Header(){
    return(
        <div id='header'>
        <img src={moneyLogo} href="Money Bag"></img>
        <h1>Investment Calculator</h1>
        </div>
    );
}