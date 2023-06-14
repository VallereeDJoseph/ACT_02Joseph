import React from 'react';
import logo from './pic1.png';
import logo2 from './pic2.jpg';
import logo3 from './pic3.jpg';
const Main =()=>{
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={logo} className="d-block w-100 object-fit: cover" alt="logo"></img>
            
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={logo2} className="d-block w-100" alt="logo"></img>
            
          </div>
          <div className="carousel-item">
            <img src={logo3} className="d-block w-100" alt="logo"></img>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Definition Deforestation
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Deforestation.</strong> Deforestation, the large-scale removal of forests, continues to be a pressing environmental issue with far-reaching consequences. Recent news highlights the alarming rates at which forests are being cleared for agricultural expansion, logging, and urbanization. Deforestation not only results in the loss of vital habitats for countless plant and animal species but also contributes to climate change. Trees act as carbon sinks, absorbing carbon dioxide from the atmosphere, and their removal releases vast amounts of stored carbon. This further exacerbates global warming and disrupts the delicate balance of our planet's ecosystems. Efforts are being made to address deforestation through reforestation initiatives, stricter regulations, and sustainable land management practices, but urgent action is still needed to curb this destructive trend.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Definition Forest Fire
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Forest Fire.</strong> Forest fires have become increasingly frequent and severe in recent years, making headlines worldwide. Climate change, along with human activities such as land clearing and negligence, has contributed to the intensification of these fires. Devastating incidents, such as the Amazon rainforest fires and the Australian bushfires, have resulted in the loss of biodiversity, destruction of habitats, and the release of massive amounts of carbon dioxide into the atmosphere. The impact of these fires extends beyond the immediate damage, as the loss of forests disrupts water cycles, reduces air quality, and threatens the livelihoods of local communities. Enhancing fire management strategies, investing in early detection systems, and promoting community awareness are crucial steps in mitigating the risks and preventing the escalation of forest fires.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Definition Water Polution
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Water Polution.</strong> Water pollution remains a critical issue affecting ecosystems and human well-being worldwide. Recent news reports have highlighted instances of industrial waste, agricultural runoff, and improper disposal of chemicals contaminating water sources, including rivers, lakes, and groundwater reserves. This pollution not only harms aquatic life but also poses serious health risks to communities that rely on these water bodies for drinking water and irrigation. The consequences of water pollution extend to the degradation of ecosystems, loss of biodiversity, and economic impacts on industries such as fisheries and tourism. To address water pollution, comprehensive monitoring and enforcement of regulations, adoption of sustainable agricultural practices, and investment in wastewater treatment infrastructure are necessary to safeguard our water resources for current and future generations.
                </div>
                </div>
            </div>
            </div>
      </div>
      
    );
};
export default Main;