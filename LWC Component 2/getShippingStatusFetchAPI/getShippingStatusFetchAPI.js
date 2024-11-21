import { LightningElement } from 'lwc';

const endpoint_URL='https://merzcommunities--tina.sandbox.my.salesforce-sites.com/services/apexrest/mockShipmentStatus?trackingNumber=testtrackingnumber';

export default class GetShippingStatusFetchAPI extends LightningElement {

     status;

    getStatusHandler(){

        fetch(this.endpoint_URL,{
            method:"GET",
            headers:{
            accept: 'application/json',
    'User-agent': 'learning app',
  }
            })
            .then(result => {
                console.log('----'+result.blob());
                console.log('----'+JSON.stringify(result)); 
                if(!result.ok){
                    // handle error
                }

                //var strData = JSON.parse( JSON.stringify( result ) );
               // console.log('----'+strData);
               
               return result;
            })
            .then (result => {
                this.status = result;
                console.log('----'+this.status);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }

}