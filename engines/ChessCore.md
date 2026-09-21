# Engine: ChessCore

Author: Adam Berent

Home: https://github.com/3583Bytes/ChessCore

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-06-24 | 1424<sub>(+713) | 1812<sub>(+758) | 1878<sub>(+799) |  |
| 1.1.5 | 2026-05-25 | 711<sub>(+20) | 1054<sub>(+397) | 1079<sub>(+384) |  |
| 1.1.4 | 2026-05-21 | 691<sub>(+19) | 657<sub>(-335) | 695<sub>(-296) |  |
| 1.1.2 | 2026-05-19 | 672<sub>(-22) | 992<sub>(+4) | 991<sub>(-139) |  |
| 1.1.1 | 2026-05-14 | 694<sub>(+new) | 988<sub>(+new) | 1130<sub>(+new) |  |
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

Generated: 2026-09-21 04:36:51

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.1", "1.1.2", "1.1.4", "1.1.5", "1.2.0"]
  y-axis "Elo Rating" 600 --> 1900
  line "" [694, 672, 691, 711, 1424]
  line "STC (8.0+0.08s)" [694, 672, 691, 711, 1424]
  line "LTC (60.0+0.60s)" [988, 992, 657, 1054, 1812]
  line "" [1130, 991, 695, 1079, 1878]
  line "VLTC (2m24s+1.12s)" [1130, 991, 695, 1079, 1878]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1878 | 33 | 290 | 55% | 1818 | 40% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1812 | 31 | 338 | 54% | 1760 | 36% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1424 | 31 | 356 | 53% | 1389 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 1079 | 60 | 102 | 49% | 1095 | 17% |
| 1.1.5 | LTC <sub>(60.0+0.60s)</sub> | 1054 | 59 | 104 | 57% | 983 | 20% |
| 1.1.5 | STC <sub>(8.0+0.08s)</sub> | 711 | 77 | 50 | 49% | 725 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 695 | 39 | 244 | 52% | 663 | 46% |
| 1.1.4 | LTC <sub>(60.0+0.60s)</sub> | 657 | 41 | 218 | 53% | 610 | 42% |
| 1.1.4 | STC <sub>(8.0+0.08s)</sub> | 691 | 42 | 234 | 52% | 640 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 991 | 53 | 120 | 53% | 969 | 27% |
| 1.1.2 | LTC <sub>(60.0+0.60s)</sub> | 992 | 57 | 104 | 53% | 964 | 25% |
| 1.1.2 | STC <sub>(8.0+0.08s)</sub> | 672 | 90 | 44 | 55% | 630 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 1130 | 31 | 412 | 49% | 1122 | 19% |
| 1.1.1 | LTC <sub>(60.0+0.60s)</sub> | 988 | 36 | 328 | 48% | 991 | 19% |
| 1.1.1 | STC <sub>(8.0+0.08s)</sub> | 694 | 42 | 248 | 45% | 732 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |