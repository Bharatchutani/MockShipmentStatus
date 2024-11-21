import { LightningElement, wire, track, api} from 'lwc';
import getShipmentStatus from '@salesforce/apex/getShipmentStatusClass.getShipmentStatus';
import { refreshApex } from '@salesforce/apex';

export default class GetCustomerShipmentStatus extends LightningElement {
@track status;
@track error;
@api recordId;

@wire(getShipmentStatus, {recordId: '$recordId'})
wiredStatus({ data, error})
{
    if(data)
    {
        this.status = data;
    }
    else if (error)
    {
        this.error = error;
    }
}

refreshStatus(){
refreshApex(this.wiredStatus);
}
}