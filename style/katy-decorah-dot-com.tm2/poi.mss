// =====================================================================
// POINTS OF INTEREST ICONS & LABELS
// =====================================================================

// Airports and rail stations are styled separately from other POIs
// because we use different fields to set their icon images.

#poi_label[type!='Aerodrome'][type!='Rail Station'][type!='hole'] {
  ::icon {
    [zoom<14],
    [zoom>=14][scalerank=1][localrank<=1],
    [zoom>=15][scalerank<=2][localrank<=1],
    [zoom>=16][scalerank<=3][localrank<=1],
    [zoom>=17][localrank<=4],
    [zoom>=18][localrank<=16],
    [zoom>=19] {
      [maki!=null] {
        marker-file: url("img/maki/[maki]-12.svg");
      }
      [maki=null] {
        // small dot for POIs with no Maki icon defined
        marker-width: 4;
        marker-fill: rgba(0,0,0,0);
        marker-line-width: 1.2;
        marker-line-color: #666;
      }
    }
  }
}

// Rail Stations _______________________________________________________

#poi_label[type='Rail Station'][network!=null][scalerank=1][zoom>=14],
#poi_label[type='Rail Station'][network!=null][scalerank=2][zoom>=15],
#poi_label[type='Rail Station'][network!=null][scalerank=3][zoom>=16] {
  marker-file: url("img/rail/[network]-12.svg");
  marker-height: 12;
  marker-allow-overlap: false;
  [zoom=16] {
    marker-file: url("img/rail/[network]-18.svg");
    marker-height: 18;
  }
  [zoom>16] {
    marker-file: url("img/rail/[network]-12.svg");
    marker-height:24;
  }
}

// Airports ____________________________________________________________

#poi_label[type='Aerodrome'][zoom>=10] {
  marker-file: url("img/maki/[maki]-12.svg");
  
  [zoom>=11][scalerank=1],
  [zoom>=12][scalerank=2],
  [zoom>=14] {
    marker-file: url("img/maki/[maki]-18.svg");
  
  }
  [zoom>=13][scalerank=1],
  [zoom>=14][scalerank=2],
  [zoom>=15] {
    marker-file: url("img/maki/[maki]-24.svg");
    
  }
  [zoom>=14][scalerank=1],
  [zoom>=15][scalerank=2],
  [zoom>=16] {
    marker-file: url("img/maki/[maki]-24.svg");
    
  }
}

// Golf holes __________________________________________________________



/**/