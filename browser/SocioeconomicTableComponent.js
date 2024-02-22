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
                 Show absolute values
                 <td className="text-right">{parseInt(value).toLocaleString("da-DK")}</td>

             */}
             <td></td>
             {totalPercentage}
        </tr>
    }

    economyTableDataAbsolute(name, value){
        return <tr>
            <td>{name}</td>
            <td className="text-right"></td>
            {isNaN(parseInt(value)) ? value : parseInt(value).toLocaleString("da-DK")}
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
                            <td className="text-right"></td>
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
                            <td className="text-right"></td>
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
                            <td className="text-right"></td>
                            <td className="text-right"><b>Andel</b></td>
                        </tr>
                        {this.economyTableData("1 person", economy.ant_husst_1per, economy.hussum)}
                        {this.economyTableData("2 personer", economy.ant_husst_2per, economy.hussum)}
                        {this.economyTableData("3 personer", economy.ant_husst_3per, economy.hussum)}
                        {this.economyTableData("4 personer", economy.ant_husst_4per, economy.hussum)}
                        {this.economyTableData("5+ personer", economy.ant_husst_5pl, economy.hussum)}
                        {this.economyTableData("Samlet", economy.hussum)}


                        <tr><td colSpan="3"></td></tr>
                        <tr>
                            <td><b>Husstandstype (Husstande)</b></td>
                            <td className="text-right"></td>
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
                            <td className="text-right"></td>
                            <td className="text-right"><b>Andel</b></td>
                        </tr>
                        {this.economyTableData("under 250.000 kr.", economy.ant_hus_indk1, economy.husinksum)}
                        {this.economyTableData("250.000 - 449.999 kr.", economy.ant_hus_indk2, economy.husinksum)}
                        {this.economyTableData("450.000 - 699.999 kr.", economy.ant_hus_indk3, economy.husinksum)}
                        {this.economyTableData("700.000 - 999.999 kr.", economy.ant_hus_indk4, economy.husinksum)}
                        {this.economyTableData("1.000.000 kr. og derover", economy.ant_hus_indk5, economy.husinksum)}
                        {this.economyTableData("Uden indkomst-informationer", economy.ant_hus_indk9, economy.husinksum)}
                        {this.economyTableData("Samlet", economy.husinksum)}

                        <tr><td colSpan="3"></td></tr>
                        <tr>
                            <td><b>Bilejerskab (Husstande)</b></td>
                            <td className="text-right"></td>
                            <td className="text-right"><b>Andel</b></td>
                        </tr>
                        {this.economyTableData("0 biler", economy.ant_hus_0b, economy.husbilsum)}
                        {this.economyTableData("1 bil", economy.ant_hus_1b, economy.husbilsum)}
                        {this.economyTableData("2+ biler", economy.ant_hus_2pl_b, economy.husbilsum)}
                        {this.economyTableData("Samlet", economy.husbilsum)}

                        <tr><td colSpan="3"></td></tr>
                        <tr>
                            <td><b>Trækkrog (Husstande)</b></td>
                            <td className="text-right"></td>
                            <td className="text-right"><b>Andel</b></td>
                        </tr>
                        {this.economyTableData("0 trækkroge", economy.ant_hus_0k, economy.huskrogsum)}
                        {this.economyTableData("1 trækkrog", economy.ant_hus_1k, economy.huskrogsum)}
                        {this.economyTableData("2+ trækkroge", economy.ant_hus_2k, economy.huskrogsum)}
                        {this.economyTableData("Samlet", economy.huskrogsum)}

                        <tr><td colSpan="3"></td></tr>
                        <tr>
                            <td><b>Trailerejerskab (Husstande)</b></td>
                            <td className="text-right"></td>
                            <td className="text-right"><b>Andel</b></td>
                        </tr>
                        {this.economyTableData("0 trailere", economy.ant_hus_0t, economy.hustrailersum)}
                        {this.economyTableData("1 trailer", economy.ant_hus_1t, economy.hustrailersum)}
                        {this.economyTableData("2+ trailere", economy.ant_hus_2t, economy.hustrailersum)}
                        {this.economyTableData("Samlet", economy.hustrailersum)}


                        <tr><td colSpan="3"></td></tr>
                        <tr>
                            <td><b>Boligenheder</b></td>
                            <td className="text-right"></td>
                            <td className="text-right"><b>Antal</b></td>
                        </tr>
                        {this.economyTableDataAbsolute("Enfamiliehuse", economy.bbr_parcel_sum)}
                        {this.economyTableDataAbsolute("Række-, kæde-, -klynge og dobbelthuse", economy.bbr_raekke_sum)}
                        {this.economyTableDataAbsolute("Etageboliger og flerfamiliehuse", economy.bbr_etage_sum)}
                        {this.economyTableDataAbsolute("Sommerhuse", economy.bbr_sommerhus_sum)}
                        {this.economyTableDataAbsolute("Kolonihavehuse", economy.bbr_kolo_sum)}
                        

                    </tbody>
            </table>
        }

        return (
            <div>{economyTableSum}</div>
        )
    }

    render(){        
       //if(this.props.userLevel != null && this.props.userLevel >= 3)   {  

            //console.log('renderEconomyTable economy user level 3');
            //console.log('Userlevel:',this.props.userLevel);
            //console.log(data.status.screen_name)
            return (
                <div>
                    <div className="social-economy-header">
                        <a href={"#social-economy-table"+this.state.id} data-toggle="collapse"> Socioøkonomiske nøgletal <i className="fa fa-chevron-down" aria-hidden="true"></i></a>
                    </div>
                    <div id={"social-economy-table"+this.state.id} className="intersect-socioeconomy-table collapse">
                        {this.renderEconomyTable(this.props.economy)}
                    </div>
                </div>
            );
    //}else if(this.state.userLevel == null){
    //        console.log('renderEconomyTable economy user level 1 & 2');
    //        return null;
    //    }
    }
}

module.exports = SocioeconomicTable;