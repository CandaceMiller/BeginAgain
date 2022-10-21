//this is where the array method is being used in meetings (all meetings are inside these arrays)
let dayOfWeek
let meetings = {
    monday: {
        '6am': [['Upon Awakening Group<br>(AA)', '3rd Street<br>Church of God<br>427 3rd St.<br>Fort Wayne, IN.<br>46808', 'Google Maps']],
        '9am': [['Early Start Group<br>(AA)', 'Robinson Chapel<br>(UMC)<br>12707 Tonkel Rd.<br>Fort Wayne, IN.<br>46745', 'Google Maps'], ['Alcoholics<br>Anonymous', 'Covenant United<br>Methodist Church<br>10001 Coldwater Rd.<br>Fort Wayne, IN.<br>46835', 'Google Maps']],
        '10am': [['Trails End Group<br>(AA)', 'Club Oasis<br>1118 Spring St.<br>Fort Wayne, IN.<br>46808', 'Google Maps']],
        '12pm': [['Serenity Circle<br>(AA)', 'The 13th Step House<br>1317 Washington Blvd.<br>Fort Wayne, IN.<br>46802', 'Google Maps'], ['Narcotics<br>Anonymous', 'Faith United<br>Methodist Church<br>207 East DeWald St.<br>Fort Wayne, IN.<br>46803', 'Google Maps']],
        '7pm': [['A New Beginning<br>(AA)', 'Saint Henrys<br>Catholic Church<br>2929 E. Paulding Rd.<br>Fort Wayne, IN.<br>46816', 'Google Maps'], ['Waynedale Step Group<br>(AA)', 'Waynedale<br>Methodist Church<br>2501 Church St.<br>Fort Wayne, IN.<br>46809', 'Google Maps'], ['Sobriety Group<br>(AA)', 'Club Oasis<br>1118 Spring St.<br>Fort Wayne, IN.<br>46808', 'Google Maps'], ['Road to Recovery<br>(NA)', '2018 N. Clinton St.<br>Fort Wayne, IN.<br>46805', 'Google Maps'], ['Narcotics<br>Anonymous', 'Park Center Gym<br>909 E. State Blvd.<br>Fort Wayne, IN.<br>46805<br>(conference center,<br>enter north side)', 'Google Maps'], ['Celebrate Recovery<br>(2 hours)', 'The Chapel<br>2505 W. Hamilton Rd.<br>Fort Wayne, IN.<br>46814<br>(Dinner last Monday<br>of the month @6pm)', 'Google Maps'], ['Celebrate Recovery<br>(2 hours)', 'Grace Point Church<br>8611 Mayhew Rd.<br>Fort Wayne, IN.<br>00000<br>(enter door #8)<br>(Dinner 2nd Monday of<br>the month @545pm)', 'Google Maps']],
        '705pm': [['Way of Life Group<br>(AA)', 'The 13th Step House<br>1317 Washington Blvd.<br>Fort Wayne, IN.<br>46802', 'Google Maps']],
        '730pm': [['Grapevine Group<br>(AA)', 'First Presbyterian Church<br>300 W. Wayne St.<br>Fort Wayne, IN.<br>46802<br>(2nd Floor)', 'Google Maps'], ['12 & 12 Group<br>(AA)', 'Saint Albans Church<br>7308 St Joe Rd.<br>Fort Wayne, IN.<br>46835', 'Google Maps'], ['Aldersgate Group<br>(AA)', 'Aldersgate Church<br>2417 Getz Rd.<br>Fort Wayne, IN.<br>46804', 'Google Maps'], ['Stag<br>(ALANON)<br>~Men Only~', 'First Presbyterian Church<br>300 W. Wayne St.<br>Fort Wayne, IN.<br>46802', 'Google Maps'], ['Study Group<br>(ALANON)', 'Aldersgate<br>Methodist Church<br>2417 Getz Rd.<br>Fort Wayne, IN.<br>46804', 'Google Maps']]
    },
    tuesday: {
        '9am': [['Early Start Group<br>(AA)', 'Robinson Chapel<br>(UMC)<br>12707 Tonkel Rd.<br>Fort Wayne, IN.<br>46745', 'Google Maps'], ['Alcoholics Anonymous', 'Covenant<br>Methodist Church<br>10001 Coldwater Rd.<br>Fort Wayne, IN.<br>46835', 'Google Maps']],
        '10am': [['Trails End Group<br>(AA)', 'Club Oasis<br>1118 Spring St.<br>Fort Wayne, IN.<br>46808', 'Google Maps'], ['Study Group<br>(ALANON)<br>~90 minute meeting~', 'Good Shepherd<br>Methodist Church<br>4700 Vance Ave.<br>Fort Wayne, IN.<br>46815', 'Google Maps']],
        '12pm': [['Living Sober Group<br>(AA)', 'The 13th Step House<br>1317 Washington Blvd.<br>Fort Wayne, IN.<br>46802', 'Google Maps'], ['Narcotics Anonymous', 'Saint John<br>Lutheran Church<br>729 W. Washington Blvd.<br>Fort Wayne, IN.<br>46802', 'Google Maps']],
        '7pm': [['Beginners Group<br>(AA)', 'Parish Center<br>1522 Inwood Dr.<br>Fort Wayne, IN.<br>46815', 'Google Maps'], ['Building a New Life<br>(AA)', 'First United<br>Methodist Church<br>300 East Wayne St.<br>Fort Wayne, IN.<br>46802', 'Google Maps'], ['Common Bond Group<br>(AA)', 'The 13th Step House<br>1317 Washington Blvd.<br>Fort Wayne, IN.<br>46802', 'Google Maps'], ['Strengthening My Recovery<br>(ACOA)', 'First Presbyterian Church<br>300 West Wayne St.<br>Fort Wayne, IN.<br>46802<br>(room 306)', 'Google Maps'], ['It Works How & Why<br>(NA)', 'First Presbyterian Church<br>300 W. Wayne St.<br>Fort Wayne, IN.<br>46802<br>(room 306)', 'Google Maps'], ['It Works How & Why<br>(NA)', 'Park Center Gym<br>909 East State Blvd.<br>Fort Wayne, IN.<br>46805<br>(conference building,<br>enter north side)', 'Google Maps'], ['Celebrate Recovery<br>(2 hours)', 'Pathway Community Church<br>11910 Shearwater Run<br>Fort Wayne, IN.<br>46845<br>(Dinner last Tuesday of<br>the month @545pm)<br>*Childcare Provided*', 'Google Maps']],
        '730pm': [['Way Home Group<br>(AA)', 'Club Oasis<br>1118 Spring St.<br>Fort Wayne, IN.<br>46808', 'Google Maps'], ['Central Group<br>(AA)', 'First Presbyterian Church<br>300 W. Wayne St.<br>Fort Wayne, IN.<br>46802', 'Google Maps'], ['12 & 12 Study Group<br>(AA)', 'Aldersgate Church<br>2417 Getz Rd.<br>Fort Wayne, IN.<br>46804', 'Google Maps'], ['Lighthouse Group<br>(AA)', 'St. Vincents<br>Spiritual Center<br>1502 E. Wallen Rd.<br>Fort Wayne, IN.<br>46825<br>(door 4 Room G)', 'Google Maps'], ['Study Group<br>(ALANON)', 'Aldersgate<br>Methodist Church<br>2417 Getz Rd.<br>Fort Wayne, IN.<br>46804', 'Google Maps'], ['Study Group<br>(Alateen)', 'Aldergate<br>Methodist Church<br>2417 Getz Rd.<br>Fort Wayne, IN.<br>46804', 'Google Maps']]
    },
    wednesday: {
        '6am': [['Upon Awakening Group<br>(AA)', 'Church of God<br>427 3rd St.<br>Fort Wayne, IN.<br>46808', 'Google Maps']],
        '9am': [['Early Start Group<br>(AA)', 'Robinson Chapel<br>(UMC)<br>12707 Tonkel Rd.<br>Fort Wayne, IN.<br>46745', 'Google Maps'], ['Alcoholics Anonymous', 'Covenant United<br>Methodist Church<br>10001 Coldwater Rd.<br>Fort Wayne, IN.<br>46835', 'Google Maps']],
        '10am': [['Trails End Group<br>(AA)', 'Club Oasis<br>1118 Spring St.<br>Fort Wayne, IN.<br>46808', 'Google Maps'], ['Times Corner AFG(ALANON)', 'Anthony Wayne<br>1st Church of God<br>6012 South Bend Dr.<br>Fort Wayne, IN.<br>46804', 'Google Maps']],
        '12pm': [['Morning Group<br>(AA)', 'The 13th Step House<br>1317 Washington Blvd.<br>Fort Wayne, IN.<br>46802', 'Google Maps'], ['Steps Working Guide<br>(NA)', 'Saint John<br>Lutheran Church<br>729 W. Washington Blvd.<br>Fort Wayne, IN.<br>46802', 'Google Maps']],
        '7pm': [['Trouble Shooter Group<br>(AA)', 'Club Oasis<br>1118 Spring St.<br>Fort Wayne, IN.<br>46808', 'Google Maps'], ['Narcotics Anonymous', '1st Presbyterian Church<br>300 W. Wayne St.<br>Fort Wayne, IN.<br>46802<br>(basement)', 'Google Maps'], ['Narcotics Anonymous', 'Park Center Gym<br>909 E. State Blvd.<br>Fort Wayne, IN.<br>46805<br>(conference center, enter north side of building)', 'Google Maps'], ['Celebrate Recovery<br>(2 hours)', 'Avalon Missionary Church<br>1212 Lower<br>Huntington Rd.<br>Fort Wayne, IN.<br>46819<br>*Childcare Provided*', 'Google Maps']],
        '730pm': [['Big Book Discussion<br>(AA)', 'St. Jude Church<br>2130 Pemberton Dr.<br>Fort Wayne, IN.<br>46805<br>(Basement)', 'Google Maps'], ['Buckley Group<br>(AA)', 'St Patricks<br>Catholic Church<br>2120 S. Harrison St.<br>Fort Wayne, IN.<br>46802', 'Google Maps'], ['4th Step<br>Inventory Group<br>(ALANON)', 'St. Judes<br>Catholic Church<br>2130 Pemberton Dr.<br>Fort Wayne, IN.<br>46805<br>(basement)', 'Google Maps']],
        '8pm': [['Harbor Light Group<br>(AA)', 'The 13th Step House<br>1317 Washington Blvd.<br>Fort Wayne, IN.<br>46802', 'Google Maps']]
    },
    thursday: {
        '9am': [['Early Start Group<br>(AA)', 'Robinson Chapel<br>(UMC)<br>12707 Tonkel Rd.<br>Fort Wayne, IN.<br>46745', 'Google Maps'], ['Alcoholics Anonymous', 'Covenant United<br>Methodist Church<br>10001 Coldwater Rd.<br>Fort Wayne, IN.<br>46835', 'Google Maps']],
        '10am': [['Trails End Group<br>(AA)', 'Club Oasis<br>1118 Spring St.<br>Fort Wayne, IN.<br>46808', 'Google Maps']],
        '1030am': [['Womens Day by Day<br>(AA)', 'Unitarian Church<br>5310 Old Mill Rd.<br>Fort Wayne, IN.<br>46807', 'Google Maps']],
        '12pm': [['Key To Sobriety<br>(AA)', 'The 13th Step House<br>1317 Washington Blvd.<br>Fort Wayne, IN.<br>46802', 'Google Maps'], ['Narcotics Anonymous', 'Saint Johns<br>Lutheran Church<br>729 W. Washington Blvd.<br>Fort Wayne, IN.<br>46802<br>(in Broadway House next to playground @ Broadway)', 'Google Maps']],
        '4pm': [['Big Book Group<br>(AA)', '901 GE Union Hall<br>1427 Broadway St.<br>Fort Wayne, IN.<br>46802', 'Google Maps']],
        '5pm': [['Big Book Meeting<br>(AA)', 'St Marys<br>Catholic Church<br>1101 S. Lafayette St.<br>Fort Wayne, IN.<br>46802', 'Google Maps']],
        '6pm': [['Big Book Group<br>(AA)', 'Aldersgate Church<br>2417 Getz Rd.<br>Fort Wayne, IN.<br>46804', 'Google Maps'], ['Womens Say Yes<br>to Life Group<br>(AA)', 'Club Oasis<br>1118 Spring St.<br>Fort Wayne, IN.<br>46808', 'Google Maps']],
        '630pm': [['Narcotics Anonymous', 'Faith United<br>Methodist Church<br>207 E. Dewald St.<br>Fort Wayne, IN.<br>46803<br>(Dewald & Clinton)', 'Google Maps'], ['Basic Text<br>Womens Group<br>(NA)', 'Park Center Gym<br>909 E. State Blvd.<br>Fort Wayne, IN.<br>46805<br>(north side)', 'Google Maps'], ['Celebrate Recovery<br>(2 hours)', 'Salvation Army<br>427 W. Washington Blvd.<br>Fort Wayne, IN.<br>46802<br>(Men Only)', 'Google Maps']],
        '7pm': [['Back to the Basics<br>(AA)', 'Rose Home<br>2208 Wayne Trace<br>Fort Wayne, IN.<br>46803', 'Google Maps'], ['Design For<br>Living Group<br>(AA)', 'St. Henrys<br>Catholic Church<br>2929 E. Paulding Rd.<br>Fort Wayne, IN.<br>46816', 'Google Maps'], ['Just for Today<br>(NA)', 'Trinity United<br>Methodist Church<br>609 Putnam St.<br>Fort Wayne, IN.<br>46808<br>(Putnam & Short St)', 'Google Maps']],
        '730pm': [['Freedom at Last<br>(AA)', 'Robinson Chapel<br>(UMC)<br>12707 Tonkel Rd.<br>Fort Wayne, IN.<br>46745', 'Google Maps'], ['Waynedale Group<br>(AA)', 'Waynedale<br>Methodist Church<br>2501 Church St.<br>Fort Wayne, IN.<br>46809', 'Google Maps'], ['Change of<br>Heart Group<br>(AA)', 'Freedom House<br>806 Walnut St.<br>Fort Wayne, IN.<br>46802', 'Google Maps'], ['Canterbury Big Book<br>(AA)', 'The Roebuck Inn<br>5319 St. Joe Rd.<br>Fort Wayne, IN.<br>46835', 'Google Maps'], ['Fort Wayne YPAA<br>(Young People in AA)', 'Trinity Episcopal Church<br>611 West Berry St.<br>Fort Wayne, IN.<br>46802', 'Google Maps'], ['ALANON', 'Taylor Chapel Church<br>10145 Maysville Rd.<br>Fort Wayne, IN.<br>46835<br>(room A6)', 'Google Maps']],
        '8pm': [['Hope and Serenity<br>(ALANON)', 'St Vincent<br>Catholic Church<br>1502 E. Wallen Rd.<br>Fort Wayne, IN.<br>46825<br>(Spiritual Center room 4)', 'Google Maps']]
    },
    friday: {
        '6am': [['Upon Awakening Group<br>(AA)', '3rd Street<br>Church of God<br>427 3rd St.<br>Fort Wayne, IN.<br>46808', 'Google Maps']],
        '9am': [['Alcoholics Anonymous', 'Covenant United<br>Methodist Church<br>10001 Coldwater Rd.<br>Fort Wayne, IN.<br>46835', 'Google Maps'], ['Early Start Group<br>(AA)', 'Robinson Chapel<br>(UMC)<br>12707 Tonkel Rd.<br>Fort Wayne, IN.<br>46745', 'Google Maps']],
        '10am': [['Trails End Group<br>(AA)', 'Club Oasis<br>1118 Spring St.<br>Fort Wayne, IN.<br>46808', 'Google Maps'], ['Listen & Learn Group<br>(ALANON)', 'Calvary United<br>Methodist Church<br>6301 Winchester Rd.<br>Fort Wayne, IN.<br>46819', 'Google Maps']],
        '12pm': [['Just for Today<br>(NA)', 'Faith United<br>Methodist Church<br>207 E. Dewald St.<br>Fort Wayne, IN.<br>46803<br>(Dewald & Clinton)', 'Google Maps']],
        '1230pm': [['Luncheon Group<br>(AA)', 'The 13th Step<br>House Inc.<br>1317 W. Washington Blvd.<br>Fort Wayne, IN.<br>46802', 'Google Maps']],
        '1pm': [['No Left Turn Group<br>(AA)', 'Unity Church<br>3232 Crescent Ave.<br>Fort Wayne, IN.<br>46805', 'Google Maps']],
        '6pm': [['Sisters in Sobriety<br>(AA)', 'Salem United<br>Methodist Church<br>2401 Lake Ave.<br>Fort Wayne, IN.<br>46805', 'Google Maps']],
        '630pm': [['12 Step Traditions<br>(AA)', '3555 Spy Run Ave.<br>Fort Wayne, IN.<br>46805<br>(Main Lobby<br>ring room 222)', 'Google Maps'], ['Narcotics Anonymous', 'United Methodist Church<br>300 E. Wayne St.<br>Fort Wayne, IN.<br>46802', 'Google Maps'], ['Celebrate Recovery<br>(2 hours)<br>~Women Only~', 'Redemption House<br>2720 Fairfield Ave.<br>Fort Wayne, IN.<br>46807', 'Google Maps']],
        '7pm': [['Twilight Zone Group<br>(AA)', 'Club Oasis<br>1118 Spring St.<br>Fort Wayne, IN.<br>46808', 'Google Maps'], ['South Anthony<br>Big Book Group<br>(AA)', 'Come as you are<br>Baptist Church<br>7910 S. Anthony Blvd.<br>Fort Wayne, IN.<br>46816', 'Google Maps'], ['Lamp Post Group<br>(AA)', 'The Chapel<br>2505 W. Hamilton Rd.<br>Fort Wayne, IN.<br>46814', 'Google Maps'], ['Refuge Recovery', 'Sangha House<br>2332 Sand Point Rd.<br>Fort Wayne, IN.<br>46809', 'Google Maps']],
        '730pm': [['Stepping Stones Group<br>(AA)', 'Messiah Lutheran Church<br>7211 Stellhorn Rd.<br>Fort Wayne, IN.<br>46815<br>(door 7)', 'Google Maps'], ['Speak EZ Group<br>(AA)', 'Covenant United<br>Methodist Church<br>10001 Coldwater Rd.<br>Fort Wayne, IN.<br>46835', 'Google Maps'], ['New Haven Canal Group<br>(AA)', 'Taylor Chapel Group<br>10145 Maysville Rd.<br>Fort Wayne, IN.<br>46835', 'Google Maps'], ['Westside Group<br>(AA)', 'St Josephs<br>Catholic School<br>2213 Brooklyn Ave.<br>Fort Wayne, IN.<br>46802', 'Google Maps'], ['H.U.G.S Group<br>(ALANON)', 'Taylor Chapel Church<br>10145 Maysville Rd.<br>Fort Wayne, IN.<br>46835', 'Google Maps']],
        '8pm': [['Harvester Group<br>(AA)', 'The 13th Step<br>House Inc.<br>1317 W. Washington Blvd.<br>Fort Wayne, IN.<br>46802', 'Google Maps']],
        '830pm': [['Living Clean<br>(NA)', 'Saint Johns Lutheran Church<br>729 W. Washington Blvd.<br>Fort Wayne, IN.<br>46802<br>(in Broadway House next to playground @ Broadway)', 'Google Maps']]
    },
    saturday: {
        '10am': [['Keep it Simple Group<br>(AA)', 'Life House Church<br>16021 Old Lima Rd.<br>Fort Wayne, IN.<br>46748', 'Google Maps'], ['Just Stay Group<br>(AA)', 'Freedom House<br>806 Walnut St.<br>Fort Wayne, IN.<br>46802', 'Google Maps'], ['Old Timers Group<br>(AA)', 'Club Oasis<br>1118 Spring St.<br>Fort Wayne, IN.<br>46808', 'Google Maps']],
        '11am': [['Singleness of Purpose<br>(AA)', 'Messiah Lutheran Church<br>7211 Stellhorn Rd.<br>Fort Wayne, IN.<br>46815', 'Google Maps']],
        '12pm': [['Second Chance<br>(AA)', 'Club Oasis<br>1118 Spring St.<br>Fort Wayne, IN.<br>46808', 'Google Maps'], ['It Works<br>How & Why<br>(NA)', 'Faith Lutheran Church<br>1700 E. Petit Ave.<br>Fort Wayne, IN.<br>46806<br>(near winter st.)', 'Google Maps']],
        '1pm': [['Living Clean<br>(NA)', 'Stephouse<br>Education Center<br>1317 W. Washington Blvd.<br>Fort Wayne, IN.<br>46802', 'Google Maps']],
        '130pm': [['We Agnostics<br>(AA)', 'Club Oasis<br>1118 Spring St.<br>Fort Wayne, IN.<br>46808', 'Google Maps']],
        '4pm': [['Saturday in<br>the Park<br>(AA)', 'Shoaff Park<br>6401 St. Joe Rd.<br>Fort Wayne, IN.<br>46835<br>(Pavilion by Playground & Splashpad)', 'Google Maps']],
        '5pm': [['Big Book with<br>Joe & Charlie<br>(AA)', 'Club Oasis<br>1118 Spring St.<br>Fort Wayne, IN.<br>46808', 'Google Maps']],
        '530pm': [['The Firing Line<br>(AA)', 'St Joe<br>Community Church<br>2900 N. Anthony Blvd.<br>Fort Wayne, IN.<br>46805', 'Google Maps']],
        '7pm': [['Early Saturday<br>Night Group<br>(AA)', 'Wayne St.<br>Methodist Church<br>300 E. Wayne St.<br>Fort Wayne, IN.<br>46802', 'Google Maps'], ['Just For Today<br>(NA)', 'Crescent Avenue United<br>Methodist Church<br>1232 Crescent Ave.<br>Fort Wayne, IN.<br>46805', 'Google Maps']],
        '730pm': [['Under New<br>Management Group<br>(AA)', 'Robinson Chapel<br>(UMC)<br>12707 Tonkel Rd.<br>Fort Wayne, IN.<br>46745', 'Google Maps']],
        '8pm': [['The Unity Group<br>(AA)<br>(LGBT)', 'Wunderkammer Company<br>3402 Fairfield Ave.<br>Fort Wayne, IN.<br>46807<br>(upstairs)', 'Google Maps']]
    },
    sunday: {
        '730am': [['Earlybird Meeting<br>(AA)', 'St. Henrys<br>Catholic Church<br>2929 E. Paulding Rd.<br>Fort Wayne, IN.<br>46802', 'Google Maps']],
        '8am': [['Step House<br>Speaker Meeting<br>(AA)', 'The 13th Step Inc.<br>1317 W. Washington Blvd.<br>Fort Wayne, IN.<br>46802', 'Google Maps']],
        '930am': [['Daily Reflections<br>(AA)', 'Club Oasis<br>1118 Spring St.<br>Fort Wayne, IN.<bR>46808', 'Google Maps']],
        '1pm': [['Steps Study<br>(NA)', 'Saint Johns<br>Lutheran Church<br> 729 W. Washington Blvd.<br>Fort Wayne, IN.<br>46802', 'Google Maps']],
        '2pm': [['Grapenuts Grapevine<br>(AA)', 'Club Oasis<br>1118 Spring St.<bR>Fort Wayne, IN.<br>46808', 'Google Maps']],
        '4pm': [['Hope for Today<br>(ALANON)', 'Taylor Chapel United Methodist Church<br>10145 Maysville Rd.<br>Fort Wayne, IN.<br>46835', 'Google Maps'], ['How it Works<br>Orientation Meeting<br>(AA for newcomers 330-4pm)', 'Taylor Chapel United Methodist Church<br>10145 Maysville Rd.<br>Fort Wayne, IN.<br>46835', 'Google Maps']],
        '6pm': [['Living Clean<br>(NA)', 'VA Hospital<br>2121 Lake Ave.<br>Fort Wayne, IN.<br>46805', 'Google Maps'], ['Speaker Meeting<br>(NA)', 'United Methodist Church<br>300 E. Wayne St.<br>Fort Wayne, IN.<br>46802', 'Google Maps']],
        '630pm': [['Bloomingdale Group<br>(AA)', 'Trinity Methodist Church<br>609 Putnam St.<br>Fort Wayne, IN.<br>46808', 'Google Maps']],
        '7pm': [['Change of Heart<br>(AA)', 'Freedom House<br>806 Walnut St.<br>Fort Wayne, IN.<br>46802', 'Google Maps'], ['Northside Group<br>(AA)', 'Cresent Avenue United<br>Methodist Church<br>1232 Cresent Ave.<br>Fort Wayne, IN.<br>46805', 'Google Maps'], ['One Day at a Time<br>(AA)', 'Sacred Heart<br>Catholic Church<br>4643 Gaywood Dr.<br>Fort Wayne, IN.<br>46806', 'Google Maps'], ['Vision of Hope<br>(AA)', 'St. Vincent DePaul<br>Catholic Church<br>1502 E. Wallen Rd.<br>Fort Wayne, IN.<br>46825<br>(door 4 room G in spiritual center)', 'Google Maps']],
        '730pm': [['Just For Today<br>(NA)', 'Club Oasis<br>1118 Spring St.<br>Fort Wayne, IN.<br>46808', 'Google Maps']]
    }
};