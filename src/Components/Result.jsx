import { calculateInvestmentResults,formatter } from "../util/investment";

export default function Result({ input }){
      const dataResult = calculateInvestmentResults(input);
      const initialInvestment = dataResult[0].valueEndOfYear - dataResult[0].interest * dataResult[0].annualInvestment;
      console.log(input);

      return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (year)</th>
                    <th>Total Interest</th>
                    <th>Investment Capital</th>
                </tr>
            </thead>
            <tbody>
                {dataResult.map((yearData) =>{
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * initialInvestment;
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

                return(
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                );
                })}
            </tbody>
        </table>
      );
}