import React, { useState, useEffect } from 'react';
//import {Button} from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import CharityService from '../service/CharityService';

export const CarouselDemo = () => {
    // creating the charities variable in state, initiat state is an empty array
    // setCharities can be called later to set the charties state
    const [charities, setCharities] = useState([]);
    
    // setting the charities data when there is data
    useEffect(() => {
        CharityService.getCharities()
        .then(data => setCharities(data))
        .catch(err => console.log(err))
        // empty array acts as "componentDidMount"
    }, []);

    const responsiveSettings = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const charityTemplate = (charity) => {
        // var logo = "assets/demo/images/charity/" + charity.image_name + ".png";
        // const imageClick = () => {
        //     window.location = charity.location;
        // }
        console.log(charity);

        return (
            <div className="charity-details">
                <div className="p-grid p-nogutter">
                    {/* <div className="p-col-12">
                        <img src={logo} alt={charity.name} onClick={() => imageClick()} height="50" width="150" />
                    </div> */}
                    <div className="p-col-12 charity-data">
                        <div className="charity-image">{charity.image_name}</div>
                        <div className="charity-title">{charity.name}</div>
                        <div className="charity-subtitle">{charity.year}</div>

                        {/* <div className="charity-buttons">
                                        <Button icon="pi pi-home" className="p-button-secondary" />
                                        <Button icon="pi pi-star" className="p-button-secondary" />
                                        <Button icon="pi pi-cog" className="p-button-secondary" />
                                    </div> */}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="carousel-demo">
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Charities of Colorado</h1>
                </div>
            </div>

            <div className="content-section implementation">
                <Carousel value={charities} itemTemplate={charityTemplate} numVisible={4} numScroll={3}
                    responsive={responsiveSettings}></Carousel>

                {/* <Carousel value={this.state.charities} itemTemplate={this.charityTemplate} numVisible={3} numScroll={1} className="custom-carousel"
                        responsive={this.responsiveSettings} header={customHeader} circular={true} autoplayInterval={3000}></Carousel>

                    <Carousel value={this.state.charities} itemTemplate={this.charityTemplate} orientation="vertical" style={{width: '400px', marginTop: '2em'}}
                        numVisible={1} numScroll={1} responsive={this.responsiveSettings} verticalViewPortHeight="330px" header={verticalHeader}></Carousel> */}
            </div>
        </div>
    );
}

// export default CarouselDemo;

// export class CarouselDemo extends Component {
//     constructor() {
//         super();
//         this.state = { 
//             charities: []
//         };
//         this.charitieservice = new CharityService();
//         this.charityTemplate = this.charityTemplate.bind(this);

//         this.responsiveSettings = [
//             {
//                 breakpoint: '1024px',
//                 numVisible: 3,
//                 numScroll: 3
//             },
//             {
//                 breakpoint: '768px',
//                 numVisible: 2,
//                 numScroll: 2
//             },
//             {
//                 breakpoint: '560px',
//                 numVisible: 1,
//                 numScroll: 1
//             }
//         ];
//     }

//     componentDidMount() {
//         this.charitieservice.getCharitiesSmall().then(data => this.setState({charities: data}));
//     }

//     charityTemplate(charity) {
//         var logo = "assets/demo/images/charity/" + charity.image_name + ".png";
//         const imageClick = () => {
//             window.location = charity.location;
//           }
//         return (
//             <div className="charity-details">
//                 <div className="p-grid p-nogutter">
//                     <div className="p-col-12">
//                         <img src={logo} alt={charity.name} onClick={() => imageClick()} height="50" width="150"/>
//                     </div>
//                     <div className="p-col-12 charity-data">
//                         <div className="charity-title">{charity.name}</div>
//                         <div className="charity-subtitle">{charity.year}</div>

//                         {/* <div className="charity-buttons">
//                             <Button icon="pi pi-home" className="p-button-secondary" />
//                             <Button icon="pi pi-star" className="p-button-secondary" />
//                             <Button icon="pi pi-cog" className="p-button-secondary" />
//                         </div> */}
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     render() {
//         // const basicHeader = <h2>Basic</h2>;
//         // const customHeader = <h2>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h2>
//         // const verticalHeader = <h2>Vertical</h2>

//         return (
//             <div className="carousel-demo">
//                 <div className="content-section introduction">
//                     <div className="feature-intro">
//                         <h1>Charities of Colorado</h1>
//                     </div>
//                 </div>

//                 <div className="content-section implementation">
//                     <Carousel value={this.state.charities} itemTemplate={this.charityTemplate} numVisible={4} numScroll={3} 
//                         responsive={this.responsiveSettings}></Carousel>

//                     {/* <Carousel value={this.state.charities} itemTemplate={this.charityTemplate} numVisible={3} numScroll={1} className="custom-carousel"
//                         responsive={this.responsiveSettings} header={customHeader} circular={true} autoplayInterval={3000}></Carousel>

//                     <Carousel value={this.state.charities} itemTemplate={this.charityTemplate} orientation="vertical" style={{width: '400px', marginTop: '2em'}}
//                         numVisible={1} numScroll={1} responsive={this.responsiveSettings} verticalViewPortHeight="330px" header={verticalHeader}></Carousel> */}
//                 </div>             
//             </div>
//         );
//     }
// }