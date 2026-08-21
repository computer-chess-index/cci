# Engine: ChessCore

Author: Adam Berent

Home: https://github.com/3583Bytes/ChessCore

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-06-24 | 1430<sub>(+725) | 1816<sub>(+767) | 1874<sub>(+799) |  |
| 1.1.5 | 2026-05-25 | 705<sub>(+19) | 1049<sub>(+397) | 1075<sub>(+385) |  |
| 1.1.4 | 2026-05-21 | 686<sub>(+22) | 652<sub>(-335) | 690<sub>(-296) |  |
| 1.1.2 | 2026-05-19 | 664<sub>(-23) | 987<sub>(+4) | 986<sub>(-140) |  |
| 1.1.1 | 2026-05-14 | 687<sub>(+new) | 983<sub>(+new) | 1126<sub>(+new) |  |
| 1.1.0 | 2026-05-14 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+ChessCore+<version>&body=###%20Engine%20name%0AChessCore%0A%0A###%20Version%0A1.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-21 06:24:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.1", "1.1.2", "1.1.4", "1.1.5", "1.2.0"]
  y-axis "Elo Rating" 600 --> 1900
  line "STC (8.0+0.08s)" [687, 664, 686, 705, 1430]
  line "STC (8.0+0.08s)" [687, 664, 686, 705, 1430]
  line "LTC (60.0+0.60s)" [983, 987, 652, 1049, 1816]
  line "VLTC (2m24s+1.12s)" [1126, 986, 690, 1075, 1874]
  line "VLTC (2m24s+1.12s)" [1126, 986, 690, 1075, 1874]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1874 | 37 | 244 | 56% | 1804 | 38% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1816 | 35 | 268 | 55% | 1754 | 36% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1430 | 34 | 296 | 54% | 1380 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 1075 | 60 | 102 | 49% | 1089 | 17% |
| 1.1.5 | LTC <sub>(60.0+0.60s)</sub> | 1049 | 59 | 104 | 57% | 977 | 20% |
| 1.1.5 | STC <sub>(8.0+0.08s)</sub> | 705 | 77 | 50 | 49% | 717 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 690 | 39 | 244 | 52% | 657 | 46% |
| 1.1.4 | LTC <sub>(60.0+0.60s)</sub> | 652 | 41 | 218 | 53% | 605 | 42% |
| 1.1.4 | STC <sub>(8.0+0.08s)</sub> | 686 | 42 | 234 | 52% | 635 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 986 | 53 | 120 | 53% | 964 | 27% |
| 1.1.2 | LTC <sub>(60.0+0.60s)</sub> | 987 | 57 | 104 | 53% | 960 | 25% |
| 1.1.2 | STC <sub>(8.0+0.08s)</sub> | 664 | 90 | 44 | 55% | 621 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 1126 | 31 | 412 | 49% | 1118 | 19% |
| 1.1.1 | LTC <sub>(60.0+0.60s)</sub> | 983 | 36 | 328 | 48% | 986 | 19% |
| 1.1.1 | STC <sub>(8.0+0.08s)</sub> | 687 | 42 | 248 | 45% | 726 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |