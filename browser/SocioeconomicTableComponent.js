class SocioeconomicTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open: props.open,
            id: Math.random().toString(36).substring(7)
        }
    }
    economyTableData(name, value, total){
        let totalPercentage = null;
        if(total){
            totalPercentage = <td className="text-right">{String(Math.round((value/total)*100))} %</td>;
        }else{
            totalPercentage = <td className="text-right">100%</td>
        }

        return <tr>
            <td>{name}</td>
            {/*
                *@Dann
                Why this change?
                <td>{String((Math.round(parseInt(value) / 5000) * 5000).toLocaleString("da-DK"))}</td>
             */}
             <td className="text-right">{parseInt(value).toLocaleString("da-DK")}</td>
            {totalPercentage}
        </tr>
    }

    renderEconomyTable(economy){
        let economyTableSum = <div style={{textAlign:"center"}}>Ingen data</div>;
        //console.log('renderEconomyTable economy:', economy);
        if(economy){
            economyTableSum = <table className={`table tableContainer`}>
                    <tbody>
                        <tr>
                            <td><b>Befolkning (Personer)</b></td>
                            <td className="text-right"><b>Antal</b></td>
                            <td className="text-right"><b>Andel</b></td>
                        </tr>
                        {this.economyTableData("0-17 år", economy.ant_0_17pe, economy.befsum)}
                        {this.economyTableData("18-27 år", economy.ant_18_27p, economy.befsum)}
                        {this.economyTableData("28-37 år", economy.ant_28_37p, economy.befsum)}
                        {this.economyTableData("38-47 år", economy.ant_38_47p, economy.befsum)}
                        {this.economyTableData("48-65 år", economy.ant_48_65p, economy.befsum)}
                        {this.economyTableData("65+ år", economy.ant_66pl, economy.befsum)}
                        {this.economyTableData("Samlet", economy.befsum)}
                        <tr><td colSpan="3"></td></tr>

                        <tr>
                            <td><b>Uddannelsesniveau (Personer)</b></td>
                            <td className="text-right"><b>Antal</b></td>
                            <td className="text-right"><b>Andel</b></td>
                        </tr>

                        {this.economyTableData("Grundskole", economy.ant_udd1, economy.uddansum)}
                        {this.economyTableData("Gymnasial udd.", economy.ant_udd2, economy.uddansum)}
                        {this.economyTableData("Erhvervsudd.", economy.ant_udd3, economy.uddansum)}
                        {this.economyTableData("Kort videregående udd.", economy.ant_udd4, economy.uddansum)}
                        {this.economyTableData("Mellemlang videregående udd.", economy.ant_udd5, economy.uddansum)}
                        {this.economyTableData("lang videregående udd.", economy.ant_udd6, economy.uddansum)}
                        {this.economyTableData("Uden uddannelses-information", economy.ant_udd9, economy.uddansum)}
                        {this.economyTableData("Samlet", economy.uddansum)}

                        <tr><td colSpan="3"></td></tr>

                        <tr>
                            <td><b>Husstandsstørrelse (Husstande)</b></td>
                            <td className="text-right"><b>Antal</b></td>
                            <td className="text-right"><b>Andel</b></td>
                        </tr>
                        {this.economyTableData("1 person", economy.ant_husst_1per, economy.hussum)}
                        {this.economyTableData("2 personer", economy.ant_husst_2per, economy.hussum)}
                        {this.economyTableData("3 personer", economy.ant_husst_3per, economy.hussum)}
                        {this.economyTableData("4 personer", economy.ant_husst_4per, economy.hussum)}
                        {this.economyTableData("5+ personer", economy.ant_husst_5pl_, economy.hussum)}
                        {this.economyTableData("Samlet", economy.hussum)}


                        <tr><td colSpan="3"></td></tr>
                        <tr>
                            <td><b>Husstandstype (Husstande)</b></td>
                            <td className="text-right"><b>Antal</b></td>
                            <td className="text-right"><b>Andel</b></td>
                        </tr>
                        {this.economyTableData("Enlige under 60 år uden børn", economy.hus_type1, economy.hustypesum)}
                        {this.economyTableData("Enlige over 60 år uden børn", economy.hus_type2, economy.hustypesum)}
                        {this.economyTableData("Enlige med børn", economy.hus_type3, economy.hustypesum)}
                        {this.economyTableData("2 voksne, hovedperson under 60 år, uden børn", economy.hus_type4, economy.hustypesum)}
                        {this.economyTableData("2 voksne, hovedperson over 60 år, uden børn", economy.hus_type5, economy.hustypesum)}
                        {this.economyTableData("2 voksne med børn", economy.hus_type6, economy.hustypesum)}
                        {this.economyTableData("Mindst 3 voksne", economy.hus_type7, economy.hustypesum)}
                        {this.economyTableData("Samlet", economy.hustypesum)}


                        <tr><td colSpan="3"></td></tr>
                        <tr>
                            <td><b>Husstandsindkomst (husstande)</b></td>
                            <td className="text-right"><b>Antal</b></td>
                            <td className="text-right"><b>Andel</b></td>
                        </tr>
                        {this.economyTableData("under 250.000 kr.", economy.ant_hus_indk1_, economy.husinksum)}
                        {this.economyTableData("250.000 - 449.999 kr.", economy.ant_hus_indk2_, economy.husinksum)}
                        {this.economyTableData("450.000 - 699.999 kr.", economy.ant_hus_indk3_, economy.husinksum)}
                        {this.economyTableData("700.000 - 999.999 kr.", economy.ant_hus_indk4_, economy.husinksum)}
                        {this.economyTableData("1.000.000 kr. og derover", economy.ant_hus_indk5_, economy.husinksum)}
                        {this.economyTableData("Uden indkomst-informationer", economy.ant_hus_indk9_, economy.husinksum)}
                        {this.economyTableData("Samlet", economy.husinksum)}
                        

                        <tr><td colSpan="3"></td></tr>
                        <tr>
                            <td><b>Bilejerskab (Husstande)</b></td>
                            <td className="text-right"><b>Antal</b></td>
                            <td className="text-right"><b>Andel</b></td>
                        </tr>
                        {this.economyTableData("0 biler", economy.ant_hus_0b, economy.husbilsum)}
                        {this.economyTableData("1 bil", economy.ant_hus_1b, economy.husbilsum)}
                        {this.economyTableData("2+ biler", economy.ant_hus_2pl_b, economy.husbilsum)}
                        {this.economyTableData("Samlet", economy.husbilsum)}
                    </tbody>
            </table>
        }

        return (
            <div>{economyTableSum}</div>
        )
    }

    render(){        
        return (
            <div>
                <div className="social-economy-header">
                    <a href={"#social-economy-table"+this.state.id} data-toggle="collapse"> Socioøkonomiske nøgletal <i className="fa fa-chevron-down" aria-hidden="true"></i></a>
                </div>
                <div id={"social-economy-table"+this.state.id} className="intersect-socioeconomy-table collapse">
                    {this.renderEconomyTable(this.props.economy)}
                </div>
            </div>
        )
    }
}

module.exports = SocioeconomicTable;