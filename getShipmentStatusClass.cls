public class getShipmentStatusClass
{

// Calling Rest API method to get latest shipment
  @AuraEnabled(cacheable=true)
    public static string getShipmentStatus(string recordId)
    {
      string trackingid; // Variable to get customer shipment tracking id
      string resultmessage = 'Something went wrong, please contact administrator'; // return string to hold shipment status or error message
      
      try{
          
          if(recordId!=null)
          {
            trackingid = String.valueOf([select id, Tracking_Number__c from Account where Id=:recordId limit 1].Tracking_Number__c);
          }

          if(trackingid!=null)
          {
            Http http = new Http();
            HttpRequest request = new HttpRequest();
            string EXTENRAL_REST_API_URL = 'https://merzcommunities--tina.sandbox.my.salesforce-sites.com/services/apexrest/mockShipmentStatus?trackingNumber='+trackingid;


            request.setEndpoint(EXTENRAL_REST_API_URL);
            request.setMethod('GET');

            HttpResponse response = http.send(request);

            if(response.getStatusCode() == 200) {
                // Deserialize the JSON string
              //  Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
                    resultmessage = response.getBody();

            }
            else
            {
                    resultmessage = 'error'+response.getStatus();
            }
        }
      }
      catch(exception ex)
      {
          System.debug('Following exception has occured in the class getShipmentStatusClass:'+ ex.getMessage());
      }
    return (string) resultmessage; 
    }
}