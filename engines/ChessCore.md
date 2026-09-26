# Engine: ChessCore

Author: Adam Berent

Home: https://github.com/3583Bytes/ChessCore

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-06-24 | 1427<sub>(+711) | 1816<sub>(+759) | 1881<sub>(+798) |  |
| 1.1.5 | 2026-05-25 | 716<sub>(+22) | 1057<sub>(+397) | 1083<sub>(+385) |  |
| 1.1.4 | 2026-05-21 | 694<sub>(+19) | 660<sub>(-335) | 698<sub>(-296) |  |
| 1.1.2 | 2026-05-19 | 675<sub>(-22) | 995<sub>(+4) | 994<sub>(-140) |  |
| 1.1.1 | 2026-05-14 | 697<sub>(+new) | 991<sub>(+new) | 1134<sub>(+new) |  |
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

Generated: 2026-09-26 04:36:59

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.1", "1.1.2", "1.1.4", "1.1.5", "1.2.0"]
  y-axis "Elo Rating" 600 --> 1900
  line "" [697, 675, 694, 716, 1427]
  line "STC (8.0+0.08s)" [697, 675, 694, 716, 1427]
  line "LTC (60.0+0.60s)" [991, 995, 660, 1057, 1816]
  line "" [1134, 994, 698, 1083, 1881]
  line "VLTC (2m24s+1.12s)" [1134, 994, 698, 1083, 1881]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1881 | 33 | 290 | 55% | 1821 | 40% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1816 | 31 | 338 | 54% | 1763 | 36% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1427 | 31 | 360 | 54% | 1380 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 1083 | 60 | 102 | 49% | 1098 | 17% |
| 1.1.5 | LTC <sub>(60.0+0.60s)</sub> | 1057 | 59 | 104 | 57% | 986 | 20% |
| 1.1.5 | STC <sub>(8.0+0.08s)</sub> | 716 | 77 | 50 | 49% | 729 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 698 | 39 | 244 | 52% | 666 | 46% |
| 1.1.4 | LTC <sub>(60.0+0.60s)</sub> | 660 | 41 | 218 | 53% | 613 | 42% |
| 1.1.4 | STC <sub>(8.0+0.08s)</sub> | 694 | 42 | 234 | 52% | 644 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 994 | 53 | 120 | 53% | 972 | 27% |
| 1.1.2 | LTC <sub>(60.0+0.60s)</sub> | 995 | 57 | 104 | 53% | 967 | 25% |
| 1.1.2 | STC <sub>(8.0+0.08s)</sub> | 675 | 90 | 44 | 55% | 633 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 1134 | 31 | 412 | 49% | 1125 | 19% |
| 1.1.1 | LTC <sub>(60.0+0.60s)</sub> | 991 | 36 | 328 | 48% | 994 | 19% |
| 1.1.1 | STC <sub>(8.0+0.08s)</sub> | 697 | 42 | 248 | 45% | 734 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |