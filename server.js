const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static('public'));

const sports = [
  {
    id: 1,
    name: "Football",
    image: {
      imgUrl1: "http://sports-rules.onrender.com/public/football1.jpg",
      imgUrl2: "http://sports-rules.onrender.com/public/football2.jpg",
      imgUrl3: "http://sports-rules.onrender.com/public/football3.jpg",
    },
  },
  {
    id: 2,
    name: "Basketball",
    image: {
      imgUrl1: "http://sports-rules.onrender.com/public/basketball1.jpg",
      imgUrl2: "http://sports-rules.onrender.com/public/basketball2.jpg",
      imgUrl3: "http://sports-rules.onrender.com/public/basketball3.jpg",
    },
  },
  {
    id: 3,
    name: "Baseball",
    image: {
      imgUrl1: "http://sports-rules.onrender.com/public/baseball1.jpg",
      imgUrl2: "http://sports-rules.onrender.com/public/baseball2.jpg",
      imgUrl3: "http://sports-rules.onrender.com/public/baseball3.jpg",
    },
  },
  {
    id: 4,
    name: "Tennis",
    image: {
      imgUrl1: "http://sports-rules.onrender.com/public/tennis1.jpg",
      imgUrl2: "http://sports-rules.onrender.com/public/tennis2.jpg",
      imgUrl3: "http://sports-rules.onrender.com/public/tennis3.jpg",
    },
  },
  {
    id: 5,
    name: "Badminton",
    image: {
      imgUrl1: "http://sports-rules.onrender.com/public/badminton1.jpg",
      imgUrl2: "http://sports-rules.onrender.com/public/badminton2.jpg",
      imgUrl3: "http://sports-rules.onrender.com/public/badminton3.jpg",
    },
  },
  {
    id: 6,
    name: "Kabaddi",
    image: {
      imgUrl1: "http://sports-rules.onrender.com/public/kabaddi1.jpg",
      imgUrl2: "http://sports-rules.onrender.com/public/kabaddi2.jpg",
      imgUrl3: "http://sports-rules.onrender.com/public/kabaddi3.jpg",
    },
  },
  {
    id: 7,
    name: "Volleyball",
    image: {
      imgUrl1: "http://sports-rules.onrender.com/public/volleyball1.jpg",
      imgUrl2: "http://sports-rules.onrender.com/public/volleyball2.jpg",
      imgUrl3: "http://sports-rules.onrender.com/public/volleyball3.jpg",
    },
  },
  {
    id: 8,
    name: "Athletics",
    image: {
      imgUrl1: "http://sports-rules.onrender.com/public/athletics1.jpg",
      imgUrl2: "http://sports-rules.onrender.com/public/athletics2.jpg",
      imgUrl3: "http://sports-rules.onrender.com/public/athletics3.jpg",
    },
  },
  {
    id: 9,
    name: "Golf",
    image: {
      imgUrl1: "http://sports-rules.onrender.com/public/golf1.jpg",
      imgUrl2: "http://sports-rules.onrender.com/public/golf2.jpg",
      imgUrl3: "http://sports-rules.onrender.com/public/golf3.jpg",
    },
  },
  {
    id: 10,
    name: "Swimming",
    image: {
      imgUrl1: "http://sports-rules.onrender.com/public/swimming1.jpg",
      imgUrl2: "http://sports-rules.onrender.com/public/swimming2.jpg",
      imgUrl3: "http://sports-rules.onrender.com/public/swimming3.jpg",
    },
  },
  {
    id: 11,
    name: "Tabletennis",
    image: {
      imgUrl1: "http://sports-rules.onrender.com/public/tabletennis1.jpg",
      imgUrl2: "http://sports-rules.onrender.com/public/tabletennis2.jpg",
      imgUrl3: "http://sports-rules.onrender.com/public/tabletennis3.jpg",
    },
  },
  {
    id: 12,
    name: "Cricket",
    image: {
      imgUrl1: "http://sports-rules.onrender.com/public/cricket1.jpg",
      imgUrl2: "http://sports-rules.onrender.com/public/cricket2.jpg",
      imgUrl3: "http://sports-rules.onrender.com/public/cricket3.jpg",
    },
  },
  {
    id: 13,
    name: "Rugby",
    image: {
      imgUrl1: "http://sports-rules.onrender.com/public/rugby1.jpg",
      imgUrl2: "http://sports-rules.onrender.com/public/rugby2.jpg",
      imgUrl3: "http://sports-rules.onrender.com/public/rugby3.jpg",
    },
  },
  {
    id: 14,
    name: "Boxing",
    image: {
      imgUrl1: "http://sports-rules.onrender.com/public/boxing1.jpg",
      imgUrl2: "http://sports-rules.onrender.com/public/boxing2.jpg",
      imgUrl3: "http://sports-rules.onrender.com/public/boxing3.jpg",
    },
  },
  {
    id: 15,
    name: "Icehockey",
    image: {
      imgUrl1: "http://sports-rules.onrender.com/public/icehockey1.jpg",
      imgUrl2: "http://sports-rules.onrender.com/public/icehockey2.jpg",
      imgUrl3: "http://sports-rules.onrender.com/public/icehockey3.jpg",
    },
  },
  {
    id: 16,
    name: "Cycling",
    image: {
      imgUrl1: "http://sports-rules.onrender.com/public/cycling1.jpg",
      imgUrl2: "http://sports-rules.onrender.com/public/cycling2.jpg",
      imgUrl3: "http://sports-rules.onrender.com/public/cycling3.jpg",
    },
  },
  {
    id: 17,
    name: "Wrestling",
    image: {
      imgUrl1: "http://sports-rules.onrender.com/public/wrestling1.jpg",
      imgUrl2: "http://sports-rules.onrender.com/public/wrestling2.jpg",
      imgUrl3: "http://sports-rules.onrender.com/public/wrestling3.jpg",
    },
  },
  {
    id: 18,
    name: "Surfing",
    image: {
      imgUrl1: "http://sports-rules.onrender.com/public/surfing1.jpg",
      imgUrl2: "http://sports-rules.onrender.com/public/surfing2.jpg",
      imgUrl3: "http://sports-rules.onrender.com/public/surfing3.jpg",
    },
  },
  {
    id: 19,
    name: "Gymnastics",
    image: {
      imgUrl1: "http://sports-rules.onrender.com/public/gymnastics1.jpg",
      imgUrl2: "http://sports-rules.onrender.com/public/gymnastics2.jpg",
      imgUrl3: "http://sports-rules.onrender.com/public/gymnastics3.jpg",
    },
  },
  {
    id: 20,
    name: "Skiing",
    image: {
      imgUrl1: "http://sports-rules.onrender.com/public/skiing1.jpg",
      imgUrl2: "http://sports-rules.onrender.com/public/skiing2.jpg",
      imgUrl3: "http://sports-rules.onrender.com/public/skiing3.jpg",
    },
  },
  {
    id: 21,
    name: "Archery",
    image: {
      imgUrl1: "http://sports-rules.onrender.com/public/archery1.jpg",
      imgUrl2: "http://sports-rules.onrender.com/public/archery2.jpg",
      imgUrl3: "http://sports-rules.onrender.com/public/archery3.jpg",
    },
  },
  {
    id: 22,
    name: "Martial Arts",
    image: {
      imgUrl1: "http://sports-rules.onrender.com/public/martialarts1.jpg",
      imgUrl2: "http://sports-rules.onrender.com/public/martialarts2.jpg",
      imgUrl3: "http://sports-rules.onrender.com/public/martialarts3.jpg",
    },
  },
];

