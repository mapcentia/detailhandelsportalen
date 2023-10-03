import _ from 'lodash';

class ForbrugTable extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            sumResult: null,
            spendings: null,
            houseInSum: this.props.houseInSum,
            householdDifference: this.props.householdDifference,
            reactId: this.props.reactId
        };
    }

    componentDidMount(){
        this.getSpending();
        this.reduce();
    }

    shouldComponentUpdate(nextProp, nextState){
        //console.log('ShouldComponentUpdate forbrugtable',{nextProp, nextState});
        
        
        if(!_.isEqual(this.state.houseInSum, nextProp.houseInSum)){
            //console.log('houseInSum Not equal', {houseInSum :this.state.houseInSum, propHouseInSum : nextProp.houseInSum});
            this.state.householdDifference = nextProp.householdDifference
            this.state.houseInSum = nextProp.houseInSum
            this.getSpending();
            this.reduce();
            return false;
        }else if(this.state.spendings != nextState.spendings){
            // This is a hack to force update a state. Returning True doesn't update the render for some reason
            this.forceUpdate()
            // console.log('spendings not equal', {spendings:this.state.spendings, nextStateSpendings : nextState.spendings});
            return false;
        }else{
            return false;
        }
        
    }

    getSpending(){
        //dummy data, transform get request into this.
        //FU07: Forbrug efter forbrugsgruppe, region og prisenhed
        // "Key": [ "under 250.000 kr.", "250.000 - 449.999 kr.", "450.000 - 699.999 kr.", "700.000 - 999.999 kr.", "1.000.000 kr. og derover", "Uden indkomst-informationer"],

        let spendingsData = {
            "Dagligvarer": [ 32787, 45537, 59384, 71169, 91277, 0],
            "Beklædning": [4055, 7965, 11240, 13372, 27073, 0],
            "Øvrige udvalgsvarer": [ 9365, 17465, 29148, 41682, 63804, 0]
        }
        
        let spending_min = 0;
        Object.keys(spendingsData).forEach(spendingkey => {
            spending_min += spendingsData[spendingkey][0];
        })

        let spending_max = 0;
        Object.keys(spendingsData).forEach(spendingkey => {
            spending_max += spendingsData[spendingkey][4];
        });

        if(this.state.householdDifference != null){
            this.state.householdDifference.spending_max = spending_max;
            this.state.householdDifference.spending_min = spending_min;
        }
        //this.setState({spendings: spendingsData});
        this.state.spendings = spendingsData;
        //ToDo: ajax for spendingdata
    }


    reduce(){
        //change data to simple
        let results = {};
        Object.keys(this.state.spendings).forEach((spendings_category) => {
            let sum_array = [];
            Object.keys(this.state.houseInSum).forEach((house_type, hus_index) => {
                // console.log({category: spendings_category, house: this.state.houseInSum[house_type], spendings: this.state.spendings[spendings_category][hus_index]});
                sum_array.push(this.state.houseInSum[house_type] * this.state.spendings[spendings_category][hus_index]);
            });
            // console.log({[spendings_category]: sum_array})
        
            results[spendings_category] = sum_array.reduce((acc, val) => acc + val);
        });
       
        let total = 0;
        Object.keys(results).forEach(key => {
            total += results[key];
        })
        results["I alt"] = total;

        this.setState({spendings: results}, () => {this.forceUpdate()});
        
    }


    render(){
        
        let renderData = '';

        let spendingResults = null;
        if(this.state.spendings != null){
            // console.log('it is not null!', this.state)
            spendingResults = this.state.spendings;
        }

        if(spendingResults != null){
            let style = {
                textAlign: "right"
            }

            let householdInformation = '';

            if(this.state.householdDifference != null){
                let hhValues = this.state.householdDifference;
                console.log('household information', hhValues)
                //house hold calculation results DOM when there's information
                // IMPORTANT! remember to use JavaScript HTML names. class will be className. col-span becomes colSpan
                householdInformation = <React.Fragment>
                   {/* <div>
                        Forbrugsberegningerne er baseret på indkomstdata fra {parseInt(hhValues.husinksum).toLocaleString("da-DK")}​ husstande​​​.
                    </div>
                    <div>
                        DST har ikke kunne levere indkomstdata for {parseInt(hhValues.diff).toLocaleString("da-DK")} husstande ({hhValues.diff_percent} % ​), hvilket betyder at forbrugsberegningerne kan være undervurderet med mellem {(hhValues.spending_min/1000000).toFixed(1)} og {(hhValues.spending_max/1000000).toFixed(1)} mio kr.​
                    </div> 
                    */}

                </React.Fragment>
            }else{
                //house hold calculation results DOM when husinksum is 0
                householdInformation = <p>Der blev ikke fundet nogle husstande inden for det valgte opland. Det kan skyldes at området i dag er ubefolket, eller ny udstykket hvorfor data endnu ikke er tilgængelig fra DST.</p>;
            }
            renderData = <table className="table tableContainer">
                    <tbody>
                        <tr>
                            <td colSpan="2"><b>Forbrug (Husstandsbaseret)</b></td>
                        </tr>
                        {Object.keys(spendingResults).map((val, index) => {
                            return <tr key={index}>
                                <td width="50%">{val}</td>
                                <td width="50%" style={style}>{(Math.round(parseInt(spendingResults[val]) / 1000) * 1000).toLocaleString("da-DK")} kr/år</td>
                            </tr>
                        })}

                        <tr>
                            <td colSpan="2" width="100%">{householdInformation}</td>
                        </tr>
                    </tbody>
            </table>;
        }

       return renderData;
    }
}

module.exports = ForbrugTable;