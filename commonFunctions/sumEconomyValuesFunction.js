// Define and export the sumEconomyValues function as a module
module.exports = function sumEconomyValues(values){

    // Define a nested function for adding values
    function DHP_PEV(e, b){
        let value = parseFloat(e) + parseFloat(b);  // Convert values to floats and add them
        return value;   // Return the sum
    }

    // Check if the values array is empty
    if(values.length == 0){
        return null;// Return null if the array is empty
    }

     // Use the reduce method to iteratively accumulate the values
    var reducedEconomyValues = values.reduce( (e, r) => {
        e = e.properties; // Assign the properties of e to a new variable
        r = r.properties; // Assign the properties of r to a new variable

        // Calculate the sums of different properties using the DHP_PEV function
        var ant_0_17pe = DHP_PEV(e.ant_0_17pe, r.ant_0_17pe);
        var ant_18_27p = DHP_PEV(e.ant_18_27p, r.ant_18_27p);
        var ant_28_37p = DHP_PEV(e.ant_28_37p, r.ant_28_37p);
        var ant_38_47p = DHP_PEV(e.ant_38_47p, r.ant_38_47p);
        var ant_48_65p = DHP_PEV(e.ant_48_65p, r.ant_48_65p);
        var ant_66pl   = DHP_PEV(e.ant_66pl, r.ant_66pl); //NY
        //var befsum     = ant_0_17pe+ant_18_27p+ant_28_37p+ant_38_47p+ant_48_65p+ant_66pl;

        var ant_husst_1per = DHP_PEV(e.ant_husst_1per, r.ant_husst_1per);
        var ant_husst_2per = DHP_PEV(e.ant_husst_2per, r.ant_husst_2per);
        var ant_husst_3per = DHP_PEV(e.ant_husst_3per, r.ant_husst_3per);
        var ant_husst_4per = DHP_PEV(e.ant_husst_4per, r.ant_husst_4per);
        var ant_husst_5pl = DHP_PEV(e.ant_husst_5pl, r.ant_husst_5pl);
        //var hussum     = ant_husst_1per+ant_husst_2per+ant_husst_3per+ant_husst_4per+ant_husst_5pl;

        var hus_type1  = DHP_PEV(e.hus_type1, r.hus_type1);
        var hus_type2  = DHP_PEV(e.hus_type2, r.hus_type2);
        var hus_type3  = DHP_PEV(e.hus_type3, r.hus_type3);
        var hus_type4  = DHP_PEV(e.hus_type4, r.hus_type4);
        var hus_type5  = DHP_PEV(e.hus_type5, r.hus_type5);
        var hus_type6  = DHP_PEV(e.hus_type6, r.hus_type6);
        var hus_type7  = DHP_PEV(e.hus_type7, r.hus_type7);
        //var hustypesum = hus_type1 + hus_type2 + hus_type3 + hus_type4 + hus_type5 + hus_type6 + hus_type7;

        //Indkomst
        var ant_hus_indk1 = DHP_PEV(e.ant_hus_indk1, r.ant_hus_indk1);
        var ant_hus_indk2 = DHP_PEV(e.ant_hus_indk2, r.ant_hus_indk2);
        var ant_hus_indk3 = DHP_PEV(e.ant_hus_indk3, r.ant_hus_indk3);
        var ant_hus_indk4 = DHP_PEV(e.ant_hus_indk4, r.ant_hus_indk4);
        var ant_hus_indk5 = DHP_PEV(e.ant_hus_indk5, r.ant_hus_indk5);
        var ant_hus_indk9 = DHP_PEV(e.ant_hus_indk9, r.ant_hus_indk9);
        //var husinksum = ant_hus_indk1 + ant_hus_indk2 + ant_hus_indk3 + ant_hus_indk4 + ant_hus_indk5 + ant_hus_indk9;
        
        var ant_bbr_110 = DHP_PEV(e.ant_bbr_110, r.ant_bbr_110);    // Stuehus til landbrugsejendom
        var ant_bbr_120 = DHP_PEV(e.ant_bbr_120, r.ant_bbr_120);    // Fritliggende enfamiliehus
        var ant_bbr_121 = DHP_PEV(e.ant_bbr_121, r.nt_bbr_121);   // Sammenbygget enfamiliehus
        var ant_bbr_122 = DHP_PEV(e.ant_bbr_122, r.ant_bbr_122);    // Fritliggende enfamiliehus i tæt-lav bebyggelse
        var ant_bbr_130 = DHP_PEV(e.ant_bbr_130, r.ant_bbr_130);    // (UDFASES) Række-, kæde-, eller dobbelthus (lodret adskillelse mellem enhederne).
        var ant_bbr_131 = DHP_PEV(e.ant_bbr_131, r.ant_bbr_131);    // Række-, kæde- og klyngehus
        var ant_bbr_132 = DHP_PEV(e.ant_bbr_132, r.ant_bbr_132);    // Dobbelthus
        var ant_bbr_140 = DHP_PEV(e.ant_bbr_140, r.ant_bbr_140);    // Etagebolig-bygning, flerfamiliehus eller to-familiehus
        var ant_bbr_510 = DHP_PEV(e.ant_bbr_510, r.ant_bbr_510);    // 510 - Sommerhus
        var ant_bbr_540 = DHP_PEV(e.ant_bbr_540, r.ant_bbr_540);    // 540 - Kolonihavehus
        //var bbrsum = ant_bbr_110 +ant_bbr_120+ant_bbr_121+ant_bbr_122+ant_bbr_130+ant_bbr_131+ant_bbr_132+ant_bbr_140+ant_bbr_150+ant_bbr_160+ant_bbr_185+ant_bbr_190+ant_bbr_510+ant_bbr_540;

        //Bil ejerskab
        var ant_hus_0b = DHP_PEV(e.ant_hus_0b, r.ant_hus_0b);
        var ant_hus_1b = DHP_PEV(e.ant_hus_1b, r.ant_hus_1b);
        var ant_hus_2pl_b = DHP_PEV(e.ant_hus_2pl_b, r.ant_hus_2pl_b);
        //var husbilsum  = ant_hus_0b+ant_hus_2pl_b+ant_hus_1b;

        //Trækkroge
        var ant_hus_0k = DHP_PEV(e.ant_hus_0k, r.ant_hus_0k);
        var ant_hus_1k = DHP_PEV(e.ant_hus_1k, r.ant_hus_1k);
        var ant_hus_2k = DHP_PEV(e.ant_hus_2k, r.ant_hus_2k);
        //var huskrogsum  = ant_hus_0k+ant_hus_1k+ant_hus_2k;

        //Trailere
        var ant_hus_0t = DHP_PEV(e.ant_hus_0t, r.ant_hus_0t);
        var ant_hus_1t = DHP_PEV(e.ant_hus_1t, r.ant_hus_1t);
        var ant_hus_2t = DHP_PEV(e.ant_hus_2t, r.ant_hus_2t);
        //var hustrailersum  = ant_hus_0k+ant_hus_1k+ant_hus_2k;
        
        var ant_udd1   = DHP_PEV(e.ant_udd1, r.ant_udd1);
        var ant_udd2   = DHP_PEV(e.ant_udd2, r.ant_udd2);
        var ant_udd3   = DHP_PEV(e.ant_udd3, r.ant_udd3);
        var ant_udd4   = DHP_PEV(e.ant_udd4, r.ant_udd4);
        var ant_udd5   = DHP_PEV(e.ant_udd5, r.ant_udd5);
        var ant_udd6 = DHP_PEV(e.ant_udd6, r.ant_udd6);
        var ant_udd9 = DHP_PEV(e.ant_udd9, r.ant_udd9);
        //var uddansum = ant_udd1 + ant_udd2 + ant_udd3 + ant_udd4 + ant_udd5 + ant_udd6 + ant_udd9;
        
        var antpersh_4   = DHP_PEV(e.antpersh_4, r.antpersh_4);
        var anthust_4   = DHP_PEV(e.anthust_4, r.anthust_4);

         // Create an object with the calculated properties
        var result = {
            properties: {
                ant_0_17pe: ant_0_17pe,
                ant_18_27p: ant_18_27p,
                ant_28_37p: ant_28_37p,
                ant_38_47p: ant_38_47p,
                ant_48_65p: ant_48_65p,
                ant_66pl: ant_66pl,
                befsum : ant_0_17pe+ant_18_27p+ant_28_37p+ant_38_47p+ant_48_65p+ant_66pl,

                ant_husst_1per: ant_husst_1per,
                ant_husst_2per: ant_husst_2per,
                ant_husst_3per: ant_husst_3per,
                ant_husst_4per: ant_husst_4per,
                ant_husst_5pl: ant_husst_5pl,
                hussum : ant_husst_1per+ant_husst_2per+ant_husst_3per+ant_husst_4per+ant_husst_5pl,

                hus_type1 : hus_type1,
                hus_type2 : hus_type2,
                hus_type3 : hus_type3,
                hus_type4 : hus_type4,
                hus_type5 : hus_type5,
                hus_type6 : hus_type6,
                hus_type7 : hus_type7,
                hustypesum: hus_type1 + hus_type2 + hus_type3 + hus_type4 + hus_type5 + hus_type6 + hus_type7,

                ant_hus_indk1: ant_hus_indk1,
                ant_hus_indk2: ant_hus_indk2,
                ant_hus_indk3: ant_hus_indk3,
                ant_hus_indk4: ant_hus_indk4,
                ant_hus_indk5: ant_hus_indk5,
                ant_hus_indk9: ant_hus_indk9,
                husinksum : ant_hus_indk1 + ant_hus_indk2 + ant_hus_indk3 + ant_hus_indk4 + ant_hus_indk5 + ant_hus_indk9,
                
                ant_bbr_110: ant_bbr_110,
                ant_bbr_120: ant_bbr_120,
                ant_bbr_121: ant_bbr_121,
                ant_bbr_122: ant_bbr_122,
                ant_bbr_130: ant_bbr_130,
                ant_bbr_131: ant_bbr_131,
                ant_bbr_132: ant_bbr_132,
                ant_bbr_140: ant_bbr_140,
                ant_bbr_510: ant_bbr_510,
                ant_bbr_540: ant_bbr_540,
                bbrsum: ant_bbr_110 +ant_bbr_120+ant_bbr_121+ant_bbr_122+ant_bbr_130+ant_bbr_131+ant_bbr_132+ant_bbr_140+ant_bbr_140+ant_bbr_540,
                
                bbr_parcel_sum: ant_bbr_110 +ant_bbr_120+ant_bbr_121+ant_bbr_122,
                bbr_raekke_sum: ant_bbr_130+ant_bbr_131+ant_bbr_132,
                bbr_etage_sum: ant_bbr_140,
                bbr_sommerhus_sum: ant_bbr_510,
                bbr_kolo_sum: ant_bbr_540,

                ant_hus_0b: ant_hus_0b,
                ant_hus_1b: ant_hus_1b,
                ant_hus_2pl_b: ant_hus_2pl_b,
                husbilsum : ant_hus_0b+ant_hus_2pl_b+ant_hus_1b,
                
                ant_hus_0k: ant_hus_0k,
                ant_hus_1k: ant_hus_1k,
                ant_hus_2k: ant_hus_2k,
                huskrogsum: ant_hus_0k+ant_hus_1k+ant_hus_2k,


                ant_hus_0t: ant_hus_0t,
                ant_hus_1t: ant_hus_1t,
                ant_hus_2t: ant_hus_2t,
                hustrailersum : ant_hus_0k+ant_hus_1k+ant_hus_2k,
                
                ant_udd1  : ant_udd1,
                ant_udd2  : ant_udd2,
                ant_udd3  : ant_udd3,
                ant_udd4  : ant_udd4,
                ant_udd5  : ant_udd5,
                ant_udd6: ant_udd6,
                ant_udd9: ant_udd9,
                uddansum: ant_udd1 + ant_udd2 + ant_udd3 + ant_udd4 + ant_udd5 + ant_udd6 + ant_udd9,

                antpersh_4 : antpersh_4,
                
                anthust_4 : anthust_4
            }
        }
        return result; // Return the result for each iteration
    });

    // Return the properties of the final result
    return reducedEconomyValues.properties;
}