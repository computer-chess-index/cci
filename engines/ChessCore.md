# Engine: ChessCore

Author: Adam Berent

Home: https://github.com/3583Bytes/ChessCore

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-06-24 | 1432<sub>(+726) | 1809<sub>(+759) | 1877<sub>(+801) |  |
| 1.1.5 | 2026-05-25 | 706<sub>(+19) | 1050<sub>(+397) | 1076<sub>(+385) |  |
| 1.1.4 | 2026-05-21 | 687<sub>(+21) | 653<sub>(-335) | 691<sub>(-297) |  |
| 1.1.2 | 2026-05-19 | 666<sub>(-23) | 988<sub>(+4) | 988<sub>(-141) |  |
| 1.1.1 | 2026-05-14 | 689<sub>(+new) | 984<sub>(+new) | 1129<sub>(+new) |  |
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

Generated: 2026-08-22 06:23:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.1", "1.1.2", "1.1.4", "1.1.5", "1.2.0"]
  y-axis "Elo Rating" 600 --> 1900
  line "STC (8.0+0.08s)" [689, 666, 687, 706, 1432]
  line "STC (8.0+0.08s)" [689, 666, 687, 706, 1432]
  line "LTC (60.0+0.60s)" [984, 988, 653, 1050, 1809]
  line "VLTC (2m24s+1.12s)" [1129, 988, 691, 1076, 1877]
  line "VLTC (2m24s+1.12s)" [1129, 988, 691, 1076, 1877]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1877 | 37 | 244 | 56% | 1805 | 38% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1809 | 35 | 272 | 54% | 1755 | 35% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1432 | 34 | 300 | 54% | 1384 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 1076 | 60 | 102 | 49% | 1092 | 17% |
| 1.1.5 | LTC <sub>(60.0+0.60s)</sub> | 1050 | 59 | 104 | 57% | 979 | 20% |
| 1.1.5 | STC <sub>(8.0+0.08s)</sub> | 706 | 77 | 50 | 49% | 720 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 691 | 39 | 244 | 52% | 659 | 46% |
| 1.1.4 | LTC <sub>(60.0+0.60s)</sub> | 653 | 41 | 218 | 53% | 606 | 42% |
| 1.1.4 | STC <sub>(8.0+0.08s)</sub> | 687 | 42 | 234 | 52% | 636 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 988 | 53 | 120 | 53% | 965 | 27% |
| 1.1.2 | LTC <sub>(60.0+0.60s)</sub> | 988 | 57 | 104 | 53% | 961 | 25% |
| 1.1.2 | STC <sub>(8.0+0.08s)</sub> | 666 | 90 | 44 | 55% | 624 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 1129 | 31 | 412 | 49% | 1119 | 19% |
| 1.1.1 | LTC <sub>(60.0+0.60s)</sub> | 984 | 36 | 328 | 48% | 987 | 19% |
| 1.1.1 | STC <sub>(8.0+0.08s)</sub> | 689 | 42 | 248 | 45% | 728 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |