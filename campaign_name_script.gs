function main() {
  var adGroupIterator =
      AdsApp.adGroups().withCondition("CampaignStatus = ENABLED").get();
  while (adGroupIterator.hasNext()) {
    var adGroup = adGroupIterator.next();
    var gn=adGroup.getName().replace(/\s/g,'_');
    var cn=adGroup.getCampaign().getName().replace(/\s/g,'_');
    adGroup.urls().setCustomParameters({adgroup: gn, campaign: cn});}
  
}
