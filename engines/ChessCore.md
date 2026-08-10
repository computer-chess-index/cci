# Engine: ChessCore

Author: Adam Berent

Home: https://github.com/3583Bytes/ChessCore

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-06-24 | 1424<sub>(+727) | 1810<sub>(+765) | 1866<sub>(+797) |  |
| 1.1.5 | 2026-05-25 | 697<sub>(+18) | 1045<sub>(+398) | 1069<sub>(+386) |  |
| 1.1.4 | 2026-05-21 | 679<sub>(+23) | 647<sub>(-334) | 683<sub>(-297) |  |
| 1.1.2 | 2026-05-19 | 656<sub>(-26) | 981<sub>(+5) | 980<sub>(-141) |  |
| 1.1.1 | 2026-05-14 | 682<sub>(+new) | 976<sub>(+new) | 1121<sub>(+new) |  |
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

Generated: 2026-08-10 07:48:42

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.1", "1.1.2", "1.1.4", "1.1.5", "1.2.0"]
  y-axis "Elo Rating" 600 --> 1900
  line "STC (8.0+0.08s)" [682, 656, 679, 697, 1424]
  line "STC (8.0+0.08s)" [682, 656, 679, 697, 1424]
  line "LTC (60.0+0.60s)" [976, 981, 647, 1045, 1810]
  line "VLTC (2m24s+1.12s)" [1121, 980, 683, 1069, 1866]
  line "VLTC (2m24s+1.12s)" [1121, 980, 683, 1069, 1866]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1866 | 37 | 236 | 56% | 1797 | 38% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1810 | 36 | 264 | 55% | 1748 | 35% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1424 | 35 | 292 | 54% | 1374 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 1069 | 60 | 102 | 49% | 1084 | 17% |
| 1.1.5 | LTC <sub>(60.0+0.60s)</sub> | 1045 | 59 | 104 | 57% | 973 | 20% |
| 1.1.5 | STC <sub>(8.0+0.08s)</sub> | 697 | 77 | 50 | 49% | 709 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 683 | 39 | 244 | 52% | 652 | 46% |
| 1.1.4 | LTC <sub>(60.0+0.60s)</sub> | 647 | 41 | 218 | 53% | 599 | 42% |
| 1.1.4 | STC <sub>(8.0+0.08s)</sub> | 679 | 42 | 234 | 52% | 630 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 980 | 53 | 120 | 53% | 959 | 27% |
| 1.1.2 | LTC <sub>(60.0+0.60s)</sub> | 981 | 57 | 104 | 53% | 954 | 25% |
| 1.1.2 | STC <sub>(8.0+0.08s)</sub> | 656 | 89 | 44 | 55% | 613 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 1121 | 31 | 412 | 49% | 1112 | 19% |
| 1.1.1 | LTC <sub>(60.0+0.60s)</sub> | 976 | 36 | 328 | 48% | 980 | 19% |
| 1.1.1 | STC <sub>(8.0+0.08s)</sub> | 682 | 42 | 248 | 45% | 721 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |