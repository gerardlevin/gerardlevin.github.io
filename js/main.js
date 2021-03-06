$(function(){

    // Resize the parent height depending on the size of the browser
    $('#container').css({ height: $(window).innerHeight() });
    $(window).resize(function(){
      $('#container').css({ height: $(window).innerHeight() });
    });

    var skiData = [

        {resort: 'Whistler-Blackcomb', region: 'Canada', subregion: null, beginner: '4', intermediate: '4.5', advanced: '5', offpiste: '5', tree_skiing: '4', expert: '5', extreme: '5', slackcountry: '5', snow: '3', uncrowded: '2', lifts: '5', terrain_park: '4.5', family_friendly: '5', freshies: '2.5', daytime_restaurants: '3.5', nighttime_restaurants: '5', nightlife: '5', apres: '5', skiinskiout: '2', cost: '2', english: null, culture: null, powderhounds: '4', overall: '5', latitude: '50.11226', longitude: '-122.947734'}, 
        {resort: 'Whitefish', region: 'US', subregion: 'Montana', beginner: '4', intermediate: '5', advanced: '4', offpiste: '3', tree_skiing: '4', expert: '3', extreme: '2.5', slackcountry: '2', snow: '4', uncrowded: '4', lifts: '2', terrain_park: '3', family_friendly: '5', freshies: '4', daytime_restaurants: '4', nighttime_restaurants: '3', nightlife: '2', apres: '4', skiinskiout: '4', cost: '4', english: null, culture: null, powderhounds: '4', overall: '4.5', latitude: '48.4106373', longitude: '-114.3352652'}, 
        {resort: 'Copper Mountain', region: 'US', subregion: 'Colorado', beginner: '5', intermediate: '5', advanced: '3.5', offpiste: '4', tree_skiing: '3', expert: '3', extreme: '3', slackcountry: '4', snow: '3.5', uncrowded: '3.5', lifts: '4', terrain_park: '4', family_friendly: '5', freshies: '2.5', daytime_restaurants: '4', nighttime_restaurants: '4', nightlife: '3.5', apres: '4', skiinskiout: '3.5', cost: '3', english: null, culture: null, powderhounds: '3.5', overall: '4.5', latitude: '39.501419', longitude: '-106.1516265'}, 
        {resort: 'Falls Creek', region: 'Australia', subregion: null, beginner: '4', intermediate: '4.5', advanced: '3', offpiste: '2.5', tree_skiing: '2', expert: '1', extreme: '1', slackcountry: '3.5', snow: '2', uncrowded: '2.5', lifts: '3', terrain_park: '4', family_friendly: '5', freshies: '2.5', daytime_restaurants: '3', nighttime_restaurants: '4.5', nightlife: '4', apres: '4', skiinskiout: '5', cost: '2', english: null, culture: null, powderhounds: '3', overall: '4', latitude: '-36.8658814', longitude: '147.2869802'}, 
        {resort: 'Panorama', region: 'Canada', subregion: null, beginner: '3', intermediate: '4', advanced: '3.5', offpiste: '3', tree_skiing: '3.5', expert: '3.5', extreme: '3', slackcountry: null, snow: '2.5', uncrowded: '4.5', lifts: '3', terrain_park: '4.5', family_friendly: '5', freshies: '3', daytime_restaurants: '3.5', nighttime_restaurants: '2.5', nightlife: '3', apres: '2.5', skiinskiout: '3.5', cost: '3.5', english: null, culture: null, powderhounds: '3.5', overall: '4.5', latitude: '50.4583705999999', longitude: '-116.238466'}, 
        {resort: 'Big White', region: 'Canada', subregion: null, beginner: '4.5', intermediate: '5', advanced: '3.5', offpiste: '3', tree_skiing: '3', expert: '3', extreme: '1.5', slackcountry: '1.5', snow: '3.5', uncrowded: '3.5', lifts: '4', terrain_park: '4', family_friendly: '5', freshies: '3.5', daytime_restaurants: '3.5', nighttime_restaurants: '3', nightlife: '3', apres: '2.5', skiinskiout: '5', cost: '3.5', english: null, culture: null, powderhounds: '4', overall: '4.5', latitude: '49.7444444', longitude: '-118.9352777'}, 
        {resort: 'Snowmass', region: 'US', subregion: 'Colorado', beginner: '3', intermediate: '5', advanced: '3', offpiste: '4.5', tree_skiing: '4', expert: '4.5', extreme: '4.5', slackcountry: null, snow: '4', uncrowded: '3.5', lifts: '4.5', terrain_park: '4', family_friendly: '5', freshies: '3', daytime_restaurants: '3.5', nighttime_restaurants: '3', nightlife: '2.5', apres: '2.5', skiinskiout: '5', cost: '2.5', english: null, culture: null, powderhounds: '4', overall: '4.5', latitude: '39.3310273', longitude: '-106.9848271'}, 
        {resort: 'Purgatory', region: 'US', subregion: 'Colorado', beginner: '4.5', intermediate: '5', advanced: '2.5', offpiste: '2', tree_skiing: '2', expert: '1', extreme: '1', slackcountry: '1', snow: '3', uncrowded: '3', lifts: '3', terrain_park: '3', family_friendly: '5', freshies: '2.5', daytime_restaurants: '4', nighttime_restaurants: '2', nightlife: '2.5', apres: '2.5', skiinskiout: '4', cost: '4', english: null, culture: null, powderhounds: '3', overall: '4', latitude: '39.4638626', longitude: '-106.0791782'}, 
        {resort: 'Silver Star', region: 'Canada', subregion: null, beginner: '3.5', intermediate: '3.5', advanced: '4', offpiste: '3', tree_skiing: '3.5', expert: '2.5', extreme: '2', slackcountry: '2', snow: '3.5', uncrowded: '4', lifts: '3.5', terrain_park: '3.5', family_friendly: '5', freshies: '3', daytime_restaurants: '4', nighttime_restaurants: '3', nightlife: '2', apres: '2', skiinskiout: '4', cost: '4', english: null, culture: null, powderhounds: '3.5', overall: '4', latitude: '50.3694444', longitude: '-119.0636111'}, 
        {resort: 'Sun Peaks', region: 'Canada', subregion: null, beginner: '4.5', intermediate: '5', advanced: '4', offpiste: '2.5', tree_skiing: '2.5', expert: '2.5', extreme: '1', slackcountry: '3', snow: '3', uncrowded: '4', lifts: '3.5', terrain_park: '2.5', family_friendly: '5', freshies: '3', daytime_restaurants: '4', nighttime_restaurants: '3.5', nightlife: '2', apres: '2', skiinskiout: '5', cost: '3.5', english: null, culture: null, powderhounds: '3.5', overall: '4.5', latitude: '50.8774589999999', longitude: '-119.910142'}, 
        {resort: 'Sundance', region: 'US', subregion: 'Utah', beginner: '3', intermediate: '3', advanced: '3', offpiste: '4', tree_skiing: '3', expert: '3', extreme: '0', slackcountry: '1', snow: '5', uncrowded: '4', lifts: '3', terrain_park: '0', family_friendly: '5', freshies: '5', daytime_restaurants: '4', nighttime_restaurants: '5', nightlife: '2', apres: '2', skiinskiout: '2', cost: '3', english: null, culture: null, powderhounds: '4.5', overall: '4', latitude: '40.3934222', longitude: '-111.5887709'}, 
        {resort: 'Cardrona', region: 'New Zealand', subregion: null, beginner: '5', intermediate: '3.5', advanced: '2', offpiste: '3', tree_skiing: '0', expert: '2', extreme: '2', slackcountry: null, snow: '2', uncrowded: '2', lifts: '3', terrain_park: '4', family_friendly: '5', freshies: '3', daytime_restaurants: '3', nighttime_restaurants: '1', nightlife: '1', apres: '2', skiinskiout: '1', cost: '3', english: null, culture: null, powderhounds: '2.5', overall: '3.5', latitude: '-44.8821752', longitude: '169.0036181'}, 
        {resort: 'Bridger Bowl', region: 'US', subregion: 'Montana', beginner: '4', intermediate: '2.5', advanced: '2', offpiste: '4', tree_skiing: '3', expert: '5', extreme: '5', slackcountry: '2', snow: '3', uncrowded: '2.5', lifts: '2.5', terrain_park: '3', family_friendly: '5', freshies: '3', daytime_restaurants: '2', nighttime_restaurants: '0', nightlife: '0', apres: '2', skiinskiout: '0', cost: '5', english: null, culture: null, powderhounds: '3.5', overall: '4', latitude: '45.8188199', longitude: '-110.9057761'}, 
        {resort: 'Sahoro', region: 'Japan', subregion: 'Hokkaido', beginner: '4.5', intermediate: '3', advanced: '2.5', offpiste: '4', tree_skiing: '4', expert: '2.5', extreme: '1', slackcountry: null, snow: '4.5', uncrowded: '3.5', lifts: '3', terrain_park: '1', family_friendly: '5', freshies: '5', daytime_restaurants: '3', nighttime_restaurants: '3', nightlife: '0.5', apres: '0.5', skiinskiout: '4.5', cost: '4', english: '4', culture: '2.5', powderhounds: '4.5', overall: '4', latitude: '43.2203266', longitude: '142.8634737'}, 
        {resort: 'Breckenridge', region: 'US', subregion: 'Colorado', beginner: '5', intermediate: '4', advanced: '4.5', offpiste: '4.5', tree_skiing: '2.5', expert: '4', extreme: '4', slackcountry: null, snow: '3.5', uncrowded: '1', lifts: '4', terrain_park: '5', family_friendly: '4.5', freshies: '2', daytime_restaurants: '3', nighttime_restaurants: '4', nightlife: '5', apres: '4', skiinskiout: '4', cost: '3', english: null, culture: null, powderhounds: '3', overall: '4.5', latitude: '39.4816537', longitude: '-106.0383518'}, 
        {resort: 'Niseko', region: 'Japan', subregion: 'Hokkaido', beginner: '4', intermediate: '4.5', advanced: '3.5', offpiste: '4.5', tree_skiing: '4.5', expert: '3', extreme: '1', slackcountry: '5', snow: '5', uncrowded: '2.5', lifts: '3.5', terrain_park: '4', family_friendly: '4.5', freshies: '2.5', daytime_restaurants: '5', nighttime_restaurants: '5', nightlife: '5', apres: '4', skiinskiout: '3', cost: '3.5', english: '5', culture: '2', powderhounds: '4', overall: '5', latitude: '42.8047045', longitude: '140.6874931'}, 
        {resort: 'Canyons', region: 'US', subregion: 'Utah', beginner: '2.5', intermediate: '5', advanced: '5', offpiste: '3.5', tree_skiing: '4.5', expert: '3.5', extreme: '2.5', slackcountry: '4', snow: '4', uncrowded: '3', lifts: '5', terrain_park: '3.5', family_friendly: '4.5', freshies: '3', daytime_restaurants: '3.5', nighttime_restaurants: '3', nightlife: '2.5', apres: '3', skiinskiout: '4', cost: '2', english: null, culture: null, powderhounds: '4', overall: '4.5', latitude: '41.4623431', longitude: '-111.8314519'}, 
        {resort: 'Alta', region: 'US', subregion: 'Utah', beginner: '4', intermediate: '3.5', advanced: '4.5', offpiste: '5', tree_skiing: '4', expert: '5', extreme: '5', slackcountry: '4', snow: '5', uncrowded: '3.5', lifts: '3', terrain_park: '0', family_friendly: '4.5', freshies: '4', daytime_restaurants: '3.5', nighttime_restaurants: '4', nightlife: '2', apres: '3', skiinskiout: '4.5', cost: '3', english: null, culture: null, powderhounds: '5', overall: '4.8', latitude: '40.5888394', longitude: '-111.6379793'}, 
        {resort: 'Nozawa Onsen', region: 'Japan', subregion: 'Honshu', beginner: '4.5', intermediate: '3', advanced: '4.5', offpiste: '4', tree_skiing: '4', expert: '4', extreme: '2.5', slackcountry: '3.5', snow: '4.5', uncrowded: '3.5', lifts: '3.5', terrain_park: '3', family_friendly: '4.5', freshies: '3.5', daytime_restaurants: '5', nighttime_restaurants: '5', nightlife: '3.5', apres: '3', skiinskiout: '2.5', cost: '4', english: '4.5', culture: '4.5', powderhounds: '4.5', overall: '5', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Telluride', region: 'US', subregion: 'Colorado', beginner: '4.5', intermediate: '4.5', advanced: '4', offpiste: '4', tree_skiing: '4', expert: '5', extreme: '4.5', slackcountry: '3.5', snow: '4', uncrowded: '3.5', lifts: '5', terrain_park: '3', family_friendly: '4.5', freshies: '3.5', daytime_restaurants: '5', nighttime_restaurants: '4.5', nightlife: '3', apres: '3', skiinskiout: '5', cost: '2', english: null, culture: null, powderhounds: '4.5', overall: '5', latitude: '37.9374939', longitude: '-107.8122852'}, 
        {resort: 'Mammoth Mountain', region: 'US', subregion: 'California', beginner: '3.5', intermediate: '4.5', advanced: '4', offpiste: '4', tree_skiing: '3.5', expert: '4', extreme: '2.5', slackcountry: null, snow: '4', uncrowded: '2.5', lifts: '4.5', terrain_park: '5', family_friendly: '4.5', freshies: '3.5', daytime_restaurants: '4', nighttime_restaurants: '4', nightlife: '3.5', apres: '3', skiinskiout: '3', cost: '3.5', english: null, culture: null, powderhounds: '4', overall: '4.5', latitude: '37.6307692', longitude: '-119.0326342'}, 
        {resort: 'Beaver Creek', region: 'US', subregion: 'Colorado', beginner: '4.5', intermediate: '4', advanced: '4', offpiste: '3.5', tree_skiing: '3', expert: '3', extreme: '2.5', slackcountry: null, snow: '3.5', uncrowded: '2.5', lifts: '4.5', terrain_park: '3', family_friendly: '4.5', freshies: '2.5', daytime_restaurants: '3.5', nighttime_restaurants: '4', nightlife: '2.5', apres: '3', skiinskiout: '5', cost: '1.5', english: null, culture: null, powderhounds: '3.5', overall: '4', latitude: '39.604225', longitude: '-106.516515'}, 
        {resort: 'Steamboat', region: 'US', subregion: 'Colorado', beginner: '3.5', intermediate: '4.5', advanced: '4', offpiste: '4', tree_skiing: '5', expert: '3', extreme: '2', slackcountry: null, snow: '4', uncrowded: '4', lifts: '3.5', terrain_park: '3.5', family_friendly: '4.5', freshies: '3', daytime_restaurants: '3', nighttime_restaurants: '3.5', nightlife: '3', apres: '3', skiinskiout: '3.5', cost: '3', english: null, culture: null, powderhounds: '4', overall: '4.5', latitude: '40.4704763', longitude: '-106.8014441'}, 
        {resort: 'Crested Butte', region: 'US', subregion: 'Colorado', beginner: '3.5', intermediate: '3.5', advanced: '2.5', offpiste: '4', tree_skiing: '4', expert: '5', extreme: '5', slackcountry: '0', snow: '3.5', uncrowded: '4', lifts: '3.5', terrain_park: '3.5', family_friendly: '4.5', freshies: '4', daytime_restaurants: '3', nighttime_restaurants: '4', nightlife: '3', apres: '3', skiinskiout: '3', cost: '4', english: null, culture: null, powderhounds: '4', overall: '4.5', latitude: '38.8697146', longitude: '-106.9878231'}, 
        {resort: 'Northstar', region: 'US', subregion: 'California', beginner: '4', intermediate: '4.5', advanced: '3', offpiste: '2.5', tree_skiing: '4.5', expert: '1.5', extreme: '0', slackcountry: null, snow: '3.5', uncrowded: '2', lifts: '5', terrain_park: '4', family_friendly: '4.5', freshies: '2.5', daytime_restaurants: '3.5', nighttime_restaurants: '4', nightlife: '2', apres: '2', skiinskiout: '2.5', cost: '1.5', english: null, culture: null, powderhounds: '3', overall: '4', latitude: '38.5733598', longitude: '-121.7494666'}, 
        {resort: 'Deer Valley', region: 'US', subregion: 'Utah', beginner: '3', intermediate: '5', advanced: '3', offpiste: '2.5', tree_skiing: '3', expert: '2.5', extreme: '1.5', slackcountry: '0', snow: '4', uncrowded: '3.5', lifts: '5', terrain_park: '0', family_friendly: '4.5', freshies: '2.5', daytime_restaurants: '5', nighttime_restaurants: '4', nightlife: '2', apres: '2', skiinskiout: '5', cost: '1', english: null, culture: null, powderhounds: '3.5', overall: '4', latitude: '40.6229421', longitude: '-111.4908168'}, 
        {resort: 'Furano', region: 'Japan', subregion: 'Hokkaido', beginner: '3.5', intermediate: '4.5', advanced: '3', offpiste: '4.5', tree_skiing: '4', expert: '4', extreme: '1', slackcountry: '4', snow: '4.5', uncrowded: '4', lifts: '4', terrain_park: '2.5', family_friendly: '4.5', freshies: '3.5', daytime_restaurants: '3.5', nighttime_restaurants: '4', nightlife: '2.5', apres: '2', skiinskiout: '2.5', cost: '4.5', english: '4', culture: '3.5', powderhounds: '4.5', overall: '4.5', latitude: '43.3421398', longitude: '142.3832254'}, 
        {resort: 'Akakura', region: 'Japan', subregion: 'Honshu', beginner: '4.5', intermediate: '3', advanced: '2', offpiste: '2.5', tree_skiing: '4', expert: '2.5', extreme: '1.5', slackcountry: '3', snow: '4.5', uncrowded: '3.5', lifts: '4.5', terrain_park: '1', family_friendly: '4.5', freshies: '3.5', daytime_restaurants: '3.5', nighttime_restaurants: '4.5', nightlife: '3', apres: '2', skiinskiout: '3', cost: '4.5', english: '4.5', culture: '3.5', powderhounds: '4', overall: '4.5', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Okushiga Kogen', region: 'Japan', subregion: 'Honshu', beginner: '3', intermediate: '3', advanced: '1', offpiste: '4', tree_skiing: '4', expert: '3.5', extreme: '2.5', slackcountry: '4', snow: '4.5', uncrowded: '4', lifts: '3', terrain_park: '2.5', family_friendly: '4.5', freshies: '4.5', daytime_restaurants: '4', nighttime_restaurants: '3.5', nightlife: '2.5', apres: '2', skiinskiout: '4', cost: '3.5', english: '5', culture: '3', powderhounds: '4.5', overall: '4.5', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Naeba', region: 'Japan', subregion: 'Honshu', beginner: '4', intermediate: '3', advanced: '3', offpiste: '2.5', tree_skiing: '2', expert: '4', extreme: '0', slackcountry: null, snow: '3.5', uncrowded: '2.5', lifts: '4.5', terrain_park: '4.5', family_friendly: '4.5', freshies: '3.5', daytime_restaurants: '4.5', nighttime_restaurants: '4.5', nightlife: '2', apres: '1.5', skiinskiout: '5', cost: '3', english: '3.5', culture: '2', powderhounds: '3.5', overall: '4', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Rusutsu', region: 'Japan', subregion: 'Hokkaido', beginner: '3.5', intermediate: '4', advanced: '3', offpiste: '5', tree_skiing: '5', expert: '2.5', extreme: '1', slackcountry: '2.5', snow: '5', uncrowded: '4', lifts: '5', terrain_park: '2.5', family_friendly: '4.5', freshies: '3.5', daytime_restaurants: '3.5', nighttime_restaurants: '4', nightlife: '2', apres: '1.5', skiinskiout: '3.5', cost: '4', english: '3', culture: '3', powderhounds: '4.5', overall: '4.5', latitude: '42.7373599', longitude: '140.8755913'}, 
        {resort: 'Brian Head', region: 'US', subregion: 'Utah', beginner: '4.5', intermediate: '3', advanced: '2.5', offpiste: '2.5', tree_skiing: '2.5', expert: '2', extreme: '1', slackcountry: '2.5', snow: '4.5', uncrowded: '4', lifts: '2.5', terrain_park: '2.5', family_friendly: '4.5', freshies: '4', daytime_restaurants: '2.5', nighttime_restaurants: '2', nightlife: '1.5', apres: '1.5', skiinskiout: '1.5', cost: '4.5', english: null, culture: null, powderhounds: '4', overall: '4', latitude: '37.6927551', longitude: '-112.8507766'}, 
        {resort: 'Yuzawa Kogen', region: 'Japan', subregion: 'Honshu', beginner: '4.5', intermediate: '2.5', advanced: '1.5', offpiste: '1', tree_skiing: '1', expert: '1', extreme: '0.5', slackcountry: null, snow: '4', uncrowded: '3', lifts: '2.5', terrain_park: '0', family_friendly: '4.5', freshies: '3', daytime_restaurants: '2', nighttime_restaurants: '5', nightlife: '3.5', apres: '1.5', skiinskiout: '1.5', cost: '4', english: '2.5', culture: '4.5', powderhounds: '3', overall: '3.5', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Happo', region: 'Japan', subregion: 'Honshu', beginner: '3', intermediate: '4.5', advanced: '3.5', offpiste: '2.5', tree_skiing: '2', expert: '2.5', extreme: '1.5', slackcountry: '1', snow: '4', uncrowded: '3', lifts: '4', terrain_park: '2', family_friendly: '4.5', freshies: '2.5', daytime_restaurants: '3', nighttime_restaurants: '3.5', nightlife: '3', apres: '1', skiinskiout: '3', cost: '3.5', english: '4.5', culture: '2.5', powderhounds: '3.5', overall: '4', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Hakuba 47', region: 'Japan', subregion: 'Honshu', beginner: '4', intermediate: '4', advanced: '3.5', offpiste: '2.5', tree_skiing: '2.5', expert: '2.5', extreme: '1.5', slackcountry: null, snow: '4.5', uncrowded: '4', lifts: '3.5', terrain_park: '4.5', family_friendly: '4.5', freshies: '4', daytime_restaurants: '2.5', nighttime_restaurants: '2', nightlife: '2.5', apres: '1', skiinskiout: '1', cost: '4', english: '4', culture: '3', powderhounds: '4', overall: '4', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Goryu', region: 'Japan', subregion: 'Honshu', beginner: '4', intermediate: '4', advanced: '3.5', offpiste: '2.5', tree_skiing: '2.5', expert: '2.5', extreme: '1.5', slackcountry: null, snow: '4.5', uncrowded: '4', lifts: '3.5', terrain_park: '4.5', family_friendly: '4.5', freshies: '4', daytime_restaurants: '2.5', nighttime_restaurants: '2', nightlife: '2.5', apres: '1', skiinskiout: '1', cost: '4', english: '4', culture: '3', powderhounds: '4', overall: '4', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Whakapapa', region: 'New Zealand', subregion: null, beginner: '3', intermediate: '3.5', advanced: '2.5', offpiste: '3', tree_skiing: '0', expert: '2.5', extreme: '2.5', slackcountry: '2.5', snow: '2.5', uncrowded: '4', lifts: '3', terrain_park: '2', family_friendly: '4.5', freshies: '3', daytime_restaurants: '3', nighttime_restaurants: '2', nightlife: '1', apres: '1', skiinskiout: '2', cost: '4.5', english: null, culture: null, powderhounds: '3', overall: '3.5', latitude: '-39.200477', longitude: '175.539473'}, 
        {resort: 'Perito Moreno', region: 'South America', subregion: 'Argentina', beginner: '3', intermediate: '2', advanced: '1', offpiste: '2', tree_skiing: '2', expert: '1', extreme: '0', slackcountry: null, snow: '1.5', uncrowded: '4', lifts: '1.5', terrain_park: '1', family_friendly: '4.5', freshies: '3', daytime_restaurants: '2', nighttime_restaurants: '1', nightlife: '1', apres: '1', skiinskiout: '1', cost: '5', english: null, culture: null, powderhounds: '2.5', overall: '3', latitude: '-46.5912473', longitude: '-70.9260470999999'}, 
        {resort: 'Madarao', region: 'Japan', subregion: 'Honshu', beginner: '3.5', intermediate: '3', advanced: '2.5', offpiste: '4.5', tree_skiing: '4.5', expert: '3', extreme: '1', slackcountry: '3', snow: '4.5', uncrowded: '3.5', lifts: '3', terrain_park: '2.5', family_friendly: '4.5', freshies: '4', daytime_restaurants: '3.5', nighttime_restaurants: '3', nightlife: '0.5', apres: '0.5', skiinskiout: '4', cost: '4.5', english: '3', culture: '3.5', powderhounds: '4.5', overall: '4', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Tomamu', region: 'Japan', subregion: 'Hokkaido', beginner: '4', intermediate: '4', advanced: '3', offpiste: '3.5', tree_skiing: '4', expert: '3', extreme: '0', slackcountry: '4', snow: '4.5', uncrowded: '4', lifts: '3', terrain_park: '4', family_friendly: '4.5', freshies: '4.5', daytime_restaurants: '2.5', nighttime_restaurants: '3', nightlife: '1', apres: '0', skiinskiout: '4.5', cost: '3.5', english: '3', culture: '2.5', powderhounds: '4.5', overall: '4', latitude: '43.4975029999999', longitude: '143.6459908'}, 
        {resort: 'Nordic Valley', region: 'US', subregion: 'Utah', beginner: '3.5', intermediate: '4', advanced: '2', offpiste: '1', tree_skiing: '0', expert: '0', extreme: '0', slackcountry: '0', snow: '4', uncrowded: '4', lifts: '3', terrain_park: '3.5', family_friendly: '4.5', freshies: '3', daytime_restaurants: '3', nighttime_restaurants: '0', nightlife: '0', apres: '0', skiinskiout: '0', cost: '5', english: null, culture: null, powderhounds: '3', overall: '3', latitude: '41.3130253', longitude: '-111.8638606'}, 
        {resort: 'Joetsu Kokusai', region: 'Japan', subregion: 'Honshu', beginner: '3.5', intermediate: '4.5', advanced: '1.5', offpiste: '2', tree_skiing: '2', expert: '1', extreme: '0', slackcountry: null, snow: '3.5', uncrowded: '4', lifts: '3', terrain_park: '3', family_friendly: '4.5', freshies: '4', daytime_restaurants: '3.5', nighttime_restaurants: '3', nightlife: '0.5', apres: '0', skiinskiout: '4', cost: '3.5', english: '2', culture: '4', powderhounds: '3.5', overall: '3.5', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Lech', region: 'Europe', subregion: null, beginner: '5', intermediate: '4', advanced: '1.5', offpiste: '3', tree_skiing: '2', expert: '3.5', extreme: '3', slackcountry: null, snow: '2', uncrowded: '2.5', lifts: '4', terrain_park: null, family_friendly: '4', freshies: '2', daytime_restaurants: '5', nighttime_restaurants: '4', nightlife: '4', apres: '4', skiinskiout: '3', cost: '1', english: null, culture: null, powderhounds: '3', overall: '4', latitude: '47.2111926', longitude: '10.1439399'}, 
        {resort: 'Mt Hotham', region: 'Australia', subregion: null, beginner: '3', intermediate: '3', advanced: '4.5', offpiste: '3', tree_skiing: '2.5', expert: '4', extreme: '2', slackcountry: '3.5', snow: '2', uncrowded: '2.5', lifts: '2.5', terrain_park: '2.5', family_friendly: '4', freshies: '2.5', daytime_restaurants: '4', nighttime_restaurants: '4', nightlife: '3.5', apres: '3.5', skiinskiout: '3', cost: '2', english: null, culture: null, powderhounds: '3', overall: '4', latitude: '-36.9752778', longitude: '147.1327778'}, 
        {resort: 'Schweitzer', region: 'US', subregion: 'Idaho', beginner: '3', intermediate: '4', advanced: '4.5', offpiste: '4', tree_skiing: '4.5', expert: '3', extreme: '2', slackcountry: '4', snow: '3', uncrowded: '4', lifts: '3', terrain_park: '3.5', family_friendly: '4', freshies: '4', daytime_restaurants: '3.5', nighttime_restaurants: '2.5', nightlife: '2', apres: '3', skiinskiout: '4.5', cost: '4', english: null, culture: null, powderhounds: '4', overall: '4.5', latitude: '48.3479713', longitude: '-116.5990777'}, 
        {resort: 'Park City', region: 'US', subregion: 'Utah', beginner: '3.5', intermediate: '5', advanced: '4', offpiste: '3.5', tree_skiing: '4', expert: '3', extreme: '2', slackcountry: '0', snow: '4', uncrowded: '3', lifts: '4.5', terrain_park: '5', family_friendly: '4', freshies: '3', daytime_restaurants: '4', nighttime_restaurants: '5', nightlife: '4.5', apres: '3', skiinskiout: '3', cost: '2', english: null, culture: null, powderhounds: '3.5', overall: '4.5', latitude: '40.6460622', longitude: '-111.4979729'}, 
        {resort: 'Cerro Catedral', region: 'South America', subregion: 'Argentina', beginner: '3', intermediate: '4.5', advanced: '4', offpiste: '5', tree_skiing: '4', expert: '4.5', extreme: '4.5', slackcountry: '5', snow: '3', uncrowded: '2', lifts: '4', terrain_park: '3', family_friendly: '4', freshies: '2', daytime_restaurants: '4.5', nighttime_restaurants: '3', nightlife: '3', apres: '3', skiinskiout: '2', cost: '3.5', english: null, culture: null, powderhounds: '3.5', overall: '4.5', latitude: '-41.183333', longitude: '-71.45'}, 
        {resort: 'Red Mountain', region: 'Canada', subregion: null, beginner: '3.5', intermediate: '3.5', advanced: '4', offpiste: '4.5', tree_skiing: '5', expert: '4', extreme: '4', slackcountry: '3.5', snow: '3', uncrowded: '4', lifts: '2.5', terrain_park: '2.5', family_friendly: '4', freshies: '4', daytime_restaurants: '3.5', nighttime_restaurants: '3.5', nightlife: '3', apres: '3', skiinskiout: '2.5', cost: '5', english: null, culture: null, powderhounds: '4', overall: '4.5', latitude: '51.2036111', longitude: '-122.5486111'}, 
        {resort: 'Portillo', region: 'South America', subregion: 'Chile', beginner: '3', intermediate: '2.5', advanced: '3.5', offpiste: '4', tree_skiing: '0', expert: '4.5', extreme: '4.5', slackcountry: '4.5', snow: '3', uncrowded: '4', lifts: '2.5', terrain_park: '0', family_friendly: '4', freshies: '4', daytime_restaurants: '3', nighttime_restaurants: '3', nightlife: '3.5', apres: '3', skiinskiout: '4', cost: '2.5', english: null, culture: null, powderhounds: '4', overall: '4', latitude: '-32.8362972', longitude: '-70.1298032'}, 
        {resort: 'Fernie', region: 'Canada', subregion: null, beginner: '4', intermediate: '3', advanced: '3', offpiste: '3.5', tree_skiing: '4', expert: '3.5', extreme: '3', slackcountry: '5', snow: '3', uncrowded: '3', lifts: '2.5', terrain_park: '2.5', family_friendly: '4', freshies: '3', daytime_restaurants: '3', nighttime_restaurants: '3', nightlife: '3', apres: '3', skiinskiout: '4', cost: '3.5', english: null, culture: null, powderhounds: '3.5', overall: '4', latitude: '49.5040452', longitude: '-115.063065'}, 
        {resort: 'Powderhorn', region: 'US', subregion: 'Colorado', beginner: '2.5', intermediate: '3', advanced: '3', offpiste: '3', tree_skiing: '3.5', expert: '1', extreme: '1', slackcountry: '2.5', snow: '3', uncrowded: '5', lifts: '2.5', terrain_park: '2.5', family_friendly: '4', freshies: '4', daytime_restaurants: '2.5', nighttime_restaurants: '1.5', nightlife: '1.5', apres: '3', skiinskiout: '1.5', cost: '5', english: null, culture: null, powderhounds: '4', overall: '3.8', latitude: '38.2769386', longitude: '-107.0958841'}, 
        {resort: 'Homewood', region: 'US', subregion: 'California', beginner: '1', intermediate: '4', advanced: '3', offpiste: '4', tree_skiing: '5', expert: '1', extreme: '0', slackcountry: '0', snow: '3', uncrowded: '4', lifts: '3', terrain_park: '0', family_friendly: '4', freshies: '5', daytime_restaurants: '3', nighttime_restaurants: '0', nightlife: '0', apres: '3', skiinskiout: '1', cost: '4', english: null, culture: null, powderhounds: '4', overall: '3.5', latitude: '39.0862732999999', longitude: '-120.1607425'}, 
        {resort: 'Brighton', region: 'US', subregion: 'Utah', beginner: '3.5', intermediate: '3.5', advanced: '2.5', offpiste: '4', tree_skiing: '3', expert: '2.5', extreme: '2', slackcountry: '5', snow: '5', uncrowded: '3', lifts: '4', terrain_park: '3.5', family_friendly: '4', freshies: '2.5', daytime_restaurants: '2.5', nighttime_restaurants: '0.5', nightlife: '0.5', apres: '3', skiinskiout: '2', cost: '4', english: null, culture: null, powderhounds: '4', overall: '4', latitude: '40.60384', longitude: '-111.5821429'}, 
        {resort: 'Solitude', region: 'US', subregion: 'Utah', beginner: '3', intermediate: '4', advanced: '3.5', offpiste: '4', tree_skiing: '5', expert: '4.5', extreme: '3.5', slackcountry: '4.5', snow: '5', uncrowded: '4', lifts: '3', terrain_park: '1.5', family_friendly: '4', freshies: '4.5', daytime_restaurants: '3', nighttime_restaurants: '3', nightlife: '2', apres: '2.5', skiinskiout: '3', cost: '3', english: null, culture: null, powderhounds: '5', overall: '4.5', latitude: '40.6210616', longitude: '-111.5932552'}, 
        {resort: 'Chapelco', region: 'South America', subregion: 'Argentina', beginner: '4', intermediate: '4', advanced: '3', offpiste: '4', tree_skiing: '3', expert: '3', extreme: '3', slackcountry: '3.5', snow: '2.5', uncrowded: '2.5', lifts: '4', terrain_park: '2.5', family_friendly: '4', freshies: '3', daytime_restaurants: '3.5', nighttime_restaurants: '1', nightlife: '1', apres: '2.5', skiinskiout: '2', cost: '3.5', english: null, culture: null, powderhounds: '3.5', overall: '4', latitude: '-40.198225', longitude: '-71.3201029'}, 
        {resort: 'Valle Nevado', region: 'South America', subregion: 'Chile', beginner: '3', intermediate: '4', advanced: '2.5', offpiste: '4', tree_skiing: '0', expert: '2', extreme: '2', slackcountry: '3.5', snow: '3', uncrowded: '3', lifts: '3.5', terrain_park: '4', family_friendly: '4', freshies: '4', daytime_restaurants: '4', nighttime_restaurants: '3', nightlife: '3', apres: '2.5', skiinskiout: '4', cost: '2.5', english: null, culture: null, powderhounds: '3.5', overall: '4', latitude: '-38.7055619', longitude: '-72.5397280999999'}, 
        {resort: 'Snow Park', region: 'New Zealand', subregion: null, beginner: '1', intermediate: '1.5', advanced: '1', offpiste: '1', tree_skiing: '0', expert: '0', extreme: '0', slackcountry: '0', snow: '1', uncrowded: '2', lifts: '2', terrain_park: '5', family_friendly: '4', freshies: '1', daytime_restaurants: '2', nighttime_restaurants: '2', nightlife: '2', apres: '2.5', skiinskiout: '2', cost: '4', english: null, culture: null, powderhounds: '1.5', overall: '2', latitude: '-44.892849', longitude: '169.093323'}, 
        {resort: 'Snowbasin', region: 'US', subregion: 'Utah', beginner: '3', intermediate: '3.5', advanced: '5', offpiste: '4', tree_skiing: '3.5', expert: '4', extreme: '4.5', slackcountry: '4', snow: '4.5', uncrowded: '4', lifts: '4', terrain_park: '3.5', family_friendly: '4', freshies: '3.5', daytime_restaurants: '5', nighttime_restaurants: '3', nightlife: '2.5', apres: '2', skiinskiout: '0', cost: '3', english: null, culture: null, powderhounds: '4.5', overall: '4.5', latitude: '41.230237', longitude: '-111.8326101'}, 
        {resort: 'Grand Targhee', region: 'US', subregion: 'Wyoming', beginner: '3', intermediate: '5', advanced: '5', offpiste: '4', tree_skiing: '3', expert: '4', extreme: '3', slackcountry: '5', snow: '5', uncrowded: '5', lifts: '4', terrain_park: '3', family_friendly: '4', freshies: '5', daytime_restaurants: '3.5', nighttime_restaurants: '2', nightlife: '0', apres: '2', skiinskiout: '4', cost: '5', english: null, culture: null, powderhounds: '5', overall: '4.5', latitude: '43.7425163', longitude: '-111.0654514'}, 
        {resort: 'Nevados de Chillan', region: 'South America', subregion: 'Chile', beginner: '5', intermediate: '3', advanced: '3.5', offpiste: '4.5', tree_skiing: '2', expert: '4', extreme: '3', slackcountry: '4', snow: '3.5', uncrowded: '4', lifts: '2', terrain_park: '2', family_friendly: '4', freshies: '4.5', daytime_restaurants: '3', nighttime_restaurants: '3.5', nightlife: '3', apres: '2', skiinskiout: '4.5', cost: '2.5', english: null, culture: null, powderhounds: '4.5', overall: '4.5', latitude: '-36.8452778', longitude: '-71.3988889'}, 
        {resort: 'Appi Kogen', region: 'Japan', subregion: 'Honshu', beginner: '4', intermediate: '3', advanced: '3.5', offpiste: '3', tree_skiing: '4', expert: '2.5', extreme: '1', slackcountry: '3', snow: '4.5', uncrowded: '3', lifts: '4', terrain_park: '3', family_friendly: '4', freshies: '4.5', daytime_restaurants: '4.5', nighttime_restaurants: '4.5', nightlife: '2.5', apres: '2', skiinskiout: '5', cost: '3', english: '3', culture: '3', powderhounds: '4', overall: '4.5', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Norquay', region: 'Canada', subregion: null, beginner: '2.5', intermediate: '3', advanced: '3', offpiste: '1.5', tree_skiing: '2', expert: '2', extreme: '0', slackcountry: null, snow: '1.5', uncrowded: '4.5', lifts: '2', terrain_park: '3', family_friendly: '4', freshies: '2.5', daytime_restaurants: '1', nighttime_restaurants: '0', nightlife: '0', apres: '2', skiinskiout: '0', cost: '3.5', english: null, culture: null, powderhounds: '3', overall: '3', latitude: '51.882039', longitude: '-102.0882845'}, 
        {resort: 'Sierra at Tahoe', region: 'US', subregion: 'California', beginner: '5', intermediate: '2.5', advanced: '3', offpiste: '4', tree_skiing: '5', expert: '3.5', extreme: '2.5', slackcountry: null, snow: '3', uncrowded: '3', lifts: '3', terrain_park: '3', family_friendly: '4', freshies: '3', daytime_restaurants: '3', nighttime_restaurants: '0', nightlife: '0', apres: '2', skiinskiout: '0', cost: '3', english: null, culture: null, powderhounds: '3.5', overall: '4', latitude: '38.798733', longitude: '-120.080268'}, 
        {resort: 'Kiroro', region: 'Japan', subregion: 'Hokkaido', beginner: '4', intermediate: '3.5', advanced: '2.5', offpiste: '4', tree_skiing: '5', expert: '3', extreme: '1', slackcountry: '4', snow: '5', uncrowded: '4.5', lifts: '5', terrain_park: '2.5', family_friendly: '4', freshies: '5', daytime_restaurants: '3', nighttime_restaurants: '3.5', nightlife: '1.5', apres: '2', skiinskiout: '3', cost: '4', english: '2.5', culture: '2.5', powderhounds: '5', overall: '4.5', latitude: '43.0913573', longitude: '143.6061223'}, 
        {resort: 'Myoko Kogen', region: 'Japan', subregion: 'Honshu', beginner: '4.5', intermediate: '3', advanced: '2.5', offpiste: '4', tree_skiing: '4', expert: '3', extreme: '2', slackcountry: '3', snow: '4.5', uncrowded: '4', lifts: '4.5', terrain_park: '3', family_friendly: '4', freshies: '4', daytime_restaurants: '3.5', nighttime_restaurants: '4', nightlife: '3', apres: '2', skiinskiout: '3.5', cost: '4.5', english: '3.5', culture: '5', powderhounds: '4.5', overall: '4.5', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Monarch', region: 'US', subregion: 'Colorado', beginner: '2.5', intermediate: '2.5', advanced: '2', offpiste: '3', tree_skiing: '3', expert: '3', extreme: '3', slackcountry: '3', snow: '3.5', uncrowded: '4', lifts: '2.5', terrain_park: '2.5', family_friendly: '4', freshies: '3', daytime_restaurants: '2', nighttime_restaurants: '2', nightlife: '1', apres: '2', skiinskiout: '0', cost: '4.5', english: null, culture: null, powderhounds: '4', overall: '3.5', latitude: '38.5526022', longitude: '-106.2939187'}, 
        {resort: 'Tsugaike', region: 'Japan', subregion: 'Honshu', beginner: '5', intermediate: '3.5', advanced: '1', offpiste: '2', tree_skiing: '2.5', expert: '1', extreme: '0', slackcountry: '1', snow: '4', uncrowded: '4', lifts: '4.5', terrain_park: '4', family_friendly: '4', freshies: '4', daytime_restaurants: '4', nighttime_restaurants: '2.5', nightlife: '1.5', apres: '2', skiinskiout: '4', cost: '4.5', english: '2', culture: '4', powderhounds: '4', overall: '4', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Wolf Creek', region: 'US', subregion: 'Colorado', beginner: '3.5', intermediate: '3', advanced: '3', offpiste: '5', tree_skiing: '5', expert: '4', extreme: '4', slackcountry: '2', snow: '5', uncrowded: '5', lifts: '3', terrain_park: '0', family_friendly: '4', freshies: '5', daytime_restaurants: '1.5', nighttime_restaurants: '3', nightlife: '2', apres: '1.5', skiinskiout: '0', cost: '5', english: null, culture: null, powderhounds: '5', overall: '4', latitude: '37.482393', longitude: '-106.8079184'}, 
        {resort: 'Alts Bandai', region: 'Japan', subregion: 'Honshu', beginner: '3', intermediate: '4', advanced: '2.5', offpiste: '3', tree_skiing: '3', expert: '1.5', extreme: '0', slackcountry: null, snow: '3.5', uncrowded: '3', lifts: '3', terrain_park: '4.5', family_friendly: '4', freshies: '5', daytime_restaurants: '3', nighttime_restaurants: '2.5', nightlife: '1', apres: '1.5', skiinskiout: '4', cost: '3.5', english: '3', culture: '2.5', powderhounds: '4', overall: '4', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'June Mountain', region: 'US', subregion: 'California', beginner: '3', intermediate: '2.5', advanced: '2.5', offpiste: '2.5', tree_skiing: '3', expert: '1.5', extreme: '0', slackcountry: '3.5', snow: '3', uncrowded: '4.5', lifts: '2.5', terrain_park: '1.5', family_friendly: '4', freshies: '4', daytime_restaurants: '2', nighttime_restaurants: '0', nightlife: '0', apres: '1.5', skiinskiout: '0', cost: '4', english: null, culture: null, powderhounds: '4', overall: '3.5', latitude: '37.739932', longitude: '-119.0701438'}, 
        {resort: 'Lake Louise', region: 'Canada', subregion: null, beginner: '3', intermediate: '4', advanced: '3.5', offpiste: '3.5', tree_skiing: '2', expert: '4', extreme: '3.5', slackcountry: null, snow: '2.5', uncrowded: '3', lifts: '3.5', terrain_park: '3.5', family_friendly: '4', freshies: '3', daytime_restaurants: '3', nighttime_restaurants: '2', nightlife: '1.5', apres: '1', skiinskiout: '0', cost: '2.5', english: null, culture: null, powderhounds: '3.5', overall: '3.5', latitude: '51.4253851', longitude: '-116.1773193'}, 
        {resort: 'Coronet Peak', region: 'New Zealand', subregion: null, beginner: '3.5', intermediate: '4', advanced: '3.5', offpiste: '3', tree_skiing: '0', expert: '3', extreme: '2.5', slackcountry: '2', snow: '1.5', uncrowded: '2.5', lifts: '3', terrain_park: '0', family_friendly: '4', freshies: '2', daytime_restaurants: '3.5', nighttime_restaurants: '0', nightlife: '0', apres: '1', skiinskiout: '0', cost: '2.5', english: null, culture: null, powderhounds: '2.5', overall: '3', latitude: '-44.9274914', longitude: '168.7360288'}, 
        {resort: 'Remarkables', region: 'New Zealand', subregion: null, beginner: '3.5', intermediate: '2.5', advanced: '3', offpiste: '3', tree_skiing: '0', expert: '3', extreme: '3', slackcountry: '3', snow: '2', uncrowded: '3', lifts: '3', terrain_park: '4.5', family_friendly: '4', freshies: '3', daytime_restaurants: '3', nighttime_restaurants: '0', nightlife: '0', apres: '1', skiinskiout: '0', cost: '2.5', english: null, culture: null, powderhounds: '3', overall: '3.5', latitude: '-45.15', longitude: '168.8333333'}, 
        {resort: 'Cortina', region: 'Japan', subregion: 'Honshu', beginner: '2.5', intermediate: '3', advanced: '2.5', offpiste: '4.5', tree_skiing: '5', expert: '4', extreme: '1.5', slackcountry: '4.5', snow: '5', uncrowded: '4', lifts: '3', terrain_park: '0', family_friendly: '4', freshies: '3.5', daytime_restaurants: '3', nighttime_restaurants: '3', nightlife: '0.5', apres: '1', skiinskiout: '4', cost: '4', english: '3', culture: '3', powderhounds: '4.5', overall: '4', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Mt Cheeseman', region: 'New Zealand', subregion: null, beginner: '2.5', intermediate: '2.5', advanced: '2.5', offpiste: '3.5', tree_skiing: '0', expert: '3', extreme: '2', slackcountry: '3.5', snow: '2', uncrowded: '5', lifts: '2', terrain_park: '1', family_friendly: '4', freshies: '5', daytime_restaurants: '2', nighttime_restaurants: '1', nightlife: '1', apres: '1', skiinskiout: '2', cost: '5', english: null, culture: null, powderhounds: '4', overall: '3.5', latitude: '-43.4716665', longitude: '171.5264441'}, 
        {resort: 'Roundhill', region: 'New Zealand', subregion: null, beginner: '3', intermediate: '2', advanced: '2.5', offpiste: '3.5', tree_skiing: '0', expert: '3', extreme: '1', slackcountry: null, snow: '2', uncrowded: '5', lifts: '2', terrain_park: '3', family_friendly: '4', freshies: '5', daytime_restaurants: '2', nighttime_restaurants: '0', nightlife: '0', apres: '1', skiinskiout: '0', cost: '5', english: null, culture: null, powderhounds: '3.5', overall: '3', latitude: '-44.8', longitude: '167.5333333'}, 
        {resort: 'Corralco', region: 'South America', subregion: 'Chile', beginner: '2.5', intermediate: '2.5', advanced: '2', offpiste: '4', tree_skiing: '0', expert: '4.5', extreme: '4', slackcountry: '4', snow: '3.5', uncrowded: '5', lifts: '2.5', terrain_park: '1', family_friendly: '4', freshies: '5', daytime_restaurants: '3', nighttime_restaurants: '2.5', nightlife: '1', apres: '1', skiinskiout: '4', cost: '2.5', english: null, culture: null, powderhounds: '4.5', overall: '4', latitude: '-33.3539263', longitude: '-70.7280136'}, 
        {resort: 'Buttermilk', region: 'US', subregion: 'Colorado', beginner: '4.5', intermediate: '3', advanced: '2', offpiste: '2', tree_skiing: '2', expert: '1.5', extreme: '0', slackcountry: null, snow: '2.5', uncrowded: '4', lifts: '4', terrain_park: '5', family_friendly: '4', freshies: '4.5', daytime_restaurants: '2.5', nighttime_restaurants: '1', nightlife: '1', apres: '1', skiinskiout: '1.5', cost: '2.5', english: null, culture: null, powderhounds: '3', overall: '3.5', latitude: '39.2363295', longitude: '-104.9082432'}, 
        {resort: 'Tangram', region: 'Japan', subregion: 'Honshu', beginner: '2.5', intermediate: '3.5', advanced: '2.5', offpiste: '3', tree_skiing: '3.5', expert: '2.5', extreme: '0.5', slackcountry: null, snow: '4.5', uncrowded: '4.5', lifts: '2.5', terrain_park: '2', family_friendly: '4', freshies: '4.5', daytime_restaurants: '2.5', nighttime_restaurants: '2', nightlife: '0.5', apres: '0.5', skiinskiout: '3', cost: '4', english: '2', culture: '2', powderhounds: '4.5', overall: '4', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Gala Yuzawa', region: 'Japan', subregion: 'Honshu', beginner: '3', intermediate: '4.5', advanced: '1.5', offpiste: '0', tree_skiing: '0', expert: '0', extreme: '0', slackcountry: null, snow: '4', uncrowded: '1', lifts: '4', terrain_park: '1', family_friendly: '4', freshies: '2.5', daytime_restaurants: '4.5', nighttime_restaurants: '0', nightlife: '0', apres: '0.5', skiinskiout: '0', cost: '3', english: '4.5', culture: '2.5', powderhounds: '2.5', overall: '3', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Mt Lyford', region: 'New Zealand', subregion: null, beginner: '3.5', intermediate: '3.5', advanced: '3', offpiste: '3', tree_skiing: '0', expert: '3', extreme: '1', slackcountry: '2.5', snow: '3', uncrowded: '5', lifts: '3', terrain_park: '3', family_friendly: '4', freshies: '5', daytime_restaurants: '3', nighttime_restaurants: '0', nightlife: '0', apres: '0', skiinskiout: '0', cost: '4', english: null, culture: null, powderhounds: '4', overall: '3.5', latitude: '-41.65', longitude: '173.5'}, 
        {resort: 'Nakiska', region: 'Canada', subregion: null, beginner: '3', intermediate: '3.5', advanced: '2.5', offpiste: '1', tree_skiing: '1', expert: '2', extreme: '0', slackcountry: null, snow: '1', uncrowded: '4', lifts: '2.5', terrain_park: '2.5', family_friendly: '4', freshies: '2', daytime_restaurants: '2', nighttime_restaurants: '0', nightlife: '0', apres: '0', skiinskiout: '0', cost: '3.5', english: null, culture: null, powderhounds: '2.5', overall: '2.5', latitude: '50.3086519', longitude: '-119.2101139'}, 
        {resort: 'Mt Dobson', region: 'New Zealand', subregion: null, beginner: '4', intermediate: '3', advanced: '2', offpiste: '3.5', tree_skiing: '0', expert: '2.5', extreme: '1', slackcountry: null, snow: '2', uncrowded: '5', lifts: '2', terrain_park: '0', family_friendly: '4', freshies: '5', daytime_restaurants: '1', nighttime_restaurants: '0', nightlife: '0', apres: '0', skiinskiout: '0', cost: '5', english: null, culture: null, powderhounds: '3.5', overall: '3', latitude: '-43.9433219999999', longitude: '170.6639764'}, 
        {resort: 'Inawashiro', region: 'Japan', subregion: 'Honshu', beginner: '3.5', intermediate: '3', advanced: '2', offpiste: '3', tree_skiing: '4', expert: '2', extreme: '0', slackcountry: null, snow: '3.5', uncrowded: '4', lifts: '2.5', terrain_park: '2', family_friendly: '4', freshies: '5', daytime_restaurants: '2.5', nighttime_restaurants: '0', nightlife: '0', apres: '0', skiinskiout: '0', cost: '4.5', english: '1.5', culture: '4', powderhounds: '4', overall: '3.5', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Taos', region: 'US', subregion: 'New Mexico', beginner: '2.5', intermediate: '3.5', advanced: '2.5', offpiste: '4', tree_skiing: '2.5', expert: '4.5', extreme: '4.5', slackcountry: '0', snow: '3.5', uncrowded: '4', lifts: '3', terrain_park: '2', family_friendly: '3.5', freshies: '3.5', daytime_restaurants: '4', nighttime_restaurants: '4', nightlife: '3.5', apres: '4', skiinskiout: '5', cost: '3.5', english: null, culture: null, powderhounds: '4', overall: '4', latitude: '36.4072485', longitude: '-105.5730665'}, 
        {resort: 'Ohau', region: 'New Zealand', subregion: null, beginner: '2.5', intermediate: '2.5', advanced: '3', offpiste: '3', tree_skiing: '0', expert: '3', extreme: '2', slackcountry: '3.5', snow: '2.5', uncrowded: '5', lifts: '2', terrain_park: '1.5', family_friendly: '3.5', freshies: '5', daytime_restaurants: '2', nighttime_restaurants: '2.5', nightlife: '3', apres: '3', skiinskiout: '0', cost: '4.5', english: null, culture: null, powderhounds: '4', overall: '3.5', latitude: '-44.2716139', longitude: '169.8483903'}, 
        {resort: 'Revelstoke', region: 'Canada', subregion: null, beginner: '2.5', intermediate: '3.5', advanced: '5', offpiste: '4', tree_skiing: '4', expert: '3.5', extreme: '3', slackcountry: '3.5', snow: '3.5', uncrowded: '4', lifts: '5', terrain_park: '1', family_friendly: '3.5', freshies: '3.5', daytime_restaurants: '2.5', nighttime_restaurants: '3', nightlife: '2.5', apres: '2.5', skiinskiout: '3', cost: '4', english: null, culture: null, powderhounds: '4', overall: '4', latitude: '50.998115', longitude: '-118.195672'}, 
        {resort: 'Kirkwood', region: 'US', subregion: 'California', beginner: '2.5', intermediate: '3', advanced: '5', offpiste: '5', tree_skiing: '4', expert: '4.5', extreme: '4', slackcountry: null, snow: '4.5', uncrowded: '3.5', lifts: '2.5', terrain_park: '2', family_friendly: '3.5', freshies: '3', daytime_restaurants: '2.5', nighttime_restaurants: '2', nightlife: '2', apres: '2.5', skiinskiout: '3', cost: '4', english: null, culture: null, powderhounds: '4.5', overall: '4.5', latitude: '38.7023082', longitude: '-120.0722442'}, 
        {resort: 'Sugar Bowl', region: 'US', subregion: 'California', beginner: '3.5', intermediate: '3.5', advanced: '3.5', offpiste: '4', tree_skiing: '3.5', expert: '4.5', extreme: '4', slackcountry: null, snow: '3.5', uncrowded: '3', lifts: '3.5', terrain_park: '3', family_friendly: '3.5', freshies: '2.5', daytime_restaurants: '3', nighttime_restaurants: '1.5', nightlife: '1.5', apres: '2.5', skiinskiout: '2.5', cost: '3', english: null, culture: null, powderhounds: '3.5', overall: '4', latitude: '39.2962961', longitude: '-120.3376817'}, 
        {resort: 'La Hoya', region: 'South America', subregion: 'Argentina', beginner: '2.5', intermediate: '3', advanced: '2.5', offpiste: '4.5', tree_skiing: '0', expert: '4', extreme: '3', slackcountry: '1', snow: '4', uncrowded: '2.5', lifts: '2.5', terrain_park: '2', family_friendly: '3.5', freshies: '4', daytime_restaurants: '3', nighttime_restaurants: '1', nightlife: '1', apres: '2.5', skiinskiout: '1', cost: '4.5', english: null, culture: null, powderhounds: '4', overall: '3.5', latitude: '-31.2945882', longitude: '-64.3083843'}, 
        {resort: 'Zao Onsen', region: 'Japan', subregion: 'Honshu', beginner: '4', intermediate: '4.5', advanced: '2.5', offpiste: '4', tree_skiing: '3.5', expert: '3', extreme: '2.5', slackcountry: null, snow: '4.5', uncrowded: '3.5', lifts: '3', terrain_park: '2', family_friendly: '3.5', freshies: '5', daytime_restaurants: '3', nighttime_restaurants: '3', nightlife: '2', apres: '2', skiinskiout: '3.5', cost: '4', english: '2.5', culture: '4.5', powderhounds: '4.5', overall: '4.5', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Shiga Kogen', region: 'Japan', subregion: 'Honshu', beginner: '4', intermediate: '5', advanced: '4', offpiste: '3.5', tree_skiing: '3.5', expert: '2.5', extreme: '1', slackcountry: null, snow: '4.5', uncrowded: '3.5', lifts: '4', terrain_park: '2', family_friendly: '3.5', freshies: '4.5', daytime_restaurants: '3', nighttime_restaurants: '2.5', nightlife: '2', apres: '1.5', skiinskiout: '5', cost: '3.5', english: '3.5', culture: '3', powderhounds: '4.5', overall: '4.5', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Mt Hutt', region: 'New Zealand', subregion: null, beginner: '3', intermediate: '4', advanced: '3.5', offpiste: '3.5', tree_skiing: '0', expert: '3.5', extreme: '3', slackcountry: '3', snow: '3', uncrowded: '3.5', lifts: '3', terrain_park: '3.5', family_friendly: '3.5', freshies: '3.5', daytime_restaurants: '3', nighttime_restaurants: '0', nightlife: '0', apres: '1.5', skiinskiout: '0', cost: '2.5', english: null, culture: null, powderhounds: '3.5', overall: '3.5', latitude: '-43.533428', longitude: '171.6157323'}, 
        {resort: 'Kandatsu Kogen', region: 'Japan', subregion: 'Honshu', beginner: '3.5', intermediate: '2', advanced: '4', offpiste: '4', tree_skiing: '4.5', expert: '4', extreme: '2', slackcountry: null, snow: '4.5', uncrowded: '3', lifts: '2.5', terrain_park: '3', family_friendly: '3.5', freshies: '4.5', daytime_restaurants: '3', nighttime_restaurants: '0', nightlife: '0', apres: '1', skiinskiout: '0', cost: '4.5', english: '2.5', culture: '3', powderhounds: '4.5', overall: '4', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Hakuba Iwatake', region: 'Japan', subregion: 'Honshu', beginner: '3', intermediate: '3.5', advanced: '3.5', offpiste: '2.5', tree_skiing: '2.5', expert: '1.5', extreme: '0', slackcountry: '1', snow: '3.5', uncrowded: '2.5', lifts: '3.5', terrain_park: '3', family_friendly: '3.5', freshies: '4', daytime_restaurants: '2.5', nighttime_restaurants: '0.5', nightlife: '0.5', apres: '1', skiinskiout: '0.5', cost: '4.5', english: null, culture: null, powderhounds: '3.5', overall: '3.5', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Hachimantai', region: 'Japan', subregion: 'Honshu', beginner: '2.5', intermediate: '2.5', advanced: '2', offpiste: '2.5', tree_skiing: '3', expert: '3', extreme: '1', slackcountry: null, snow: '4.5', uncrowded: '5', lifts: '2.5', terrain_park: '1', family_friendly: '3.5', freshies: '5', daytime_restaurants: '2', nighttime_restaurants: '0', nightlife: '0', apres: '0', skiinskiout: '0', cost: '4.5', english: '1.5', culture: '4', powderhounds: '4.5', overall: '3.5', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Vail', region: 'US', subregion: 'Colorado', beginner: '3', intermediate: '3.5', advanced: '5', offpiste: '5', tree_skiing: '3.5', expert: '2.5', extreme: '0', slackcountry: '3', snow: '4', uncrowded: '2', lifts: '4.5', terrain_park: '4', family_friendly: '3', freshies: '2.5', daytime_restaurants: '5', nighttime_restaurants: '5', nightlife: '5', apres: '5', skiinskiout: '2.5', cost: '2', english: null, culture: null, powderhounds: '3.5', overall: '4.5', latitude: '39.6402638', longitude: '-106.3741955'}, 
        {resort: 'Heavenly', region: 'US', subregion: 'California', beginner: '3.5', intermediate: '4.5', advanced: '2.5', offpiste: '4', tree_skiing: '4.5', expert: '2.5', extreme: '0.5', slackcountry: '1.5', snow: '3.5', uncrowded: '1', lifts: '4', terrain_park: '4', family_friendly: '3', freshies: '3', daytime_restaurants: '2', nighttime_restaurants: '5', nightlife: '5', apres: '4.5', skiinskiout: '0.5', cost: '3', english: null, culture: null, powderhounds: '3', overall: '4', latitude: '33.7408512', longitude: '-117.7564429'}, 
        {resort: 'Innsbruck', region: 'Europe', subregion: null, beginner: '3', intermediate: '3', advanced: '2', offpiste: '3', tree_skiing: null, expert: '2.5', extreme: null, slackcountry: null, snow: '3', uncrowded: '3', lifts: '3', terrain_park: null, family_friendly: '3', freshies: null, daytime_restaurants: '4', nighttime_restaurants: '1', nightlife: '1', apres: '4', skiinskiout: '0', cost: '3', english: null, culture: null, powderhounds: '2.5', overall: '3.5', latitude: '47.2692124', longitude: '11.4041024'}, 
        {resort: 'Snowbird', region: 'US', subregion: 'Utah', beginner: '2', intermediate: '2.5', advanced: '4.5', offpiste: '5', tree_skiing: '4', expert: '5', extreme: '5', slackcountry: '4', snow: '5', uncrowded: '2.5', lifts: '4', terrain_park: '1', family_friendly: '3', freshies: '2', daytime_restaurants: '4', nighttime_restaurants: '3', nightlife: '3', apres: '3.5', skiinskiout: '2.5', cost: '2', english: null, culture: null, powderhounds: '4', overall: '4.5', latitude: '40.5818948', longitude: '-111.6552024'}, 
        {resort: 'El Colorado', region: 'South America', subregion: 'Chile', beginner: '4', intermediate: '4', advanced: '2.5', offpiste: '3', tree_skiing: '0', expert: '3', extreme: '3', slackcountry: '4', snow: '2.5', uncrowded: '2.5', lifts: '2.5', terrain_park: '3', family_friendly: '3', freshies: '2', daytime_restaurants: '4', nighttime_restaurants: '2.5', nightlife: '2.5', apres: '3.5', skiinskiout: '4', cost: '3', english: null, culture: null, powderhounds: '3', overall: '4', latitude: '-38.4458472', longitude: '-71.5175178'}, 
        {resort: 'Keystone', region: 'US', subregion: 'Colorado', beginner: '2.5', intermediate: '5', advanced: '4', offpiste: '4', tree_skiing: '4', expert: '3', extreme: '0', slackcountry: '5', snow: '3', uncrowded: '2', lifts: '4', terrain_park: '5', family_friendly: '3', freshies: '2', daytime_restaurants: '2', nighttime_restaurants: '4', nightlife: '4', apres: '3', skiinskiout: '1', cost: '3', english: null, culture: null, powderhounds: '3', overall: '4', latitude: '39.5791675', longitude: '-105.9347384'}, 
        {resort: 'Aspen Highlands', region: 'US', subregion: 'Colorado', beginner: '3', intermediate: '3.5', advanced: '4', offpiste: '4', tree_skiing: '3', expert: '4.5', extreme: '3', slackcountry: null, snow: '3.5', uncrowded: '4', lifts: '3.5', terrain_park: '0', family_friendly: '3', freshies: '3', daytime_restaurants: '2.5', nighttime_restaurants: '2', nightlife: '2', apres: '2.5', skiinskiout: '3', cost: '2.5', english: null, culture: null, powderhounds: '4', overall: '4', latitude: '39.207514', longitude: '-106.9181892'}, 
        {resort: 'La Parva', region: 'South America', subregion: 'Chile', beginner: '3', intermediate: '4', advanced: '3', offpiste: '4', tree_skiing: '0', expert: '3.5', extreme: '3.5', slackcountry: '4', snow: '3', uncrowded: '3', lifts: '2.5', terrain_park: null, family_friendly: '3', freshies: '3', daytime_restaurants: '4', nighttime_restaurants: '2.5', nightlife: '1.5', apres: '2.5', skiinskiout: '3.5', cost: '2.5', english: null, culture: null, powderhounds: '3.5', overall: '4', latitude: '-33.3402611', longitude: '-70.2918076'}, 
        {resort: 'Whitewater', region: 'Canada', subregion: null, beginner: '2.5', intermediate: '3', advanced: '4', offpiste: '4', tree_skiing: '5', expert: '4.5', extreme: '3', slackcountry: '5', snow: '4.5', uncrowded: '4.5', lifts: '2.5', terrain_park: '2', family_friendly: '3', freshies: '4', daytime_restaurants: '3', nighttime_restaurants: '2', nightlife: '2', apres: '2', skiinskiout: '0', cost: '4.5', english: null, culture: null, powderhounds: '5', overall: '4.5', latitude: '49.2067829999999', longitude: '-100.284817'}, 
        {resort: 'Snowbowl', region: 'US', subregion: 'Montana', beginner: '1', intermediate: '2', advanced: '3', offpiste: '4', tree_skiing: '3', expert: '4', extreme: '1', slackcountry: '2', snow: '3', uncrowded: '4', lifts: '2.5', terrain_park: '0', family_friendly: '3', freshies: '5', daytime_restaurants: '3', nighttime_restaurants: '0', nightlife: '0', apres: '2', skiinskiout: '2', cost: '5', english: null, culture: null, powderhounds: '4', overall: '3.5', latitude: '46.9892708', longitude: '-114.0145566'}, 
        {resort: 'Asari', region: 'Japan', subregion: 'Hokkaido', beginner: '2.5', intermediate: '3', advanced: '2', offpiste: '3', tree_skiing: '3.5', expert: '2', extreme: '0', slackcountry: '3', snow: '4', uncrowded: '4.5', lifts: '2.5', terrain_park: '2', family_friendly: '3', freshies: '5', daytime_restaurants: '4', nighttime_restaurants: '1', nightlife: '1', apres: '2', skiinskiout: '0', cost: '5', english: '1', culture: '4', powderhounds: '4.5', overall: '3.5', latitude: '43.1760708', longitude: '141.0614931'}, 
        {resort: 'Togakushi', region: 'Japan', subregion: 'Honshu', beginner: '3', intermediate: '3', advanced: '2.5', offpiste: '3', tree_skiing: '3', expert: '2.5', extreme: '1', slackcountry: '2.5', snow: '4.5', uncrowded: '5', lifts: '3', terrain_park: '1.5', family_friendly: '3', freshies: '5', daytime_restaurants: '2.5', nighttime_restaurants: '1', nightlife: '0', apres: '1.5', skiinskiout: '2', cost: '5', english: '2', culture: '4', powderhounds: '4.5', overall: '3.5', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Sapporo Kokusai', region: 'Japan', subregion: 'Hokkaido', beginner: '2.5', intermediate: '2', advanced: '1.5', offpiste: '3.5', tree_skiing: '3.5', expert: '2.5', extreme: '1', slackcountry: '4.5', snow: '4.5', uncrowded: '2.5', lifts: '3', terrain_park: '2.5', family_friendly: '3', freshies: '4.5', daytime_restaurants: '3', nighttime_restaurants: '0', nightlife: '0', apres: '1.5', skiinskiout: '0', cost: '4', english: '2.5', culture: '2.5', powderhounds: '4', overall: '3.5', latitude: '43.2203266', longitude: '142.8634737'}, 
        {resort: 'Kicking Horse', region: 'Canada', subregion: null, beginner: '2.5', intermediate: '2.5', advanced: '5', offpiste: '4.5', tree_skiing: '3', expert: '5', extreme: '5', slackcountry: '5', snow: '3.5', uncrowded: '5', lifts: '3', terrain_park: '0', family_friendly: '3', freshies: '3.5', daytime_restaurants: '3', nighttime_restaurants: '3', nightlife: '2', apres: '1', skiinskiout: '4', cost: '3.5', english: null, culture: null, powderhounds: '4.5', overall: '4.5', latitude: '47.4604884', longitude: '-114.0751101'}, 
        {resort: 'Sunshine ', region: 'Canada', subregion: null, beginner: '3', intermediate: '3.5', advanced: '4.5', offpiste: '4.5', tree_skiing: '3', expert: '5', extreme: '5', slackcountry: null, snow: '4', uncrowded: '3', lifts: '4', terrain_park: '4.5', family_friendly: '3', freshies: '2.5', daytime_restaurants: '2.5', nighttime_restaurants: '1', nightlife: '1', apres: '1', skiinskiout: '1', cost: '3', english: null, culture: null, powderhounds: '4', overall: '4', latitude: '43.782573', longitude: '-81.3361149999999'}, 
        {resort: 'Treble Cone', region: 'New Zealand', subregion: null, beginner: '2.5', intermediate: '3', advanced: '4.5', offpiste: '4', tree_skiing: '0', expert: '4', extreme: '4', slackcountry: '4', snow: '3', uncrowded: '3.5', lifts: '2.5', terrain_park: '2', family_friendly: '3', freshies: '3.5', daytime_restaurants: '2.5', nighttime_restaurants: '0', nightlife: '0', apres: '1', skiinskiout: '0', cost: '3', english: null, culture: null, powderhounds: '4', overall: '3.5', latitude: '-44.6347951', longitude: '168.8972227'}, 
        {resort: 'Cerro Bayo', region: 'South America', subregion: 'Argentina', beginner: '3', intermediate: '2.5', advanced: '3.5', offpiste: '4.5', tree_skiing: '4', expert: '4', extreme: '3', slackcountry: '5', snow: '3', uncrowded: '4', lifts: '3', terrain_park: '2.5', family_friendly: '3', freshies: '3.5', daytime_restaurants: '3.5', nighttime_restaurants: '1', nightlife: '1', apres: '1', skiinskiout: '1', cost: '4', english: null, culture: null, powderhounds: '4', overall: '4', latitude: '-40.7421233', longitude: '-71.6115636'}, 
        {resort: 'Sapporo Teine', region: 'Japan', subregion: 'Hokkaido', beginner: '4', intermediate: '2.5', advanced: '3', offpiste: '4', tree_skiing: '4.5', expert: '4.5', extreme: '4', slackcountry: '4.5', snow: '4', uncrowded: '3.5', lifts: '3', terrain_park: '2', family_friendly: '3', freshies: '4.5', daytime_restaurants: '2.5', nighttime_restaurants: '0', nightlife: '0', apres: '1', skiinskiout: '0', cost: '4.5', english: '2.5', culture: '2.5', powderhounds: '4.5', overall: '4', latitude: '43.1219437', longitude: '141.2456322'}, 
        {resort: 'Nekoma', region: 'Japan', subregion: 'Honshu', beginner: '3', intermediate: '2.5', advanced: '2.5', offpiste: '3', tree_skiing: '3.5', expert: '2.5', extreme: '1', slackcountry: '2', snow: '4', uncrowded: '5', lifts: '2.5', terrain_park: '2.5', family_friendly: '3', freshies: '5', daytime_restaurants: '2.5', nighttime_restaurants: '2.5', nightlife: '0', apres: '0.5', skiinskiout: '0', cost: '4.5', english: '2', culture: '3.5', powderhounds: '4.5', overall: '3.5', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Tazawako', region: 'Japan', subregion: 'Honshu', beginner: '3', intermediate: '3', advanced: '2.5', offpiste: '4', tree_skiing: '4.5', expert: '2.5', extreme: '2', slackcountry: null, snow: '5', uncrowded: '4', lifts: '3', terrain_park: '0', family_friendly: '3', freshies: '5', daytime_restaurants: '2.5', nighttime_restaurants: '0', nightlife: '0', apres: '0.5', skiinskiout: '0', cost: '5', english: '2', culture: '4.5', powderhounds: '5', overall: '3.5', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Shizukuishi', region: 'Japan', subregion: 'Honshu', beginner: '2.5', intermediate: '4', advanced: '2', offpiste: '2.5', tree_skiing: '3', expert: '2.5', extreme: '1', slackcountry: '3', snow: '4', uncrowded: '4', lifts: '2.5', terrain_park: '2.5', family_friendly: '3', freshies: '5', daytime_restaurants: '2.5', nighttime_restaurants: '2.5', nightlife: '0.5', apres: '0.5', skiinskiout: '3.5', cost: '4', english: '1.5', culture: '3.5', powderhounds: '4', overall: '3.5', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Grandeco', region: 'Japan', subregion: 'Honshu', beginner: '3.5', intermediate: '3', advanced: '1.5', offpiste: '3', tree_skiing: '3', expert: '1.5', extreme: '1', slackcountry: '2.5', snow: '4', uncrowded: '5', lifts: '4.5', terrain_park: '0', family_friendly: '3', freshies: '5', daytime_restaurants: '3.5', nighttime_restaurants: '2', nightlife: '0.5', apres: '0.5', skiinskiout: '2', cost: '4', english: '3', culture: '3', powderhounds: '4.5', overall: '3.5', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Suginohara', region: 'Japan', subregion: 'Honshu', beginner: '4', intermediate: '4', advanced: '1', offpiste: '1.5', tree_skiing: '3', expert: '4', extreme: '2.5', slackcountry: '4', snow: '4.5', uncrowded: '4', lifts: '4', terrain_park: '1', family_friendly: '3', freshies: '4.5', daytime_restaurants: '2.5', nighttime_restaurants: '1', nightlife: '0.5', apres: '0.5', skiinskiout: '0.5', cost: '4.5', english: '2.5', culture: '4.5', powderhounds: '4.5', overall: '3.5', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Kamui', region: 'Japan', subregion: 'Hokkaido', beginner: '3', intermediate: '3', advanced: '2', offpiste: '4', tree_skiing: '4', expert: '2.5', extreme: '0', slackcountry: '3.5', snow: '5', uncrowded: '4', lifts: '2.5', terrain_park: '2', family_friendly: '3', freshies: '4', daytime_restaurants: '2.5', nighttime_restaurants: '0', nightlife: '0', apres: '0', skiinskiout: '0', cost: '5', english: '2', culture: '3.5', powderhounds: '4.5', overall: '3.5', latitude: '45.1694673', longitude: '141.14295'}, 
        {resort: 'Aspen Mountain', region: 'US', subregion: 'Colorado', beginner: '0', intermediate: '3.5', advanced: '3.5', offpiste: '3', tree_skiing: '2.5', expert: '3', extreme: '2', slackcountry: null, snow: '3.5', uncrowded: '3.5', lifts: '3.5', terrain_park: '0', family_friendly: '2.5', freshies: '2.5', daytime_restaurants: '2.5', nighttime_restaurants: '5', nightlife: '4.5', apres: '4', skiinskiout: '2', cost: '2', english: null, culture: null, powderhounds: '3.5', overall: '3.5', latitude: '39.1760986', longitude: '-106.8292058'}, 
        {resort: 'Squaw Valley', region: 'US', subregion: 'California', beginner: '3.5', intermediate: '4', advanced: '3.5', offpiste: '5', tree_skiing: '3', expert: '5', extreme: '5', slackcountry: '4', snow: '4', uncrowded: '1', lifts: '4.5', terrain_park: '3', family_friendly: '2.5', freshies: '1', daytime_restaurants: '4', nighttime_restaurants: '3.5', nightlife: '3.5', apres: '4', skiinskiout: '2.5', cost: '2.5', english: null, culture: null, powderhounds: '3', overall: '4.5', latitude: '39.1969804', longitude: '-120.2357055'}, 
        {resort: 'Pucon', region: 'South America', subregion: 'Chile', beginner: '3.5', intermediate: '1', advanced: '1', offpiste: '2', tree_skiing: '0', expert: '2.5', extreme: '2', slackcountry: '1', snow: '2', uncrowded: '4', lifts: '1.5', terrain_park: '1', family_friendly: '2.5', freshies: '3.5', daytime_restaurants: '2', nighttime_restaurants: '0', nightlife: '0', apres: '2', skiinskiout: '0', cost: '3', english: null, culture: null, powderhounds: '3', overall: '2.5', latitude: '-39.2722541', longitude: '-71.9776285'}, 
        {resort: 'Alpine Meadows', region: 'US', subregion: 'California', beginner: '2.5', intermediate: '3.5', advanced: '3', offpiste: '4', tree_skiing: '2.5', expert: '4.5', extreme: '3.5', slackcountry: '3', snow: '4', uncrowded: '1', lifts: '3', terrain_park: '2', family_friendly: '2.5', freshies: '2', daytime_restaurants: '2.5', nighttime_restaurants: '0', nightlife: '0', apres: '1.5', skiinskiout: '0', cost: '3', english: null, culture: null, powderhounds: '3', overall: '3.5', latitude: '39.1785177', longitude: '-120.2276948'}, 
        {resort: 'Kagura', region: 'Japan', subregion: 'Honshu', beginner: '5', intermediate: '3', advanced: '2.5', offpiste: '3.5', tree_skiing: '4', expert: '3', extreme: '1', slackcountry: '4', snow: '4.5', uncrowded: '4', lifts: '3.5', terrain_park: '2.5', family_friendly: '2.5', freshies: '4', daytime_restaurants: '3', nighttime_restaurants: '1', nightlife: '0', apres: '1.5', skiinskiout: '1', cost: '4', english: '2.5', culture: '3', powderhounds: '4.5', overall: '4', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Antillanca', region: 'South America', subregion: 'Chile', beginner: '3', intermediate: '2.5', advanced: '2', offpiste: '2.5', tree_skiing: '1.5', expert: '3', extreme: '2', slackcountry: '4', snow: '2', uncrowded: '3.5', lifts: '2', terrain_park: '0', family_friendly: '2.5', freshies: '4', daytime_restaurants: '2.5', nighttime_restaurants: '2', nightlife: '1.5', apres: '1.5', skiinskiout: '3', cost: '3.5', english: null, culture: null, powderhounds: '3', overall: '3.5', latitude: '-40.770833', longitude: '-72.153333'}, 
        {resort: 'Powder Mountain', region: 'US', subregion: 'Utah', beginner: '2', intermediate: '2.5', advanced: '2', offpiste: '5', tree_skiing: '5', expert: '3', extreme: '2', slackcountry: '5', snow: '4.5', uncrowded: '5', lifts: '2', terrain_park: '2', family_friendly: '2.5', freshies: '5', daytime_restaurants: '1', nighttime_restaurants: '0.5', nightlife: '0', apres: '1.5', skiinskiout: '3.5', cost: '3.5', english: null, culture: null, powderhounds: '5', overall: '4', latitude: '41.3804945', longitude: '-111.7838279'}, 
        {resort: 'Turoa', region: 'New Zealand', subregion: null, beginner: '2.5', intermediate: '3.5', advanced: '3', offpiste: '3', tree_skiing: '0', expert: '2.5', extreme: '2', slackcountry: '2.5', snow: '2.5', uncrowded: '4', lifts: '2.5', terrain_park: '2', family_friendly: '2.5', freshies: '3', daytime_restaurants: '3', nighttime_restaurants: '3', nightlife: '3', apres: '1', skiinskiout: '0', cost: '4.5', english: null, culture: null, powderhounds: '3', overall: '3.5', latitude: '-39.4232904', longitude: '175.4067509'}, 
        {resort: 'Moiwa', region: 'Japan', subregion: 'Hokkaido', beginner: '2', intermediate: '2.5', advanced: '2.5', offpiste: '4', tree_skiing: '4.5', expert: '3', extreme: '1.5', slackcountry: '4.5', snow: '5', uncrowded: '4.5', lifts: '2.5', terrain_park: '1', family_friendly: '2.5', freshies: '4.5', daytime_restaurants: '2.5', nighttime_restaurants: '2', nightlife: '2', apres: '1', skiinskiout: '2', cost: '4', english: '3', culture: '3', powderhounds: '5', overall: '4', latitude: '42.5045098', longitude: '143.3164705'}, 
        {resort: 'Hanmer Springs', region: 'New Zealand', subregion: null, beginner: '0.5', intermediate: '4', advanced: '1', offpiste: '3', tree_skiing: '0', expert: '2', extreme: '2', slackcountry: '3', snow: '2', uncrowded: '5', lifts: '2', terrain_park: '0', family_friendly: '2.5', freshies: '5', daytime_restaurants: '1', nighttime_restaurants: '0', nightlife: '1', apres: '1', skiinskiout: '3', cost: '4', english: null, culture: null, powderhounds: '3.5', overall: '3', latitude: '-42.5262427', longitude: '172.8288246'}, 
        {resort: 'Porters', region: 'New Zealand', subregion: null, beginner: '3.5', intermediate: '2.5', advanced: '2.5', offpiste: '3.5', tree_skiing: '0', expert: '2.5', extreme: '1.5', slackcountry: '3', snow: '2', uncrowded: '3', lifts: '2.5', terrain_park: '2.5', family_friendly: '2.5', freshies: '3.5', daytime_restaurants: '2.5', nighttime_restaurants: '0', nightlife: '0', apres: '0.5', skiinskiout: '0', cost: '4', english: null, culture: null, powderhounds: '3', overall: '3', latitude: '-36.867856', longitude: '174.7557409'}, 
        {resort: 'Yubari', region: 'Japan', subregion: 'Hokkaido', beginner: '3.5', intermediate: '3', advanced: '2.5', offpiste: '3', tree_skiing: '3', expert: '2', extreme: '1', slackcountry: null, snow: '4', uncrowded: '4.5', lifts: '3', terrain_park: '3', family_friendly: '2.5', freshies: '5', daytime_restaurants: '2', nighttime_restaurants: '3', nightlife: '0.5', apres: '0.5', skiinskiout: '2.5', cost: '4', english: '2.5', culture: '4', powderhounds: '4.5', overall: '3.5', latitude: '43.0567343', longitude: '141.9738961'}, 
        {resort: 'Minowa', region: 'Japan', subregion: 'Honshu', beginner: '3', intermediate: '2', advanced: '2', offpiste: '4.5', tree_skiing: '5', expert: '3', extreme: '1.5', slackcountry: '4.5', snow: '4.5', uncrowded: '4.5', lifts: '2.5', terrain_park: '0.5', family_friendly: '2.5', freshies: '5', daytime_restaurants: '2.5', nighttime_restaurants: '0.5', nightlife: '0.5', apres: '0.5', skiinskiout: '1', cost: '4.5', english: '2.5', culture: '3.5', powderhounds: '5', overall: '3.5', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Fox Peak', region: 'New Zealand', subregion: null, beginner: '1.5', intermediate: '2.5', advanced: '3', offpiste: '4', tree_skiing: '0', expert: '4', extreme: '3', slackcountry: '3.5', snow: '2', uncrowded: '5', lifts: '1', terrain_park: '0', family_friendly: '2.5', freshies: '5', daytime_restaurants: '0', nighttime_restaurants: '0', nightlife: '0', apres: '0', skiinskiout: '0', cost: '5', english: null, culture: null, powderhounds: '3.5', overall: '2.5', latitude: '-43.8333333', longitude: '170.7833333'}, 
        {resort: 'St Anton', region: 'Europe', subregion: null, beginner: '2', intermediate: '4', advanced: '2.5', offpiste: '4', tree_skiing: '1', expert: '5', extreme: '5', slackcountry: null, snow: '3', uncrowded: '1', lifts: '4', terrain_park: '2.5', family_friendly: '2', freshies: '3', daytime_restaurants: '5', nighttime_restaurants: '5', nightlife: '5', apres: '5', skiinskiout: '2', cost: '3', english: null, culture: null, powderhounds: '3.5', overall: '4.5', latitude: '47.1296346', longitude: '10.2681786'}, 
        {resort: 'Alyeska', region: 'US', subregion: 'Alaska', beginner: '2', intermediate: '3', advanced: '3', offpiste: '4', tree_skiing: '1', expert: '4', extreme: '4', slackcountry: '2', snow: '4', uncrowded: '3', lifts: '3', terrain_park: '0', family_friendly: '2', freshies: '1', daytime_restaurants: '3', nighttime_restaurants: '2', nightlife: '3', apres: '3', skiinskiout: '3', cost: '1', english: null, culture: null, powderhounds: '3.5', overall: '3.5', latitude: '60.96083', longitude: '-149.11083'}, 
        {resort: 'Jackson Hole', region: 'US', subregion: 'Wyoming', beginner: '1', intermediate: '3', advanced: '5', offpiste: '5', tree_skiing: '4', expert: '5', extreme: '5', slackcountry: '5', snow: '4', uncrowded: '2', lifts: '3', terrain_park: '2', family_friendly: '2', freshies: '2.5', daytime_restaurants: '2', nighttime_restaurants: '3', nightlife: '1', apres: '2', skiinskiout: '4', cost: '2', english: null, culture: null, powderhounds: '4.5', overall: '4', latitude: '43.4799291', longitude: '-110.7624282'}, 
        {resort: 'Hakkaisan', region: 'Japan', subregion: 'Honshu', beginner: '2.5', intermediate: '2.5', advanced: '3', offpiste: '4.5', tree_skiing: '4.5', expert: '4.5', extreme: '4', slackcountry: '5', snow: '4', uncrowded: '5', lifts: '2.5', terrain_park: '1', family_friendly: '2', freshies: '4.5', daytime_restaurants: '2', nighttime_restaurants: '0', nightlife: '0', apres: '0.5', skiinskiout: '0', cost: '4.5', english: '2', culture: '4', powderhounds: '5', overall: '3.5', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Chisenupuri', region: 'Japan', subregion: 'Hokkaido', beginner: '2', intermediate: '2', advanced: '2', offpiste: '3', tree_skiing: '3.5', expert: '3', extreme: '1', slackcountry: '3', snow: '4.5', uncrowded: '5', lifts: '2', terrain_park: '0', family_friendly: '1.5', freshies: '5', daytime_restaurants: '2', nighttime_restaurants: '0.5', nightlife: '0.5', apres: '1', skiinskiout: '1', cost: '5', english: '1', culture: '4', powderhounds: '4.5', overall: '3.5', latitude: '42.8881622', longitude: '140.5964991'}, 
        {resort: 'Tenjindaira', region: 'Japan', subregion: 'Honshu', beginner: '2', intermediate: '2', advanced: '2', offpiste: '5', tree_skiing: '4.5', expert: '5', extreme: '5', slackcountry: '5', snow: '5', uncrowded: '5', lifts: '2.5', terrain_park: '0.5', family_friendly: '1.5', freshies: '5', daytime_restaurants: '2', nighttime_restaurants: '0', nightlife: '0', apres: '0.5', skiinskiout: '0', cost: '4.5', english: '2.5', culture: '3.5', powderhounds: '5', overall: '3.5', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Broken River', region: 'New Zealand', subregion: null, beginner: '0.5', intermediate: '2', advanced: '3.5', offpiste: '4', tree_skiing: '0', expert: '3.5', extreme: '2.5', slackcountry: '5', snow: '3', uncrowded: '5', lifts: '1.5', terrain_park: '1', family_friendly: '1', freshies: '4', daytime_restaurants: '1', nighttime_restaurants: '1', nightlife: '1.5', apres: '1', skiinskiout: '2', cost: '5', english: null, culture: null, powderhounds: '4', overall: '3.5', latitude: '-43.1939053', longitude: '171.876137'}, 
        {resort: 'Mount Olympus', region: 'New Zealand', subregion: null, beginner: '1', intermediate: '1', advanced: '2.5', offpiste: '4', tree_skiing: '0', expert: '4.5', extreme: '4.5', slackcountry: '4.5', snow: '3', uncrowded: '4', lifts: '1.5', terrain_park: '0', family_friendly: '1', freshies: '5', daytime_restaurants: '2', nighttime_restaurants: '3', nightlife: '2.5', apres: '1', skiinskiout: '2', cost: '5', english: null, culture: null, powderhounds: '4', overall: '3.5', latitude: '-41.65', longitude: '173.5'}, 
        {resort: 'Arapahoe Basin', region: 'US', subregion: 'Colorado', beginner: '2', intermediate: '2.5', advanced: '3', offpiste: '3.5', tree_skiing: '2', expert: '3', extreme: '2', slackcountry: '3', snow: '3', uncrowded: '4.5', lifts: '2.5', terrain_park: '3', family_friendly: '1', freshies: '3', daytime_restaurants: '2.5', nighttime_restaurants: '0', nightlife: '0', apres: '0', skiinskiout: '0', cost: '3', english: null, culture: null, powderhounds: '3.5', overall: '3', latitude: '39.7119594', longitude: '-104.7754299'}, 
        {resort: 'Kurodake', region: 'Japan', subregion: 'Hokkaido', beginner: '0', intermediate: '1', advanced: '0.5', offpiste: '5', tree_skiing: '5', expert: '5', extreme: '4.5', slackcountry: '4', snow: '5', uncrowded: '5', lifts: '2.5', terrain_park: '0', family_friendly: '0.5', freshies: '4.5', daytime_restaurants: '1.5', nighttime_restaurants: '1.5', nightlife: '1.5', apres: '0.5', skiinskiout: '0', cost: '4', english: '2.5', culture: '3', powderhounds: '5', overall: '3.5', latitude: '42.028081', longitude: '140.272014'}, 
        {resort: 'Silverton', region: 'US', subregion: 'Colorado', beginner: '0', intermediate: '0', advanced: '3', offpiste: '5', tree_skiing: '4', expert: '5', extreme: '5', slackcountry: null, snow: '4.5', uncrowded: '5', lifts: '1', terrain_park: '0', family_friendly: '0', freshies: '4', daytime_restaurants: '0.5', nighttime_restaurants: '1.5', nightlife: '1', apres: '4', skiinskiout: '0', cost: '4', english: null, culture: null, powderhounds: '5', overall: '3.5', latitude: '37.811941', longitude: '-107.6645057'}, 
        {resort: 'Craigieburn', region: 'New Zealand', subregion: null, beginner: '0', intermediate: '1', advanced: '5', offpiste: '4.5', tree_skiing: '0.5', expert: '4.5', extreme: '4.5', slackcountry: '5', snow: '2.5', uncrowded: '3', lifts: '1.5', terrain_park: '0', family_friendly: '0', freshies: '4.5', daytime_restaurants: '2', nighttime_restaurants: '0', nightlife: '2', apres: '3', skiinskiout: '2', cost: '5', english: null, culture: null, powderhounds: '4', overall: '3.5', latitude: '-43.104564', longitude: '171.8638961'}, 
        {resort: 'Gulmarg', region: 'India', subregion: null, beginner: '0.5', intermediate: '0.5', advanced: '2', offpiste: '4', tree_skiing: '3', expert: '3.5', extreme: '2', slackcountry: '5', snow: '3', uncrowded: '3', lifts: '2', terrain_park: '0', family_friendly: '0', freshies: '2', daytime_restaurants: '2', nighttime_restaurants: '2', nightlife: '1', apres: '1', skiinskiout: '3', cost: '3', english: null, culture: null, powderhounds: '3.5', overall: '3', latitude: '34.0475611', longitude: '74.3853563999999'}, 
        {resort: 'Seki Onsen', region: 'Japan', subregion: 'Honshu', beginner: '0', intermediate: '1.5', advanced: '2.5', offpiste: '3.5', tree_skiing: '4', expert: '4.5', extreme: '4.5', slackcountry: '4', snow: '5', uncrowded: '2.5', lifts: '1.5', terrain_park: '0.5', family_friendly: '0', freshies: '3.5', daytime_restaurants: '1.5', nighttime_restaurants: '1', nightlife: '0.5', apres: '0.5', skiinskiout: '2', cost: '4.5', english: '2.5', culture: '4.5', powderhounds: '4', overall: '3.5', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Hakkoda', region: 'Japan', subregion: 'Honshu', beginner: '1', intermediate: '2', advanced: '3', offpiste: '4', tree_skiing: '4.5', expert: '3', extreme: '2', slackcountry: '5', snow: '4.5', uncrowded: '4', lifts: '2.5', terrain_park: '0', family_friendly: '0', freshies: '4.5', daytime_restaurants: '2.5', nighttime_restaurants: '0', nightlife: '0', apres: '0', skiinskiout: '2', cost: '4.5', english: '2.5', culture: '3', powderhounds: '5', overall: '3.5', latitude: '36.0786279', longitude: '138.0803529'}, 
        {resort: 'Asahidake', region: 'Japan', subregion: 'Hokkaido', beginner: '0', intermediate: '1', advanced: '1', offpiste: '4.5', tree_skiing: '4.5', expert: '3', extreme: '2', slackcountry: '5', snow: '5', uncrowded: '3.5', lifts: '2.5', terrain_park: '0', family_friendly: '0', freshies: '4', daytime_restaurants: '2', nighttime_restaurants: '1', nightlife: '1', apres: '0', skiinskiout: '0', cost: '5', english: '2', culture: '3', powderhounds: '4.5', overall: '3.5', latitude: '43.6636111', longitude: '142.8541666'} 
    ];

    var skiDataFull = [];
    var skiData2 = [];
    var infoWindowArray = [];
    var markerArray = [];
    var map, marker, content, infoWindow;
    var bounds;


    //CODE FOR ADDING A FILTER
    $("#extra_filters").on('click', 'a', function() {

        //Store the id of the link that was selected
        var picture = $(this).attr('id');
        var label = $(this).text();

        // Remove the extension of the picture and use that as the ID of the filter
        var n = picture.indexOf(".");
        var filter_id = picture.substring(0,n);

        //Add a row containing the corresponding icon, a slider, and a remove icon
        $("#slider_container").append('<div class="filter_row" id="' + picture + '"><div class="icons"><img src="images/' + picture + '"  title="' + label + '"></div><div class="slider_wrapper"><input type="range" name="filters" id="' + filter_id + '" value="0" min="0" max="5" step="1"></div><a href="#"><img class="remove" src="images/remove.png"></a></div>');
        
        //Hide the link that was selected
        $(this).remove();

    });


    //CODE FOR REMOVING A FILTER
    $('body').on('click', '.remove', function() {

        //Store the id of the slider being removed
        var picture = $(this).parent().parent().attr('id');
        var label = $(this).parent().siblings('.icons').children("img").attr('title');

        //Change the value of the slider back to 0
        $(this).parent().siblings('.slider_wrapper').children('input').val(0);
        // console.log(label + ": " + $(this).parent().siblings('.slider_wrapper').children('input').val());

        //Remove the entire row of the slider being removed
        $(this).parent().parent().remove();

        //Add the removed tag back to the list of links
        $("#extra_filters").prepend('<a href="#" id="' + picture +'">' + label +'</a>');

        runSkiCalcs();

    });


    // Click to display or hide the left ribbon
    $('#ribbon_left').click(function(){

        $('#filter_pane').animate({width: 'toggle'},300);
        // $('#filter_pane').toggle();

        $('#map_container').toggleClass('large_map');
        // initialize();

        // google.maps.event.trigger(map, 'resize');
        // map.fitBounds(bounds);

    });


    // Whenever the results table is selected...
    $('#results_table tbody').on('click', 'tr', function () {
        $('.selected').toggleClass('selected');
        $(this).toggleClass('selected');

        //This will close  any open infowindows before opening the selected one
        for (var i=0;i<infoWindowArray.length;i++) {
           infoWindowArray[i].close();
        }

        var clickedIndex = $(this).find(':first-child').text() - 1;

        // console.log(infoWindowArray[index].open(map,marker));
        // map.setCenter(markerArray[clickedIndex].getPosition());
        // google.maps.event.trigger(markerArray[clickedIndex], "click");

        infoWindowArray[clickedIndex].open(map,markerArray[clickedIndex]);

    })





//THERE ARE A FEW SCENARIOS UNDER WHICH WE RUN THE SKI DATA CALCULATOR

    //Run the ski data calculator when the page first loads
    runSkiCalcs();


    //Run the ski data calculator when a filter is changed
    $('body').on('change', 'input', function() {

        // console.log($(this).attr('id') + ": " + $(this).val());

        runSkiCalcs();


    });


    $('body').on('change', 'select', function() {

        // console.log($(this).attr('id') + ": " + $(this).val());

        runSkiCalcs();
    });



//CREATES A GRADIENT TO FILL THE LOWER PORTION OF THE FILTERS
$('#slider_container').on('change', 'input', function() {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    
    $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #2196F3), '
                + 'color-stop(' + val + ', #ffffff)'
                + ')'
                );
});




function runSkiCalcs() {


    // Loop through every object in the database
    for(var i=0; i < skiData.length; i++) {

        var resortTotal = 0;

        // Loop through every property in each object
        for (var property in skiData[i]) {
            if (skiData[i].hasOwnProperty(property)) {

                var resortSingleScore = 0;
                var resortUserScore = 0;

                // Get the resort score for the current property of the current resort
                if ( skiData[i][property] === null) {
                    resortSingleScore = 2.5;
                } else if (property ==="resort" || property === "region" || property === "subregion" || property === "latitude" || property === "longitude") {
                    resortSingleScore = 0;
                } else {
                    resortSingleScore = parseFloat(skiData[i][property]);
                }

                // Get the user weight for the current property of the current resort
                if ( $("#" + property).val() === null || $("#" + property).val() === undefined) {
                    resortUserScore = 0;
                } else {
                    resortUserScore = $("#" + property).val() / 100;
                }
                // console.log(skiData[i].resort + " " + property + ": " + $("#" + property).val());

                // Create a running weighted sum for the current property
                resortTotal = resortTotal + (resortSingleScore * resortUserScore);         
            }
        }

        // Assign resortTotal to the current object
        skiData[i]['resortTotal'] = resortTotal;

    }

    skiData.sort(function(a, b) {
        return parseFloat(b.resortTotal) - parseFloat(a.resortTotal);
    });

    skiData.sort(function(a, b) {
        // return a["one"] - b["one"] || a["two"] - b["two"];
        return b.resortTotal - a.resortTotal || b.overall - a.overall;
    });

    var filterRegion = $("select option:selected").text();



    skiData2 = $.grep(skiData, function(v) {
        if (filterRegion==="North America") {
            return v.region === 'US' || v.region === 'Canada'; 
        } else if (filterRegion==="South America") {
            return v.region === 'South America';
        } else if (filterRegion==="Europe") {
            return v.region === 'Europe';
        } else if (filterRegion==="Asia") {
            return v.region === 'Japan' || v.region === 'India';
        } else if (filterRegion==="Australia") {
            return v.region === 'Australia' || v.region === 'New Zealand';
        } else if (filterRegion==="Show All Regions") {
            return v.region;
        }     
    });

    skiData2 = skiData2.slice(0,25);

    $("#results_table tbody").html("");

    displayResults(skiData2);

    infoWindowArray = [];
    markerArray = [];

    initialize();

    // google.maps.event.addDomListener(window, 'load', initialize);

    $('.selected').toggleClass('selected');
    $('tr:first-child td').toggleClass('selected'); 

}



function displayResults(data){

  // use jquery to create a new table row containing data received from the API
  data.forEach(function(element, index, array){
      $("#results_table tbody").append("<tr><td>" + (index + 1) + "</td><td>" + element.resort + "</td><td>" + element.region + "</td><td>" + parseInt(element.resortTotal*100) + "</td></tr>");

  });
}




//Code for running the google map 
function initialize(){
    
    var customMapType = new google.maps.StyledMapType([{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}], {
        name: 'Custom Style'
    });
    var customMapTypeId = 'custom_style';

    var bounds = new google.maps.LatLngBounds();


    var map = new google.maps.Map(document.getElementById('map'), {
      // zoom: 2,
      // center: {lat: 0, lng: 10},
      // scrollwheel: false,
      // navigationControl: false,
      // mapTypeControl: false,
      // scaleControl: false,
      // disableDoubleClickZoom: true,
      // draggable: false,
      // panControl: false,
      // animation: google.maps.Animation.DROP,

      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID, customMapTypeId]
      }
    });

    map.mapTypes.set(customMapTypeId, customMapType);
    // map.setMapTypeId(customMapTypeId);

    
    skiData2.forEach(function(element, index, array){
        var marker, content;

        marker = createMarker(element, index);
        content = createInfoWindow(element, marker, index);
   
        bounds.extend(marker.position);
    });

    //now fit the map to the newly inclusive bounds
    map.fitBounds(bounds);

    

    function createMarker(element, index){
      var coordinates = new google.maps.LatLng(element.latitude, element.longitude); 

      var marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        title: element.name,
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
      });

      marker.skiRank = index;

      markerArray.push(marker);

      return marker;
    }

    function createInfoWindow(element, marker, index){
      var contentString, main, subtitle, state;

      if (element.subregion === null) {state = ""} 
      else {state = element.subregion + ", "}

      title = "<span id='infoWindowRank'>#" + (index + 1) + " </span><span id='infoWindowTitle'>" + element.resort + "</span>";
      subtitle = "<div id='infoWindowSubTitle'>" + state + element.region + "</div>";
      score = "<div id='infoWindowScore'>Score: " + parseInt(element.resortTotal*100) + "</div>";
      contentString = title + subtitle + score;

      var infoWindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 700
      });

      infoWindowArray.push(infoWindow);

      if (index===0) {infoWindow.open(map, marker)};

      //Listen for click of marker on map
      google.maps.event.addListener(marker, 'click', function(){

        //This will close  any open infowindows before opening the selected one
        for (var i=0;i<infoWindowArray.length;i++) {
           infoWindowArray[i].close();
        }

        infoWindow.open(map, marker);

        console.log(marker.skiRank);

        $('.selected').toggleClass('selected');
        $('tr:nth-child(' + (marker.skiRank + 1) + ') td').toggleClass('selected');

      });

    }

}



})



