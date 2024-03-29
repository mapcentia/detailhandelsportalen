module.exports = function sumEconomyValues(values){
    function DHP_PEV(e, b){
        //let value = Math.round(parseFloat(e)) + Math.round(parseFloat(b));
        let value = parseFloat(e) + parseFloat(b);
        return value;
    }
    if(values.length == 0){
        return null;
    }
    var reducedEconomyValues = values.reduce( (e, r) => {
        e = e.properties;
        r = r.properties;

        var ant_0_17pe = DHP_PEV(e.ant_0_17pe, r.ant_0_17pe);
        var ant_18_27p = DHP_PEV(e.ant_18_27p, r.ant_18_27p);
        var ant_28_37p = DHP_PEV(e.ant_28_37p, r.ant_28_37p);
        var ant_38_47p = DHP_PEV(e.ant_38_47p, r.ant_38_47p);
        var ant_48_65p = DHP_PEV(e.ant_48_65p, r.ant_48_65p);
        var ant_66pl   = DHP_PEV(e.ant_66pl, r.ant_66pl); //NY
        var befsum     = ant_0_17pe+ant_18_27p+ant_28_37p+ant_38_47p+ant_48_65p+ant_66pl;

        var ant_husst_1per = DHP_PEV(e.ant_husst_1per, r.ant_husst_1per);
        var ant_husst_2per = DHP_PEV(e.ant_husst_2per, r.ant_husst_2per);
        var ant_husst_3per = DHP_PEV(e.ant_husst_3per, r.ant_husst_3per);
        var ant_husst_4per = DHP_PEV(e.ant_husst_4per, r.ant_husst_4per);
        var ant_husst_5pl = DHP_PEV(e.ant_husst_5pl, r.ant_husst_5pl);
        var hussum     = ant_husst_1per+ant_husst_2per+ant_husst_3per+ant_husst_4per+ant_husst_5pl;

        var hus_type1  = DHP_PEV(e.hus_type1, r.hus_type1);
        var hus_type2  = DHP_PEV(e.hus_type2, r.hus_type2);
        var hus_type3  = DHP_PEV(e.hus_type3, r.hus_type3);
        var hus_type4  = DHP_PEV(e.hus_type4, r.hus_type4);
        var hus_type5  = DHP_PEV(e.hus_type5, r.hus_type5);
        var hus_type6  = DHP_PEV(e.hus_type6, r.hus_type6);
        var hus_type7  = DHP_PEV(e.hus_type7, r.hus_type7);
        var hustypesum = hus_type1 + hus_type2 + hus_type3 + hus_type4 + hus_type5 + hus_type6 + hus_type7;

        var ant_hus_indk1 = DHP_PEV(e.ant_hus_indk1, r.ant_hus_indk1);
        var ant_hus_indk2 = DHP_PEV(e.ant_hus_indk2, r.ant_hus_indk2);
        var ant_hus_indk3 = DHP_PEV(e.ant_hus_indk3, r.ant_hus_indk3);
        var ant_hus_indk4 = DHP_PEV(e.ant_hus_indk4, r.ant_hus_indk4);
        var ant_hus_indk5 = DHP_PEV(e.ant_hus_indk5, r.ant_hus_indk5);
        var ant_hus_indk9 = DHP_PEV(e.ant_hus_indk9, r.ant_hus_indk9);
        var husinksum = ant_hus_indk1 + ant_hus_indk2 + ant_hus_indk3 + ant_hus_indk4 + ant_hus_indk5 + ant_hus_indk9;

        var ant_hus_0b = DHP_PEV(e.ant_hus_0b, r.ant_hus_0b);
        var ant_hus_1b = DHP_PEV(e.ant_hus_1b, r.ant_hus_1b);
        var ant_hus_2pl_b = DHP_PEV(e.ant_hus_2pl_b, r.ant_hus_2pl_b);
        var husbilsum  = ant_hus_0b+ant_hus_2pl_b+ant_hus_1b;

        var ant_udd1   = DHP_PEV(e.ant_udd1, r.ant_udd1);
        var ant_udd2   = DHP_PEV(e.ant_udd2, r.ant_udd2);
        var ant_udd3   = DHP_PEV(e.ant_udd3, r.ant_udd3);
        var ant_udd4   = DHP_PEV(e.ant_udd4, r.ant_udd4);
        var ant_udd5   = DHP_PEV(e.ant_udd5, r.ant_udd5);
        var ant_udd6 = DHP_PEV(e.ant_udd6, r.ant_udd6);
        var ant_udd9 = DHP_PEV(e.ant_udd9, r.ant_udd9);
        var uddansum = ant_udd1 + ant_udd2 + ant_udd3 + ant_udd4 + ant_udd5 + ant_udd6 + ant_udd9;
        
        var antpersh_4   = DHP_PEV(e.antpersh_4, r.antpersh_4);
        var anthust_4   = DHP_PEV(e.anthust_4, r.anthust_4);

        var result = {
            properties: {
                ant_0_17pe: ant_0_17pe,
                ant_18_27p: ant_18_27p,
                ant_28_37p: ant_28_37p,
                ant_38_47p: ant_38_47p,
                ant_48_65p: ant_48_65p,
                ant_66pl: ant_66pl,
                befsum: befsum,

                ant_husst_1per: ant_husst_1per,
                ant_husst_2per: ant_husst_2per,
                ant_husst_3per: ant_husst_3per,
                ant_husst_4per: ant_husst_4per,
                ant_husst_5pl: ant_husst_5pl,
                hussum: hussum,

                hus_type1 : hus_type1,
                hus_type2 : hus_type2,
                hus_type3 : hus_type3,
                hus_type4 : hus_type4,
                hus_type5 : hus_type5,
                hus_type6 : hus_type6,
                hus_type7 : hus_type7,
                hustypesum: hustypesum,

                ant_hus_indk1: ant_hus_indk1,
                ant_hus_indk2: ant_hus_indk2,
                ant_hus_indk3: ant_hus_indk3,
                ant_hus_indk4: ant_hus_indk4,
                ant_hus_indk5: ant_hus_indk5,
                ant_hus_indk9: ant_hus_indk9,
                husinksum : husinksum,

                ant_hus_0b: ant_hus_0b,
                ant_hus_1b: ant_hus_1b,
                ant_hus_2pl_b: ant_hus_2pl_b,
                husbilsum : husbilsum,
                
                ant_udd1  : ant_udd1,
                ant_udd2  : ant_udd2,
                ant_udd3  : ant_udd3,
                ant_udd4  : ant_udd4,
                ant_udd5  : ant_udd5,
                ant_udd6: ant_udd6,
                ant_udd9: ant_udd9,
                uddansum  : uddansum,

                antpersh_4 : antpersh_4,
                
                anthust_4 : anthust_4
            }
        }
        return result;
    });
    return reducedEconomyValues.properties;
}