const sportsData = {
  1: {
    name: "Football",
    teamCount: "Two teams of 11 players each",
    fieldSize: "100-130 yards long and 50-100 yards wide",
    restrictions: "Offside, handball, and certain fouls",
    explanation:
      "Football is a team sport played with a spherical ball on a rectangular field. The objective is to score goals by advancing the ball into the opposing team's goal.",
    facts: [
      "Football is the most popular sport in the world, with billions of fans.",
      "The game is typically played on grass, but artificial turf is also used.",
      "It is believed to have originated in England in the mid-19th century.",
      "The FIFA World Cup is the most prestigious international football tournament, held every four years.",
      "The first recorded football match took place in 1863 between two teams from London, following the establishment of the Football Association.",
      "Football is known by different names in various regions, such as soccer in the United States and Canada.",
      "The sport is played professionally in leagues around the world, including the English Premier League, La Liga, Bundesliga, Serie A, and more.",
      "Famous football players like Pelé, Diego Maradona, Cristiano Ronaldo, and Lionel Messi are considered legends of the game.",
      "The Laws of the Game, established by the International Football Association Board (IFAB), govern the rules of football.",
      "Football has a significant cultural impact and brings people together through the shared passion for the sport.",
    ],
    invented:
      "Football's exact origins are unclear, but various forms of the game existed in ancient civilizations, such as Ancient Greece, Ancient Rome, and China.",
    properties: [
      {
        name: "Referee",
        description:
          "An official who enforces the rules and regulations of the game and makes decisions on fouls and other infractions.",
      },
      {
        name: "Linesmen",
        description:
          "Officials positioned along the sidelines who assist the referee in making decisions regarding offside and other technical aspects of the game.",
      },
      {
        name: "Goalkeeper",
        description:
          "A player designated to defend the goal and prevent the opposing team from scoring.",
      },
      {
        name: "Corner Flag",
        description:
          "Flags placed at each corner of the field to mark the boundaries of the playing area.",
      },
      {
        name: "Substitutes",
        description:
          "Players who are not part of the starting lineup but can be substituted into the game to replace an existing player.",
      },
      {
        name: "Cleats",
        description:
          "Specialized footwear worn by players to provide traction and grip on the playing surface.",
      },
      {
        name: "Throw-In",
        description:
          "A method of restarting play when the ball goes out of bounds along the sidelines, with the ball thrown in from the touchline.",
      },
      {
        name: "Tactics",
        description:
          "Strategies and formations employed by teams to gain a competitive advantage over the opposition.",
      },
      {
        name: "FIFA",
        description:
          "The Fédération Internationale de Football Association, the international governing body for football.",
      },
      {
        name: "Football Boots",
        description:
          "Specialized shoes designed for football players to enhance performance and provide protection.",
      },
      {
        name: "Penalty Kick",
        description:
          "A direct free kick taken from the penalty spot, awarded for certain fouls committed by the defending team inside their own penalty area.",
      },
      {
        name: "Yellow Card",
        description:
          "A caution issued by the referee to a player as a warning for misconduct. Two yellow cards result in a red card and player expulsion.",
      },
      {
        name: "Red Card",
        description:
          "An immediate expulsion issued by the referee to a player for serious misconduct or accumulating two yellow cards in a match.",
      },
      {
        name: "Free Kick",
        description:
          "A set-piece restart awarded to a team following a foul or infringement by the opposing team.",
      },
      {
        name: "Offside",
        description:
          "A rule that penalizes a player if they are nearer to the opponent's goal line than both the ball and the second-to-last defender when the ball is played to them.",
      },
      {
        name: "Goal Line Technology",
        description:
          "A technological system used to determine if the ball has completely crossed the goal line for a valid goal or not.",
      },
      {
        name: "Extra Time",
        description:
          "Additional time played at the end of a match to determine the winner if the score is tied after regular time.",
      },
      {
        name: "Golden Goal",
        description:
          "A rule that was previously used in football, where the first team to score during extra time would be declared the winner and the match would end.",
      },
      {
        name: "VAR (Video Assistant Referee)",
        description:
          "A technology used to assist referees in making correct decisions by reviewing video footage of incidents during a match.",
      },
      {
        name: "Football Pitch",
        description:
          "The playing surface for football matches, which is usually made of grass or artificial turf.",
      },
      {
        name: "Headers",
        description:
          "A technique of striking the ball with the head, commonly used to pass, shoot, or clear the ball in football.",
      },
      {
        name: "Captain",
        description:
          "The player designated as the team leader, responsible for making decisions and representing the team during discussions with the referee.",
      },
      {
        name: "Injury Time",
        description:
          "Additional time added to the end of each half to compensate for time lost due to injuries and stoppages.",
      },
    ],
    originCountry: "England",
    governingBody: "FIFA",
    leagues: [
      "English Premier League",
      "La Liga",
      "Bundesliga",
      "Serie A",
      "Ligue 1",
    ],
    mostSuccessfulClub: "Real Madrid",
    mostGoalsRecord: "Pele (1281 goals)",
    notableTournaments: [
      "FIFA World Cup",
      "UEFA Champions League",
      "Copa America",
    ],
    ballType: "Spherical ball with a circumference of 68-70 cm",
    duration:
      "Two halves of 45 minutes each, with additional time for stoppages",
    bookingSystem: "Yellow card for caution, red card for expulsion",
    competitionFormat: "League system with promotion and relegation",
    offsideRule:
      "Penalizes players who are in an offside position when the ball is played to them",
    goalDimensions:
      "8 feet (2.44 meters) in height and 8 yards (7.32 meters) in width",
    matchOfficials:
      "Referee, linesmen, fourth official, and video assistant referee (VAR)",
    tournamentFormat: "Group stage followed by knockout rounds",
    transferWindow:
      "Designated period during which clubs can buy and sell players",
    matchBallSupplier:
      "Various brands like Nike, Adidas, Puma, and Mitre supply official match balls",
    topScorerAward:
      "Award given to the player who scores the most goals in a competition",
    fairPlayAward: "Award given to the team with the best disciplinary record",
    kitSponsorship:
      "Agreements between clubs and companies to display their logos on team jerseys",
    clubRevenueSources: [
      "Ticket sales",
      "Broadcasting rights",
      "Sponsorship deals",
      "Merchandising",
    ],
  },
  2: {
    name: "Basketball",
    teamCount: "Two teams of 5 players each",
    fieldSize: "94 feet long and 50 feet wide",
    restrictions: "Traveling, double dribble, and certain fouls",
    explanation:
      "Basketball is a team sport played on a rectangular court. The objective is to score points by shooting the ball through the opponent's hoop while preventing the opposing team from scoring.",
    facts: [
      "Basketball was invented by Dr. James Naismith in 1891.",
      "The game is typically played indoors on a hardwood court, but it can also be played outdoors on concrete or asphalt surfaces.",
      "Two teams of five players each compete to score points by shooting the ball through the opponent's hoop.",
      "The team with the highest score at the end of the game wins.",
      "Basketball is known for its fast-paced and dynamic gameplay, involving dribbling, passing, shooting, and defensive strategies.",
      "The National Basketball Association (NBA) is the most popular professional basketball league globally.",
      "The NBA features some of the greatest basketball players of all time, such as Michael Jordan, LeBron James, Kobe Bryant, and Magic Johnson.",
      "Basketball is played at various levels, including high school, college, and international competitions like the Olympic Games.",
      "The sport requires agility, coordination, and teamwork, with players specialized in different positions, such as guards, forwards, and centers.",
      "Basketball games often involve exciting plays like dunks, three-point shots, and fast breaks.",
    ],
    invented:
      "Basketball was invented by Dr. James Naismith, a physical education instructor, in December 1891 in Springfield, Massachusetts, United States.",
    properties: [
      {
        name: "Backboard",
        description:
          "A rectangular board mounted vertically behind the hoop to support the rim and provide a surface for players to bank shots off.",
      },
      {
        name: "Hoop",
        description:
          "A circular metal rim with a net attached, mounted at a height of 10 feet above the ground.",
      },
      {
        name: "Court",
        description:
          "The playing surface for basketball, usually made of hardwood and marked with various lines and markings, including the three-point line and free-throw line.",
      },
      {
        name: "Three-Point Line",
        description:
          "A line located 23 feet 9 inches from the center of the hoop in the NBA, from which successful shots earn three points.",
      },
      {
        name: "Free-Throw Line",
        description:
          "A line located 15 feet from the backboard, from which players shoot free throws.",
      },
      {
        name: "Shot Clock",
        description:
          "A timer that limits the time a team has to attempt a shot, typically 24 seconds in the NBA.",
      },
      {
        name: "Dribbling",
        description:
          "The act of bouncing the ball off the floor while moving or changing directions to maintain possession.",
      },
      {
        name: "Passing",
        description:
          "The act of throwing the ball to a teammate to initiate an offensive play.",
      },
      {
        name: "Jump Ball",
        description:
          "A method of starting play at the beginning of the game or after certain stoppages, where the referee tosses the ball into the air, and players from opposing teams try to gain possession.",
      },
      {
        name: "Jump Shot",
        description:
          "A shooting technique where a player jumps in the air and releases the ball at the peak of their jump.",
      },
      {
        name: "Layup",
        description:
          "A close-range shot where a player drives towards the hoop, usually using one hand, and releases the ball off the backboard.",
      },
      {
        name: "Block",
        description:
          "The defensive action of deflecting or stopping a shot attempt by an opposing player.",
      },
      {
        name: "Rebound",
        description:
          "The act of gaining possession of the ball after a missed shot or turnover.",
      },
      {
        name: "Foul",
        description:
          "An infraction of the rules, resulting in a penalty for the opposing team, such as free throws or possession of the ball.",
      },
      {
        name: "Technical Foul",
        description:
          "A foul committed by a player or coach for unsportsmanlike conduct, resulting in a free throw or possession for the opposing team.",
      },
      {
        name: "Double Dribble",
        description:
          "A violation that occurs when a player dribbles the ball with both hands simultaneously or stops dribbling and then dribbles again.",
      },
      {
        name: "Traveling",
        description:
          "A violation that occurs when a player moves one or both feet illegally without dribbling the ball.",
      },
      {
        name: "Timeout",
        description:
          "A break in play called by a team to strategize or rest players, with a specified duration.",
      },
      {
        name: "Fast Break",
        description:
          "A quick offensive play where the team with possession of the ball advances quickly towards the opponent's basket to score before the defense can set up.",
      },
      {
        name: "Zone Defense",
        description:
          "A defensive strategy where players guard specific areas of the court rather than individual opponents.",
      },
    ],
    image: {
      imgUrl1: "public\basketball1.jpg",
      imgUrl2: "public\basketball2.jpg",
      imgUrl3: "public\basketball3.jpg",
    },
  },
  3: {
    name: "Baseball",
    teamCount: "Two teams of 9 players each",
    fieldSize:
      "90-120 meters between the bases, 120-150 meters to the outfield fence",
    restrictions: "No leading off or stealing before the ball is pitched",
    explanation:
      "Baseball is a bat-and-ball sport played between two teams. The offensive team tries to score runs by hitting the ball and running around a series of bases, while the defensive team tries to prevent runs by getting hitters out.",
    facts: [
      'Baseball is often referred to as "America\'s pastime" and has a rich history in the United States.',
      "The modern game of baseball originated in the mid-19th century and has since spread to many countries around the world.",
      "The professional baseball league in the United States is Major League Baseball (MLB), consisting of teams from both the American League and the National League.",
      "Baseball is played on a grass field with a diamond-shaped infield and an outfield.",
      "The objective of the offensive team is to score runs by hitting the ball and advancing around the bases in a counter-clockwise direction.",
      "The defensive team aims to get hitters out by fielding the ball and making accurate throws to retire the runners.",
      "Baseball games are divided into innings, and each team has a turn to bat and a turn to field in each inning.",
      "The game features various positions, including pitcher, catcher, infielders, and outfielders, each with specific responsibilities.",
      "Baseball has a unique set of rules, including the strike zone, foul territory, and the use of signs and signals between teammates.",
      "The World Series is the championship series of Major League Baseball, played between the champions of the American League and the National League.",
    ],
    invented:
      "The exact origins of baseball are debated, but it evolved from earlier bat-and-ball games played in England.",
    properties: [
      {
        name: "Pitcher",
        description:
          "The player who throws the ball from the pitcher's mound toward the batter.",
      },
      {
        name: "Catcher",
        description:
          "The player who crouches behind home plate and receives pitches from the pitcher.",
      },
      {
        name: "First Baseman",
        description:
          "The defensive player stationed near first base, responsible for fielding balls hit in that area and covering the base.",
      },
      {
        name: "Second Baseman",
        description:
          "The defensive player stationed near second base, responsible for fielding balls hit in that area and covering the base.",
      },
      {
        name: "Third Baseman",
        description:
          "The defensive player stationed near third base, responsible for fielding balls hit in that area and covering the base.",
      },
      {
        name: "Shortstop",
        description:
          "The defensive player positioned between second and third base, responsible for fielding balls hit in the infield.",
      },
      {
        name: "Outfielder",
        description:
          "The defensive players positioned in the outfield, responsible for fielding balls hit into the outfield area.",
      },
      {
        name: "Home Plate",
        description:
          "The base where the batter stands and scores a run by touching it after completing a circuit around the bases.",
      },
      {
        name: "Batter's Box",
        description:
          "The marked area where the batter stands to face the pitcher.",
      },
      {
        name: "Basepaths",
        description:
          "The paths that runners must follow to advance from one base to another and eventually score a run.",
      },
      {
        name: "Foul Line",
        description:
          "The boundary line that extends from home plate to the outfield fence, marking fair territory.",
      },
      {
        name: "Home Run",
        description:
          "A hit that allows the batter to circle all the bases and score a run, typically by hitting the ball over the outfield fence.",
      },
      {
        name: "Strikeout",
        description:
          "When the batter swings at and misses three pitches, or when the pitcher throws three strikes within the strike zone.",
      },
      {
        name: "Double Play",
        description:
          "A defensive play resulting in two outs, usually initiated by the fielder recording an out and throwing to another base to retire another runner.",
      },
      {
        name: "Triple Play",
        description:
          "A defensive play resulting in three outs, usually initiated by the fielder recording an out and executing two additional outs in quick succession.",
      },
      {
        name: "Baseball Glove",
        description:
          "A leather glove worn by players to assist in catching and fielding the ball.",
      },
      {
        name: "Bat",
        description:
          "A wooden or metal club used by the batter to hit the ball.",
      },
      {
        name: "Baseball Cap",
        description:
          "A hat worn by players to protect their eyes from the sun and signify their team affiliation.",
      },
      {
        name: "Bullpen",
        description:
          "The area where relief pitchers warm up before entering the game.",
      },
      {
        name: "Infield Fly Rule",
        description:
          "A rule that automatically declares the batter out if there are runners on first and second or first, second, and third bases with less than two outs and a fly ball is hit that can be caught by an infielder.",
      },
    ],
    originCountry: "United States",
    governingBody: "World Baseball Softball Confederation (WBSC)",
    leagues: [
      "Major League Baseball (MLB)",
      "Japanese Professional Baseball League",
      "Korean Baseball Organization (KBO)",
      "Cuban National Series",
      "Venezuelan Professional Baseball League",
    ],
    mostSuccessfulClub: "New York Yankees",
    mostHomeRunsRecord: "Barry Bonds (762 home runs)",
    notableTournaments: [
      "World Series",
      "World Baseball Classic",
      "Olympic Baseball",
    ],
    ballType:
      "Hard ball with a cork and rubber core, wrapped in yarn and covered in leather",
    duration: "Nine innings, with no set time limit",
    scoringSystem:
      "Runs are scored when a batter advances around the bases and touches home plate",
    competitionFormat: "Regular season followed by playoffs",
    foulBallRule:
      "A ball that is hit outside the foul lines is considered a foul ball and results in a strike against the batter",
    fieldingPositions:
      "Pitcher, catcher, first baseman, second baseman, third baseman, shortstop, left fielder, center fielder, right fielder",
    pitchingStyles: [
      "Fastball",
      "Curveball",
      "Slider",
      "Changeup",
      "Knuckleball",
    ],
    battingTechniques: [
      "Swinging",
      "Bunting",
      "Hitting for power",
      "Hitting for contact",
    ],
    stolenBaseRule:
      "Runners can attempt to steal bases by running while the pitcher is delivering the ball to the plate",
    doubleheader: "Two games played between the same two teams on the same day",
    perfectGame:
      "A game in which a pitcher or pitchers retire every batter without allowing any baserunners",
    noHitter:
      "A game in which a pitcher or pitchers prevent the opposing team from recording any hits",
    designatedHitter: "A player who bats in place of the pitcher in the lineup",
    intentionalWalk:
      "When the defensive team deliberately allows the batter to take first base by throwing four pitches outside the strike zone",
    kitSponsorship:
      "Agreements between teams and companies to display their logos on team uniforms and equipment",
    revenueSources: [
      "Ticket sales",
      "Broadcasting rights",
      "Sponsorship deals",
      "Merchandising",
    ],
  },
  4: {
    name: "Tennis",
    players: "Singles (1 player per side) or Doubles (2 players per side)",
    courtDimensions:
      "23.77 meters long and 8.23 meters wide for singles, 23.77 meters long and 10.97 meters wide for doubles",
    netHeight: "0.914 meters at the center",
    equipment: "Racket and tennis ball",
    objective:
      "Hit the ball over the net and into the opponent's court, aiming to score points",
    facts: [
      "Tennis is a popular racket sport played worldwide.",
      "The game has its roots in 12th-century France.",
      "Tennis can be played on different surfaces, including grass, clay, and hard court.",
      "The sport requires physical fitness, agility, and strategic thinking.",
      "Tennis is played at recreational, amateur, and professional levels.",
      "Grand Slam tournaments, such as Wimbledon and the US Open, attract global attention.",
      "The International Tennis Federation (ITF) is the governing body of tennis.",
      "Players use various shot techniques, including forehand, backhand, serve, and volley.",
      "Tennis offers health benefits, such as improved cardiovascular fitness and hand-eye coordination.",
      "The sport has produced legendary players like Roger Federer, Serena Williams, and Rafael Nadal.",
    ],
    governingBody: "International Tennis Federation (ITF)",
    majorTournaments: [
      "Australian Open",
      "French Open",
      "Wimbledon",
      "US Open",
    ],
    scoringSystem:
      "Best of three or five sets, with each set played to six or seven games",
    servingRules:
      "The server must alternate service diagonally across the net, starting from the right side of the court",
    faultRules:
      "Various rules govern faults, including hitting the ball out of bounds or into the net",
    strategies: [
      "Baseline game",
      "Serve and volley",
      "Aggressive play",
      "Defensive play",
    ],
    professionalPlayers: [
      "Roger Federer",
      "Serena Williams",
      "Novak Djokovic",
      "Naomi Osaka",
    ],
    famousVenues: [
      "Wimbledon (London, United Kingdom)",
      "Roland Garros (Paris, France)",
      "Flushing Meadows (New York, United States)",
    ],
    ballTypes: ["Hardcourt balls", "Clay court balls", "Grass court balls"],
    attire:
      "Players typically wear lightweight, breathable clothing and tennis shoes suitable for different court surfaces.",
    racketTypes: [
      "Graphite rackets",
      "Composite rackets",
      "Wooden rackets (less common)",
    ],
    terms: ["Deuce", "Love", "Advantage", "Break point", "Ace"],
  },
  5: {
    name: "Badminton",
    players: "Singles (1 player per side) or Doubles (2 players per side)",
    courtDimensions:
      "13.4 meters long and 5.18 meters wide for singles, 13.4 meters long and 6.1 meters wide for doubles",
    netHeight: "1.55 meters at the edges and 1.524 meters at the center",
    equipment: "Racket and shuttlecock",
    objective:
      "Hit the shuttlecock over the net and into the opponent's half of the court, aiming to score points",
    facts: [
      "Badminton is one of the most popular racket sports in the world.",
      "The game originated in British India in the 19th century.",
      "The shuttlecock, also known as a birdie, is hit with a racket across the net.",
      "Badminton requires agility, speed, and precision.",
      "The sport is played at the recreational and competitive levels.",
      "Badminton is an Olympic sport, with events for singles and doubles.",
      "China has been dominant in international badminton competitions.",
      "The Badminton World Federation (BWF) governs the sport globally.",
      "Badminton can be played indoors or outdoors, with different variations of the game.",
      "The sport offers health benefits such as improved cardiovascular fitness and hand-eye coordination.",
    ],
    governingBody: "Badminton World Federation (BWF)",
    majorTournaments: [
      "Olympic Games",
      "BWF World Championships",
      "Thomas Cup (Men's Team Event)",
      "Uber Cup (Women's Team Event)",
    ],
    scoringSystem: "Best of three games, with each game played to 21 points",
    servingRules:
      "The server must hit the shuttlecock into the diagonally opposite service court",
    faultRules:
      "Various rules govern faults, including hitting the shuttlecock out of bounds or into the net",
    strategies: [
      "Attacking shots",
      "Defensive shots",
      "Drop shots",
      "Smashes",
      "Clears",
    ],
    professionalPlayers: [
      "Kento Momota",
      "Tai Tzu-ying",
      "Viktor Axelsen",
      "Chen Long",
    ],
    famousVenues: [
      "St. Jakobshalle (Basel, Switzerland)",
      "Istora Senayan (Jakarta, Indonesia)",
      "Gachibowli Indoor Stadium (Hyderabad, India)",
    ],
    shuttlecockTypes: ["Feather shuttlecocks", "Nylon shuttlecocks"],
    attire:
      "Players typically wear lightweight, breathable clothing and non-marking court shoes.",
    racketTypes: [
      "Carbon fiber rackets",
      "Graphite rackets",
      "Aluminum rackets",
    ],
    terms: ["Smash", "Clear", "Drop shot", "Net shot", "Drive"],
  },
  6: {
    name: "Kabaddi",
    players: "Two teams of 7 players each",
    playingArea:
      "12.5 meters x 10 meters for men's kabaddi, 11 meters x 8 meters for women's kabaddi",
    objective:
      "In kabaddi, one player from the attacking team (raider) tries to tag as many defenders from the opposing team as possible and return to their half of the court without being caught or running out of breath.",
    facts: [
      "Kabaddi is a popular contact team sport originating from ancient India.",
      "The sport requires both strength and agility.",
      "Kabaddi is played on both national and international levels, with various tournaments and leagues held worldwide.",
      "It is recognized as an official sport in Asian Games and South Asian Games.",
      "The Pro Kabaddi League (PKL) is a professional kabaddi league in India featuring teams from different states.",
      "The game involves intense physical and mental coordination.",
      "Kabaddi promotes teamwork, strategy, and quick decision-making.",
      "The International Kabaddi Federation (IKF) is the governing body for the sport at the international level.",
      "Kabaddi has different variations and rule sets in different regions.",
      "The sport has gained popularity globally, with teams and players from various countries participating in international competitions.",
    ],
    governingBody: "International Kabaddi Federation (IKF)",
    majorTournaments: [
      "Kabaddi World Cup",
      "Pro Kabaddi League",
      "Asian Kabaddi Championship",
    ],
    scoringSystem:
      "Points are awarded for successful raids and successful defenses.",
    techniques: [
      "Toe touch",
      "Running hand touch",
      "Kick",
      "Block",
      "Dubki (body swerve)",
    ],
    professionalPlayers: [
      "Pardeep Narwal",
      "Rahul Chaudhari",
      "Deepak Niwas Hooda",
      "Pawan Kumar Sehrawat",
    ],
    famousVenues: [
      "Sawai Mansingh Stadium (Jaipur, India)",
      "Gachibowli Indoor Stadium (Hyderabad, India)",
      "Patliputra Sports Complex (Patna, India)",
    ],
    attire:
      "Players typically wear a uniform consisting of a jersey, shorts, and athletic shoes suitable for indoor or outdoor play.",
    terms: ["Raider", "Defender", "All-Out", "Super Raid", "Bonus Point"],
  },
  7: {
    name: "Volleyball",
    teamCount: "Two teams of 6 players each",
    courtDimensions: "9 meters x 18 meters",
    netHeight: "2.43 meters for men, 2.24 meters for women",
    objective:
      "The objective of volleyball is to score points by hitting the ball over the net and into the opponent's court while preventing the opponent from doing the same.",
    facts: [
      "Volleyball was invented by William G. Morgan in 1895 in Holyoke, Massachusetts, United States.",
      "It is a popular team sport played worldwide.",
      "Volleyball requires coordination, agility, and teamwork.",
      "The Fédération Internationale de Volleyball (FIVB) is the international governing body for the sport.",
      "Volleyball is played at various levels, including recreational, school, college, and professional leagues.",
      "Beach volleyball is a popular variation of the sport played on sand courts.",
      "The sport has its own set of rules and techniques, including serving, setting, spiking, and blocking.",
      "Volleyball is known for its fast-paced and high-flying action.",
      "The Olympic Games feature volleyball as one of the main sports.",
      "The sport promotes communication, sportsmanship, and physical fitness.",
    ],
    equipment: ["Volleyball", "Net", "Knee pads", "Uniform"],
    techniques: ["Serve", "Pass", "Set", "Attack", "Block", "Dig"],
    famousPlayers: [
      "Karch Kiraly",
      "Misty May-Treanor",
      "Kerri Walsh Jennings",
      "Giba",
    ],
    majorTournaments: [
      "Olympic Games",
      "FIVB World Championships",
      "FIVB Volleyball Nations League",
    ],
    governingBody: "Fédération Internationale de Volleyball (FIVB)",
    courtFeatures: ["Antennas", "Boundary lines", "Attack lines"],
  },
  8: {
    name: "Athletics",
    events: [
      "Sprints",
      "Long-distance running",
      "Hurdles",
      "Jumping",
      "Throwing",
    ],
    venue: "Track and field",
    objective:
      "Athletics encompasses a wide range of track and field events where athletes compete to achieve the best performance in terms of speed, distance, or height.",
    facts: [
      "Athletics is a collection of sporting events that involve running, jumping, and throwing.",
      "It is one of the oldest forms of organized sports.",
      "Athletics events are included in the Olympic Games and other major international competitions.",
      "The sport requires athletes to possess various physical abilities, including speed, endurance, strength, and agility.",
      "World records are set and broken in athletics events.",
      "Athletics promotes healthy competition, determination, and discipline.",
      "The International Association of Athletics Federations (IAAF) is the governing body for the sport.",
      "Athletics events are held on specially designed tracks and fields.",
      "Athletics is a popular sport for both recreational and professional athletes.",
      "The sport provides opportunities for athletes to showcase their skills and represent their countries.",
    ],
    equipment: [
      "Running shoes",
      "Starting blocks",
      "Throwing implements",
      "Jumping aids",
    ],
    techniques: [
      "Sprinting form",
      "Hurdling technique",
      "Long jump takeoff",
      "Shot put throwing",
      "Javelin throwing",
    ],
    famousAthletes: [
      "Usain Bolt",
      "Carl Lewis",
      "Haile Gebrselassie",
      "Allyson Felix",
    ],
    majorTournaments: [
      "Olympic Games",
      "World Athletics Championships",
      "Diamond League",
    ],
    governingBody: "World Athletics",
    trackFeatures: ["Starting line", "Finish line", "Lanes", "Curved sections"],
  },
  9: {
    name: "Golf",
    players: "Individual or teams of two or four players",
    courseSize: "Varies, typically 18 holes",
    objective:
      "In golf, players use a club to hit a small ball into a series of holes on a course in as few strokes as possible.",
    facts: [
      "Golf originated in Scotland in the 15th century and is now played worldwide.",
      "It is a precision sport that requires skill, strategy, and focus.",
      "Golf courses feature various obstacles, including bunkers, water hazards, and rough areas.",
      "The sport has professional tours, such as the PGA Tour and LPGA Tour.",
      "Golf is known for its etiquette and sportsmanship.",
      "The Royal and Ancient Golf Club of St Andrews in Scotland is one of the oldest and most prestigious golf clubs.",
      "The Masters Tournament is one of the most prestigious and highly anticipated golf events.",
      "Golf promotes outdoor recreation and physical activity.",
      "The sport has different formats, including stroke play and match play.",
      "Golfers use a variety of clubs with different lofts and distances.",
    ],
    equipment: ["Golf clubs", "Golf ball", "Tee", "Golf bag"],
    techniques: ["Grip", "Swing", "Putting", "Chipping", "Bunker shots"],
    famousGolfers: [
      "Tiger Woods",
      "Jack Nicklaus",
      "Arnold Palmer",
      "Annika Sorenstam",
    ],
    majorTournaments: [
      "The Masters",
      "U.S. Open",
      "The Open Championship",
      "PGA Championship",
    ],
    governingBody: "International Golf Federation (IGF)",
    courseFeatures: ["Fairway", "Green", "Bunker", "Water hazard", "Rough"],
  },
  10: {
    name: "Swimming",
    teamCount: "Individual and team events",
    poolSize: "Varies, typically 25 meters or 50 meters",
    strokes: [
      "Freestyle",
      "Backstroke",
      "Breaststroke",
      "Butterfly",
      "Individual medley",
      "Relay",
    ],
    objective:
      "Swimming involves propelling oneself through water using coordinated movements of the arms and legs.",
    facts: [
      "Swimming is a popular water sport and a crucial life skill.",
      "Competitive swimming has various events, including freestyle, backstroke, breaststroke, butterfly, and medley.",
      "The Olympic Games feature swimming as one of the main sports.",
      "Swimming promotes cardiovascular fitness, strength, and endurance.",
      "It is a low-impact sport that is suitable for people of all ages.",
      "Swimming is governed by national and international swimming federations.",
      "World records are set and broken in swimming events.",
      "The sport requires proper technique and breathing control.",
      "Swimming is a recreational activity enjoyed by millions of people worldwide.",
      "Swimming pools and open water venues are used for swimming competitions.",
    ],
    equipment: ["Swimsuit", "Goggles", "Swim cap", "Kickboard"],
    techniques: [
      "Freestyle stroke",
      "Backstroke technique",
      "Breaststroke kick",
      "Butterfly stroke",
      "Flip turn",
    ],
    famousSwimmers: [
      "Michael Phelps",
      "Katie Ledecky",
      "Ian Thorpe",
      "Missy Franklin",
    ],
    majorTournaments: [
      "Olympic Games",
      "FINA World Championships",
      "Commonwealth Games",
    ],
    governingBody: "FINA (Fédération Internationale de Natation)",
    poolFeatures: [
      "Starting blocks",
      "Lane lines",
      "Turn markers",
      "Swim platform",
    ],
  },
  11: {
    name: "Table Tennis",
    players: "Individual or doubles",
    tableDimensions: "2.74 meters x 1.525 meters",
    objective:
      "In table tennis, players hit a lightweight ball back and forth over a table with a small racket, aiming to score points by making the ball land on the opponent's side.",
    facts: [
      "Table tennis, also known as ping pong, is a fast-paced indoor sport.",
      "It originated in England in the late 19th century and gained popularity worldwide.",
      "Table tennis requires quick reflexes, agility, and hand-eye coordination.",
      "The International Table Tennis Federation (ITTF) is the governing body for the sport.",
      "Table tennis is played at various levels, including recreational, club, and professional tournaments.",
      "The sport has its own set of rules and techniques, including serving, receiving, and different stroke techniques.",
      "Table tennis is an Olympic sport with singles and doubles events.",
      "China has been dominant in table tennis, producing many world-class players.",
      "Table tennis tables are specially designed and feature a smooth playing surface.",
      "Table tennis promotes mental focus, strategic thinking, and precision.",
    ],
    equipment: [
      "Table tennis table",
      "Table tennis ball",
      "Table tennis racket",
      "Net",
    ],
    techniques: ["Forehand topspin", "Backhand flick", "Loop", "Push", "Chop"],
    famousPlayers: ["Ma Long", "Ding Ning", "Jan-Ove Waldner", "Zhang Jike"],
    majorTournaments: [
      "Olympic Games",
      "World Table Tennis Championships",
      "ITTF World Tour",
    ],
    governingBody: "International Table Tennis Federation (ITTF)",
    tableFeatures: ["Net", "Table lines", "Corner pockets", "Playing surface"],
  },

  12: {
    name: "Cricket",
    players: "Two teams of 11 players each",
    fieldSize:
      "Varies, but typically around 137-150 meters in diameter for an oval-shaped cricket ground",
    objective:
      "In cricket, one team (batting side) tries to score runs by hitting the ball and running between two sets of wickets, while the other team (bowling side) aims to dismiss the batsmen and restrict the scoring.",
    facts: [
      "Cricket is a popular bat-and-ball sport played worldwide.",
      "The game originated in England and has a rich history dating back several centuries.",
      "Cricket is known for its different formats, including Test cricket, One Day Internationals (ODIs), and Twenty20 (T20) cricket.",
      "It is played at the international level, with national teams representing their countries.",
      "The International Cricket Council (ICC) is the governing body for cricket worldwide.",
      "Cricket matches can last multiple days (Test cricket), a single day (ODIs), or a few hours (T20 cricket).",
      "The sport has a wide range of techniques and skills, including batting, bowling, fielding, and wicketkeeping.",
      "Cricket has produced legendary players like Sachin Tendulkar, Don Bradman, and Brian Lara.",
      "The sport has iconic venues such as Lord's Cricket Ground (London, United Kingdom) and Melbourne Cricket Ground (Melbourne, Australia).",
      "Cricket has a significant following and fan base, particularly in countries like India, England, Australia, and Pakistan.",
    ],
    governingBody: "International Cricket Council (ICC)",
    majorTournaments: [
      "ICC Cricket World Cup",
      "ICC T20 World Cup",
      "The Ashes",
      "Indian Premier League (IPL)",
    ],
    scoringSystem:
      "Runs are scored by running between the wickets and hitting boundaries (four or six runs).",
    techniques: [
      "Batsman: Defensive shots, attacking shots, hooks, pulls",
      "Bowler: Fast bowling, spin bowling, swing bowling",
      "Fielding: Catching, throwing, diving",
    ],
    professionalPlayers: [
      "Virat Kohli",
      "Kane Williamson",
      "Steve Smith",
      "M.S. Dhoni",
    ],
    famousVenues: [
      "Lord's Cricket Ground (London, United Kingdom)",
      "Melbourne Cricket Ground (Melbourne, Australia)",
      "Eden Gardens (Kolkata, India)",
    ],
    attire:
      "Players typically wear a uniform consisting of a jersey, trousers, and specialized cricket shoes with spikes.",
    terms: ["Batsman", "Bowler", "Wicketkeeper", "Stumps", "Run-out"],
  },
  13: {
    name: "Rugby",
    teamCount: "Two teams of 15 players each",
    fieldSize: "Approximately 100 meters x 70 meters",
    objective:
      "Rugby is a contact team sport where the objective is to score points by carrying, passing, or kicking the ball to the opponent's goal area.",
    facts: [
      "Rugby originated in England in the early 19th century.",
      "It is played with an oval-shaped ball and features physical contact and tackling.",
      "Rugby is known for its intensity, teamwork, and sportsmanship.",
      "The sport has different variations, including Rugby Union and Rugby League.",
      "Rugby Union is played at an international level and has a prestigious tournament called the Rugby World Cup.",
      "Rugby League is popular in certain regions and has its own set of rules and competitions.",
      "Rugby promotes values such as respect, integrity, and solidarity.",
      "The sport requires strength, agility, and strategic thinking.",
      "Rugby has its own governing bodies at national and international levels.",
      "It is played on grass or artificial turf fields.",
    ],
    equipment: ["Rugby ball", "Jersey", "Shorts", "Rugby boots"],
    techniques: ["Passing", "Tackling", "Scrum", "Lineout", "Drop goal"],
    famousPlayers: [
      "Jonny Wilkinson",
      "Richie McCaw",
      "Brian O'Driscoll",
      "Jonah Lomu",
    ],
    majorTournaments: [
      "Rugby World Cup",
      "Six Nations Championship",
      "Super Rugby",
    ],
    governingBody: "World Rugby",
    fieldFeatures: [
      "Try line",
      "Goal posts",
      "22-meter line",
      "Halfway line",
      "In-goal area",
    ],
  },
  14: {
    name: "Boxing",
    weightClasses: [
      "Flyweight",
      "Featherweight",
      "Lightweight",
      "Welterweight",
      "Middleweight",
      "Heavyweight",
    ],
    rounds: "Typically 3-minute rounds",
    objective:
      "Boxing is a combat sport where two opponents fight using their fists to score points or knock out the opponent.",
    facts: [
      "Boxing has a long history dating back to ancient civilizations.",
      "It is a physically demanding sport that requires strength, speed, and endurance.",
      "Boxing matches are regulated by weight classes to ensure fair competition.",
      "The sport has produced many legendary boxers who have achieved worldwide fame.",
      "Professional boxing has multiple sanctioning bodies that organize championships.",
      "The Olympic Games feature boxing as one of the main sports.",
      "Boxing promotes discipline, determination, and self-defense skills.",
      "Boxers use different techniques, including jabs, hooks, uppercuts, and footwork.",
      "The sport has its own set of rules and regulations to ensure safety.",
      "Boxing matches take place in a boxing ring with specific dimensions.",
    ],
    equipment: ["Boxing gloves", "Mouthguard", "Hand wraps", "Protective gear"],
    techniques: ["Jab", "Cross", "Hook", "Uppercut", "Footwork"],
    famousBoxers: [
      "Muhammad Ali",
      "Mike Tyson",
      "Floyd Mayweather Jr.",
      "Manny Pacquiao",
    ],
    majorTournaments: [
      "Olympic Games",
      "World Boxing Championships",
      "Professional Boxing Championships",
    ],
    governingBody: "International Boxing Association (AIBA)",
    ringFeatures: ["Ring ropes", "Ring canvas", "Ring corners", "Ring post"],
  },
  15: {
    name: "Ice Hockey",
    teamCount: "Two teams of six players each",
    rinkSize: "60 meters x 30 meters",
    objective:
      "Ice hockey is a fast-paced team sport played on ice, where the objective is to score goals by shooting the puck into the opponent's net.",
    facts: [
      "Ice hockey is popular in countries with cold climates, such as Canada, Russia, and the United States.",
      "It is played with players wearing ice skates and using sticks to control the puck.",
      "Ice hockey matches are fast-paced and physical, featuring body checks and intense gameplay.",
      "The sport has professional leagues, including the National Hockey League (NHL).",
      "Ice hockey is known for its passionate fan base and thrilling playoffs.",
      "The Olympic Games feature ice hockey as one of the main sports.",
      "The sport requires skills such as skating, stickhandling, shooting, and teamwork.",
      "Ice hockey promotes camaraderie, discipline, and perseverance.",
      "The International Ice Hockey Federation (IIHF) is the governing body for the sport.",
      "Ice hockey rinks have specific dimensions and features, including goal creases and blue lines.",
    ],
    equipment: ["Ice hockey skates", "Hockey stick", "Puck", "Protective gear"],
    techniques: ["Skating", "Stickhandling", "Shooting", "Checking", "Passing"],
    famousPlayers: [
      "Wayne Gretzky",
      "Mario Lemieux",
      "Sidney Crosby",
      "Alex Ovechkin",
    ],
    majorTournaments: [
      "NHL Stanley Cup",
      "IIHF Ice Hockey World Championship",
      "Winter Olympics",
    ],
    governingBody: "International Ice Hockey Federation (IIHF)",
    rinkFeatures: ["Goals", "Faceoff circles", "Neutral zone", "Penalty boxes"],
  },
  16: {
    name: "Cycling",
    category: "Outdoor",
    equipment: ["Bicycle", "Helmet", "Cycling shoes", "Cycling jersey"],
    terrain: "Roads, trails, tracks",
    objective:
      "Cycling involves riding a bicycle to cover distances, compete in races, or for recreational purposes.",
    facts: [
      "Cycling is a popular outdoor activity and a means of transportation.",
      "It offers various disciplines, including road cycling, mountain biking, and track cycling.",
      "Professional cycling events like the Tour de France attract worldwide attention.",
      "Cycling promotes cardiovascular fitness and endurance.",
      "Bicycles come in different types, such as road bikes, mountain bikes, and BMX bikes.",
      "Cyclists use different techniques, including pedaling, cornering, and drafting.",
      "The Union Cycliste Internationale (UCI) is the governing body for the sport.",
      "Cycling can be an eco-friendly mode of transportation, reducing carbon emissions.",
      "Many cities have dedicated cycling lanes and cycling-friendly infrastructure.",
      "Cycling is suitable for people of all ages and fitness levels.",
    ],
    famousCyclists: [
      "Eddy Merckx",
      "Lance Armstrong",
      "Marianne Vos",
      "Chris Froome",
    ],
    majorEvents: [
      "Tour de France",
      "UCI Road World Championships",
      "Olympic Games",
    ],
    governingBody: "Union Cycliste Internationale (UCI)",
  },
  17: {
    name: "Wrestling",
    category: "Combat",
    weightClasses: ["Lightweight", "Middleweight", "Heavyweight"],
    objective:
      "Wrestling involves grappling techniques to gain control over an opponent and win the match.",
    facts: [
      "Wrestling is one of the oldest combat sports, dating back to ancient civilizations.",
      "It requires strength, agility, and technique.",
      "Wrestling matches take place on mats or in a wrestling ring.",
      "There are different styles of wrestling, including freestyle and Greco-Roman.",
      "The sport is popular in various countries and has international competitions.",
      "Wrestlers compete in weight classes to ensure fair matchups.",
      "Wrestling promotes discipline, physical fitness, and mental toughness.",
      "The sport has its own set of rules and scoring criteria.",
      "Olympic Games feature wrestling as one of the core sports.",
      "Wrestlers wear special uniforms, including singlets and wrestling shoes.",
    ],
    equipment: ["Wrestling singlet", "Wrestling shoes", "Headgear"],
    techniques: ["Takedowns", "Pinning", "Escapes", "Throws"],
    famousWrestlers: [
      "Dan Gable",
      "Alexander Karelin",
      "Saori Yoshida",
      "John Smith",
    ],
    majorTournaments: [
      "Olympic Games",
      "World Wrestling Championships",
      "NCAA Wrestling Championships",
    ],
    governingBody: "United World Wrestling (UWW)",
  },
  18: {
    name: "Surfing",
    category: "Water",
    equipment: ["Surfboard", "Wetsuit", "Leash", "Wax"],
    waves: "Ocean, sea",
    objective:
      "Surfing involves riding waves using a surfboard and performing maneuvers.",
    facts: [
      "Surfing originated in ancient Polynesia and gained popularity worldwide.",
      "It is a physically demanding sport that requires balance, skill, and wave knowledge.",
      "Surfing can be done in various locations with suitable wave conditions.",
      "The sport has professional competitions, such as the World Surf League (WSL).",
      "Surfers use different techniques, including paddling, catching waves, and performing turns.",
      "Surfing promotes a connection with nature and a sense of adventure.",
      "Surfers are influenced by factors such as swell size, tide, and wind conditions.",
      "The International Surfing Association (ISA) is the governing body for the sport.",
      "Surfing culture has its own fashion, music, and lifestyle.",
      "Surfing is a popular recreational activity and a form of relaxation for many.",
    ],
    famousSurfers: [
      "Kelly Slater",
      "Stephanie Gilmore",
      "Bethany Hamilton",
      "Mick Fanning",
    ],
    majorCompetitions: [
      "World Surf League (WSL)",
      "ISA World Surfing Games",
      "Big Wave Tour",
    ],
    governingBody: "International Surfing Association (ISA)",
  },
  19: {
    name: "Gymnastics",
    category: "Artistic",
    apparatuses: ["Vault", "Uneven bars", "Balance beam", "Floor exercise"],
    objective:
      "Gymnastics combines strength, flexibility, and acrobatic skills to perform routines on various apparatuses.",
    facts: [
      "Gymnastics is an ancient sport with a rich history.",
      "It requires balance, coordination, agility, and discipline.",
      "Artistic gymnastics is the most well-known form, featuring both men's and women's events.",
      "Gymnastics routines are scored based on execution, difficulty, and artistry.",
      "The sport has individual and team competitions at both national and international levels.",
      "Gymnastics promotes physical fitness, mental focus, and body control.",
      "Athletes train extensively and learn various skills, including flips, twists, and holds.",
      "The International Gymnastics Federation (FIG) is the governing body for the sport.",
      "Gymnastics events are held in specialized venues, including gymnastics halls and arenas.",
      "The Olympic Games showcase gymnastics as one of the main sports.",
    ],
    equipment: ["Leotard", "Grips", "Chalk", "Rings"],
    techniques: ["Tumbling", "Dismounts", "Balance poses", "Release moves"],
    famousGymnasts: [
      "Simone Biles",
      "Nadia Comaneci",
      "Kohei Uchimura",
      "Olga Korbut",
    ],
    majorCompetitions: [
      "Olympic Games",
      "World Artistic Gymnastics Championships",
      "FIG World Cup",
    ],
    governingBody: "International Gymnastics Federation (FIG)",
  },
  20: {
    name: "Skiing",
    category: "Winter",
    equipment: ["Skis", "Ski boots", "Poles", "Goggles"],
    terrain: "Snow-covered slopes",
    objective:
      "Skiing involves gliding down snow-covered slopes using skis and poles.",
    facts: [
      "Skiing is a popular winter sport and recreational activity.",
      "It can be done in various forms, including alpine skiing, cross-country skiing, and freestyle skiing.",
      "Skiers navigate slopes with different difficulty levels, including groomed trails and off-piste terrain.",
      "The sport requires balance, technique, and the ability to adapt to different snow conditions.",
      "Skiing has professional competitions, such as the Alpine Ski World Cup.",
      "Skiing promotes physical fitness, outdoor enjoyment, and a connection with nature.",
      "Skiers use different techniques, including parallel turns, carving, and jumps.",
      "The International Ski Federation (FIS) is the governing body for the sport.",
      "Ski resorts provide facilities such as ski lifts and chalets for skiers.",
      "Skiing can be an exhilarating and thrilling experience for enthusiasts.",
    ],
    famousSkiers: [
      "Lindsey Vonn",
      "Ingemar Stenmark",
      "Mikaela Shiffrin",
      "Aksel Lund Svindal",
    ],
    majorEvents: [
      "Alpine Ski World Cup",
      "Winter Olympics",
      "FIS Nordic World Ski Championships",
    ],
    governingBody: "International Ski Federation (FIS)",
  },
  21: {
    name: "Archery",
    category: "Outdoor",
    equipment: ["Bow", "Arrows", "Armguard", "Finger tab"],
    targetDistance: "Varies (typically 70 meters for Olympic competition)",
    objective: "Archery involves shooting arrows at a target using a bow.",
    facts: [
      "Archery is an ancient sport and was historically used for hunting and warfare.",
      "It requires focus, precision, and good hand-eye coordination.",
      "Archery has different disciplines, including target archery, field archery, and 3D archery.",
      "The sport has both individual and team events.",
      "Archery promotes mental discipline, patience, and a connection with nature.",
      "Archers use different types of bows, such as recurve bows and compound bows.",
      "The World Archery Federation (WA) is the governing body for the sport.",
      "Archery competitions take place in venues specifically designed for target shooting.",
      "Archery can be practiced both indoors and outdoors.",
      "The sport has been included in the Olympic Games for many years.",
    ],
    techniques: [
      "Stance",
      "Nocking the arrow",
      "Drawing",
      "Aiming",
      "Releasing",
    ],
    famousArchers: [
      "Brady Ellison",
      "Ki Bo-bae",
      "Michele Frangilli",
      "Deepika Kumari",
    ],
    majorTournaments: [
      "Olympic Games",
      "World Archery Championships",
      "World Cup",
    ],
    governingBody: "World Archery Federation (WA)",
  },
  22: {
    name: "Martial Arts",
    category: "Combat",
    techniques: ["Strikes", "Kicks", "Throws", "Submissions"],
    objective:
      "Martial arts encompass a variety of combat practices and techniques used for self-defense, sport, or personal development.",
    facts: [
      "Martial arts originated in various cultures and have diverse philosophies and training methods.",
      "They include disciplines such as karate, taekwondo, judo, jiu-jitsu, and kung fu.",
      "Martial arts develop physical fitness, discipline, mental focus, and self-confidence.",
      "Different martial arts have specific uniforms, training equipment, and rank systems.",
      "Practitioners learn and train different techniques for striking, kicking, grappling, and submissions.",
      "Martial arts tournaments and competitions feature both forms (kata) and sparring (kumite).",
      "The practice of martial arts emphasizes respect, humility, and personal growth.",
      "Martial arts have various governing bodies and associations for each discipline.",
      "Many martial arts schools and dojos offer training for practitioners of all ages and skill levels.",
      "Martial arts are popular worldwide, and practitioners often dedicate themselves to lifelong learning.",
    ],
    famousMartialArtists: [
      "Bruce Lee",
      "Jackie Chan",
      "Helio Gracie",
      "Jet Li",
    ],
    majorCompetitions: [
      "Olympic Games (Judo and Taekwondo)",
      "World Championships",
      "Professional Mixed Martial Arts (MMA)",
    ],
    governingBodies: [
      "International Judo Federation (IJF)",
      "World Taekwondo (WT)",
      "International Brazilian Jiu-Jitsu Federation (IBJJF)",
    ],
  },
};

app.get("/sports", (req, res) => {
  res.json(sports);
});

app.get("/sports/:sportId/rules", (req, res) => {
  const sportId = req.params.sportId;
  const sportData = sportsData[sportId];
  if (!sportData) {
    res.status(404).json({ error: "Sport not found" });
  } else {
    res.json(sportData);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
