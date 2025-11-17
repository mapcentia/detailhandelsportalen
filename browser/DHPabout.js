class DHPabout extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="modal fade" id="DHPAbout" tabIndex="-1" role="dialog" aria-labelledby="DHPAboutModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h2>Om</h2>
                        <p><a href="http://detailhandelsportalen.dk/">Detailhandelsportalen</a> er udviklet af COWIs afdeling for <a href="http://www.cowi.dk/menu/service/oekonomimanagementogplanlaegning/fysiskplanlagningogbyudvikling/">By- og Trafikplanlægning</a> i samarbejde med <a href="http://mapcentia.com">MapCentia ApS</a>.</p>
                        <p>Med detailhandelsportalen har din organisation fået et screeningsværktøj til at nemt og hurtigt at vurdere placeringer for nye dagligvarebutikker i Danmark.</p>
                        <p>Klik dig rundt i lagene, tryk på knapperne og print dit eget oplandskort. Vi håber, at I får glæde af jeres nye værktøj.</p>
                        <p>Du er velkommen til at kontakte os, hvis du har spørgsmål til teknikken eller til dine analyser.</p>
                        <p>Læs også "Disclaimer" inden du fortsætter.</p>

                        <h2>Kontakt</h2>
                        <p>Økonomi &amp; Salg: Kristian Løbner / <a href="mailto:krlb@cowi.com">krlb@cowi.com</a></p>
                        <p>Drift &amp; Udvikling: Martin Lunn Rasmussen / <a href="mailto:mrru@cowi.com">dann@cowi.com</a></p>

                        <h2>Disclaimer</h2>
                        <p>Dit brugernavn og password er personligt og må ikke videregives til andre.</p>
                        <p>Data på Detailhandelsportalen er baseret på eksisterende data, der er købt, indhentet og viderebehandlet af COWI.</p>
                        <p>COWI står ikke til regnskab for evt. fejl i datakilder, der anvendes på Detailhandelsportalen.</p>
                        <p>Analyser, der er foretaget via Detailhandelsportalen, er alene et udtryk for brugerens vurderinger.</p>
                        <p>COWI bistår naturligvis gerne med yderligere undersøgelser, vurderinger og planlægning, hvis der er behov for det.</p>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Luk</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = DHPabout;
