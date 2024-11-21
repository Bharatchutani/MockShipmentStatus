I enabled shipment status tracking on the Account object and placed the LWC component in the Account layout.


The LWC component pulls and shows the current shipment status either during the page load/refresh or by clicking the Refresh Status button placed on the right side of the component.


Created the following list of components to implement this solution: 
1. Created a text field "Tracking_Number__c "on the Account object to hold the shipment tracking number.
2. Created an apex class "getShipmentStatusClass" to query the tracking number and make a REST API call to get the shipment status.
3. Created an LWC component "getCustomerShipmentStatus" to display the current shipment status.
4. Added a Remote Site Settings to invoke HTTP URL from the Salesforce org. 
